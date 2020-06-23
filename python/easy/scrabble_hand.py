# Scrabble Hand
# https://edabit.com/challenge/cH5ce3f4QgnreDW4v

def maximum_score(tile_hand):
	results = 0
	for i in tile_hand:
		results += i.get("score")
	return results