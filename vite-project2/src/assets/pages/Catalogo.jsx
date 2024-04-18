import { NavUser } from '../components/NavUser';
import { Carousell } from '../components/Carousel';
import { Tarjeta } from '../components/TarjetaProducto';
import { BotonCarrito } from '../components/BotonCarrito';

export function Catalogo() {
  return (
    <>
      <NavUser />
      <Carousell />

        <div className="container flex flex-wrap px-5 mt-10 justify-center gap-0">
        <div className="col-span-3 hidden lg:block">
          <div className="mt-24 space-y-2 lg:mt-0">
                <div class="px-2 lg:px-0">
                    <div class="card border p-2 md:border-none">
                            <div>
                                <div class="px-2" id="headlessui-disclosure-panel-9" data-headlessui-state="open">
                                    <div>
                                        <div><label class="mt-2 flex"><input class="mr-2 h-4 w-4 rounded-full checked:bg-secondary hover:bg-slate-100 checked:hover:bg-primary focus:ring-0" type="checkbox"/><div class="leading-tight"><div class="text-sm font-semibold"><span>Bogotá</span> <span class="text-gray-400">(588)</span></div></div></label></div>
                                        <div><label class="mt-2 flex"><input class="mr-2 h-4 w-4 rounded-full checked:bg-secondary hover:bg-slate-100 checked:hover:bg-primary focus:ring-0" type="checkbox"/><div class="leading-tight"><div class="text-sm font-semibold"><span>Medellín</span> <span class="text-gray-400">(97)</span></div></div></label></div>
                                        <div><label class="mt-2 flex"><input class="mr-2 h-4 w-4 rounded-full checked:bg-secondary hover:bg-slate-100 checked:hover:bg-primary focus:ring-0" type="checkbox"/><div class="leading-tight"><div class="text-sm font-semibold"><span>Cucuta</span> <span class="text-gray-400">(79)</span></div></div></label></div>
                                        <div><label class="mt-2 flex"><input class="mr-2 h-4 w-4 rounded-full checked:bg-secondary hover:bg-slate-100 checked:hover:bg-primary focus:ring-0" type="checkbox"/><div class="leading-tight"><div class="text-sm font-semibold"><span>Giron</span> <span class="text-gray-400">(56)</span></div></div></label></div>
                                        <div><label class="mt-2 flex"><input class="mr-2 h-4 w-4 rounded-full checked:bg-secondary hover:bg-slate-100 checked:hover:bg-primary focus:ring-0" type="checkbox"/><div class="leading-tight"><div class="text-sm font-semibold"><span>Barrancabermeja</span> <span class="text-gray-400">(50)</span></div></div></label></div>
                                        <div><label class="mt-2 flex"><input class="mr-2 h-4 w-4 rounded-full checked:bg-secondary hover:bg-slate-100 checked:hover:bg-primary focus:ring-0" type="checkbox"/><div class="leading-tight"><div class="text-sm font-semibold"><span>Cali</span> <span class="text-gray-400">(45)</span></div></div></label></div>
                                        <div><label class="mt-2 flex"><input class="mr-2 h-4 w-4 rounded-full checked:bg-secondary hover:bg-slate-100 checked:hover:bg-primary focus:ring-0" type="checkbox"/><div class="leading-tight"><div class="text-sm font-semibold"><span>Tulua</span> <span class="text-gray-400">(38)</span></div></div></label></div>
                                        <div><label class="mt-2 flex"><input class="mr-2 h-4 w-4 rounded-full checked:bg-secondary hover:bg-slate-100 checked:hover:bg-primary focus:ring-0" type="checkbox"/><div class="leading-tight"><div class="text-sm font-semibold"><span>Pereira</span> <span class="text-gray-400">(26)</span></div></div></label></div>
                                        <div><label class="mt-2 flex"><input class="mr-2 h-4 w-4 rounded-full checked:bg-secondary hover:bg-slate-100 checked:hover:bg-primary focus:ring-0" type="checkbox"/><div class="leading-tight"><div class="text-sm font-semibold"><span>Tunja</span> <span class="text-gray-400">(22)</span></div></div></label></div>
                                        <div><label class="mt-2 flex"><input class="mr-2 h-4 w-4 rounded-full checked:bg-secondary hover:bg-slate-100 checked:hover:bg-primary focus:ring-0" type="checkbox"/><div class="leading-tight"><div class="text-sm font-semibold"><span>Funza</span> <span class="text-gray-400">(18)</span></div></div></label></div>
                                    </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
            <Tarjeta img={"/images/batri-b10.jpg"} textoBotonCarrito={"Agregar al carrito"}nombre={"B-10"} descripcion={"Adifonos de marca batri con cable plano"} />
            <Tarjeta img={"/images/cargadorBatri.webp"} textoBotonCarrito={"Agregar al carrito"}  nombre={"Cargador CR01"} descripcion={"Cargador de batri 3A con regulador de voltaje"} />
            <Tarjeta img={"/images/images.jpg"} textoBotonCarrito={"Agregar al carrito"} nombre={"Vidrio para celular"} descripcion={"Vidrio protecto de pantalla"} />
           
        
        </div>
            
        <BotonCarrito/>
        </>
    )
}