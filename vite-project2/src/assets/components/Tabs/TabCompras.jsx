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
    Switch,
    Chip,
    CardFooter,
} from "@material-tailwind/react";

import { CrearVendedor } from "../modals/usuarios/CrearVendedor";
import { EditarVededor } from "../modals/usuarios/EditarVendedor";

import Swal from 'sweetalert2'
import { CrearCategoriaModal } from "../modals/categorias/CrearCategoriaModal";
import { EditarCategoriaModal } from "../modals/categorias/EditarCategoriaModal";
import { DetalleCompraModal } from "../modals/compras/DetalleComprasModal";
import { RegistrarCompraModal } from "../modals/compras/RegistrarCompra";

const TABLE_HEAD = ["Id", "Costo total", "Cantidad de productos", "Fecha", "Estado", "Detalle"];

const TABLE_ROWS = [
    {
        id: "1",
        total: "10000000",
        productos: "30",
        fecha: "12/12/12",
        online: true,

    },
    {
        id: "1",
        total: "1000",
        productos: "1",
        fecha: "12/12/12",
        online: true,
    },

];
const handleClick = async () => {
    const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: '¡No podrás revertir esto!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#22c55e',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, bórralo!'
    });

    if (result.isConfirmed) {
        Swal.fire(
            '¡Borrado!',
            'Tu archivo ha sido borrado.',
            'success'
        );
    }
};
export function TabCompras() {

    return (
        <Card className="h-full w-full max-w-[75%] absolute right-5 mt-2 mb-2 z-0 bg-transparent">
            <CardHeader floated={false} shadow={false} className="rounded-none py-2">
                <div className="mb-8 flex items-center justify-between gap-8 ">


                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

                    <RegistrarCompraModal />

                    <Button className="flex"color="green">
                        <DocumentArrowDownIcon className="h-5 w-5"  />
                        <span className="px-2	">           Excel</span>
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
                                        {head}{" "}

                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(
                            ({ id, productos,total, fecha, online }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={id}>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {id}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {productos}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {total}
                                            </Typography>
                                        </td>


                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {fecha}
                                            </Typography>
                                        </td>

                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    variant="ghost"
                                                    size="sm"
                                                    value={online ? "Activo" : "Inactivo"}
                                                    color={online ? "green" : "blue-gray"}
                                                />
                                            </div>
                                        </td>

                                        <td className={classes}>
                                            <div className="flex">

                                          
                                            <Switch color="green" />

  <DetalleCompraModal />

                                            </div>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
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