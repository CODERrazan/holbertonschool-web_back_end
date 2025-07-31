#!/usr/bin/env python3
"""Module to sum a mix between floats and ints"""
from typing import List, Union


def sum_mixed_list(mxd_list: List[Union[int, float]]) -> float:
    """Take a list of int and float.
    Return:
    a sum as float"""
    return sum(mxd_list)
