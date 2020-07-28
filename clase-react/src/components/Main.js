import React from 'react';
import Card from './Card'
import LastProduct from './LastProduct'
import Categories from './Categories'

function Main(props) {
    return ( 
    <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
    </div>

    <div className="row">
        {/* <!-- Amount of Products in DB --> */}
        <div className="col-md-3 mb-6">
            <Card color="primary" icon="fa-clipboard-list" text="Products in Database" value="135"/>
        </div>

        {/* <!-- $$$ of all products in DB --> */}
        <div className="col-md-3 mb-6">
        <Card color="success" icon="fa-dollar-sign" text="Amount Products" value="$546.456"/>      
        </div>

        {/* <!-- Amount of users in DB --> */}
        <div className="col-md-3 mb-6">
        <Card color="warning" icon="fa-user-check" text="Users quantity" value="38"/>            
        </div>

        <div className="col-md-3 mb-6">
        <Card color="danger" text="Otro" value="$5000"/>            
        </div>
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
    </div>
    );
}

export default Main;