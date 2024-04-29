import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function TarjetaCarrito() {
  const [cantidad, setCantidad] = useState(1);

  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <Card className="w-82 h-96">
     
     <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          {/* Botón para disminuir la cantidad */}
          <Button
            onClick={disminuirCantidad}
            ripple={false}
            className="bg-blue-gray-900/10 text-blue-gray-900 hover:bg-blue-gray-900/20"
          >
            -
          </Button>
          {/* Visualización de la cantidad actualizada */}
          <Typography color="blue-gray" className="font-medium">
            Cantidad: {cantidad}
          </Typography>
          {/* Botón para aumentar la cantidad */}
          <Button
            onClick={aumentarCantidad}
            ripple={false}
            className="bg-blue-gray-900/10 text-blue-gray-900 hover:bg-blue-gray-900/20"
          >
            +
          </Button>
        </div>
        {/* Descripción del producto */}
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          AirPods marcados de apple bluthooth
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        {/* Botón para agregar al carrito */}
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Agregar al carrito
        </Button>
      </CardFooter>
    </Card>
  );
}
