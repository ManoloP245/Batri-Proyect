import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Switch 
} from "@material-tailwind/react";
import { PencilSquareIcon, EyeIcon } from "@heroicons/react/24/solid";
export function DetalleCompraModal() {
  const [size, setSize] = React.useState(null);
 
  const handleOpen = (value) => setSize(value);
 
  return (
    <>
      <div className=" flex mx-2">
        <Button color="green" onClick={() => handleOpen("xxl")} variant="gradient" className="flex" > <EyeIcon strokeWidth={2} className="h-4 w-4" />
          <span></span>
        </Button>
      </div>
      <Dialog
        open={
          size === "xxl"
        }
        size={size || "md"}
        handler={handleOpen}
      >
        <DialogHeader>Ver compra</DialogHeader>
        <DialogBody>
        
        <div
  class="relative flex flex-col w-[100%] h-[100%]  text-gray-700 bg-white rounded-xl">
  <table class="w-[100%] text-left  min-w-[100%] mb-12">
    <thead>
      <tr>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Cantidad
          </p>
        </th>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Producto
          </p>
        </th>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Subtotal
          </p>
       </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            12
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            B-10
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            100000
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        </td>
      </tr>
      <tr>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            3
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Silicone A14
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            12000
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        
        </td>
      </tr>
      <tr>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            1
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            B-11
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            100000
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
       
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