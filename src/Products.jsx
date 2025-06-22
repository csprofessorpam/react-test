import React, { use, useEffect, useState } from 'react'
import axios from 'axios'
import User from './User';


function Products() {
    
    //useState to store products
    const [users, setUsers] = useState([]);

    //show products when page loads
    //need useEffect
    useEffect(() => {
        console.log('Fetching products...');
        axios.get('https://dummyjson.com/users')
            .then(response => {
                console.log(response.data.users);
                setUsers(response.data.users);
                //store products in state
                // setProducts(response.data.products);
                console.log('Products fetched successfully!');
                // console.log(response.data.products[0].title)
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });

    }, [])


  return (
    <div className="product-container">
        <h1>Users</h1>
        <div className="product-list">
            {/* <h3>{users[0]?.firstName} {users[0]?.lastName}</h3>
            <p>Role: {users[0].role}</p>
            <img src={users[0].image} /> */}
            {users.map(item => <User user={item} /> )}
        </div>
    </div>
  )
}

export default Products