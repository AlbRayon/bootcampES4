entrada = input("Ingresa una lista de números enteros separados por comas: ")

numeros = [int(num) for num in entrada.split(",")]

print(f"La longitud de la lista es: {len(numeros)}")

suma = sum(numeros)
print(f"La suma de todos los números en la lista es: {suma}")

numero_buscar = int(input("Ingresa un número para verificar su presencia en la lista: "))
if numero_buscar in numeros:
    indice = numeros.index(numero_buscar)
    print(f"El número {numero_buscar} está presente en la posicion {indice} de la lista.")
else:
    print(f"El número {numero_buscar} no está en la lista.")

numeros.pop() 
print(f"Lista actualizada despues de eliminar el ultimo elemento: {numeros}")
