#!/usr/bin/env python3
'''
This module contains a single asynchronous
function that waits for a random delay.
'''
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    '''
    Waits for a random delay between 0 and max_delay seconds.
    '''
    wait = random.uniform(0, max_delay)
    await asyncio.sleep(wait)
    return wait
