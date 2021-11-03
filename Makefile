dev:
	docker-compose up

start:
	docker-compose up -d

stop:
	docker compose stop

login-client:
	docker exec -it game_client sh

login-server:
	docker exec -it game_server sh

login-database:
	docker exec -it game_database sh