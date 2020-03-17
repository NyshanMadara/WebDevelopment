# Минимум 4 чисел
# Напишите функцию int min (int a, int b, int c, int d) (C/C++),
# static int min (int a, int b, int c, int d) (Java)
# function min (a,b,c,d: integer):integer (Pascal),
# находящую наименьшее из четырех данных чисел.
#
# Входные данные
# Вводится четыре числа.
#
# Выходные данные
# Необходимо вывести  наименьшее из 4-х данных чисел.
#
# Примеры
# входные данные
# 4 5 6 7
# выходные данные
# 4

a,b,c,d = map(int,input().split())

def mini(a,b,c,d):
   return min(a,b,c,d)

print(mini(a,b,c,d))