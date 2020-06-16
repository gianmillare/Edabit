def count_vowels(txt):
	txt = str(txt).lower()
	vowels = ['a', 'e', 'i', 'o', 'u']
	count = 0
	
	for i in txt:
		if i in vowels:
			count+=1
	return count