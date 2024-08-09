import React, { useState, useEffect } from 'react';
import { db } from '../database/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import '../App.css';
import 'bootstrap';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';

function ViewRestaurant() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'Restaurant'), (snapshot) => {
      const cardsData = snapshot.docs.map(doc => doc.data());
      setCards(cardsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
    <div className="hero row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {cards.length > 0 ? (
        cards.map((card, index) => (
          <div className="col" key={index}>
            <div className="card shadow-sm">
              <Image src={card.imageUrl} rounded className='logo1'/>
              <div className="card-body">
                <p className="card-text">{card.name}</p>
                  <h3>ADDRESS: {card.address}</h3>
                  <h3>QTY: {card.qty}</h3>
                  <h3>PRICE: {card.price}</h3>
                  <h3>TEL: {card.tell}</h3>
                  <h3>D/M/Y: {card.date}</h3>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
      <div className='Back'>
          <LinkContainer to="/">
            <Nav.Link><button type="button" className="btn btn-outline-info">Back</button></Nav.Link>
          </LinkContainer>
      </div>

    </>
  );
}

export default ViewRestaurant;
