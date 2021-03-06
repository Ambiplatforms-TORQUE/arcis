<!--
order: 1
-->

# Installation

Build and install the Arcis binaries from source or using Docker. {synopsis}

## Pre-requisites

- [Install Go 1.18.5+](https://golang.org/dl/) {prereq}
- [Install jq](https://stedolan.github.io/jq/download/) {prereq}

## Install Go

::: warning
Arcis is built using [Go](https://golang.org/dl/) version `1.18+`
:::

```bash
go version
```

:::tip
If the `arcisd: command not found` error message is returned, confirm that your [`GOPATH`](https://golang.org/doc/gopath_code#GOPATH) is correctly configured by running the following command:

```bash
export PATH=$PATH:$(go env GOPATH)/bin
```

:::

## Install Binaries

::: tip
The latest {{ $themeConfig.project.name }} [version](https://github.com/Ambiplatforms-TORQUE/arcis/releases) is `{{ $themeConfig.project.binary }} {{ $themeConfig.project.latest_version }}`
:::

### GitHub

Clone and build {{ $themeConfig.project.name }} using `git`:

```bash
git clone https://github.com/Ambiplatforms-TORQUE/arcis.git
cd arcis
make install
```

Check that the `{{ $themeConfig.project.binary }}` binaries have been successfully installed:

```bash
arcisd version
```

### Docker

You can build {{ $themeConfig.project.name }} using Docker by running:

```bash
make build-docker
```

The command above will create a docker container: `devtorquehq/arcis:latest`. Now you can run `arcisd` in the container.

```bash
docker run -it -p 26657:26657 -p 26656:26656 -v ~/.arcisd/:/root/.arcisd devtorquehq/arcis:latest arcisd version

# To initialize
# docker run -it -p 26657:26657 -p 26656:26656 -v ~/.arcisd/:/root/.arcisd devtorquehq/arcis:latest arcisd init test-chain --chain-id test_1000-2

# To run
# docker run -it -p 26657:26657 -p 26656:26656 -v ~/.arcisd/:/root/.arcisd devtorquehq/arcis:latest arcisd start
```

### Releases

You can also download a specific release available on the {{ $themeConfig.project.name }} [repository](https://github.com/Ambiplatforms-TORQUE/arcis/releases) or via command line:

```bash
go install github.com/Ambiplatforms-TORQUE/arcis@latest
```
