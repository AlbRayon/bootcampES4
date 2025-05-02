// UserController.js
// Clase encargada de manejar la lógica de negocio, coordinando el modelo y la vista.
class UserController {
  /**
   * Constructor de la clase UserController.
   * @param {UserView} userView - Instancia de la vista de usuario.
   */
  constructor(userView) {
    this.userView = userView;
    this.apiUrl = "https://jsonplaceholder.typicode.com/users"; // URL de la API para obtener los datos de usuarios.
  }

  /**
   * Método para obtener los usuarios desde la API y mostrarlos en la vista.
   */
  async fetchAndDisplayUsers() {
    try {
      // Realizar la solicitud a la API.
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error(`Error al obtener usuarios: ${response.statusText}`);
      }
      
      // Convertir la respuesta a formato JSON.
      const data = await response.json();
      
      // Crear instancias de UserModel para cada usuario.
      const users = data.map(user => UserModel.fromApiData(user));
      
      // Pasar la lista de usuarios a la vista para que los muestre.
      this.userView.displayUsers(users);
    } catch (error) {
      // Manejo de errores.
      console.error("Error en fetchAndDisplayUsers:", error);
    }
  }
}
