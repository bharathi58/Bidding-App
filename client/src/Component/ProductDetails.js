import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL params
  const [product, setProduct] = useState(null);
  const [bidAmount, setBidAmount] = useState(0);
  const [lastBid, setLastBid] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:4000/activelistings/${id}`);
        const { prod_name, category, startprice, enddate, prod_img, prod_details } = response.data.data;
        setProduct({ prod_name, category, startprice, enddate, prod_img, prod_details });
        setLastBid(startprice);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductById(); // Fetch product details when the component mounts
  }, [id]);

  const handleBidChange = (e) => {
    const amount = parseFloat(e.target.value);
    if (!isNaN(amount)) {
      setBidAmount(amount);
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid bid amount');
    }
  };

  const handleBid = () => {
    if (bidAmount > lastBid && bidAmount > product.startprice) {
      setLastBid(bidAmount);
      console.log(`Bid placed for ${product.prod_name} with amount ₹${bidAmount}`);
    } else {
      setErrorMessage('Invalid bid amount');
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="product-details-container">
      {product ? (
        <div>
          <h2><strong>{product.prod_name}</strong></h2>
          <p>Category: {product.category}</p>
          <p>Starting Price: ₹{product.startprice}</p>
          <p>End Date of Bidding: {formatDate(product.enddate)}</p>
          <p><img src={product.prod_img} alt={product.prod_name} width="500" height="400" style={{ display: "block", margin: "0 auto" }}/></p>
          <p>Product Details: {product.prod_details}</p>
          <p>Last Bid: ₹{lastBid}</p>
          <div className="input-group mb-3">
            <input 
                type="number" 
                className="form-control" 
                placeholder="Enter bid amount" 
                aria-label="Enter bid amount" 
                aria-describedby="button-addon2" 
                value={bidAmount} 
                onChange={handleBidChange} 
            />
            <button 
                className="btn btn-primary" 
                type="button" 
                id="button-addon2" 
                onClick={handleBid}
            >
                Bid
            </button>
            </div>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
