import Resumen from "@/components/Resumen";

export const metadata = {
    title: 'Coffe - Resumen',
}

const ResumenPage = () => {
    return ( 
        <div>
            <h1 className="text-4xl font-black">Resumen</h1>
            <p className="text-2xl my-10">Reviza tu pedido</p>
            <Resumen />
        </div>
     );
}
 
export default ResumenPage;