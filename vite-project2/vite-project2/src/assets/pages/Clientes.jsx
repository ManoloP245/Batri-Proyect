import { Aside } from '../components/Aside.jsx'
import { Nav } from '../components/Nav.jsx'

import { Footer } from '../components/Footer.jsx'
import { TabClientes } from '../components/clientes/TabClientes.jsx'

export function Clientes() {
  return (
    <>
    
    <Nav />
    <TabClientes/>
    <Aside/>
    <Footer />
   
    </>
  )
}

