import React, { useState } from 'react';
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    
  } from "@material-tailwind/react";
import {
  Bars3Icon,
  PowerIcon,
  PresentationChartBarIcon,
  CogIcon,
  UsersIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  TagIcon,
  RectangleStackIcon,
  ClipboardDocumentListIcon,

} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export function Aside() {
  const [isVisible, setIsVisible] = useState(true);
    const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
    return (
        <div className='mt-4 z-50'>
        <button className='border-solid border-2 border-sky-500 p-2 rounded mb-2 py-2 z-40 ml-2'  onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? '' : ''} <Bars3Icon className="h-5 w-5 " />
        </button>
        <br></br>
        <div className={`transition-all duration-500 ease-in-out transform max-w-[15rem]	${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-2 shadow-xl shadow-blue-gray-900/5 px-2">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
      <a href='/usuarios'>
      <ListItem>
        <ListItemPrefix href='/usuarios'>
                <UsersIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal" >
                Usuarios
              </Typography>
        </ListItem></a>
        <a href='/dashboard'>
        <ListItem>
        <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
               <Typography color="blue-gray" className="mr-auto font-normal">
                Dashboard
              </Typography>
        </ListItem>
        </a> 
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              <ListItemPrefix>
                <CogIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Configuracion
              </Typography>
            </AccordionHeader>
          </ListItem>
          
          <AccordionBody className="py-1">
            <List className="p-0">
              <a href='/roles'>
              <ListItem>
              
                <ListItemPrefix>
                  <UserGroupIcon  className="h-4 w-4" />
                  
                </ListItemPrefix>
                Roles
              </ListItem></a>
            </List>
          </AccordionBody>

        </Accordion>
        
        <Accordion
          open={open === 3}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""}`}
            />
          }
        >

          <ListItem className="p-0" selected={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
              <ListItemPrefix>
                <BuildingStorefrontIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Compras
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <a href='/categorias'><ListItem>
                <ListItemPrefix>
                  <TagIcon  className="h-4 w-4" />
                </ListItemPrefix>
                Categorias
              </ListItem></a>
            </List>
            <List className="p-0">
              <a href='/productos'><ListItem>
                <ListItemPrefix>
                  <RectangleStackIcon  className="h-4 w-4" />
                </ListItemPrefix>
                Productos
              </ListItem></a>
            </List>
            <List className="p-0">
              <a href='/proveedores'><ListItem>
                <ListItemPrefix>
                  <UserGroupIcon  className="h-4 w-4" />
                </ListItemPrefix>
                Proveedores
              </ListItem></a> 
            </List>
            <List className="p-0">
              <a href='/compras'> <ListItem>
                <ListItemPrefix>
                  <ShoppingCartIcon  className="h-4 w-4" />
                </ListItemPrefix>
                Compras
              </ListItem></a>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 4}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 4 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 4}>
            <AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 p-3">
              <ListItemPrefix>
                <CogIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Ventas
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
            <a href='/clientes'>  <ListItem>
                <ListItemPrefix>
                  <UserGroupIcon  className="h-4 w-4" />
                </ListItemPrefix>
                Clientes
              </ListItem></a>
            </List>
            <List className="p-0">
              <a href='/pedidos'> <ListItem>
                <ListItemPrefix>
                  <ClipboardDocumentListIcon  className="h-4 w-4" />
                </ListItemPrefix>
                Pedidos
              </ListItem></a>
            </List>
            <List className="p-0">
             <a href='/ventas'><ListItem>
                <ListItemPrefix>
                  <ShoppingCartIcon  className="h-4 w-4" />
                </ListItemPrefix>
                Ventas
              </ListItem></a> 
            </List>
          </AccordionBody>
        </Accordion>

        <a href="/catalogo"><ListItem>
         <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Salir
        </ListItem></a>
      </List>
    </Card>
        </div>
        </div>
      );

}