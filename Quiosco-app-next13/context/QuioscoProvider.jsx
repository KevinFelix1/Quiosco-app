'use client'
import { useState, useEffect, createContext} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

const QuioscoContext = createContext();

const QuioscoProvider = ({children, handleChangeModal, setModal, modal}) => {
    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);
    const [nombre, setNombre] = useState('');
    const [total, setTotal] = useState(0);
    const router = useRouter();

    useEffect(() => {
        obtenerCategorias();
    }, []);

    useEffect(() => {
        setCategoriaActual(categorias[0]);
    },[categorias]);

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0);
        setTotal(nuevoTotal);
    }, [pedido]);

    const obtenerCategorias = async () => {
        const {data} = await axios.get('/api/categorias');
        setCategorias(data);
    };

    const handleClickCategoria = id => {
        const categoria = categorias.filter(cat => cat.id === id);
        setCategoriaActual(categoria[0]);
        router.push('/');
    };

    const handleClickProducto = producto => {
        setProducto(producto);
    };

    const handleAgregarPedido = ({categoriaId, ...producto}) => {
        if(pedido.some(productoState => productoState.id === producto.id)) {
            //actualizar la cantidad
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState);
            setPedido(pedidoActualizado);
            toast.success('Pedido Actualizado');
        } else {
            setPedido([...pedido, producto]);
            toast.success('Agregado al pedido');
        };
        setModal(false);
    };

    const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id);
        setProducto(productoActualizar[0]);
        setModal(!modal);
    };

    const handleEliminarProducto = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id);
        setPedido(pedidoActualizado);
    };

    const colocarOrden = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/ordenes', {
                pedido, nombre, total, fecha: Date.now().toString()
            });

            //reiniciar app
            setCategoriaActual(categorias[0]);
            setPedido([]);
            setNombre('');
            setTotal(0);
            toast.success('Pedido Realizado Correctamente');
            setTimeout(() => {
                router.push('/')
            }, 2000);
        } catch (error) {
            toast.error('Ups! algo salio mal..');
        }
    }

    return (
        <QuioscoContext.Provider value={{
            categorias,
            categoriaActual,
            pedido,
            producto,
            handleClickCategoria,
            handleClickProducto,
            handleAgregarPedido,
            handleEditarCantidad,
            handleEliminarProducto,
            handleChangeModal,
            nombre,
            setNombre,
            total,
            colocarOrden
            }}>
            {children}
        </QuioscoContext.Provider>
    );
};

export {
    QuioscoProvider
}

export default QuioscoContext;