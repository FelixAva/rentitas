import React from 'react';
import { Input, Button } from "../components"

export default function Login() {
  return (
    <div>
      <h1 className="text-center text-6xl">Iniciar Sesión</h1>

      <form
        className="justify-self-center align-middle border-2 w-200 rounded-md flex flex-col gap-5 p-10 items-center text-2xl"
      >
        <fieldset
          className="flex flex-col gap-5"
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

          <Button
          title="Iniciar Sesión"
          action={ () => alert('JH') }
          />
        </fieldset>

        <>
          <a
            href="#"
            className=""
          >Don't you have an account? <span>Register</span></a>
        </>
      </form>
    </div>
  );
}
