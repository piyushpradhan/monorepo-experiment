package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func Hello(name string) string {
	result := "Hello " + name
	return result
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("OK"))
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
	message := Hello("golang-backend")
	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, `{"message": "%s"}`, message)
}

func main() {
	http.HandleFunc("/health", healthHandler)
	http.HandleFunc("/api", helloHandler)
	
	port := os.Getenv("PORT")
	if port == "" {
		port = "8000"
	}
	
	log.Printf("Starting server on port %s", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
