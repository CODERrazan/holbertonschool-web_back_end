#!/usr/bin/env python3
"""This module contains functions for
working with the wait_n function.
"""

import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(
        n: int, max_delay: int
        ) -> List[float]:
    """This function waits for n tasks to
    complete and returns a list of their
    completion times in ascending order."""
    task = [task_wait_random(max_delay) for _ in range(n)]
    return [await i for i in asyncio.as_completed(task)]
