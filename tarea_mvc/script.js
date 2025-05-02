// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Crear instancias de UserView y UserController.
  const userView = new UserView();
  const userController = new UserController(userView);

  userController.fetchAndDisplayUsers();
});
