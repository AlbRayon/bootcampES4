let users = [];
function showRegister() {
      document.getElementById('loginSection').style.display = 'none';
      document.getElementById('registerSection').style.display = 'block';
  }
function showLogin() {
      document.getElementById('loginSection').style.display = 'block';
      document.getElementById('registerSection').style.display = 'none';
  }
function register() {
      const username = document.getElementById('newUsername').value;
      const password = document.getElementById('newPassword').value;

      if (username && password) {
          users.push({username, password});
          const loginError = document.getElementById('loginError');
          loginError.style.color = 'green';
          loginError.innerHTML = 'Usuario registrado con exito';
          showLogin();
      } else {
          alert('Por favor, complete todos los campos');
      }
  }
function login() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const loginError = document.getElementById('loginError');

      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
          document.getElementById('loginContainer').style.display = 'none';
          document.getElementById('welcomeContainer').style.display = 'block';
          document.getElementById('welcomeMessage').textContent = `Bienvenido, ${username}!`;
          loginError.textContent = '';
      } else {
          loginError.style.color = 'red';
          loginError.textContent = 'Credenciales inválidas';
      }
  }
  async function getPublicAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        document.getElementById('apiResult').innerHTML = 
            `Título: ${data.title}<br>Contenido: ${data.body}`;
    } catch (error) {
        document.getElementById('apiResult').textContent = 'Error en la petición';
    }
}

async function postPublicAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'Prueba de Post',
                body: 'Contenido de prueba',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = await response.json();
        document.getElementById('apiResult').innerHTML = 
            `ID de Post creado: ${data.id}`;
    } catch (error) {
        document.getElementById('apiResult').textContent = 'Error en la petición';
    }
}async function getPublicAPI() {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      document.getElementById('apiResult').innerHTML = 
          `Título: ${data.title}<br>Contenido: ${data.body}`;
  } catch (error) {
      document.getElementById('apiResult').textContent = 'Error en la petición';
  }
}

async function postPublicAPI() {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
              title: 'Prueba de Post',
              body: 'Contenido de prueba',
              userId: 1
          }),
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
      });
      const data = await response.json();
      document.getElementById('apiResult').innerHTML = 
          `ID de Post creado: ${data.id}`;
  } catch (error) {
      document.getElementById('apiResult').textContent = 'Error en la petición';
  }
}

  