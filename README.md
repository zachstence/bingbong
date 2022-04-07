# bingbong
A Discord bot that searches Bing, because why not

<p align="center">
    <a href="https://github.com/zachstence/bingbong/blob/main/LICENSE">
        <img alt="license mit" src="https://img.shields.io/github/license/zachstence/bingbong?style=for-the-badge" />
    </a>
    <br />
    <a href="https://hub.docker.com/r/zachstence/bingbong">
        <img alt="docker pulls" src="https://img.shields.io/docker/pulls/zachstence/bingbong?style=for-the-badge" />
        <img alt="docker size" src="https://img.shields.io/docker/image-size/zachstence/bingbong?style=for-the-badge" />
    </a>
    <br />
    <a href="#">
        <img alt="wakatime" src="https://wakatime.com/badge/user/2a0a4013-ea89-43b7-99d9-1a215b4c34d0/project/87dcbaee-edcf-4b4e-b741-4eaf949acd68.svg?style=for-the-badge" />
    </a>
</p>

## Table of Contents
- [Config](#config)
- [Usage](#usage)
  - [Run using Docker](#run-using-docker)
  - [Run using `docker-compose`](#run-using-docker-compose)
- [Future Features](#future-features)

## Config
Create a config file following the format in [`config/default.json`](config/default.json).

```json
{
    "bot": {
        "token": "",
    }
}
```

| Config                  | Description                                                  | Example                                                       |
| ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------- |
| `bot.token`             | Your Discord bot's API token |                               | `OTYxNDQ5NTI3NzYyNjM2ODUw.Yk5Jpg.qJusxStFqRyy5CyYO4eIrmBycck` |

## Usage
Run `bingbong` using your `config.json`

### Run using Docker
```sh
docker run \
    -v /path/to/config.json:/app/config/production.json \
    zachstence/bingbong
```

### Run using `docker-compose`
```yaml
version: "3.8"

services:
bingbong:
    image: zachstence/bingbong
    volumes:
    - /path/to/config.json:/app/config/production.json:ro
    restart: unless-stopped
```

## Future Features
- Configuration to update multiple zones/records
- Accept file for Discord bot token to enable better security (Docker secrets)
