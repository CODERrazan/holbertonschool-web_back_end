#!/usr/bin/env python3
"""Module to calculate the length of each string in a list"""
from typing import List, Tuple, Iterable, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Takes a list of strings and returns a list of tuples.
    Each tuple contains a string from the list and its corresponding length.
    Returns:
    List of tuples, where each tuple contains a string and its length
    """
    return [(i, len(i)) for i in lst]
