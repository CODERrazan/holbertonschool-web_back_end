#!/usr/bin/env python3
"""
This module contains a function that creates a multiplier function.
note: Here is the syntax of Callable:
Callable[[ArgumentType1, ArgumentType2, ...], ReturnType]
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies its input by the given multiplier.
        Returns:
            float: The result of multiplying the value by the multiplier.
        """
    def multiplier_function(value: float) -> float:
        """A multiplier function"""
        return value * multiplier

    return multiplier_function
