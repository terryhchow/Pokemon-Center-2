import React from 'react';
import { Link } from "react-router-dom";

const ResultItem = ({ handleClick, product }) => (
    <Link 
        onClick={handleClick} 
        to={`/products/${product.id}`} 
        className='result-item-link'>
        <div className="result-item">{product.name}</div>
    </Link>
);

export default ResultItem;
