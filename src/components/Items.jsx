import React from 'react';
import PropTypes from 'prop-types';

const Items = (props) => {
    const styleblock = {
      border: '3px solid black',
      justifyContent: 'evenly-spaced',
      padding: '1%',
      margin: '1%',
      backgroundColor: '#6F4E37',
    };
  
    return (
      <>
        <div style={styleblock} onClick={() => props.whenItemClicked(props.id)}>
          <p>Name: {props.name}</p>
          <p>Description: {props.description}</p>
          <p>Origin: {props.origin}</p>
          <p>Price: {props.price}</p>
          <p>
            Quantity: {props.qty > 0 ? props.qty : 'Out of Stock'}
            {props.qty <= 10 && props.qty > 0 && <span> - Almost out!</span>}
          </p>
          <p>Total Bought: {props.totalBought}</p>
          <button onClick={(e) => { e.stopPropagation(); props.onBuyPound(props.id); }}>Buy</button>
          <button onClick={(e) => { e.stopPropagation(); props.onSellPound(props.id); }}>Sell</button>
        </div>
      </>
    );
  };

Items.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    origin: PropTypes.string,
    price: PropTypes.number,
    roast: PropTypes.string,
    qty: PropTypes.number,
    id: PropTypes.string,
    whenItemClicked: PropTypes.func,
    remainingPounds: PropTypes.number,
    onSellPound: PropTypes.func
};
export default Items;
