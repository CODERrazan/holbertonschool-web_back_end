#!/usr/bin/env python3
"""This module contains the task to return
a asyncio.Task"""

from typing import List
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """This function returns a asyncio.Task that waits for a random delay"""
    return asyncio.create_task(wait_random(max_delay))
