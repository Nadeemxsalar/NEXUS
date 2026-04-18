from datetime import datetime


def current_datetime():
    """Returns the current date and time in UTC formatted as YYYY-MM-DD HH:MM:SS."""
    return datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')


def add(a, b):
    """Returns the sum of two numbers."""
    return a + b


def subtract(a, b):
    """Returns the difference of two numbers."""
    return a - b


def multiply(a, b):
    """Returns the product of two numbers."""
    return a * b


def divide(a, b):
    """Returns the quotient of two numbers, raises ValueError on divide by zero."""
    if b == 0:
        raise ValueError('Cannot divide by zero')
    return a / b
