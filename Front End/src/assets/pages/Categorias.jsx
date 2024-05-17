import { Aside } from '../components/Aside.jsx'
import { Nav } from '../components/Nav.jsx'
import { TabUsuarios } from '../components/usuarios/TabUsuarios.jsx'
import { Footer } from '../components/Footer.jsx'
import { TabCategorias } from '../components/categorias/TabCategorias.jsx'

export function Categorias() {
  return (
    <>
    
    <Nav />
    <TabCategorias/>
    <Aside/>
    <Footer />
   
    </>
  )
}

