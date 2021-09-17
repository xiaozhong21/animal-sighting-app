# Animal Sighting Tracker with PostgreSQL, Express, and React
## Overview

This is a full-stack PERN animal tracking app built with React frontend, Node/Express backend, and Postgres database (PERN). The project is based on these [Techtonica requirements](https://github.com/Techtonica/curriculum/blob/main/projects/mern-pern-project.md).

## Features implemented
- Display a list of sightings with columns pulled from associated tables
- Add new sighting with animal nickname field auto-populated
- Filter sightings by animal health condition
- Filter sightings by animal nicknames
- Animal details rendered upon click


### [Live site on Heroku](https://animal-sighting-app21.herokuapp.com/)


[![Deploy to Heroku][deploy-badge]][deploy-workflow]
[![Reset Heroku DB][reset-badge]][reset-workflow]


## Prerequisites

### Docker

This project relies on Docker to run the PostgreSQL server. You must install
Docker first before continuing.

Use one of these methods:

- Use [Homebrew][] on macOS: `brew install --cask docker`
- [Follow the instructions on the Docker website][docker-www]

Once you've installed Docker Desktop, you'll need to launch the app. On macOS,
it's located in `/Applications/Docker`.

### Node

You'll need to install Node v14 or above. [`nvm`][nvm] is highly recommended.

## Set Up Local Environment

### Install NPM Packages

```sh
npm install
```

### Set Up `postgres` User Password and Database Name


1. Copy the example environment file

   ```sh
   cp .env.example .env
   ```

2. You can choose to edit `.env` or just use as-is.

[See the PostgreSQL Docker image documentation for more
information][dh-postgres].

### Initialize the Database

```sh
npm run db:init
```

ℹ️ If you ever need to start over with the database, you can run this command
again which will delete your existing data and start from scratch.

## Start the App

```sh
npm start
```

Visit <http://localhost:3000>.

## Shut Down the App

1. `Ctrl-C` to stop the Express and React development servers.
1. `npm run db:stop` to stop and destroy the PostgreSQL Docker container.

## Need to Start a `psql` Session?

```sh
npm run psql
```


[deploy-badge]: https://github.com/gsong/express-react-project-example/actions/workflows/deploy.yaml/badge.svg
[deploy-workflow]: https://github.com/gsong/express-react-project-example/actions/workflows/deploy.yaml
[dh-postgres]: https://hub.docker.com/_/postgres
[docker-www]: https://docs.docker.com/get-docker/
[homebrew]: https://brew.sh
[nvm]: https://github.com/nvm-sh/nvm
[reset-badge]: https://github.com/gsong/express-react-project-example/actions/workflows/reset-db.yml/badge.svg
[reset-workflow]: https://github.com/gsong/express-react-project-example/actions/workflows/reset-db.yml
