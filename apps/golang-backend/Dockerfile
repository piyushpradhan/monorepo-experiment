# Build stage
FROM golang:1.23 AS builder

WORKDIR /app
COPY go.mod ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -o main .
RUN ls

# Serve stage
FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/main ./main
RUN ls
EXPOSE 8000

CMD ["./main"]