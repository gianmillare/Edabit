def count_characters(x):
  count = 0
  for i in x:
    for j in i:
      count+=1
  print(count)





x = ['###','###','###']
count_characters(x)