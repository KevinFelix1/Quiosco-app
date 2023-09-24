'use client'
import useSWR from "swr";
import axios from "axios";
import Orden from "@/components/Orden";

const AdminPage  = () => {

    const fetcher = () => axios('/api/ordenes').then(datos => datos.data);
    const { data, error, isLoading } = useSWR('/api/ordenes`', fetcher, {refreshInterval: 100})
    if(isLoading) {
        return (
            <p>Cargando Ordenes...</p>
        )
    }
    return ( 
        <div>
            <h1 className='text-4xl font-black'>Panel de administración</h1>
            <p className='text-2xl my-10'>
                Administra las ordenes
            </p>
            {data && data?.length ? data.map(orden => (
                <Orden key={orden.id} orden={orden} />
            )) : (
                <p>Aun no existen ordenes para mostrar</p>
            )}
        </div>
     );
}
 
export default AdminPage;