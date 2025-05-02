// UserView.js
// Clase encargada de mostrar los datos de usuario en la interfaz.
class UserView {
  constructor() {
    // Referencia al contenedor donde se mostrarán los usuarios.
    this.userContainer = document.getElementById('user-container');
  }

  /**
   * Método para mostrar la lista de usuarios en el DOM.
   * @param {Array<UserModel>} users - Lista de usuarios a mostrar.
   */
  displayUsers(users) {
    // Limpiar el contenido previo del contenedor.
    this.userContainer.innerHTML = '';
    
    // Iterar sobre la lista de usuarios y crear elementos HTML para cada uno.
    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');
      userCard.innerHTML = `
        <h3>${user.name}</h3>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        <p>Company: ${user.company}</p>
      `;
      // Agregar el elemento al contenedor de usuarios.
      this.userContainer.appendChild(userCard);
    });
  }
}
