import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
    const { coffee, onClickingDelete, onClickingEdit } = props;
    return (
        <>

            <h1>{coffee.name}</h1>
            <p>Name: {coffee.name}</p>
            <p>Description: {coffee.description}</p>
            <p>Price: {coffee.price}</p>
            <p>Quantity: {coffee.qty}</p>
            <button onClick={props.onClickingEdit}>Update Roast</button>
            <button onClick={() => onClickingDelete(coffee.id)}>Delete Roast </button>
            <hr />

        </>

    );
}
ItemDetail.propTypes = {
    coffee: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func
};

export default ItemDetail;