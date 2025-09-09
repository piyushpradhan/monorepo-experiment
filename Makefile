# Docker Management Makefile

.PHONY: help build up down logs clean dev prod restart status

# Default target
help:
	@echo "Available commands:"
	@echo "  build     - Build all Docker images"
	@echo "  up        - Start all services in production mode"
	@echo "  dev       - Start all services in development mode"
	@echo "  down      - Stop all services"
	@echo "  logs      - Show logs for all services"
	@echo "  restart   - Restart all services"
	@echo "  status    - Show status of all services"
	@echo "  clean     - Clean up Docker resources"
	@echo "  frontend  - Build and run only frontend"
	@echo "  express   - Build and run only Express API"
	@echo "  golang    - Build and run only Go backend"

# Production commands
build:
	docker-compose build

up:
	docker-compose up -d

prod: build up

# Development commands
dev:
	docker-compose -f docker-compose.dev.yml up --build

# Individual services
frontend:
	docker-compose up --build frontend

express:
	docker-compose up --build express-api

golang:
	docker-compose up --build golang-backend

# Management commands
down:
	docker-compose down

restart:
	docker-compose restart

status:
	docker-compose ps

logs:
	docker-compose logs -f

# Cleanup commands
clean:
	docker-compose down -v
	docker system prune -f

clean-all:
	docker-compose down -v --rmi all
	docker system prune -af

# Health checks
health:
	@echo "Checking service health..."
	@curl -f http://localhost:3000 > /dev/null 2>&1 && echo "Frontend: OK" || echo "Frontend: FAIL"
	@curl -f http://localhost:3333/api > /dev/null 2>&1 && echo "Express API: OK" || echo "Express API: FAIL"
	@curl -f http://localhost:8080/health > /dev/null 2>&1 && echo "Go Backend: OK" || echo "Go Backend: FAIL"
