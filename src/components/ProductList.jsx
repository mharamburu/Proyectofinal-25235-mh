import React, { useEffect, useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { CartContext } from './CartContext';


const ProductList = ({ category = null }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {agregarAlCarrito} = React.useContext(CartContext);
  const [barraDebusqueda, setBarraDeBusqueda] = useState("");


    useEffect(() => 
    {
    let url = 'https://fakestoreapi.com/products';
    if (category) 
    {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [category]);


    const handleAgregarAlCarrito = (product) => {
    alert(`Producto ${product.title} agregado al carrito`);
  };



  if (loading) {
    return <div>Loading...</div>;
  }  

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(barraDebusqueda.toLowerCase()) ||
    product.description.toLowerCase().includes(barraDebusqueda.toLowerCase())

  );
  
  return (
    <>
      <Form.Control
        type="text"
        placeholder="Buscar productos..."
        value={barraDebusqueda}
        onChange={(e) => setBarraDeBusqueda(e.target.value)}
        className="mb-4"
      />
      <Row>
        {filteredProducts.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <ProductCard product={product} agregarAlCarrito={handleAgregarAlCarrito} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductList;
