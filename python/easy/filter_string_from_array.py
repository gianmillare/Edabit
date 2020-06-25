# Filter Strings from Array
# https://edabit.com/challenge/EfEpbcGjXQYDFcdxF

def filter_list(n):
  results = []
  for i in n:
    if isinstance(i, int):
      results.append(i)
  return results