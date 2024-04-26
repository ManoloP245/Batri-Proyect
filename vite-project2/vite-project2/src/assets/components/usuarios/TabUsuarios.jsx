import {
  MagnifyingGlassIcon,
  TrashIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
} from "@material-tailwind/react";

import { CrearVendedor } from "../usuarios/CrearVendedor";
import { EditarVededor } from "../usuarios/EditarVendedor";

import Swal from "sweetalert2";

const TABLE_HEAD = [
  "Id",
  "Nombre",
  "Apellido",
  "Cedula",
  "Correo",
  "Rol",
  "Fecha",
  "Estado",
  "",
];

export function TabUsuarios() {
  const [users, setUsers] = useState([]);
  const [online, setOnline] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("http://127.0.0.1:5000/listusers")
      .then(function (response) {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }

  const handleClick = async () => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, bórralo!",
    });

    if (result.isConfirmed) {
      Swal.fire("¡Borrado!", "Tu archivo ha sido borrado.", "success");
    }
  };


  return (
    <Card className="h-full w-full max-w-[75%] absolute right-5 mt-2 mb-2 z-0 bg-transparent">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none py-2"
      >
        <div className="mb-8 flex items-center justify-between gap-8"></div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <CrearVendedor />

          <Button className="flex" color="green">
            <DocumentArrowDownIcon className="h-5 w-5" />
            <span className="px-2	">Excel</span>
          </Button>

          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
            {TABLE_HEAD.map((head, index) => (
              <th
                key={head}
                className="min-w-max cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors "
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="min-w-max flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  {head || ''}
                </Typography>
              </th>
            ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (

              <tr key={key}>
                <td className="p-4 border-b border-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {user[0] || ''} {/* Id_usuario */}
                </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user[1] || ''}
                 
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    
                    {user[2] || ''}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user[3] || ''}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user[4] || ''}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user[5] || ''}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user[6] || ''}
                  </Typography>
                </td>

                <td className="p-4 border-b border-blue-gray-50">
                  <div className="w-max">
                  <Chip
                      variant="ghost"
                      size="sm"
                      value={user[7] === 1 ? "Activo" : "Inactivo"}
                      color={user[7] === 1 ? "green" : "blue-gray"}
                  />
                  </div>
                </td>

                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex">
                  <EditarVededor user={user} />
                    <Button color="red" onClick={handleClick}>
                      <TrashIcon className="h-5 w-5"></TrashIcon>{" "}
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Pagina 1 de 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Anterior
          </Button>
          <Button variant="outlined" size="sm">
            Proxima
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
