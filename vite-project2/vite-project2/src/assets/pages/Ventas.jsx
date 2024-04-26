import { Aside } from '../components/Aside.jsx'
import { Nav } from '../components/Nav.jsx'

import { Footer } from '../components/Footer.jsx'
import { TabVentas } from '../components/ventas/TabVentas.jsx'


export function Ventas() {
  return (
    <>
    
    <Nav />
    <TabVentas />
    <Aside/>
    <Footer />
   
    </>
  )
}