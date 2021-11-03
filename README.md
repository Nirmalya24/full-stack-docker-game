# Docker implementation of the Werewolves game

:white_check_mark: **Make sure you have [Docker Desktop](https://docs.docker.com/desktop/) installed**

There is a Makefile at the root of the project from where you can run and manage the entire application. The Makefile can:
- Start client, server, and gameDB services in silent mode (no output)
- Start client, server, and gameDB services in dev mode (verbose output)
- Stop client, server, and gameDB services
- Get access to the client terminal, running the react app
- Get access to the server terminal, running the Node.js server
- Get access to the gameDB terminal, running the MongoDB instance

`cd` in to the root of the directory
### 1. To start the dev environment
`make dev`
Please be patient on this step since it will be installing everything from scratch. To stop all the services you can simple press `CTRL+C` OR `CMD+C`

### 2. To start docker services silently
`make start`

### 3. To stop the docker services manually
`make stop`

### 4. To access client terminal
`make login-client`

### 5. To access server terminal
`make login-server`

### 6. To access gameDB terminal
`make login-database`

Commands 1, 4, 5, and 6 will require their own dedicated terminal windows. 
