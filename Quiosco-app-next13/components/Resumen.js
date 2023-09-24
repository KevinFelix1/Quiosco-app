'use client';
import useQuiosco from "@/hooks/useQuiosco";
import ResumenProducto from "./ResumenProducto";

const Resumen = () => {

    const {pedido} = useQuiosco();

    return (
        <>
            {pedido?.length === 0 ? (
                <p className="text-center text-2xl">No hay elementos en tu pedido</p>
            ) : (
                pedido?.map(producto => (
                    <ResumenProducto producto={producto} key={producto.id} />
                ))
            )}
        </>
     );
}
 
export default Resumen;