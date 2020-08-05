import React, { Component } from 'react';
import Category from './Category';


class Categories extends Component {

    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/dashboard/categories")
            .then(respuesta => respuesta.json())
            .then(({ data }) => {
                this.setState({
                    items: data
                })
                console.log(data)
            })
    }

    render() {
        return (
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base ({this.state.items.length})</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        {
                            this.state.items.map((item,i) => {
                                return (
                                    <div key={i} className="col-lg-6 mb-4">
                                        <Category>
                                            {item.category} <span class="font-weight-light">({item.products} Productos)</span>
                                        </Category>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;