# A Circle and Two Squares
# https://edabit.com/challenge/NNhkGocuPMcryW7GP

import math

def square_areas_difference(r):
  square_root = math.sqrt(2)
  small_hypo = 2*r
  small_side = small_hypo/square_root
  small_area = small_side**2

  big_side = small_hypo
  big_area = big_side**2

  return int(big_area-small_area)