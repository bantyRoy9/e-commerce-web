import React from 'react'

const ProductDetail = () => {
  return (
    <>
      <div class="row" style={{ margin:'0px auto'}} >
                 <div className="col-lg-3 product-card" style={{ marginTop: "2rem" }} >

                            <div className="card shadow-sm mx-auto" style={{ width: "18rem" }} >
                                <img src='' className="card-img-top" alt="item image" style={{width:"100%", height:"200px"}} />
                                <div className="card-body">
                                    <h5 className="card-title">  item.name   </h5>
                                    <p className="card-text" style={{height:"50px" ,overflow: "hidden"}} > item.description </p>
                                    <h5 className="card-title">item.price </h5>
                                    <a href="/product/edit" className="btn btn-success btn-sm">Add to Card</a>
                                    <a href="#" className="btn btn-danger btn-sm delete-button">Delete</a>

                                </div>
                            </div>
                        </div>
            </div>
    </>
  )
}

export default ProductDetail