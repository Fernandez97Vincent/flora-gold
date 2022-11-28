import React from "react";
import './style.css';

function Carousel() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://i5.walmartimages.com/asr/4c470f21-6a33-4dbf-9f7d-cf9d04d22d4f_1.581f293d48ee368862dd2176a06f6498.jpeg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://scene7.zumiez.com/is/image/zumiez/image/Yu-Gi-Oh%21-Yugi-Mutou-Black-Tie-Dye-T-Shirt-_345803.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://scene7.zumiez.com/is/image/zumiez/image/Hypland-x-Yu-Gi-Oh-Kaiba-Blue-Eyes-Blue-T-Shirt-_356785.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    )
}

export default Carousel;