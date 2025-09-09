#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Testing Docker Compose Services${NC}"
echo "=================================="

# Function to test HTTP endpoint
test_endpoint() {
    local url=$1
    local description=$2
    local expected_status=${3:-200}
    
    echo -n "Testing $description... "
    
    response=$(curl -s -o /dev/null -w "%{http_code}" "$url" 2>/dev/null)
    
    if [ "$response" = "$expected_status" ]; then
        echo -e "${GREEN}✅ PASS (HTTP $response)${NC}"
        return 0
    else
        echo -e "${RED}❌ FAIL (HTTP $response, expected $expected_status)${NC}"
        return 1
    fi
}

# Function to test JSON response
test_json_endpoint() {
    local url=$1
    local description=$2
    local expected_field=$3
    
    echo -n "Testing $description... "
    
    response=$(curl -s "$url" 2>/dev/null)
    
    if echo "$response" | grep -q "$expected_field"; then
        echo -e "${GREEN}✅ PASS${NC}"
        return 0
    else
        echo -e "${RED}❌ FAIL${NC}"
        return 1
    fi
}

# Check if services are running
echo -e "\n${YELLOW}📋 Checking service status...${NC}"
docker-compose ps

echo -e "\n${YELLOW}🌐 Testing through Proxy (localhost:8080)${NC}"
echo "----------------------------------------"

# Test frontend
test_endpoint "http://localhost:8080" "Frontend (experiment)" 200

# Test Node.js backend through proxy
test_endpoint "http://localhost:8080/api/" "Node.js Backend Root" 200
test_endpoint "http://localhost:8080/api/health" "Node.js Health Check" 200
test_json_endpoint "http://localhost:8080/api/users" "Node.js Users API" "success"

# Test Go backend through proxy
test_endpoint "http://localhost:8080/go/health" "Go Backend Health" 200
test_json_endpoint "http://localhost:8080/go/api" "Go Backend API" "message"

echo -e "\n${YELLOW}🔧 Testing Services Directly${NC}"
echo "--------------------------------"

# Test Node.js backend directly
echo -n "Testing Node.js backend directly... "
if docker-compose exec -T experiment-backend curl -s http://localhost:3000/api/health > /dev/null 2>&1; then
    echo -e "${GREEN}✅ PASS${NC}"
else
    echo -e "${RED}❌ FAIL${NC}"
fi

# Test Go backend directly
echo -n "Testing Go backend directly... "
if docker-compose exec -T golang-backend curl -s http://localhost:8080/health > /dev/null 2>&1; then
    echo -e "${GREEN}✅ PASS${NC}"
else
    echo -e "${RED}❌ FAIL${NC}"
fi

echo -e "\n${YELLOW}📊 Service Health Summary${NC}"
echo "=========================="

# Check container health
echo "Container Status:"
docker-compose ps --format "table {{.Name}}\t{{.Status}}\t{{.Ports}}"

echo -e "\n${YELLOW}📝 Recent Logs${NC}"
echo "============="
echo "Proxy logs (last 5 lines):"
docker-compose logs --tail=5 proxy

echo -e "\nNode.js backend logs (last 5 lines):"
docker-compose logs --tail=5 experiment-backend

echo -e "\nGo backend logs (last 5 lines):"
docker-compose logs --tail=5 golang-backend

echo -e "\n${GREEN}🎉 Testing complete!${NC}"
