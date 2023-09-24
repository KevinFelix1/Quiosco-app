import Image from "next/image";
import useKiosco from "../hooks/useKiosco";
import Categoria from "./Categoria";

export default function Sidebar() {
    const {categorias} = useKiosco();
    return (
        <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5 h-screen'>
            <Image width={300} height={100} src="/assets/img/logo.svg" alt='imagen logotipo' priority='true'/>
            <nav className="mt-10">
                {categorias.map(categoria => (
                    <Categoria 
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))}
            </nav>
        </aside>
    ) 
}