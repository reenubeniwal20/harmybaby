import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Import useHistory from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const history = useHistory(); // Access the history object

  const handleSignup = async () => {
    if (!username || !password || !email || !mobilenumber) {
      setError('Please fill in all required fields');
      return;
    }
    try {
      // Make a POST request to your backend endpoint for signup
      const response = await axios.post('http://localhost:5001/signup', {
        username,
        password,
        email,
        mobilenumber
      });
      // Handle successful signup
      setSuccessMessage(response.data.message);
      setError('');
      // Redirect to the sign-in page
      push();
    } catch (error) {
      // Handle errors during signup
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError('An error occurred during signup');
      }
      setSuccessMessage('');
    }
  };
  function push() {
    alert("Sign Up successfull. Login to enter..");
    history.push('/signin');
  }

  return (
    <div className='signParent'>
    <div className='signin'>


      <h1 className="navbar-brand">THE RESIN ROOM</h1>
      <h2 id='account'>Create Account</h2>
      <div className='accountChild'>
        <label>Your name:</label><br />
        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className='accountChild'>
        <label id='mobilenumber'>Mobile Number:</label><br />
        <input type="number" placeholder='Mobile number' value={mobilenumber} onChange={(e) => setMobileNumber(e.target.value)} />
      </div>
      <div className='accountChild'>
        <label>Email:</label><br />
        <input type="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='accountChild'>
        <label>Set Password:</label><br />
        <input type="password" placeholder='At least 6 characters' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleSignup}>Sign Up</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <p id='member'>Already a member? <Link  to="/">Sign In</Link> </p>
    </div>
    </div>
  );
}

export default Signup;
