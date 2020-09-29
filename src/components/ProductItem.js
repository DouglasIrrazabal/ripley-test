import React from 'react'

export const ProductItem = ({
    name,
    partNumber,
}) => {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{partNumber}</h1>
        </div>
    )
}
