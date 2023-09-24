import Total from "@/components/Total";

export const metadata = {
    title: 'Coffe - Total',
}

const TotalPage = () => {
    return ( 
        <div>
            <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
            <p className="text-2xl my-10">Confirma tu pedido a continuación</p>
            <Total />
        </div>
     );
}
 
export default TotalPage;