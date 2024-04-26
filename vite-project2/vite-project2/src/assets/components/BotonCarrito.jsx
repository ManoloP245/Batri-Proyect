import React from "react";
import {
  Drawer,
  Button,
} from "@material-tailwind/react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import {TarjetaCarrito} from '../components/TarjetaCarrito';
import {theme} from "../../Theme";
import { ThemeProvider } from "@material-tailwind/react";
export function BotonCarrito() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  return (
    <ThemeProvider value={theme}>
    <React.Fragment>
    <div className=" fixed z-50 bottom-0 right-2   ">
      <Button onClick={openDrawer} variant="gradient" className=" mx-2   right-0 m-10">
      <ShoppingCartIcon strokeWidth={2} className="h-4 w-4" />
   
   
      </Button>
    </div>
   
      <Drawer open={open} onClose={closeDrawer} className="overflow-y-auto " >
        <div className="text-center mt-5"><strong>Carrito de Compras</strong></div>
       
        <TarjetaCarrito></TarjetaCarrito>


        <Button className="justify-items-center mx-16 mt-6">Enviar pedido</Button>
      </Drawer>
    </React.Fragment>
    </ThemeProvider>
  );
}
