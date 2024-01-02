import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  addCoffee,
  updateCoffee,
  deleteCoffee,
  buyPound,
  sellPound,
} from '../redux/actions';
import ItemsList from './ItemsList';
import NewItemForm from './NewItemForm';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';

const BodyControl = (props) => {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    if (selectedCoffee !== null) {
      setSelectedCoffee(null);
      setFormVisibleOnPage(false);
      setEditing(false);
    } else {
      setFormVisibleOnPage((prev) => !prev);
    }
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleEditingItemInList = (coffeeToEdit) => {
    props.updateCoffee(coffeeToEdit);
    setEditing(false);
  };

  const handleUpdateCoffee = (updatedCoffee) => {
    handleEditingItemInList(updatedCoffee);
  };

  const handleNewItem = (newCoffee) => {
    props.addCoffee(newCoffee);
    setFormVisibleOnPage(false);
  };

  const handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = props.mainNewCoffeeList.find(
      (coffee) => coffee.id === id
    );
    setSelectedCoffee(selectedCoffee);
  };

  const handleDeletingItem = (id) => {
    props.deleteCoffee(id);
    setSelectedCoffee(null);
  };

  const handleSellPound = (id) => {
    props.sellPound(id);
  };

  const handleBuyPound = (id) => {
    props.buyPound(id);
  };

  let currentlyVisibleState = null;
  let buttonText = 'Return To Menu';

  if (editing) {
    currentlyVisibleState = (
      <>
        <EditItemForm coffee={selectedCoffee} onEditItem={handleUpdateCoffee} />
        <button onClick={handleClick}>{buttonText}</button>
      </>
    );
  } else if (selectedCoffee !== null) {
    currentlyVisibleState = (
      <ItemDetail
        coffee={selectedCoffee}
        onClickingDelete={handleDeletingItem}
        onClickingEdit={handleEditClick}
      />
    );
    buttonText = 'Back to coffee roasts for sale';
  } else if (formVisibleOnPage) {
    currentlyVisibleState = <NewItemForm onNewItemCreation={handleNewItem} />;
    buttonText = 'Return to inventory for sale';
  } else {
    currentlyVisibleState = (
      <>
        <ItemsList
          inventory={props.mainNewCoffeeList}
          onItemSelection={handleChangingSelectedCoffee}
          onBuyPound={handleBuyPound}
          onSellPound={handleSellPound}
        />
        <button onClick={handleClick}>Make New Coffee!</button>
      </>
    );
    buttonText = 'Add New Coffee!';
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>{currentlyVisibleState}</div>
        <div style={{ width: '20%' }}>
          <h2>Bought Items</h2>
          <ul>
            {props.boughtItems.length > 0 &&
              props.boughtItems
                .reduce((uniqueItems, item) => {
                  const existingItem = uniqueItems.find(
                    (unique) => unique.id === item.id
                  );

                  if (existingItem) {
                    existingItem.totalBought += 1;
                  } else {
                    uniqueItems.push({ ...item, totalBought: 1 });
                  }

                  return uniqueItems;
                }, [])
                .map((uniqueItem) => (
                  <li key={uniqueItem.id}>
                    {uniqueItem.name} - {uniqueItem.totalBought}x items
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  mainNewCoffeeList: state.mainNewCoffeeList,
  boughtItems: state.boughtItems,
});

const mapDispatchToProps = {
  addCoffee,
  updateCoffee,
  deleteCoffee,
  buyPound,
  sellPound,
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyControl);