meus_numeros = input("Digite seus numeros separados por espaço: ")

num_list = meus_numeros.split()

soma = 0

for num in num_list:
    if num.isdigit():
        soma = soma + int(num)
    else:
        print("Erro so somar valores, {num} não é um dígito")

print("Soma: ", soma)
