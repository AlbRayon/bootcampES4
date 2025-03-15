estudiantes = {}

def agregar_estudiante():
    nombre = input("Ingresa el nombre del estudiante: ")
    calificacion = float(input(f"Ingrese la calificación de {nombre}: "))
    estudiantes[nombre] = calificacion
    print(f"Estudiante agregado exitosamente. \n")
def mostrar_estudiantes():
    if estudiantes:
        print("\nLista de estudiantes y calificaciones:")
        for nombre, calificacion in estudiantes.items():
            print(f"{nombre}: {calificacion}")
    else:
        print("No hay estudiantes en la lista.\n")
def buscar_estudiante():
    nombre = input("Ingresa el nombre del estudiante a buscar: ")
    if nombre in estudiantes:
        print(f"{nombre} tiene una calificación de {estudiantes[nombre]}.\n")
    else:
        print(f"El estudiante {nombre} no se encuentra en la lista.\n")

def eliminar_estudiante():
    nombre = input("Ingresa el nombre del estudiante a eliminar: ")
    if nombre in estudiantes:
        del estudiantes[nombre]
        print(f"Estudiante {nombre} eliminado.\n")
    else:
        print(f"El estudiante {nombre} no existe en la lista.\n")
while True:
    print("1. Agregar un nuevo estudiante")
    print("2. Mostrar lista de estudiantes")
    print("3. Buscar estudiante")
    print("4. Eliminar estudiante")
    print("5. Salir") 
    opcion = input("Selecciona una opción: ")
    if opcion == "1":
        agregar_estudiante()
    elif opcion == "2":
        mostrar_estudiantes()
    elif opcion == "3":
        buscar_estudiante()
    elif opcion == "4":
        eliminar_estudiante()
    elif opcion == "5":
        print("!Hasta Luego!")
        break
    else:
        print("Opción no válida. Inténtalo de nuevo.\n")
