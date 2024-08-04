import React from 'react'
import NavbarCT from './NavbarCT'
import { LinkContainer } from 'react-router-bootstrap';
import '../App.css'
import Nav from 'react-bootstrap/Nav';
import cat from "../assets/Screenshot 2024-07-25 082816.png"
import Footer from './Footer'

function Management() {
  return (
    <>
      <NavbarCT/>
      
      <div className="manage container-fluid m-5 ">
        <div className="row">
          
          <div className="col-md-3 text-center">
            <img src={cat} alt="" className='rounded'/>
            <h2 className="fw-normal">ເພີ່ມຂໍ້ມູນຮ້ານຄ້າ</h2>
            <p className="fw-normal">ການເພີ່ມຂໍ້ມູນຮ້ານຄ້າເພື່ອການໃຫ້ບໍລີການມີສະດວກສະບາຍຍິ່ງຂື້ນ<br /> 
                ແຕ່ຢາກໃຫ້ຮັກສອງເຮົາໝັ່ນຄົງ......?
            </p>
            <LinkContainer to="/addres">
                  <Nav.Link><button type="button" class="btn btn-primary btn-lg">ເພີ່ມຮ້ານຄ້າ</button></Nav.Link>
                </LinkContainer>
          </div>
         
          <div className="col-md-3 text-center">
            <img src={cat} alt="" className='rounded'/>
            <h2 className="fw-normal">ແກ້ໄຂຂໍ້ມູນຮ້ານຄ້າ</h2>
            <p className="fw-normal">ການແກ້ໄຂຂໍ້ມູນທີ່ວ່ອງໄວຂື້ນ ແລະ ສະດວກກວ່າທີ່ໃດໆ!
              <br /> ເພາະໃສ່ໃຈໄດ້ມອງ!</p>
            <LinkContainer to="/upres">
                  <Nav.Link><button type="button" class="btn btn-primary btn-lg">ແກ້ໄຂຮ້ານຄ້າ</button></Nav.Link>
                </LinkContainer>
          </div>
          <div className="col-md-3 text-center">
            <img src={cat} alt="" className='rounded'/>
            <h2 className="fw-normal">ລົບຂໍ້ມູນຮ້ານຄ້າ</h2>
            <p className="fw-normal">ການລົບຂໍ້ມູນທີ່ໄວກວ່າການດິດນີ້ວ <br /> ເພາະແຄ່ການຄິກເຈົ້າກະພ້ອມຈາກລາ! </p>
            <LinkContainer to="/delres">
                  <Nav.Link><button type="button" class="btn btn-primary btn-lg">ລົບຂໍ້ມູນຮ້ານຄ້າ</button></Nav.Link>
                </LinkContainer>
          </div>
          
          
        </div>


    </div>

<Footer/>

  </>
  )
}

export default Management