def XO(txt):
	count_x = 0
	count_o = 0
	txt = txt.lower()
	for i in txt:
		if i == "x":
			count_x+=1
		elif i == "o":
			count_o+=1
	
	return count_x == count_o
		