#!/usr/bin/env python3
"""Module"""


def schools_by_topic(mongo_collection, topic):
    """Returns the list of school having a specific topic"""
    return [i for i in mongo_collection.find() if topic in i.get('topics', [])]
