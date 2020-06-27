# Factorial of a Number
# https://edabit.com/challenge/PNbsQzmDR3CJ9JHkB

def fact(n):
    if n == 1 or n == 0:
        return 1
    else:
        return n * fact(n-1)

fact(0)