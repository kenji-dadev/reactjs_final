import React from 'react'
import '../App.css'
function SearchBar() {
  return (
    <>
        <div class="container-sm text-center my-2">
            <h2 className='fw-bold'>TABLE ONLINE</h2>
            <form className="d-flex mb-5" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>

        </div>
    </>
  )
}

export default SearchBar