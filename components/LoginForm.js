import { signIn } from 'next-auth/react';
import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signIn('google');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md bg-white space-y-4">
      <h2 className="text-2xl font-semibold text-center">Iniciar Sesión</h2>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Iniciar Sesión
        </button>
      </form>
      <div className="text-center mt-4">
        <p className="text-gray-600">o inicia sesión con Google</p>
        <button
          onClick={handleGoogleSignIn}
          className="mt-2 w-full p-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
