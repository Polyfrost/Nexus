# **Nexus**

![Logo](packages/assets/images/NexusLogo.png)

A monorepo containing our website, launcher, and tools used by Polyfrost.

[**polyfrost.org »**](https://polyfrost.org)

## Apps

-   [**`apps/desktop`**](apps/launcher): The Polyfrost launcher.
-   [**`apps/website`**](apps/website): The Polyfrost website.
-   [**`apps/cli`**](apps/cli): Our launcher's CLI.

## Packages

-   [**`core`**](core) The core of our launcher, written in Rust.
-   [**`packages/client`**](packages/client) A TypeScript client library to handle dataflow via RPC between UIs and our Rust core.
-   [**`packages/ui`**](packages/ui) A shared React component library for our UIs.
-   [**`packages/interface`**](packages/interface) The complete user interface for our Launcher.
-   [**`packages/config`**](packages/config) A TypeScript library to handle configuration files.
