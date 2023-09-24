'use client';
import useQuiosco from "@/hooks/useQuiosco";
import Producto from "@/components/Producto";

const Main = () => {
    const { categoriaActual } = useQuiosco();
    
    return ( 
    <>
      <h1 className='text-4xl font-black'>{categoriaActual?.nombre}</h1>
      <p className='text-2xl my-10'>
        Elige y personaliza tu pedido a continuacion
      </p>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {categoriaActual?.productos?.map(producto => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </>
     );
}
 
export default Main;