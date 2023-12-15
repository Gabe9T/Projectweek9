import PropTypes from 'prop-types';
import Items from "./Items";

const ItemsList = (props) => {
  const itemStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  };

  const boughtItemsListStyle = {
    width: '20%',
  };

  let currentInventory = props.inventory;

  return (
    <>
      <hr />
      <div style={itemStyle}>
        {currentInventory.map((coffee) => (
          <Items
            whenItemClicked={props.onItemSelection}
            onBuyPound={props.onBuyPound}
            onSellPound={props.onSellPound}
            name={coffee.name}
            id={coffee.id}
            description={coffee.description}
            origin={coffee.origin}
            price={coffee.price}
            roast={coffee.roast}
            qty={coffee.qty}
            totalBought={coffee.totalBought}
            key={coffee.id}
          />
        ))}
      </div>
      <div style={boughtItemsListStyle}>
      </div>
    </>
  );
};

ItemsList.propTypes = {
  inventory: PropTypes.array,
  onItemSelection: PropTypes.func,
  onBuyPound: PropTypes.func,
};

export default ItemsList;