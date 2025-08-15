#!/usr/bin/env python3
"""List module"""


def list_all(mongo_collection):
    """List all documents in a collection"""
    documents = []
    for _ in mongo_collection.find():
        documents.append(_)
    return documents
