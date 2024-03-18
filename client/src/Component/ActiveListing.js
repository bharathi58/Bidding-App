import React, { useState } from 'react';
import './ActiveListing.css'; // Import the CSS file for styling
import { Link } from "react-router-dom";
const ActiveListing = ({ listing, currentUser }) => {
  const [bidAmount, setBidAmount] = useState(listing.startprice + 1); // State to track the bidding amount
  const [lastBid, setLastBid] = useState(listing.startprice); // State to track the last bid amount
  const [errorMessage, setErrorMessage] = useState(''); // State to track the error message


  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="listing-container">
      <img src={listing.prod_img} alt={listing.prod_name} className="listing-image" />
      <div className="listing-details">
        <h3><strong>{listing.prod_name}</strong></h3>
        <p className="text-primary-emphasis">Category: {listing.category}</p>
        <p className="text-primary-emphasis">Starting Price: ₹{listing.startprice}</p>
        <p className="text-primary-emphasis">End Date of Bidding: {formatDate(listing.enddate)}</p>
        <p className="text-primary-emphasis">Last Bid: ₹{lastBid}</p>
        <Link to={`/product/${listing._id}`}>View Details</Link>
      </div>
    </div>
  );
};

const currentUser = 'user3@example.com';

const ActiveListings = (props) => {
  console.log(props.prod);
  return (
    <div>
      {props.prod.map((listing, index) => (
        <ActiveListing key={index} listing={listing} currentUser={currentUser} />
      ))}
    </div>
  );
};

export default ActiveListings;
