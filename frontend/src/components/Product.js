import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'


const Product = () => {
    const [product, setProduct] = useState([]);
    const [ sort, setSort] = useState('')
    const sortItem = ['Price: Low to High','Price: High to Low','Newest Arrivalsk']

    const dataCollector = async () => {
        const productList = await axios.get(`http://localhost:4000/product`);
        const refinedArray = productList.data.data.products;
        setProduct(refinedArray);
    }
    useEffect(() => {
        dataCollector();
        console.log(product);
    }, [])
    const meramann = () => {
        console.log(product);
        product.map(el => console.log(el))
    }
    const changeSort = ()=>{

    }
    return (
        <>

            <div className='drop-down'>
                <div class="btn-group drop-down-child">
                    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort by
                    </button>
                    <div class="dropdown-menu">     
                    {
                        sortItem.map(el=>(
                            <button onClick={changeSort}  class="dropdown-item" href="#">{el}</button>

                        ))
                    }                  
                    </div>
                </div>
            </div>


            <div class="row" style={{ marginTop: "1rem" }} >
                {
                    product.map((item) => (
                        <div className="col-lg-3 product-card" style={{ marginTop: "2rem" }} >

                            <div className="card shadow-sm mx-auto" style={{ width: "18rem" }} >
                                <img src={ item.image} className="card-img-top" alt="item image" />
                                <div className="card-body">
                                    <h5 className="card-title">  {item.name}   </h5>
                                    <p className="card-text"> {item.description} </p>
                                    <h5 className="card-title">$ {item.price} </h5>
                                    <a href="#" className="btn btn-success btn-sm">Edit</a>
                                    <a href="#" className="btn btn-danger btn-sm delete-button">Delete</a>

                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>

        </>



    )
}

export default Product