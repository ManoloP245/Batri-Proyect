import { Aside } from '../components/Aside.jsx'
import { Nav } from '../components/Nav.jsx'

import { Footer } from '../components/Footer.jsx'
import { TabVentas } from '../components/Tabs/TabVentas.jsx'


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