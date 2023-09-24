'use client';
import { useEffect, useCallback } from "react";
import useQuiosco from "@/hooks/useQuiosco";
import { formatearDinero } from "@/helpers";

const Total = () => {

    const {pedido, nombre, setNombre, colocarOrden, total} = useQuiosco();

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === '' || nombre.length < 3;
    }, [pedido, nombre]);

    useEffect(() => {
        comprobarPedido();
    }, [pedido, comprobarPedido])


    return ( 
        <form onSubmit={colocarOrden}>
            <div>
                <label htmlFor="nombre" className="block uppercase text-slate-800 font-bold text-xl">
                    Nombre
                </label>
                <input id="nombre" type="text" className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md" defaultValue={nombre} onChange={e => setNombre(e.target.value)}/>
            </div>
            <div className="mt-10">
                <p className="text-2xl">Total a pagar:{' '}<span className="font-bold">{formatearDinero(total)}</span></p>
            </div>
            <div className="mt-5">
                <input type="submit" disabled={comprobarPedido()} className={`${comprobarPedido() ? 'bg-gray-300 text-gray-400' : 'bg-indigo-600 hover:bg-indigo-800 text-white cursor-pointer'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-center`} value="Confirmar Pedido"/>
            </div>
        </form>
     );
}
 
export default Total;