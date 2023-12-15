import React from 'react';
import ItemsList from './ItemsList';
import NewItemForm from './NewItemForm';
import { useState } from 'react';
import masterList from './MasterList/MasterList';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';


class BodyControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainNewCoffeeList: [...masterList],
      selectedCoffee: null,
      editing: false,
      showBoughtItems: false,
      boughtItems: [],
    };
  }
  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }
  handleEditClick = () => {
    this.setState({ editing: true });
  }
  handleEditingItemInList = (coffeeToEdit) => {
    const editedInventory = this.state.mainNewCoffeeList
      .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({
      mainNewCoffeeList: editedInventory,
      editing: false,
      selectedCoffee: null
    });
  }

  handleUpdateCoffee = (updatedCoffee) => {
    this.handleEditingItemInList(updatedCoffee);
  };

  handleNewItem = (newCoffee) => {
    const newInventory = this.state.mainNewCoffeeList.concat(newCoffee);
    this.setState({
      mainNewCoffeeList: newInventory,
      formVisibleOnPage: false
    });
  }
  handleChangingselectedCoffee = (id) => {
    const selectedCoffee = this.state.mainNewCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({ selectedCoffee: selectedCoffee });

  }
  handleDeletingItem = (id) => {
    const newCoffeeList = this.state.mainNewCoffeeList.filter(coffee => coffee.id !== id);
    this.setState({
      mainNewCoffeeList: newCoffeeList,
      selectedCoffee: null
    });
  }

  handleSellPound = (id) => {
    const updatedInventory = this.state.mainNewCoffeeList.map((coffee) => {
      if (coffee.id === id && coffee.totalBought > 0) {
        return { ...coffee, qty: coffee.qty + 1, totalBought: coffee.totalBought - 1 };
      }
      return coffee;
    });

    this.setState({
      mainNewCoffeeList: updatedInventory
    });

    this.setState((prevState) => ({
      boughtItems: prevState.boughtItems
        .map((item) => (item.id === id && item.totalBought > 0) ? { ...item, totalBought: item.totalBought - 1 } : item)
        .filter((item) => item.totalBought > 0)
    }));
  };
  handleBuyPound = (id) => {
    const updatedInventory = this.state.mainNewCoffeeList.map((coffee) => {
      if (coffee.id === id && coffee.qty > 0) {
        const updatedCoffee = {
          ...coffee,
          qty: coffee.qty - 1,
          totalBought: coffee.totalBought + 1,
        };

        if (updatedCoffee.totalBought > 0) {
          this.setState((prevState) => ({
            boughtItems: [...prevState.boughtItems, updatedCoffee],
          }));
        }

        return updatedCoffee;
      }
      return coffee;
    });

    this.setState({
      mainNewCoffeeList: updatedInventory,
    });
  };
  toggleBoughtItems = () => {
    this.setState((prevState) => ({
      showBoughtItems: !prevState.showBoughtItems,
    }));
  };
  render() {
    let currentlyVisibleState = null;
    let buttontext = "Return To Menu";

    if (this.state.editing) {
      currentlyVisibleState = (
        <>
          <EditItemForm coffee={this.state.selectedCoffee} onEditItem={this.handleUpdateCoffee} />
          <button onClick={this.handleClick}>{buttontext}</button>
        </>
      );
    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = (
        <ItemDetail
          coffee={this.state.selectedCoffee}
          onClickingDelete={this.handleDeletingItem}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttontext = "Back to coffee roasts for sale";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleNewItem} />;
      buttontext = "Return to inventory for sale";
    } else {
      currentlyVisibleState = (
        <>
          <ItemsList
            inventory={this.state.mainNewCoffeeList}
            onItemSelection={this.handleChangingselectedCoffee}
            onBuyPound={this.handleBuyPound}
            onSellPound={this.handleSellPound}
          />
          <button onClick={this.handleClick}>Make New Coffee!</button>
        </>
      );
      buttontext = "Add New Coffee!";
    }

    return (
      <>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            {currentlyVisibleState}
          </div>
          <div style={{ width: '20%' }}>
            <h2>Bought Items</h2>
            <ul>
              {this.state.boughtItems.length > 0 &&
                this.state.boughtItems.reduce((uniqueItems, item) => {
                  const existingItem = uniqueItems.find((unique) => unique.id === item.id);

                  if (existingItem) {
                    existingItem.totalBought += 1;
                  } else {
                    uniqueItems.push({ ...item, totalBought: 1 });
                  }

                  return uniqueItems;
                }, []).map((uniqueItem) => (
                  <li key={uniqueItem.id}>
                    {uniqueItem.name} - {uniqueItem.totalBought}x items
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default BodyControl;