import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import backgroundImage1 from '../assets/11-Space-APIs-Because-Space-is-Neat.jpeg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




export default function Login() {
    const navigate = useNavigate();

    // State to store input values
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    // Function to handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   // Function to handle form submission
const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting normally
    // Make a POST request to the backend
    axios.post('http://chamaththa.infinitoapparel.ca/api/users/login', formData)
         .then(response => {
             console.log('Login successful:', response?.data);
             // You might want to save the token in localStorage or context for further requests
             localStorage.setItem('token', response.data.token);
             navigate('/home'); 
             
         })
         .catch(error => {
             console.error('Login error:', error);
             // Handle errors here, such as showing an alert or updating the state
         });
};
    return (
        <div
            className="flex items-center justify-center min-h-screen"
            style={{
                backgroundImage: `url(${backgroundImage1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="container px-2 py-8 bg-white bg-opacity-90 rounded-lg shadow-md" style={{ width: '500px' }}>
                <h2 className="text-xl font-bold text-center mb-4">Login Page</h2>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mx-auto block"
                    >
                        Login
                    </button>

                </form>
                <p className="text-center mt-4">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-blue-700 underline">Register</Link>
                </p>
            </div>
        </div>
    );
}
