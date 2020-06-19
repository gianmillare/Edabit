def left_digit(num):
	num = list(num)
	n = []
	for i in num:
		if i.isnumeric():
			n.append(int(i))
	return n[0]