import React from 'react';

function ProductRow(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.category}</td>
            <td>{props.price}</td>
            <td>{props.type}</td>
            <td>{props.weight}</td>

        </tr>
    );
}

export default ProductRow;