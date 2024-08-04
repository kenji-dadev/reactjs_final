import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import img01 from '../assets/WhatsApp Image 2024-07-29 at 2.22.26 PM (1).jpeg'
import img02 from '../assets/WhatsApp Image 2024-07-29 at 2.22.26 PM (2).jpeg'
import img03 from '../assets/WhatsApp Image 2024-07-29 at 2.22.26 PM.jpeg'
import '../App.css';
import { db } from '../database/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

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
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {cards.map(card => (
          <div className="col" key={card.id}>
            <div className="card shadow-sm">
              <Image src={card.imageUrl} rounded className='logo1'/>
              <div className="card-body">
                <p className="card-text">{card.name}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
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
