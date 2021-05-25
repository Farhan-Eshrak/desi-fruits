import React from 'react';
import b1 from '../../../images/pexels-mohan-nannapaneni-6206290.jpg'
import b2 from '../../../images/pexels-oleg-magni-890507.jpg'
import b3 from '../../../images/pexels-pixabay-264537.jpg'
import './HeadCarousel.css'
const HeadCarousel = () => {
  return (
    <>
      <section className=" mb-5">
        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={b1} class="d-block w-100" style={{ height: '500px' }} alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>

                <button className="btn carbtn btn-lg p-3">View details</button>
              </div>
            </div>
            <div class="carousel-item">
              <img src={b2} class="d-block w-100" style={{ height: '500px' }} alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>

                <button className="btn carbtn btn-lg  p-3">View details</button>
              </div>
            </div>
            <div class="carousel-item">
              <img src={b3} class="d-block w-100" style={{ height: '500px' }} alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>

                <button className="btn carbtn btn-lg p-3">View details</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeadCarousel;