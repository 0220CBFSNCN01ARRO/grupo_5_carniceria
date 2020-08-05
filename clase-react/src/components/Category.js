import React from 'react';
import "../assets/css/category.css"

function Category({children}) {
    return (
        <div className="card bg-info text-white shadow">
			<div className="card-body font-weight-bold">
				{children}
			</div>
		</div>
    );
}

export default Category;