# Calculate the Profit
# https://edabit.com/challenge/YfoKQWNeYETb9PYpw

def profit(info):
	return round((info["sell_price"] - info["cost_price"]) * info["inventory"])