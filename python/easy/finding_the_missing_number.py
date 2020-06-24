# Find the Missing Number
# https://edabit.com/challenge/oMCNzA4DcgpsnXTRJ

def missing_num(lst):
  new_list = sorted(lst)
  count = 1

  if new_list[-1] != 10:
    print(10)
  else:
    for i in new_list:
      if i == count:
        count+=1
      else:
        break
    print(count)



n = [10, 5, 7, 2, 4, 6, 8, 3, 9]
missing_num(n)