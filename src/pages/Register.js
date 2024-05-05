import * as React from 'react';
import { useState } from 'react';
import backgroundImage1 from '../assets/11-Space-APIs-Because-Space-is-Neat.jpeg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




export default function Register() {
    const navigate = useNavigate();
    // State to store input values
    const [formData, setFormData] = useState({
        firstNameame: '',
        lastName:'',
        email: '',
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
    axios.post('https://chamaththa.infinitoapparel.ca/api/users/register', formData)
         .then(response => {
             console.log('Registration successful:', response.data);
             // Redirect to login page or anywhere appropriate
             navigate('/'); 
         })
         .catch(error => {
             console.error('Registration error:', error.response.data);
             // Handle errors here
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
        <div className="flex items-center justify-center min-h-screen">
            <div className="container px-4 py-8">
               
                <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 border border-gray-300 rounded-lg shadow-md" style={{ width: '500px' }}>
                    <div className="mb-6">
                    <h2 className="text-xl font-bold text-center mb-4">Registration Page</h2>
                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input
                            type="email"
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
                        Register
                    </button>

                    <p className="text-center mt-4">
                    Do you have an account?{' '}
                    <Link to="/" className="text-blue-700 underline">Login</Link>
                </p>

                </form>

               
            </div>
        </div>
        </div>
    );
}
