import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import '../App.css';
import { db } from '../database/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import 'bootstrap';

function ColHero() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'Restaurant'), (snapshot) => {
      const cardsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCards(cardsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
    
      <div className="hero row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {cards.map(card => (
          <div className=" col" key={card.id}>
            <div className="card shadow-sm">
              <Image src={card.imageUrl} rounded className='logo1'/>
              <div className="card-body">
                <p className="card-text">{card.name}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <LinkContainer to="/viewrestaurant">
                      <Nav.Link><button type="button" className="btn btn-outline-info">View</button></Nav.Link>
                    </LinkContainer>
                  </div>
                  <small className="text-body-secondary">{card.time}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </> 
  );
}

export default ColHero;
