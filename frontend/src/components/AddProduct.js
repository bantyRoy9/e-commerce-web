import React, { useState } from 'react'
import axios from 'axios';

const AddProduct = () => {
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const  [desc,setDesc]=useState("");
    const submitHandler=async(e)=>{
        e.preventDefault();

        await axios.post('http://localhost:4000/products',{name,price,desc});
    }
  return (
    <div>
      <form action="" onSubmit={submitHandler}>

<div class="row">
    <div class="col-md-5 mx-auto">
        <div class="card p-3 shadow-sm m-2">
            <h1 class="display-6">Add Product</h1>
            <form action="" method="post">
                <div class="mb-3">
                    <label class="form-label" for="product name">Product Name</label>
                    {/* <input class="form-control" type="text" name="username" id="username" placeholder="Username" /> */}
                    <input type="text"
                        name="name"
                        id="Name"
                        placeholder='Product Name'
                        class="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)} required />
                </div>
                <div class="mb-3">
                    <label class="form-label" for="price">Price</label>
                    {/* <input class="form-control" type="password" name="password" id="password" placeholder="Password" /> */}
                    <input type="text"
                        name="price"
                        id="price"
                        value={price}
                        placeholder="Price"
                        class="form-control"
                        onChange={(e) => setPrice(e.target.value)}
                        required />
                </div> 
                <div class="mb-3">
                    <label class="form-label" for="description">Description</label>
                    {/* <input class="form-control" type="password" name="password" id="password" placeholder="Password" /> */}
                    <input type="text"
                        name="desc"
                        id="desc"
                        value={desc}
                        class="form-control"
                        placeholder='Description'
                        onChange={(e) => setDesc(e.target.value)}
                        required />
                </div>
                <button type="submit" class="btn btn-success btn-block btn-small">Add Product</button>
            </form>
        </div>
    </div>
</div>


</form>


    </div>
  )
}

export default AddProduct