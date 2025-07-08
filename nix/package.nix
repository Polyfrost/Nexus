{
    stdenv,
    nodejs,
    lib,
    callPackage,
    corepackHooks ? (callPackage ./corepack-hooks.nix {})
}:
stdenv.mkDerivation (final: {
    pname = "polyfrost-website";
    version = "0";

    src = ./..;

    nativeBuildInputs = [
        nodejs
        corepackHooks.setupHook
        corepackHooks.pnpm.configHook
    ];

    corepackCache = corepackHooks.corepackCache {
        hash = "sha256-gEIS3bFYznzZJsyPdZjJ+3lULPoJ9owe05OrEHvgWkM=";
        inherit (final) pname src;
        inherit nodejs;
    };

    pnpmWorkspaces = [ "@polyfrost/website" ];
    pnpmDeps = corepackHooks.pnpm.fetchDeps {
        hash = "sha256-Zw6eqxESFJe7jVK0afVoLnx1f5A3DfhdQowbG9Jlmsw=";
        inherit (final) pname version src pnpmWorkspaces;
    };

    buildPhase = ''
        runHook preBuild

        export ASTRO_TELEMETRY_DISABLED="1"

        pnpm run --filter @polyfrost/website build

        runHook postBuild
    '';

    installPhase = ''
        runHook preInstall

        mkdir -p "$out"/{bin,lib}

        # Copy all the astro files to the output
        cp -r ./apps/website/dist/* "$out"/lib/

        # Make a wrapper command to start the server
        cat << EOF > "$out"/bin/start-server
        #!/usr/bin/env bash
        ${lib.getExe nodejs} "$out"/lib/server/entry.mjs
        EOF
        chmod +x "$out"/bin/start-server

        runHook postInstall
    '';

    meta = {
        mainProgram = "start-server";
        description = "The nodejs code to run polyfrost's website";
        homepage = "https://github.com/Polyfrost/Nexus";
        license = lib.licenses.agpl3Only;
    };
})
