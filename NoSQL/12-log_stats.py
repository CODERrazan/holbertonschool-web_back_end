#!/usr/bin/env python3
"""
Provides some stats about Nginx logs stored in MongoDB.
"""

from pymongo import MongoClient


def log_stats():
    """
    Display stats about Nginx logs in MongoDB.
    """
    client = MongoClient("mongodb://127.0.0.1:27017")
    collection = client.logs.nginx

    total = collection.count_documents({})
    print(f"{total} logs")

    print("Methods:")
    for m in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        c = collection.count_documents({"method": m})
        print(f"\tmethod {m}: {c}")

    status = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status} status check")


if __name__ == "__main__":
    log_stats()

