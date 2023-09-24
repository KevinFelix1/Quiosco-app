import useKiosco from "../hooks/useKiosco";
import Image from "next/image";

const Categoria = ({categoria}) => {
    const {handleClickCategoria, categoriaActual} = useKiosco();
    const {nombre, icono, id} = categoria;

    return ( 
        <div className={`${categoriaActual?.id === id ? 'bg-amber-400' : ''} flex items-center gap-4 w-full border p-5 hover:bg-amber-500 `}>
            <Image src={`/assets/img/icono_${icono}.svg`} width={69} height={69} alt={`imagen ${nombre}`} className="mr-5"/>
            <button onClick={() => handleClickCategoria(id)} type="button" className="text-2xl font-bold hover:cursor-pointer">
                {nombre}
            </button>
        </div>
     );
}
 
export default Categoria;