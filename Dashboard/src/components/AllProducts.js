import React, { Component } from 'react';
import ProductRow from './ProductRow';

class  AllProducts extends Component {
    constructor (){
        super();
        this.state = {
            products: [],
            cantidad: 0, 
        }
    }
    componentDidMount (){
        fetch('http://localhost:3000/api/dashboard/allProducts')
        .then (res => res.json())
        .then ((respuesta) =>{
            console.log (respuesta);
            this.setState ({
                products: respuesta.data,
                cantidad: respuesta.meta.totalItems
            });
        })
    }
    render (){
    return (

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">All the products in the Database ({
                this.state.cantidad})
                </h6>
            </div>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Categories</th>
                                    <th>Price</th>
                                    <th>Type</th>
                                    <th>Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.products.map((product, i)=> (
                                    <ProductRow key ={i} {...product} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
    }
}

export default AllProducts;