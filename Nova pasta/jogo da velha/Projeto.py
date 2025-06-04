# Online Python compiler (interpreter) to run Python online.
# Write Python 3 code in this online editor and run it.
print("Hello World")

def maior(num1, num2):
    if num1 > num2:
            return num1
    else:
            return num2
                
num1 = int(input("Digite o primeiro número: "))
num2 = int(input("Digite o segundo número: "))

print("Voce digitou o número", num1,"e",num2)

resultado = maior(num1, num2)
print("O maior numero é: ", resultado)