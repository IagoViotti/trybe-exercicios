sum = 0


def sum_recursive(n):
    if n == 0:  # caso base
        return 0
    else:
        print(n)
        return n + sum_recursive(n - 1)  # caso recursivo


sum_recursive(5)
