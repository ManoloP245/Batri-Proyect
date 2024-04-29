import { Roles } from './assets/pages/Roles'
import { Usuarios } from './assets/pages/Usuarios'
import { Dashboard } from './assets/pages/Dashboard'
import { Categorias } from './assets/pages/Categorias'
import { Route, Routes } from 'react-router-dom'
import { Productos } from './assets/pages/Productos'
import { Proveedores } from './assets/pages/Proveedores'
import { Compras } from './assets/pages/Compras'
import Login from './assets/pages/Login'
import { Catalogo } from './assets/pages/Catalogo'
import {Ventas} from './assets/pages/Ventas'
import { Clientes } from './assets/pages/Clientes'
import Perfil from './assets/pages/Perfil'
import { Pedidos } from './assets/pages/Pedidos'

function App() {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Catalogo />} /> 
        <Route path="/usuarios" element={<Usuarios />} /> 
        <Route path="/roles" element={<Roles />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/categorias" element={<Categorias />} /> 
        <Route path="/productos" element={<Productos />} /> 
        <Route path="/proveedores" element={<Proveedores />} /> 
        <Route path="/compras"  element={<Compras />} />
        <Route path="/login" element={<Login />} /> 
        
        <Route path="/ventas"  element={<Ventas />} /> 
        <Route path="/clientes"  element={<Clientes />} /> 
        <Route path="/pedidos"  element={<Pedidos />} /> 
        <Route path="/perfil"  element={<Perfil />} /> 

      </Routes>
    </>
  )
}

export default App
