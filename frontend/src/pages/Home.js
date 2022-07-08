import React, { useEffect } from 'react'
import { Row , Col } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom'
import categories from '../categories';
import "./Home.css";
import axios from '../axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateProducts } from '../features/productSlice';
import ProductPrev from '../components/ProductPrev';

const Home = () => {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const lastProducts = products.slice(0,12)

    useEffect(()=>{
        axios.get('/products').then(({data})=> dispatch(updateProducts(data)));
    },[])
  return (
    <div className = "main">
        <img src="https://res.cloudinary.com/learn-code-10/image/upload/v1654093280/xkia6f13xxlk5xvvb5ed.png" className="home-banner" />
       
      <div className="featured-products-container containermt-4 ">
        <h2>Last products</h2>
        <div className="d-flex justify-content-centre flex-wrap">
            {lastProducts.map((product)=>(
                <ProductPrev {...product}/>
            ))}
        </div>
        <div>
        <Link to="/category/all" style={{textAlign:"right", display:"block",textDecoration: "none" }}>See More{">>"}</Link>
      </div>
      
      </div>
      <div className="sale__banner--container mt-4">
               
                <img src="https://res.cloudinary.com/learn-code-10/image/upload/v1653947013/yqajnhqf7usk56zkwqi5.png" />
            </div>
            <div className="recent-products-container container mt-4">
                <h2>Categories</h2>
                <Row>
                    {categories.map((category) => (
                        <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className="category-tile">
                                    {category.name}
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Home