import React from 'react';
import {Input} from "../components"

export default function Login() {
  return (
    <div>
      <h1 className="text-center text-6xl">Iniciar Sesión</h1>

      <form
        className="justify-self-center align-middle bg-amber-100 w-200 rounded-lg flex flex-col gap-5 p-10 items-center"
      >
        <Input
          label="Correo Electronico"
          placeholder="email@example.com"
          type="email"
        />

        <Input
          label="Contraseña"
          placeholder="Escribe tu contraseña"
          type="password"
        />

        <button>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
