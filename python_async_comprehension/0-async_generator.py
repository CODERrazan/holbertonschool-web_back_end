#!/usr/bin/env python3
"""Module Generator Async"""

import asyncio
from typing import Generator
import random


async def async_generator() -> Generator[float, None, None]:
    """It generates aleatory numbers"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
