import { useState } from 'react';

function Form() {
  // Create state variables for the fields in the form
  // also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // check to see if the email is not valid or if the userName is empty. If so, set an error message to be displayed on the page.
    // if (!validateEmail(email) || !userName) {
    //   setErrorMessage('Email or username is invalid');
    //   //  exit out of this code block if something is wrong so that the user can correct it
    //   return;
    //   // check to see if the password is not valid. If so, we set an error message regarding the password.
    // }
    // if (!checkPassword(message)) {
    //   setErrorMessage(
    //     `Choose a more secure password for the account: ${userName}`
    //   );
    //   return;
    // }
    alert(`Hello ${userName}`);

    // If everything goes according to plan, clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className="container text-center">
      <h1>Ways to Contact me! {userName}</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Your email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Username"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type='text'
          placeholder="Leave me your contact info and I'll get back with you!"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;

