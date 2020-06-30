# How Many Solutions Does This Quadratic Have?
# https://edabit.com/challenge/o2AKq4xy3nfZabKXL

def solutions(a, b, c):
	d = (b**2) - (4*a*c)
	if d > 0:
		return 2
	elif d == 0:
		return 1
	else:
		return 0