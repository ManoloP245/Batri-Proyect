import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function Tarjeta( {img,nombre,descripcion,textoBotonCarrito} ) {
    return (
      <Card className="mt-16 px-6 ml-6  w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={img}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {nombre}
          </Typography>
          <Typography>
           {descripcion}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>{textoBotonCarrito}</Button>
        </CardFooter>
      </Card>
    );
  }