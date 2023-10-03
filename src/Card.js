import React from "react";
class Card extends React.Component {
  render() {
    return (
      <div class="card-group">
        <div class="card">
          <img
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
            src="/photo-1595967444215-4901e8436909.avif"
          />
        </div>
        <div class="card">
          <img
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
            src="/istockphoto-1619220840-170667a.webp"
          />
          <div class="card-body"></div>
        </div>
        <div class="card">
          <img
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
            src="/photo-1551217624-a2de6db7e01d.avif"
          />
          <div class="card-body"></div>
        </div>
      </div>
    );
  }
}
export default Card;
