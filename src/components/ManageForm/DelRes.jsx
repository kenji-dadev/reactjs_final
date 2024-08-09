import React, { useState, useEffect } from 'react';
import NavbarCT from '../NavbarCT';
import Table from 'react-bootstrap/Table';
import '../../App.css';
import { db } from '../../database/firebase';
import { collection, doc, deleteDoc, onSnapshot } from 'firebase/firestore';
import Footer from '../Footer';

function DelRes() {
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

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'Restaurant', id));
    } catch (error) {
      console.log("Error deleting document: ", error);
    }
  };

  return (
    <>
      <NavbarCT />
      <Table bordered hover className='tabale'>
        <thead>
          <tr>
            <th>ຊື່ຮ້ານຄ້າ</th>
            <th>ທີ່ຢູ່ຮ້ານຄ້າ</th>
            <th>ຈຳນວນໂຕະ</th>
            <th>ເບີໂທລະສັບຮ້ານ</th>
            <th>ລາຄາໂຕະ</th>
            <th>ວັນທີ່/ເດືອນ/ປີ</th>
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.qty}</td>
              <td>{item.tell}</td>
              <td>{item.price}</td>
              <td>{item['date'] ? formatDate(item['date']) : 'N/A'}</td>
              <td>
                <button type="button" className="btn btn-danger btn-md" onClick={() => handleDelete(item.id)}>ລົບ</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

    <div class="overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
      <div class="col-md-6 p-lg-5 mx-auto my-5">
        
      </div>
      <div class="product-device shadow-sm d-none d-md-block"></div>
      <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
  <Footer/>

    </>
  );
}

export default DelRes;
