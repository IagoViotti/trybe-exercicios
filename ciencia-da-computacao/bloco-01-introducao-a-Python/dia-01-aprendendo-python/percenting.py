ratings = [6, 8, 5, 9, 10]

to_percent = [x*10 for x in ratings]

print(to_percent)

for rating in to_percent:
    if rating % 3 == 0:
        print(f'{rating} é múltiplo de 3')
