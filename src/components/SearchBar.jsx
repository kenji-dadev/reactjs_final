import React, { useState } from 'react';
import { db } from '../database/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import '../App.css';
import 'bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function SearchBar() {
  const [queryText, setQueryText] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();

    if (queryText.trim() === '') {
      setResults([]);
      return;
    }

    try {
      const q = query(
        collection(db, 'Restaurant'),
        where('name', '>=', queryText),
        where('name', '<=', queryText + '\uf8ff')
      );
      const querySnapshot = await getDocs(q);

      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });

      setResults(items);
    } catch (error) {
      console.error('Error searching Firestore:', error);
    }
  };

  return (
    <div className="container-sm text-center my-2">
      <h2 className="fw-bold">TABLE ONLINE</h2>
      <form className="d-flex mb-5" role="search" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>

      <div>
        {results.length > 0 ? (
          <div className="reach row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {results.map((result) => (
              <div className="col" key={result.id}>
                <div className="card shadow-sm">
                  <Image src={result.imageUrl} rounded className="logo1" />
                  <div className="card-body">
                    <p className="card-text">{result.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn">
                        <LinkContainer to="">
                          <Nav.Link>
                            <button type="button" className="view btn btn-outline-info">View</button>
                          </Nav.Link>
                        </LinkContainer>
                      </div>
                      <small className="text-body-secondary">{result.time}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No results found</p>
        )}
      </div>
      
    </div>
  );
}

export default SearchBar;
