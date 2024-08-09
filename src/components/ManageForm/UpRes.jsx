import React, { useState, useEffect } from "react";
import { db } from "../../database/firebase";
import '../../App.css';
import NavbarCT from "../NavbarCT";
import {
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import Footer from "../Footer";

const FormInputData = () => {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  const roitaiRef = collection(db, "Restaurant");
  useEffect(() => {
    const unsubscribe = loadRealtime();
    return () => {
      unsubscribe();
    };
  }, []);

  const loadRealtime = () => {
    const unsubscribe = onSnapshot(roitaiRef, (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    });
    return () => {
      unsubscribe();
    };
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  

  const handleSave = async (id) => {
    try {
      await updateDoc(doc(roitaiRef, id), form);
      setEditId(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    setEditId(null);
    setForm({});
  };

  console.log(editId);

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };


  return (
    <>
    <NavbarCT/>
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr>
          <th>ຊື່ຮ້ານຄ້າ</th>
            <th>ທີ່ຢູ່ຮ້ານຄ້າ</th>
            <th>ຈຳນວນໂຕະ</th>
            <th>ເບີໂທລະສັບຮ້ານ</th>
            <th>ລາຄາໂຕະ</th>
            <th>ວັນທີ່/ເດືອນ/ປີ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>    
              <td>
                {editId === item.id ? (
                  <>
                    <input
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      type="text"
                      name="name"
                      value={form.name !== undefined ? form.name : item.name}
                      placeholder="name"
                    />
                  </>
                ) : (
                  item.name
                )}
              </td>

              <td>
                {editId === item.id ? (
                  <>
                    <input
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      type="text"
                      name="address"
                      value={form.address !== undefined ? form.name : item.address}
                      placeholder="address"
                    />
                  </>
                ) : (
                  item.address
                )}
              </td>

              <td>
                {editId === item.id ? (
                  <>
                    <input
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      type="number"
                      name="qty"
                      value={
                        form.qty !== undefined ? form.qty : item.qty
                      }
                      placeholder="qty"
                    />
                  </>
                ) : (
                  item.qty
                )}
              </td>

              <td>
                {editId === item.id ? (
                  <>
                    <input
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      type="number"
                      name="tell"
                      value={form.tell !== undefined ? form.tell : item.tell}
                      placeholder="tell"
                    />
                  </>
                ) : (
                  item.tell
                )}
              </td>

              <td>
                {editId === item.id ? (
                  <>
                    <input
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      type="number"
                      name="price"
                      value={form.price !== undefined ? form.price : item.price}
                      placeholder="price"
                    />
                  </>
                ) : (
                  item.price
                )}
              </td>

              <td>
                  {item.date}
             
              </td>

              <td>
                {editId === item.id ? (
                  <>
                    <button
                      className="btn btn-success"
                      onClick={() => handleSave(item.id)}
                    >
                      Save
                    </button>

                    <button
                      className="btn btn-secondary"
                      onClick={() => handleCancel()}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-warning"
                      onClick={() => setEditId(item.id)}
                    >
                      Edit
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div class="overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
      <div class="col-md-6 p-lg-5 mx-auto my-5">
        
      </div>
      <div class="product-device shadow-sm d-none d-md-block"></div>
      <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>


    <Footer/>
    </>
  );
};

export default FormInputData;