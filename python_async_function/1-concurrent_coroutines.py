#!/usr/bin/env python3
"""This module contains the class for
the game of Tic Tac Toe."""

import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    This function waits for n seconds, with a random
    delay between 0 and max_delay."""
    asy = [wait_random(max_delay) for _ in range(n)]
    return [await i for i in asyncio.as_completed(asy)]
