def factorial(Z):
	if Z == 1 or Z == 0:
		return 1
	else:
		return Z * factorial(Z-1)