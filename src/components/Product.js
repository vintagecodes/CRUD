import React, {Component} from 'react';

export default class Product extends Component{

    constructor(props){
        super(props);
        this.state={
            products:[],
            productToUpdate:{}
        }
        this.product={}; //holds data in state

    }



    componentDidMount(){

        fetch('http://localhost:9000/products')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({products:data});
        })
    }

    readValue(property,value){
        this.product[property]=value;
    }



    getProductUpdate(id,index){

        let product = this.state.products[index];
        this.setState({productToUpdate:product});
    }
    createProduct(){
        console.log(this.product);
        fetch("http://localhost:9000/products",{
            method:"POST",
            body:JSON.stringify(this.product),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(response=>response.json())
        .then((data)=>{
            let tempProducts=this.state.products;
            tempProducts.push(data.product);
            this.setState({products:tempProducts})

        })
    }


    deleteProduct(id,index){

        fetch("http://localhost:9000/products/"+id,{
            method:"DELETE"
        })
        .then(response=>response.json())
        .then((data)=>{
            console.log(data);

            let tempProducts=this.state.products;
            tempProducts.splice(index,1);
            this.setState({products:tempProducts})

        })
    }








    render(){
        return(
        <div className="container products">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Update Product</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                                </div>
                                <div className="modal-body">
                                   
                                        <input type="text" className="form-control" placeholder="Name" defaultValue={this.state.productToUpdate.name} onChange={(event)=>{this.readValue("name",event.target.value)}}/>
                                        <input type="number" className="form-control" placeholder="Price" defaultValue={this.state.productToUpdate.price} onChange={(event)=>{this.readValue("price",event.target.value)}}/>
                                        <input type="text" className="form-control" placeholder="Color" defaultValue={this.state.productToUpdate.color} onChange={(event)=>{this.readValue("color",event.target.value)}}/>
                                       
                                        
                                        <input type="text" className="form-control" placeholder="Category" defaultValue={this.state.productToUpdate.category} onChange={(event)=>{this.readValue("category",event.target.value)}}/>
                                        <input type="text" className="form-control" placeholder="Rating" defaultValue={this.state.productToUpdate.rating} onChange={(event)=>{this.readValue("rating",event.target.value)}}/>
                                        <input type="text" className="form-control" placeholder="Description" defaultValue={this.state.productToUpdate.desc} onChange={(event)=>{this.readValue("desc",event.target.value)}}/>
                                        <button className="btn btn-primary" onClick={()=>{this.createProduct()}}>Update</button>
                                  


                                
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
            <div>
            <h1>All Products</h1>
            <div className="form_container">
                <input type="text" className="form-control" placeholder="Name" onChange={(event)=>{this.readValue("name",event.target.value)}}/>
                <input type="number" className="form-control" placeholder="Price" onChange={(event)=>{this.readValue("price",event.target.value)}}/>
                <input type="text" className="form-control" placeholder="Color" onChange={(event)=>{this.readValue("color",event.target.value)}}/>
                </div>
                <div className="form_container">
                <input type="text" className="form-control" placeholder="Category" onChange={(event)=>{this.readValue("category",event.target.value)}}/>
                <input type="text" className="form-control" placeholder="Rating" onChange={(event)=>{this.readValue("rating",event.target.value)}}/>
                <input type="text" className="form-control" placeholder="Description" onChange={(event)=>{this.readValue("desc",event.target.value)}}/>
                <button className="btn btn-primary" onClick={()=>{this.createProduct()}}>Create</button>
                </div>
            </div>


            
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Color</th>
                    <th>Category</th>
                    <th>Ratings</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.state.products.map((product,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.color}</td>
                                    <td>{product.category}</td>
                                    <td>{product.rating}</td>
                                    <td>
                                        <button className="btn btn-success" onClick={()=>{this.getProductUpdate(product._id,index)}}>Update</button>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <button className="btn btn-danger" onClick={()=>{this.deleteProduct(product._id,index)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        )
    }
}