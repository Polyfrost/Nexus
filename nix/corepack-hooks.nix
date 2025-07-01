{
    lib,
    pkgs,
    stdenv,
    cacert,
    gnutar,
    gzip,
    makeSetupHook,
    callPackages,
    corepack,
    nodejs,
    defaultNodejs ? nodejs,
}:
{
    corepackCache =
        {
            hash ? lib.fakeHash,
            pname,
            src,
            nodejs ? defaultNodejs
            # TODO make extra properties get merged with the mkDerivation call like nixpkgs
        }:
        stdenv.mkDerivation {
            name = "${pname}-corepack-cache";
            inherit src;

            nativeBuildInputs = [
                nodejs
                gnutar
                gzip
            ];

            NODE_EXTRA_CA_CERTS = "${cacert}/etc/ssl/certs/ca-bundle.crt";

            installPhase = ''
                runHook preInstall

                mkdir -p "$out"/lib

                export COREPACK_ENABLE_DOWNLOAD_PROMPT="0"
                export COREPACK_HOME="$(mktemp -d)"

                corepack pack -o /tmp/corepack.tgz

                # Reconstruct the tar made by corepack in order
                # to make it deterministic
                TEMP="$(mktemp -d)"
                tar --directory="$TEMP" -xzf /tmp/corepack.tgz
                tar \
                    --sort=name \
                    --mtime="@0" \
                    --owner=0 \
                    --group=0 \
                    --numeric-owner \
                    --xform s:'./':: \
                    --directory="$TEMP" \
                    -czf "$out"/lib/corepack.tgz .

                unset COREPACK_HOME

                runHook postInstall
            '';

            # dontFixup = true;

            outputHash = hash;
            outputHashMode = "recursive";
        };

    setupHook = makeSetupHook {
        name = "corepack-setup-hook";
        propagatedBuildInputs = [ corepack ];
    } ./corepack-setup-hook.sh;

    pnpm = let
        fetchDepsAttrs = callPackages (pkgs.path + /pkgs/development/tools/pnpm/fetch-deps) {
            pnpm = corepack // { version = "99999.0"; }; # Hacky but works
        };
    in {
        inherit (fetchDepsAttrs) fetchDeps configHook;
    };
}
