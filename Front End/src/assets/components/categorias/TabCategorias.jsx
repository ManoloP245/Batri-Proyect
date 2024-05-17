import {
    MagnifyingGlassIcon,
    TrashIcon,
    DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
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
import Swal from 'sweetalert2'
import { CrearCategoriaModal } from "../categorias/CrearCategoriaModal";
import { EditarCategoriaModal } from "../categorias/EditarCategoriaModal";
import { anular } from "../servicios/anular";
import React, { Suspense } from "react";
import { fetchData } from "../servicios/fetchData";
import { useMediaQuery } from 'react-responsive'
import { useState, startTransition } from "react";

const ITEMS_PER_PAGE = 10;

const apiData = fetchData("http://127.0.0.1:5000/consultar_categorias");


const TABLE_HEAD = ["Id", "Nombre categoria", "Descripción", "Fecha", "Estado", ""];
const handleClick = async (id_categoria) => {
    console.log(id_categoria);
    const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: '¡No podrás revertir esto!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#22c55e',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, cambiar estado!'
    });

    if (result.isConfirmed) {
        // Aquí es donde haces la solicitud PUT
        try {
            const respuesta = await anular('http://127.0.0.1:5000/desactivar_categoria/', id_categoria, null);
            console.log('Success:', respuesta);
            if(respuesta.estado){
              Swal.fire(
                'Inactivado!',
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
        } catch (error) {
            console.error('Error:', error);
        }
    }
};

export function TabCategorias() {
    const data = apiData.read();
    const [searchTerm, setSearchTerm] = useState('');
    const filteredData = data.filter(item => item.nombre && item.nombre.toLowerCase().includes(searchTerm.toLowerCase()));
    const [currentPage, setCurrentPage] = useState(1);
    const totalFilteredPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentFilteredPageData = filteredData.slice(startIndex, endIndex);
    
    // Aquí va el resto de tu código, usando `currentFilteredPageData` en lugar de `currentPageData`
    
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' })
    const handleNextPage = () => {
        if (currentPage < totalFilteredPages) {
          setCurrentPage(currentPage + 1);
        }
      };
      const handlePreviousPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      
      
      };
    return (
        <Card className="h-full w-full max-w-[75%] absolute right-5 mt-2 mb-2 z-0 bg-transparent">
        <CardHeader floated={false} shadow={false} className="rounded-none py-8">
        <div className="flex">
        <Input
  label="Search"
  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
  value={searchTerm}
  onChange={e => setSearchTerm(e.target.value)}
/> <div className="p-2"> <CrearCategoriaModal /></div>
<Button className="flex m-2" color="green">
            <DocumentArrowDownIcon className="h-5 w-5" />
            <span className="px-1	">Excel</span>
          </Button></div>
        <div className="flex flex-wrap">
  {isMobile ? (
    // Renderiza la versión móvil de la tabla (como tarjetas)
    [<div key="actions" className="card w-full sm:w-1/2">
      <div className="card-content">
        <div className="content">
            <div className="mb-4 mt-4">
          <CrearCategoriaModal />
</div>
          <Button className="flex" color="green">
            <DocumentArrowDownIcon className="h-5 w-5" />
            <span className="px-2	">Excel</span>
          </Button>
        </div>
      </div>
    </div>,
    ...currentFilteredPageData.map(({ id_categoria, nombre, descripcion, fecha_categoria, estado }) => (
      <div key={id_categoria} className="card w-full sm:w-1/2">
        <div className="card-content border-4 border-green-300 rounded-lg p-4 m-4">
          <div className="content">
            <p><strong>ID:</strong> {id_categoria}</p>
            <p><strong>Nombre:</strong> {nombre}</p>
            <p><strong>Descripción:</strong> {descripcion}</p>
            <p><strong>Fecha:</strong> {fecha_categoria}</p>
            <p><strong>Estado:</strong> {estado ? "Activo" : "Inactivo"}</p>
          </div>
        </div>
      </div>
    ))]
             
              
    ) : (
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
                  {head}{" "}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <Suspense fallback={<div>Cargando</div>}>
            {currentFilteredPageData.map(({ id_categoria, nombre, descripcion, fecha_categoria, estado }, index) => {
              const isLast = index === data.length - 1;
              const classes = isLast ? "p-4" : "p-2 border-b border-blue-gray-50";

              return (
                <tr key={id_categoria}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {id_categoria}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {nombre}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {descripcion}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {fecha_categoria}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={estado ? "Activo" : "Inactivo"}
                        color={estado ? "green" : "blue-gray"}
                      />
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex">
                      <EditarCategoriaModal id_categoria={id_categoria} />
                      <Button id_categoria={id_categoria} color="red" onClick={() => handleClick(id_categoria)} className="p-3 m-1">
                        <TrashIcon className="h-5 w-5" />
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </Suspense>
        </tbody>
      </table>
    )}
    </div>
  </CardHeader>
  <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
  <Typography variant="small" color="blue-gray" className="font-normal">
    Página {currentPage} de {totalFilteredPages}
  </Typography>
  <div className="flex gap-2">
    <Button variant="outlined" size="sm" onClick={handlePreviousPage} disabled={currentPage === 1}>
      Anterior
    </Button>
    <Button variant="outlined" size="sm" onClick={handleNextPage} disabled={currentPage === totalFilteredPages}>
      Próxima
    </Button>
  </div>
</CardFooter>


</Card> 
    );
}