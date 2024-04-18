import React from 'react';
import { Registro } from "./modalsPrincipales/registroLogin";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Navbar,
} from "@material-tailwind/react";

import
{ArrowLongLeftIcon,

} from "@heroicons/react/24/solid";
const handleLogin = () => {

  window.location.href="/"
};

const Login = () => {
  return (
   <> 
    <section className='h-screen w-screen flex '> 
        <div class=" flex flex-col gap-6 mb-1 w-[35%] p-6 h-screen justify-items-center justify-center ">
        <Card color="transparent" shadow={false} className=' ' >
        <div className="flex items-center gap-2 mb-12">
    <a href='/'>
      <ArrowLongLeftIcon className='h-12 w-12' />
    </a>
  </div>
      <Typography variant="h4" color="blue-gray" className='justify-items-center'>
        Iniciar sesión
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Preparate para los mejores accesorios
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          
          
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Tu correo
          </Typography>
          <Input
            size="lg"
            placeholder="corrreo@gmail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-green-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Clave
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
 
        <Button className="mt-6" fullWidth onClick={handleLogin}>
          Iniciar sesion         
        </Button>

        <Typography color="gray" className="mt-4 text-center font-normal">
          Aún no tienes una cuenta?{" "}
          
          <Registro>

          </Registro>
        </Typography>
      </form>
    </Card>

        </div>


        <div className="flex flex-col gap-6 mb-1 w-[70%] absolute right-0 p-2 h-[100%]">
          <img src='/images/imgLogin.avif' className='h-full'></img>
        </div>
    </section></>
  );
};

export default Login;
