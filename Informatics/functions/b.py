# Степень
# Напишите функцию double power (double a, int n) (C/C++), function power (a:real; n:longint): real (Pascal), вычисляющую значение an.
# Входные данные
# Вводится 2 числа - a (вещественное) и n (целое неотрицательное).
#
# Выходные данные
# Необходимо вывести  значение an.
#
# Примеры
# входные данные
# 2 2
# выходные данные
# 4

a,b = map(float,input().split())
def function_power(a,b):
    return a**b
print(function_power(a,b))