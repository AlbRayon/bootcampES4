// UserModel.js
// Clase encargada de manejar la representación de los datos de usuario.
class UserModel {
  constructor(id, name, username, email, phone, website, company) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.website = website;
    this.company = company;
  }

  /**
   * Método estático para crear una instancia de UserModel a partir de datos de la API.
   * @param {Object} userData - Datos del usuario obtenidos de la API.
   * @returns {UserModel} - Instancia de UserModel.
   */
  static fromApiData(userData) {
    return new UserModel(
      userData.id,
      userData.name,
      userData.username,
      userData.email,
      userData.phone,
      userData.website,
      userData.company.name
    );
  }
}
