def add_indexes(lst):
	new_list = []
	for i in range(0, len(lst)):
		new_list.append(i+lst[i])
	return new_list


n = [1, 2, 3, 4, 5]

add_indexes(n)