import React,  {createContext, useState} from "react";


//crear el contexto
export const CartContext = createContext();

//proveedor del contexto
export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

//agregar al carrito
    const agregarAlCarrito = (producto) => {
        setCarrito((prevCarrito) => {
            const existe = prevCarrito.find((item) => item.id === producto.id);
            if (existe) {
                //si ya existe, aumentar la cantidad
                return prevCarrito.map((item) =>
                    item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
                );
            } //si no existe, agregar al carrito
            return [...prevCarrito, { ...producto, cantidad: 1 }];
        });
    };

    //eliminar del carrito
    const eliminarDelCarrito = (productoId) => {
        setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== productoId));
    };

    //vaciar carrito
    const vaciarCarrito = () => {
        setCarrito([]);
    };

    // totales útiles
    const totalItems = carrito.reduce((acc, item) => acc + (item.cantidad || 0), 0);
    const totalPrecio = carrito.reduce((acc, item) => acc + (item.cantidad || 0) * (item.precio || 0), 0);

    return (
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            eliminarDelCarrito,
            vaciarCarrito,
            totalItems,
            totalPrecio
        }}>
            {children}
        </CartContext.Provider>
    );
};
 