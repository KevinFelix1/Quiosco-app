'use client'
import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";
import Categoria from "./Categoria";

export default function Sidebar() {
    const { categorias } = useQuiosco();
    return (
        <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5 h-screen'>
            <div className="w-full flex justify-center pt-5">
                <Image width={150} height={100} src="/assets/img/logo.svg" alt='imagen logotipo' priority='true'/>
            </div>
            <nav className="mt-5">
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