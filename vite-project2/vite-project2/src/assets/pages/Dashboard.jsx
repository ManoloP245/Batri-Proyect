import { Aside } from '../components/Aside.jsx'
import { Nav } from '../components/Nav.jsx'
import { Footer } from '../components/Footer.jsx'
import { TabDashboard } from '../components/dashboard/TabDashboard.jsx'

export function Dashboard() {
  return (
    <>
    
    <Nav />
    <TabDashboard/>
    <Aside/>
    <Footer />
   
    </>
  )
}