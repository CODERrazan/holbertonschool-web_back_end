#!/usr/bin/env python3
"""Nginx log stats from MongoDB"""
from pymongo import MongoClient

if __name__ == "__main__":
    # Connect to MongoDB
    client = MongoClient('mongodb://localhost:27017')
    db = client.logs
    nginx = db.nginx

    # Count all logs
    print(f"{nginx.count_documents({})} logs")

    # Count by method
    print("Methods:")
    for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        count = nginx.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # Count status checks
    status = nginx.count_documents({"method": "GET", "path": "/status"})
    print(f"{status} status check")
