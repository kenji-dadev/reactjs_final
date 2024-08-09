
import NavbarCT from './NavbarCT'
import '../App.css'
import React,{useState,useEffect} from 'react';
import { format } from 'date-fns';
import { db } from '../database/firebase';
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';

function Admin() {
  const currentDate = new Date();
  const formattedDate = format(currentDate,'dd-MM-yyyy');
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'Restaurant'), (snapshot) => {
      const dataList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(dataList);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);


  return (
   <>
   
      <NavbarCT/>
       
      <div class="mind  p-3 bg-light rounded">
            <div class="d-flex justify-content-between bg-light">
                <div class="d-flex justify-content-between pb-2 m-3 text-center bg-light">
                  <img src="https://images.unsplash.com/photo-1721908919546-f752b776f970?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <h3 class="text border-bottom pb-2 m-2 text-center bg-light">ADMIN</h3>
                <strong class="text-gray-dark pb-2 m-2 text-center bg-light"></strong>
            </div>
      </div>

      <div class="mind rounded d-flex justify-content-between">
          <h2 class="d-block">today</h2>
          <h3 class="d-block">{formattedDate}</h3>
      </div>

        <div class="mind-1 p-3 bg-body rounded">
              <div class="d-flex justify-content-between">
                  <div class="d-flex justify-content-between">
                    <img src="https://images.unsplash.com/photo-1721908919546-f752b776f970?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p className='txt'>beer</p>
                  </div>
                  <div class="d-flex justify-content-between">
                      <p className='txt'>10000kip</p>
                  </div>
              </div>
              <div class="b-text d-flex justify-content-between">
                    <p>beer</p>
                  <div class="d-flex justify-content-between">
                      <p className='text-success'>10:00pm</p>
                  </div>
              </div>
          </div>

          <div class="mind my-2 p-3 bg-light rounded">
            <div class="d-flex justify-content-between bg-light">
                <div class="d-flex justify-content-between pb-2 m-3 text-center bg-light">
                  <h2 className='bg-body'>TOTAL</h2>
                </div>
                <h3 class="text border-bottom pb-2 m-2 text-center bg-light"></h3>
                <strong class="text-gray-dark pb-2 m-2 text-center bg-light">30000KIP</strong>
            </div>
      </div>

   </>
  )
}

export default Admin