# Return Only the Integer
# https://edabit.com/challenge/DG2HLRqxFXxbaEDX4

def return_only_integer(lst):
	result = []
	for i in lst:
		if type(i) == int:
			result.append(i)
	return result