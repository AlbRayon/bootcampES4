import { useState } from 'react';

export default function Proyectos() {
  const [proyectoActivo, setProyectoActivo] = useState(1);

  const renderContenido = () => {
    switch (proyectoActivo) {
      case 1:
        return <Calculadora />;
      case 2:
        return <EdadForm />;
      case 3:
        return <PokemonAPI />;
      case 4:
        return <Contador />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <nav className="flex justify-center gap-3 mb-6">
        {[1, 2, 3, 4].map((id) => (
          <button
            key={id}
            onClick={() => setProyectoActivo(id)}
            className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 ${
              proyectoActivo === id 
                ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Proyecto {id}
          </button>
        ))}
      </nav>
      <div className="transition-all duration-500">{renderContenido()}</div>
    </div>
  );
}

// Proyecto 1: Calculadora Estilo iPhone
function Calculadora() {
  const [input, setInput] = useState('');

  const agregar = (valor) => {
    if (valor === 'C') return setInput('');
    if (valor === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + valor);
    }
  };

  const botones = [
    'C', '', '', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=', '',
  ];

  return (
    <div className="calculadora-container">
      <h2 className="text-xl font-bold mb-3">Calculadora</h2>
      <p className="text-gray-600 mb-4"><strong>Tecnologías usadas:</strong> React, JavaScript</p>
      <div className="calculadora-display">{input || '0'}</div>
      <div className="grid">
        {botones.map((btn, i) =>
          btn ? (
            <button
              key={i}
              onClick={() => agregar(btn)}
              className={`calculadora-button ${btn === 'C' ? 'red' : btn === '=' ? 'green' : ['/', '*', '-', '+'].includes(btn) ? 'orange' : ''}`}
            >
              {btn}
            </button>
          ) : (
            <div key={i}></div>
          )
        )}
      </div>
    </div>
  );
}

// Proyecto 2: Edad desde fecha de nacimiento
function EdadForm() {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [edad, setEdad] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const calcularEdad = () => {
    if (!fecha) return;
    const nacimiento = new Date(fecha);
    const hoy = new Date();
    let años = hoy.getFullYear() - nacimiento.getFullYear();
    const m = hoy.getMonth() - nacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
      años--;
    }
    setEdad(años);
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl p-6">
      <div className="md:flex">
        <div className="p-4 w-full">
          <h2 className="text-xl font-bold text-blue-600 mb-4">Calculadora de Edad</h2>
          <p className="text-gray-500 mb-6"><strong>Tecnologías usadas:</strong> React, JavaScript, HTML5</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre:</label>
              <input 
                type="text" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
                placeholder="Ingresa tu nombre" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de nacimiento:</label>
              <input 
                type="date" 
                value={fecha} 
                onChange={(e) => setFecha(e.target.value)} 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <button 
              onClick={calcularEdad}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
              Calcular Edad
            </button>
          </div>
          
          {isSubmitted && (
            <div className={`mt-6 p-4 rounded-lg ${edad !== null ? 'bg-green-100' : 'bg-red-100'}`}>
              {edad !== null ? (
                <p className="text-center text-lg">
                  <span className="font-bold">{nombre || 'Usuario'}</span>, tienes <span className="text-xl font-bold text-blue-600">{edad}</span> años.
                </p>
              ) : (
                <p className="text-center text-red-500">Por favor, ingresa una fecha válida.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Proyecto 3: Consulta Pokémons
function PokemonAPI() {
  const [nombre, setNombre] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const buscar = () => {
    if (!nombre) return;
    
    setLoading(true);
    setError(false);
    setPokemon(null);
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase().trim()}`)
      .then((res) => res.ok ? res.json() : Promise.reject())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  const getTypeColor = (type) => {
    const typeColors = {
      normal: 'bg-gray-300',
      fire: 'bg-red-500',
      water: 'bg-blue-500',
      electric: 'bg-yellow-400',
      grass: 'bg-green-500',
      ice: 'bg-blue-200',
      fighting: 'bg-red-700',
      poison: 'bg-purple-500',
      ground: 'bg-yellow-600',
      flying: 'bg-indigo-300',
      psychic: 'bg-pink-500',
      bug: 'bg-green-600',
      rock: 'bg-yellow-700',
      ghost: 'bg-purple-700',
      dragon: 'bg-indigo-700',
      dark: 'bg-gray-700',
      steel: 'bg-gray-400',
      fairy: 'bg-pink-300'
    };
    
    return typeColors[type] || 'bg-gray-300';
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
      <div className="p-6">
        <h2 className="text-xl font-bold text-center text-blue-600 mb-4">Pokédex</h2>
        <p className="text-gray-500 text-center mb-6"><strong>Tecnologías usadas:</strong> React, JavaScript, Fetch API, PokéAPI</p>
        
        <div className="flex space-x-2">
          <input 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            placeholder="Nombre del Pokémon" 
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => e.key === 'Enter' && buscar()}
          />
          <button 
            onClick={buscar}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-r-md transition duration-300"
            disabled={loading}
          >
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
        </div>
        
        {loading && (
          <div className="text-center mt-8">
            <p className="text-gray-600">Buscando Pokémon...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center mt-8 p-4 bg-red-100 rounded-lg">
            <p className="text-red-600">No se encontró ningún Pokémon con ese nombre.</p>
          </div>
        )}
        
        {pokemon && (
          <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-inner text-center">
            <div className="flex justify-center mb-2">
              <span className="bg-yellow-400 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                #{pokemon.id}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h3>
            
            <div className="flex justify-center mb-4">
              {pokemon.types.map((typeInfo, index) => (
                <span 
                  key={index} 
                  className={`${getTypeColor(typeInfo.type.name)} text-white text-xs font-medium mr-1 px-2.5 py-0.5 rounded`}
                >
                  {typeInfo.type.name.toUpperCase()}
                </span>
              ))}
            </div>
            
            <div className="relative h-40">
              <img 
                src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
                alt={pokemon.name} 
                className="h-full mx-auto object-contain"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-2 rounded shadow">
                <div className="text-sm text-gray-500">Altura</div>
                <div className="font-bold">{pokemon.height / 10} m</div>
              </div>
              <div className="bg-white p-2 rounded shadow">
                <div className="text-sm text-gray-500">Peso</div>
                <div className="font-bold">{pokemon.weight / 10} kg</div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-semibold text-gray-700 mb-2">Habilidades</h4>
              <div className="flex flex-wrap justify-center gap-1">
                {pokemon.abilities.map((ability, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                  >
                    {ability.ability.name.replace('-', ' ')}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Proyecto 4: Contador
function Contador() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6">
      <h2 className="text-xl font-bold text-blue-600 text-center mb-4">Contador Interactivo</h2>
      <p className="text-gray-500 text-center mb-6"><strong>Tecnologías usadas:</strong> React, JavaScript</p>
      
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 rounded-full bg-gray-100 shadow-inner flex items-center justify-center mb-6">
          <span className="text-5xl font-bold text-blue-600">{count}</span>
        </div>
        
        <div className="flex space-x-4">
          <button 
            onClick={() => setCount(count - 1)} 
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition hover:scale-105 active:scale-95"
          >
            -
          </button>
          <button 
            onClick={() => setCount(0)} 
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition hover:scale-105 active:scale-95"
          >
            Reset
          </button>
          <button 
            onClick={() => setCount(count + 1)} 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition hover:scale-105 active:scale-95"
          >
            +
          </button>
        </div>
        
        <div className="mt-8 w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${Math.min(Math.max((count + 10) * 5, 0), 100)}%` }}
          ></div>
        </div>
        
        <p className="mt-4 text-gray-600">
          {count === 0 ? "Valor neutral" : 
           count > 0 ? `${count} positivo${count === 1 ? "" : "s"}` : 
           `${Math.abs(count)} negativo${Math.abs(count) === 1 ? "" : "s"}`}
        </p>
      </div>
    </div>
  );
}