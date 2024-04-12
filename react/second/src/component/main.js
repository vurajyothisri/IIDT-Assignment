import React, { useState } from 'react';
import '../App.css';

const products = [
    {
      id: 'rec43w3ipXvP28vog',
      title: 'high-back bench',
      company: 'ikea',
      image: 'https://course-api.com/images/store/product-1.jpeg',
      price: 9.99,
    },
    {
      id: 'rec4f2RIftFCb7aHh',
      title: 'albany table',
      company: 'marcos',
      image: 'https://course-api.com/images/store/product-2.jpeg',
      price: 79.99,
    },
    {
      id: 'rec8kkCmSiMkbkiko',
      title: 'accent chair',
      company: 'caressa',
      image: 'https://course-api.com/images/store/product-3.jpeg',
      price: 25.99,
    },
    {
      id: 'recBohCqQsot4Q4II',
      title: 'wooden table',
      company: 'caressa',
      image: 'https://course-api.com/images/store/product-4.jpeg',
  
      price: 45.99,
    },
    {
      id: 'recDG1JRZnbpRHpoy',
      title: 'dining table',
      company: 'caressa',
      image: 'https://course-api.com/images/store/product-5.jpeg',
  
      price: 6.99,
    },
    {
      id: 'recNWGyP7kjFhSqw3',
      title: 'sofa set',
      company: 'liddy',
      image: 'https://course-api.com/images/store/product-6.jpeg',
      price: 69.99,
    },
    {
      id: 'recZEougL5bbY4AEx',
      title: 'modern bookshelf',
      company: 'marcos',
      image: 'https://course-api.com/images/store/product-7.jpeg',
      price: 8.99,
    },
    {
      id: 'recjMK1jgTb2ld7sv',
      title: 'emperor bed',
      company: 'liddy',
      image: 'https://course-api.com/images/store/product-8.jpeg',
      price: 21.99,
    },
    {
      id: 'recmg2a1ctaEJNZhu',
      title: 'utopia sofa',
      company: 'marcos',
      image: 'https://course-api.com/images/store/product-9.jpeg',
      price: 39.95,
    },
    {
      id: 'recvKMNR3YFw0bEt3',
      title: 'entertainment center',
      company: 'liddy',
      image: 'https://course-api.com/images/store/product-10.jpeg',
      price: 29.98,
    },
    {
      id: 'recxaXFy5IW539sgM',
      title: 'albany sectional',
      company: 'ikea',
      image: 'https://course-api.com/images/store/product-11.jpeg',
      price: 10.99,
    },
    {
      id: 'recyqtRglGNGtO4Q5',
      title: 'leather sofa',
      company: 'liddy',
      image: 'https://course-api.com/images/store/product-12.jpeg',
      price: 9.99,
    },
  ];
  
const Main = () => {
    const [selectedCompany, Selectcompany] = useState(null);
    const [search,updatesearch] = useState('');

    const Menu = (company) => {
        Selectcompany(company);
    };

    const Inputchanged = (event) => {
    updatesearch(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.company.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='main'>
            <nav className="Navbar">
                
                <input 
                    type="text" 
                    placeholder="Search..."
                    value={search}
                    onChange={Inputchanged}
                />
                <h5>Company</h5>
                <ul>
                    <li onClick={() => Menu(null)} className='items'>All</li>
                    <li onClick={() => Menu('ikea')} className='items'>Ikea</li>
                    <li onClick={() => Menu('marcos')} className='items'>Marcos</li>
                    <li onClick={() => Menu('caressa')} className='items'>Caressa</li>
                    <li onClick={() => Menu('liddy')} className='items'>Liddy</li>
                </ul>
            </nav>
            <div className="content">
                
                {selectedCompany && (
                    <div className='product'>
                        {products
                            .filter(product => product.company === selectedCompany)
                            .map(product => (
                                <div key={product.id}>
                                    <img src={product.image} alt={product.title} className='img' />
                                    <h3>{product.title}</h3>
                                    <p>${product.price}</p>
                                    
                                </div>
                            ))}
                    </div>
                )}
                {!selectedCompany && (
                    <div className='product' >
                        {/* Display filtered products */}
                        {filteredProducts.map(product => (
                            <div key={product.id} >
                                <img src={product.image} alt={product.title}  className='img'/>
                                <h3>{product.title}</h3>
                                <p>${product.price}</p>
                                
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Main;
