import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import {TarjetaCarrito} from '../components/TarjetaCarrito';

export function BotonCarrito() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      {/* Fondo negro con opacidad para cubrir toda la pantalla */}
      {open && (
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-60 backdrop-blur-sm z-[9995] pointer-events-auto" style={{ opacity: 1 }} onClick={closeDrawer}></div>
      )}

      <div className="fixed z-50 bottom-0 right-2">
        <Button onClick={openDrawer} variant="gradient" className="mx-2 right-0 m-10">
          <ShoppingCartIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>

      <Drawer open={open} onClose={closeDrawer} className="overflow-y-auto">
        <div className="text-center mt-5"><strong>Carrito de Compras</strong></div>
        <TarjetaCarrito></TarjetaCarrito>
        <Button className="justify-items-center mx-16 mt-6">Enviar pedido</Button>
      </Drawer>
    </React.Fragment>
    
  );
}

