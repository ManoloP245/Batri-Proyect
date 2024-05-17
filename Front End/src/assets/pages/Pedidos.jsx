import { Aside } from '../components/Aside.jsx'
import { Nav } from '../components/Nav.jsx'

import { Footer } from '../components/Footer.jsx'
import { TabPedidos } from '../components/pedidos/TabPedidos.jsx'

export function Pedidos() {
  return (
    <>
    
    <Nav />
    <TabPedidos/>
    <Aside/>
    <Footer />
   
    </>
  )
}

