import React, { useState } from 'react';
import './CreateListing.css'; 
import productNameIcon from './assets/productNameIcon.png';
import categoryIcon from './assets/categoryIcon.png';
import startingPriceIcon from './assets/startingPriceIcon.png';
import endDateIcon from './assets/endDateIcon.png';
import productImageIcon from './assets/productImageIcon.png';
import productDetailsIcon from './assets/productDetailsIcon.png';

const CreateListing = (props) => {
    const [pName, setPName] = useState('');
    const [pCat, setPCat] = useState('');
    const [pSPrice, setPSPrice] = useState('');
    const [pDate, setPDate] = useState('');
    const [pImg, setPImg] = useState('');
    const [pDetail, setPDetail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (pSPrice <= 0) {
            alert("Starting price must be greater than 0.");
            return;
        }
        const currentDate = new Date().toISOString().split('T')[0];
        if (pDate <= currentDate) {
            alert("End date of bidding must be in the future.");
            return;
        }
        const product = {
            prod_name: pName,
            category: pCat,
            startprice: pSPrice,
            enddate: pDate,
            prod_img: pImg,
            prod_details: pDetail
        };
        props.createListing(product);
        // Clear the form fields after submission
        setPName('');
        setPCat('');
        setPSPrice('');
        setPDate('');
        setPImg('');
        setPDetail('');
    };

    const handleImageChange = (event) => {
        const fileName = event.target.value.split('\\').pop(); // Extract file name from fake path
        setPImg(`./Product_images/${fileName}`); // Concatenate with original path
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">Create Listing</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="input">
                        <img src={productNameIcon} alt="" />
                        <input 
                            type="text" 
                            placeholder="Product Name"
                            value={pName}
                            onChange={(e) => setPName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={categoryIcon} alt="" />
                        <input 
                            type="text" 
                            placeholder="Category" 
                            value={pCat}
                            onChange={(e) => setPCat(e.target.value)}
                        />
                    </div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={startingPriceIcon} alt="" />
                        <input 
                            type="Number" 
                            placeholder="Starting Price" 
                            value={pSPrice}
                            onChange={(e) => setPSPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={endDateIcon} alt="" />
                        <input 
                            type="date" 
                            placeholder="End Date of Bidding" 
                            value={pDate}
                            onChange={(e) => setPDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={productImageIcon} alt="" />
                        <input 
                            type="file" 
                            placeholder="Product Image" 
                            onChange={handleImageChange} // Handle file input change
                        />
                    </div>
                </div>
                <div className="details">
                    <div className="detail">
                        <img src={productDetailsIcon} alt="" />
                        <textarea className='detail'
                            placeholder="Product Details" 
                            value={pDetail}
                            onChange={(e) => setPDetail(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className="submit-container">
                    <button className='submit-container' type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CreateListing;
