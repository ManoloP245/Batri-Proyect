import { Aside } from '../components/Aside.jsx'
import { Nav } from '../components/Nav.jsx'

import { Footer } from '../components/Footer.jsx'
import { TabProveedores } from '../components/Tabs/TabProveedores.jsx'

export function Proveedores() {
  return (
    <>
    
    <Nav />
    <TabProveedores />
    <Aside/>
    <Footer />
   
    </>
  )
}

