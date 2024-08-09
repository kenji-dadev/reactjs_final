import React from 'react'
import NavbarCT from './NavbarCT'
import cat from "../assets/cat1.jpg"
import '../App.css'
import Footer from './Footer';

function Contact() {
  return (
    <>
    <NavbarCT/>
    <div class="cont row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success-emphasis">Design</strong>
          <h3 class="mb-0">Post title</h3>
          <div class="mb-1 text-body-secondary">Nov 11</div>
          <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
            <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
          </a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img src={cat} alt="" />
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success-emphasis">Design</strong>
          <h3 class="mb-0">Post title</h3>
          <div class="mb-1 text-body-secondary">Nov 11</div>
          <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
            <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
          </a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img src={cat} alt="" />
        </div>
      </div>
    </div>
    
  </div>
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
      <img loading="lazy" width="525" height="302" src="https://easywithai.com/storage/2023/06/Clipdrop-768x442.webp" class="attachment-medium_large size-medium_large wp-image-7934" alt=""></img>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5  text-body-emphasis lh-1 mb-3">ຕິດຕໍ່ສອບຂໍ້ມູນທີ່ນີ້</h1>
        <p class="lead">ຄວາມຈິງແມ່ນຄວາມເປັນໄປໄດ້ທີ່ຄວນຍອມຮັບ ແຕ່ຄວາມຝັນມັນບໍ່ເຄີຍປ່ຽນແປງ. <br /> ທຸກຄວາມເຈັບປວດເປັນຫນັງສືພຽງໜ້ານຶ່ງໃນຊີວິດຂອງເຮົາ.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">ຄິກHERE!</button>
          
        </div>
      </div>
    </div>
  </div>

<Footer/>

    </>
  )
}

export default Contact