import React from 'react';
import Category from './Category';


function Categories(props) {
    return (
        <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <Category>
                        Categorie 01
                    </Category>
                </div>
                <div className="col-lg-6 mb-4">
                    <Category>
                        Categorie 02
                    </Category>
                </div>
                <div className="col-lg-6 mb-4">
                    <Category>
                        Categorie 03
                    </Category>
                </div>
                <div className="col-lg-6 mb-4">
                    <Category>
                        Categorie 04
                    </Category>
                </div>
                <div className="col-lg-6 mb-4">
                    <Category>
                        Categorie 05
                    </Category>
                </div>
                <div className="col-lg-6 mb-4">
                    <Category>
                        Categorie 06
                    </Category>
                </div>
                
            </div>
        </div>
    </div>
    );
}

export default Categories;