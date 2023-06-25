import React from 'react';
import './Register.css';
function RegistrationForm() {
  return (
    <div>
      <h1 className='reg'>Welcome to WHY GLOBAL SERVICES</h1>

      <p className='para'>Please fill out this form with the required information</p>
      <form action='https://register-demo.freecodecamp.org' className='regform'>
        <fieldset>
          <label htmlFor="first-name" className='fname'>Enter Your First Name: </label>
          <input id="first-name" name="first-name" className='inpform'  type="text" required />
          <label htmlFor="last-name"  className='fname'>Enter Your Last Name: </label>
          <input id="last-name" name="last-name" className='inpform' type="text" required />
          <label htmlFor="email"  className='fname'>Enter Your Email: </label>
          <input id="email" name="email" className='inpform' type="email" required />
          <label htmlFor="new-password"  className='fname'>Create a New Password: </label>
          <input id="new-password" className='inpform' name="new-password" type="password" pattern="[a-z0-5]{8,}" required />
        </fieldset>
        <fieldset >
          <label htmlFor="personal-account" >
            <input id="personal-account" type="radio" name="account-type" className="inline" /> Personal Account
          </label>
          <label htmlFor="business-account">
            <input id="business-account" type="radio" name="account-type" className="inline" /> Business Account
          </label>
          <label htmlFor="terms-and-conditions" name="terms-and-conditions">
            <input id="terms-and-conditions" type="checkbox" required name="terms-and-conditions" className="inline" /> I accept the <a href="https://mncartwork.wixsite.com/hello">terms and conditions</a>
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="profile-picture">Upload a profile picture: </label>
          <input id="profile-picture" type="file" name="file" />
          <label htmlFor="age">Input your age (years): </label>
          <input id="age" type="number" name="age" min="13" max="120" />
          <label htmlFor="referrer">How did you hear about us?</label>
          <select id="referrer" name="referrer">
            <option value="">(select one)</option>
            <option value="1">MNC Artwork News</option>
            <option value="2">Linkedin</option>
            <option value="3">MNC Artwork Forum</option>
            <option value="4">Other</option>
          </select>
          <label htmlFor="bio">Provide a bio:</label>
          <textarea id="bio" name="bio" rows="3" cols="30" placeholder="I am.. "></textarea>
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default RegistrationForm;
