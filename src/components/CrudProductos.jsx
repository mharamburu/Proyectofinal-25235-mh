import React from 'react';
import { Table, button,  } from 'react-bootstrap';

const CrudProductos = () => {
  return <div>CrudProductos Component</div>;
};


//abrir el modal
const handleShow = (producto) => {
    setShow(true);
    if (producto) {
        setForm({
            ...producto,
            price: Number(producto.price),
            stock: Number(producto.stock),
        });
        setEditId(producto.id);
        
    }



//crear o editar
const handleSubmit = (e) => {
    e.preventDefault();
    const productoData = {
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
    };

    const method = editId ? 'PUT' : 'POST';
    const url = editId ? `${API_URL}/${editId}` : API_URL;

    ///https://fakestoreapi.com/products
    //method put

fetch(url, {
        method,
        headers: {  'Content-Type': 'application/json' },
        body: JSON.stringify(productoData),
    })
    .then((res) => {
        if (!res.ok) {IF    
    }
         res.json())
    .then((data) 
<thead>
    <tr>
        <th>Título</th>
        <th>Descripción</th>
        <th>Precio</th>
        <th>Stock</th>
        <th>Imagen</th>
        <th>Acciones</th>
    </tr>
</thead>
<tbody>
    {productos.map((prod) => (
      <tr key={prod.id}>
        <td>{prod.title}</td>
        <td>{prod.description}</td>
        <td>${Number({prod.price).toFixed(2)}</td>
        <td>{prod.stock</td>
        <td>
        {/* Add any additional content for this cell here */}
      </tr>
    ))}
  </tbody>


            <img
                src={prod.image}
                alt={prod.title}
                width= '50px', height: '50px', objectFit: 'cover' }}
            />


<td>
    <Button
        size="sm"
        variant="warning"
        onClick={() => handleShow(prod)}
     >
        Editar
    </Button> {" "}
     <Button
     size="sm"
        variant="danger"
        onClick={() => eliminarProducto(prod.id)}
            >   </Button>
</td>
</tr>

<modal show={show} onHide={handleClose}>