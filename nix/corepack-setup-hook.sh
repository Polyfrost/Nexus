# shellcheck shell=bash

corepackSetupHook() {
    echo "Executing corepackSetupHook"

    export COREPACK_ENABLE_DOWNLOAD_PROMPT="0"
    export COREPACK_HOME="$(mktemp -d)"
    export COREPACK_ENABLE_NETWORK="0"

    corepack install -g "$corepackCache"/lib/corepack.tgz

    echo "Finished corepackSetupHook"
}

postConfigureHooks+=(corepackSetupHook)
