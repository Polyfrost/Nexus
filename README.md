# **Nexus**

![Logo](pkgs/assets/images/NexusLogo.png)

A monorepo containing our website, launcher, and tools used by Polyfrost.

[**polyfrost.org »**](https://polyfrost.org)

## Apps

- [**`apps/desktop`**](apps/launcher): The Polyfrost launcher.
- [**`apps/website`**](apps/website): The Polyfrost website.
- [**`apps/cli`**](apps/cli): Our launcher's CLI.

## Packages

- [**`core`**](core) The core of our launcher, written in Rust.
- [**`pkgs/client`**](pkgs/client) A TypeScript client library to handle dataflow via RPC between UIs and our Rust core.
- [**`pkgs/ui`**](pkgs/ui) A shared React component library for our UIs.
- [**`pkgs/interface`**](pkgs/interface) The complete user interface for our Launcher.
- [**`pkgs/config`**](pkgs/config) A TypeScript library to handle configuration files.
