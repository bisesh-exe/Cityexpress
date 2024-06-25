import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = () => {
  return (
    <>
    <div className="container-fluid my-4 px-0" style={{ backgroundColor: 'white', height: '300px' }}>
      <div className="row justify-content-center" style={{ height: '100%', paddingTop: 0 }}>
        <div className="col-12 col-md-11 col-lg-10 px-3">
          <div id="carouselExample" className="carousel slide" style={{ height: '250px', marginTop: '25px' }}>
            <div className="carousel-inner" style={{ height: '100%' }}>
              <div className="carousel-item active" style={{ height: '100%' }}>
                <img
                  src="https://static.toiimg.com/photo/msid-107256233,width-96,height-65.cms"
                  className="d-block w-100"
                  alt="..."
                  style={{ height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="carousel-item" style={{ height: '100%' }}>
                <img
                  src="https://res.cloudinary.com/enchanting/q_70,f_auto,c_fill,g_face/hj-web/2015/09/thai-traditional-wooden-longtail-boat-and-blue-sky-in-Maya-bay-Thailand.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{ height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="carousel-item" style={{ height: '100%' }}>
                <img
                  src="https://lp-cms-production.imgix.net/2024-01/GettyImages-1273413451.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{ height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Carousel;
