import { Aside } from '../components/Aside.jsx'
import { Nav } from '../components/Nav.jsx'

import { Footer } from '../components/Footer.jsx'
import { TabProductos } from '../components/productos/TabProductos.jsx'

export function Productos() {
  return (
    <>
    
    <Nav />
    <TabProductos />
    <Aside/>
    <Footer />
   
    </>
  )
}

