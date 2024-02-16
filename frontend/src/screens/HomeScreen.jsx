import React from 'react'
import { useEffect ,useState } from 'react';
import { Row,Col } from 'react-bootstrap'
import axios from 'axios';
import Product from '../components/Product';


const HomeScreen = () => {

  const [products,setProducts] = useState([]);

  useEffect(()=>
  {
    const fetchProducts = async () =>{
      const {data} =  await axios.get('/api/products');
      setProducts(data);
    };

    fetchProducts();
  },[]);

  return (
    <>
    <h1>Latest products</h1>
    <Row>
        {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                {/* <h1>{product.name}</h1> ....using below method to pass props in product component*/}
                <Product product={product} /> 
            </Col>
        ))}
    </Row>
      
    </>
  )
}

export default HomeScreen
