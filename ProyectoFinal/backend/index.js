const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

// Datos de alumnos
const alumnos = [
  {
    nombre: 'Jose Alberto Rayon Gutierrez',
    foto: 'https://via.placeholder.com/150',
    bio: 'Desarrollador web con interés en tecnologías modernas.',
    email: 'alberto_raygut@outlook.com.com',
    redes: {
      github: 'https://github.com/AlbRayon',
      linkedin: 'https://www.linkedin.com/in/rayon-gutierrez-ja'
    },
    habilidades: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Astro']
  },
  {
    nombre: 'Administrador',
    foto: 'https://via.placeholder.com/150',
    bio: 'Cuenta de administrador del sistema.',
    email: 'admin@example.com',
    redes: {
      github: '#',
      linkedin: '#'
    },
    habilidades: ['Gestión de sistemas', 'Seguridad']
  }
];

// Datos de proyectos
const proyectos = [
  {
    id: 1,
    titulo: 'Calculadora en JavaScript',
    descripcion: 'Una calculadora básica que permite sumar, restar, multiplicar y dividir usando JavaScript puro.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    resultados: 'Calculadora funcional con interfaz amigable.'
  },
  {
    id: 2,
    titulo: 'Calcula tu edad',
    descripcion: 'Aplicación que solicita tu nombre y fecha de nacimiento y calcula tu edad actual.',
    tecnologias: ['HTML', 'JavaScript'],
    resultados: 'Muestra tu edad de forma dinámica en pantalla.'
  },
  {
    id: 3,
    titulo: 'API de Pokemones',
    descripcion: 'Aplicación que consume una API pública para consultar información de pokemones.',
    tecnologias: ['JavaScript', 'Fetch API', 'pokeapi.co'],
    resultados: 'Puedes buscar pokemones y ver sus habilidades.'
  },
  {
    id: 4,
    titulo: 'Portafolio Personal',
    descripcion: 'Este mismo portafolio, creado con Astro y Express.',
    tecnologias: ['Astro', 'Node.js', 'Express'],
    resultados: 'Permite mostrar tus proyectos de forma dinámica.'
  }
];

// Rutas
app.get('/api/alumnos', (req, res) => {
  res.json(alumnos);
});

app.get('/api/proyectos', (req, res) => {
  res.json(proyectos);
});

app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
