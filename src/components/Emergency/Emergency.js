import React from 'react';
import './Emergency.css'; // Import the new CSS file

const Emergency = () => {
  return (
    <div className="body-emergency">
      <div className="container-emergency">
        <div className="box-emergency">
          <h2 className="heading-emergency">Enter Your ID</h2>
          <form>
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="Enter your ID"
              className="input-emergency"
              required
            />
            <button type="submit" className="button-emergency">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
