def should_serve_drinks(age, on_break):
	if age >= 18:
		if not on_break:
			return True
		else:
			return False
	else:
		return False