# Stand in Line
# https://edabit.com/challenge/S26tvW7BPrJsyJApt

def next_in_line(lst, num):
	if not lst:
		return "No list has been selected"
	else:
		lst.pop(0)
		lst.append(num)
	
	return lst