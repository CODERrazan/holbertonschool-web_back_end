#!/usr/bin/env python3
"""Module to convert a key and a value to
a tuple with the key and the square of the value."""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Convert a key and a value to a tuple with
    the key and the square of the value.
    Args:
        k (str): The key.
        v (Union[int, float]): The value to be squared.
    Returns:
        Tuple[str, float]: A tuple containing the key
        and the square of the value.
    """
    return (k, float(v ** 2))
