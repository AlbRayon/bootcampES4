// script.js
// Archivo principal que integra el modelo, la vista y el controlador para iniciar la aplicación.

// Esperar a que el DOM esté completamente cargado.
document.addEventListener('DOMContentLoaded', () => {
  // Crear instancias de UserView y UserController.
  const userView = new UserView();
  const userController = new UserController(userView);

  // Llamar al método fetchAndDisplayUsers para obtener y mostrar los usuarios.
  userController.fetchAndDisplayUsers();
});
