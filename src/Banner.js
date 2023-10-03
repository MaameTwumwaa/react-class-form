import React from "react";
class Banner extends React.Component {
  render() {
    return (
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              style={{ width: "300px", height: "300px", objectFit: "cover" }}
              src="sagar-kulkarni-8Td8zBzoAfM-unsplash.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
              src="photo-1549249061-0433f0b4bdb0.avif"
            />
          </div>
          <div class="carousel-item">
            <img
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
              src="/photo-1595967444215-4901e8436909.avif"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default Banner;
