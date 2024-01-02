import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

function NewItemForm(props) {
    function handleNewItemFormSubmission(e) {
        e.preventDefault();
        const newCoffee = {
            name: e.target.name.value,
            description: e.target.description.value,
            origin: e.target.origin.value,
            price: parseFloat(e.target.price.value),
            qty: parseInt(e.target.quantity.value),
            id: v4(),
            totalBought: 0,
        };
        props.onNewItemCreation(newCoffee);
    }

    return (
        <>
            <ReusableForm
                pageTitle="Add a new coffee type for sale"
                formSubmissionHandler={handleNewItemFormSubmission}
                buttonText="Create new coffee"
            />
        </>
    );
}

NewItemForm.propTypes = {
    onNewItemCreation: PropTypes.func,
};
export default NewItemForm;