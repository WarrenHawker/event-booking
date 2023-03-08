const BookingPageOne = () => {
  return (
    <div className='booking-form-page'>
      <fieldset>
        <label htmlFor='tickets'>
          How many tickets would you like to book?
        </label>
        <select name='tickets'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>8</option>
          <option value='10'>10</option>
        </select>
      </fieldset>
      <p className='agree-to-ToS'>
        By clicking NEXT you agree to our{' '}
        <a href='#' target='_blank'>
          Terms of Service
        </a>
        <span> (opens in a new window)</span>
      </p>
      <button className='btn btn-primary booking-form-button'>Next</button>
    </div>
  );
};

export default BookingPageOne;
