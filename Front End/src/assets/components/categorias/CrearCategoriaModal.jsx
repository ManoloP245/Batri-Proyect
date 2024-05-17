
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import Swal from 'sweetalert2';

import { categoriaSchema } from "./CategoriasValidaciones";
import { enviarDatos } from "../servicios/crear";
import React, { useState } from 'react';


export function CrearCategoriaModal() {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = useState(null);

  const manejarEnvio = async (event) => {
    event.preventDefault();
  
    const datos = {
      nombre: event.target.elements.nombreCategoria.value,
      descripcion: event.target.elements.descripcionCategoria.value,
      estado: event.target.elements.estadoCategoria.value,
    };
    const result = categoriaSchema.safeParse(datos);
  
    if (!result.success) {
      // Accede a los errores de validación y los muestra
      const errorMessage = Object.values(result.error.formErrors.fieldErrors).join(', ');
      setError(errorMessage);
    } else {
      const data = {
        nombre: event.target.elements.nombreCategoria.value,
        descripcion: event.target.elements.descripcionCategoria.value,
        estado: event.target.elements.estadoCategoria.value,
      };
      
      try {
        const respuesta = await enviarDatos("http://127.0.0.1:5000/crear_categoria",data);
        console.log(respuesta.msg); // Imprime el mensaje del servidor por consola
        console.log(respuesta.estado); 
        if(respuesta.estado){
          Swal.fire(
            'Agregado!',
            respuesta.msg,
            'success'
        );
        }
        else{
          Swal.fire(
            'Error!',
            respuesta.msg,
            'error'
        );
        }
        setOpen(false);
      } catch (error) {
        console.log(error);
      }
    }
  
  };
  return (
    <>
 <Button color="green" onClick={() => setOpen(true)} variant="gradient" className="flex">
        
        <span className="px-2">Nueva categoria</span>
      </Button>
      <Dialog
        open={open}
        handler={() => setOpen(!open)}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        
      >
        <DialogBody>
          <div class="relative flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border grid justify-items-center">
            <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Registrar categoria
            </h4>

            <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96" onSubmit={(event) => manejarEnvio(event, setOpen)}>
              <div class="flex flex-col gap-6 mb-1">
                <h6
                  class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  Nombre categoria
                </h6>
                <div class="relative h-11 w-full min-w-[200px]">
                  <input placeholder="Silicon..."  name="nombreCategoria"
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                  
                  <label
                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                </div>
                <h6
                  class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  Descripción de la categoria
                </h6>
                <div class="relative h-11 w-full min-w-[200px]">
                  <input placeholder="Esta categoria hace..."   name="descripcionCategoria" 
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                  
                  <label
                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                </div>
                <h6
                  class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  Estado
                </h6>
                <select name="estadoCategoria" id="estadoCategoria" required class="border border-gray-300 rounded px-5 py-2 text-sm focus:">
              <option value="1">Activo</option>
              <option value="0">Inactivo</option>
            </select>
              
            
              </div>
              <div class="inline-flex items-center">
              </div>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <button 
                class="mt-6 block w-full select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit">
                Guardar categoria  
              </button>
              

            </form>
          </div>
        </DialogBody>

      </Dialog>
    </>
  );
}