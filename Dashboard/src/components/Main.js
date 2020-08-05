import React, { Component } from 'react';
import Card from './Card'
import LastProduct from './LastProduct'
import Categories from './Categories'
import AllProducts from './AllProducts';



class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            cards: []
        }
    }

    
    componentDidMount(){
        fetch("http://localhost:3000/api/dashboard/widgets")
            .then( respuesta => respuesta.json())
            .then( ({data}) => {
                // console.log(data)
                this.setState({
                    cards: data
                })
            })
    }

    render() {
        return (
            <div className="container-fluid" >
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>

                <div className="row mb-3 justify-content-between">
                    {/* <!-- Amount of Products in DB --> */}
                    { 
                        this.state.cards.map( (card,i) => {
                            return (
                                <div key={i} className="col">
                                  <Card {...card} />
                                </div>
                            )
                        })
                    }

                </div>

                <div className="row">
                    {/* <!-- Last Product in DB --> */}
                    <div className="col-lg-6 mb-4">
                        <LastProduct />
                    </div>

                    {/* <!-- Categories in DB --> */}
                    <div className="col-lg-6 mb-4">
                        <Categories />
                    </div>
                </div>

                <AllProducts />


            </div>
        );
    };
}

export default Main;