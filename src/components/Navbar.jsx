import { useState } from "react";
import CardWidget from "./CardWidget";
import icono from "../assets/img/159294.svg"

const Navbar = () => {
    const[desplegarProdu, esconderProdu] = useState(false);
    return ( <nav className="bg-slate-950 p-3">
        <div className="container flex mx-auto justify-between items-center">
            <div className="flex justify-items-start items-center">   
               <img src= {icono} alt="montaña" />
                <h1 className="text-white text-2xl font-serif">Northern Mountain</h1>
            </div>
            <div>
                <ul className="flex justify-end space-x-6 text-white" >
                    <li><button className="w-28 bg-slate-50  text-black rounded-md border-solid border-4 border-slate-50 hover:underline" onClick={() => esconderProdu(!desplegarProdu)}>Productos</button>
                        {desplegarProdu &&(
                            <ul className="absolute w-28 bg-slate-50  text-black rounded-md border-solid border-4 border-slate-50 hover:underline ">
                                <li> <button className="w-28 bg-slate-50  text-black rounded-md border-solid border-4 border-slate-50 hover:underline item-center">Remera </button></li>
                                <li> <button className="w-28 bg-slate-50  text-black rounded-md border-solid border-4 border-slate-50 hover:underline item-center">Gorra </button></li>
                                <li> <button className="w-28 bg-slate-50  text-black rounded-md border-solid border-4 border-slate-50 hover:underline item-center">Pantalon </button></li>
                                
                            </ul>

                        )}
                    </li>
                    <li> <button className="w-28 bg-slate-50  text-black rounded-md border-solid border-4 border-slate-50 hover:underline item-center">Contacto </button></li>
                    <li> <button className="w-20 bg-slate-50 text-black rounded-md border-solid border-4 border-slate-50 hover:underline item-center"><CardWidget/> </button></li>
                </ul>
            </div>
        </div>

    </nav> );
}
 
export default Navbar;