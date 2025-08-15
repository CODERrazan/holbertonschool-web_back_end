#!/usr/bin/env python3
"""Provides Nginx log statistics from MongoDB"""
from pymongo import MongoClient

METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE"]

def get_log_stats():
    """Retrieve and display Nginx log statistics"""
    client = MongoClient('mongodb://localhost:27017')
    logs = client.logs.nginx
    
    total = logs.count_documents({})
    print(f"{total} logs")
    print("Methods:")
    
    for method in METHODS:
        count = logs.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")
    
    status_count = logs.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{status_count} status check")

if __name__ == "__main__":
    get_log_stats()
