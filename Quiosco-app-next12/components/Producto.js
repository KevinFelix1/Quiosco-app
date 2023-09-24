import useKiosco from '../hooks/useKiosco';
import Image from 'next/image';
import { formatearDinero } from '../helpers';

const Producto = ({producto}) => {
    const {handleClickProducto, handleChangeModal} = useKiosco();
    const { nombre, imagen, precio } = producto;
    return ( 
        <div className='border p-3'>
            <Image src={`/assets/img/${imagen}.jpg`} alt={`imagen platillo ${nombre}`} width={400} height={500}/>
            <div className='p-5'>
                <h3 className='text-2xl font-bold'>{nombre}</h3>
                <p className='mt-5 font-black text-4xl text-amber-500'>{formatearDinero(precio)}</p>

                <button type='button' className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 uppercase font-bold p-3' onClick={() => {
                    handleClickProducto(producto),
                    handleChangeModal()
                }}>
                    Agregar
                </button>
            </div>

        </div>
     );
}
 
export default Producto;