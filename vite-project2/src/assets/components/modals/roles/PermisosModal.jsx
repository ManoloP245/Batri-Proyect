import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Switch 
} from "@material-tailwind/react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
export function PermisosRolModal() {
  const [size, setSize] = React.useState(null);
 
  const handleOpen = (value) => setSize(value);
 
  return (
    <>
      <div className=" flex mx-2">
        <Button color="green" onClick={() => handleOpen("xxl")} variant="gradient" className="flex" > <PencilSquareIcon strokeWidth={2} className="h-4 w-4" />
          <span>Editar permisos</span>
        </Button>
      </div>
      <Dialog
        open={
          size === "xxl"
        }
        size={size || "md"}
        handler={handleOpen}
      >
        <DialogHeader>Editar permisos</DialogHeader>
        <DialogBody>
        
        <div
  class="relative flex flex-col w-[100%] h-[100%]  text-gray-700 bg-white rounded-xl">
  <table class="w-[100%] text-left  min-w-[100%] mb-12">
    <thead>
      <tr>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Modulo
          </p>
        </th>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Ver
          </p>
        </th>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Crear
          </p>
        </th>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Editar
          </p>
        </th>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Eliminar
          </p>
        </th>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Usuarios
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
      </tr>
      <tr>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Dashboard
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
      </tr>
      <tr>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Usuarios
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
      </tr>
      <tr>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Categorias
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
      </tr>
      <tr>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Productos
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
      </tr>
      <tr>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Proveedores
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
      </tr>
      <tr>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Compras
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
      </tr>
      <tr>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Clientes
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
         <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
      </tr>
      <tr>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Pedidos
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
      </tr>
      <tr>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Ventas
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <Switch color="green" />
        </td>
      </tr>

      <tr>
        <td>
          
        </td>
      </tr>
      
    </tbody>
  </table>

</div> 
<div className="">
<Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cancelar</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen(null)}
          >
            <span>Confirmar</span>
          </Button></div>
        </DialogBody>
        <DialogFooter>
         
        </DialogFooter>
      </Dialog>
    </>
  );
}