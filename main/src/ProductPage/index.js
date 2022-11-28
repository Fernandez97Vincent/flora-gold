import React from "react";
import './style.css';

function ProductPage() {
    return (
        <div class="card">
            <img class="card-img-top" src="https://i5.walmartimages.com/asr/4c470f21-6a33-4dbf-9f7d-cf9d04d22d4f_1.581f293d48ee368862dd2176a06f6498.jpeg" alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">Sick ass Yugioh shirt</h5>
                <a href="#" class="btn">Add To Cart</a>
            </div>
        </div>
    )
}

export default ProductPage;