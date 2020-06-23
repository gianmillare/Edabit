# Alphanumeric Restriction
# https://edabit.com/challenge/kGEHEnj7qQf3KHd6F

def alphanumeric_restriction(s):
	if s.isalpha() or s.isdigit():
		return True
	else:
		return False