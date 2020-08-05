import React, { Component } from 'react';
// import producto from '../assets/images/product_dummy.svg'

class LastProduct extends Component {

    constructor() {
        super();
        this.state = {
            product: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/dashboard/lastProduct")
            .then(respuesta => respuesta.json())
            .then(({ data }) => {
                this.setState({
                    product: data
                })
            })
    }

    render() {
        return (

            this.state.product.map((prod, i) => {

                return (
                    <div key={i} className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '25rem' }} src={prod.image} alt={prod.name} />
                            </div>
                            <h6>{prod.name}</h6>
                            <h6>{prod.category_name}</h6>
                            <a target="_blank" rel="noopener noreferrer" href={`localhost:3000/product/${prod.category_id}/detail/${prod.id}`}>View product detail</a>
                        </div>
                    </div>
                )
            })


        );
    }
}

export default LastProduct;