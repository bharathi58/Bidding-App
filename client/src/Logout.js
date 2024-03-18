import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        onLogout();
        navigate('/');
      } catch (error) {
        console.error('Logout failed:', error);
      }
    };

    logout(); // Call the logout function when the component mounts

    // No dependencies array provided, so this effect runs only once when the component mounts
  }, [navigate, onLogout]); // Include navigate and onLogout in the dependencies array

  return null; // Since this component doesn't render anything, return null
};

export default Logout;