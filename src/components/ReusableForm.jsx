import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <h3>{props.pageTitle}</h3>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" placeholder="Name of New Coffee" />
        <br />
        <label htmlFor="description">Description: </label>
        <input
          type='text'
          name='description'
          placeholder='Describe Item' />
        <br />
        <label htmlFor="price">Price: </label>
        <input type='number' name='price' placeholder='Price' />
        <br />
        <label htmlFor="quantity">quantity: </label>
        <input
          type='text'
          name='quantity'
          placeholder='Enter 130'
          defaultValue={130} />
        <br />
        <label htmlFor="origin">Origin:  </label>
        <input type="text" name="origin" placeholder="Origin of Coffee" />
        <br />
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}
ReusableForm.propTypes = {
  pageTitle: PropTypes.string,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};
export default ReusableForm;