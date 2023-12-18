import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import ReusableForm from './ReusableForm';

function EditItemForm(props) {
  const { coffee, onEditItem } = props;

  function handleEditFormSubmission(e) {
    e.preventDefault();
    const updatedCoffee = {
      name: e.target.name.value,
      description: e.target.description.value,
      origin: e.target.origin.value,
      price: parseFloat(e.target.price.value),
      qty: parseInt(e.target.quantity.value),
      id: coffee.id,
      totalBought: coffee.totalBought,
    };
    onEditItem(updatedCoffee);
  }

  return (
    <>
      <ReusableForm
        pageTitle="Update coffee roast details"
        formSubmissionHandler={handleEditFormSubmission}
        buttonText="Update Coffee"
      />
    </>
  );
}

export default connect(null, actions)(EditItemForm);