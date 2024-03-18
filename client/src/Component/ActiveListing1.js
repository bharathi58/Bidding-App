import React from 'react';
import './ActiveListing.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
const ActiveListing = ({ listing }) => {
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="listing-container">
      <img src={listing.prod_img} alt={listing.prod_name} className="listing-image" />
      <div className="listing-details">
        <h3><strong>{listing.prod_name}</strong></h3>
        <p>Category: {listing.category}</p>
        <p>Starting Price: ₹{listing.startprice}</p>
        <p>End Date of Bidding: {formatDate(listing.enddate)}</p>
        <p>Login to know more... <Link to="/login" class="text-success">Click Here</Link></p>
      </div>
    </div>
  );
};


const ActiveListings = (props) => {
  console.log(props.prod);
  return (
    <div>
      {props.prod.map((listing, index) => (
        <ActiveListing key={index} listing={listing}/>
      ))}
    </div>
  );
};

export default ActiveListings;