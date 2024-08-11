import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SubscriberList = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSubscribers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/subscribers');
                setSubscribers(response.data);
            } catch (error) {
                console.error('Error fetching subscribers:', error);
                setError('Failed to fetch subscribers. Please try again later.');
            }
        };

        fetchSubscribers();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Subscribers List</h2>
            {error ? (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subscribers.length > 0 ? (
                                subscribers.map((subscriber, index) => (
                                    <tr key={subscriber._id}>
                                        <td>{index + 1}</td>
                                        <td>{subscriber.email}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2" className="text-center">
                                        No subscribers found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default SubscriberList;




