import React, { useState } from 'react';
import NavbarCT from '../NavbarCT';
import Footer from '../Footer';
import { db, storage } from '../../database/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function AddRes() {
  const [form, setForm] = useState({});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === 'file') {
      setFile(e.target.files[0]);
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleAddData = async () => {
    try {
      let imageUrl = '';
      if (file) {
        const fileRef = ref(storage, `images/${file.name}`);
        const snapshot = await uploadBytes(fileRef, file);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      const res = await addDoc(collection(db, 'Restaurant'), {
        ...form,
        imageUrl,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavbarCT />
      <div className="add container-sm">
        <h2>ຟອມເພີ່ມຮ້ານຄ້າ</h2>
        <label className="text">ຊື່ຮ້ານຄ້າ</label>
        <div className="input-group mb-3">
          <input
            onChange={handleChange}
            type="text"
            name="name"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="ກາລຸນາພິມຊື່ຮ້ານ"
          />
        </div>
        <label className="text">ທີ່ຢູ່ຮ້ານ</label>
        <div className="input-group mb-3">
          <input
            onChange={handleChange}
            type="text"
            name="address"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="ກາລຸນາພິມທີ່ຢູ່ຮ້ານຂອງທ່ານ"
          />
        </div>
        <label className="text">ຈຳນວນໂຕະ</label>
        <div className="input-group mb-3">
          <input
            onChange={handleChange}
            type="number"
            name="qty"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="ກາລຸນາພິມຈຳນວນໂຕະຂອງຮ້ານ"
          />
        </div>
        <label className="text">ເບີໂທລະສັບຮ້ານ</label>
        <div className="input-group mb-3">
          <input
            onChange={handleChange}
            type="text"
            name="tell"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="ກາລຸນາພິມເບີໂທລະສັບຮ້ານ"
          />
        </div>
        <label className="text">ລາຄາໂຕະ</label>
        <div className="input-group mb-3">
          <input
            onChange={handleChange}
            type="number"
            name="price"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="ກາລຸນາພິມລາຄາຂອງແຕ່ລະໂຕະ"
          />
        </div>
        <label className="text">ວ/ດ/ປ</label>
        <div className="input-group mb-3">
          <input
            onChange={handleChange}
            type="date"
            name="date"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <label className="text">ຮູບພາບ</label>
        <div className="input-group mb-3">
          <input
            onChange={handleChange}
            type="file"
            name="file"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <button onClick={handleAddData} className="btn btn-primary btn-lg">
          ຍືນຍັນ
        </button>
      </div>
      <Footer />
    </>
  );
}

export default AddRes;
