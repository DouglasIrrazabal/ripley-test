import React, { useState, useEffect  } from 'react'
import { ProductItem } from './components/ProductItem';

export const RipleyApp = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const data = await fetch('https://simple.ripley.cl/api/v2/products?format=json&partNumbers=2000379450763');
        const productData = await data.json();
        setProduct(productData);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mt-4">
                    {
                        product.map(item => (
                            <ProductItem 
                                key={item.uniqueID}
                                {...item}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
