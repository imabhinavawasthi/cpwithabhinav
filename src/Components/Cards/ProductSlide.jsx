import React from 'react'
import '../Cards/ProductSlide.css'
const ProductSlide = () => {
    return (
        <div>

            {/* <link href="https://raw.githubusercontent.com/daneden/animate.css/master/animate.css" rel="stylesheet" /> */}

            <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="mask flex-center">
                            <div class="container">
                                <div class="row align-items-center">
                                    <div class="col-md-7 col-12 order-md-1 order-2">
                                        <h4>Present your <br />
                                            awesome product</h4>
                                        <p>Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum <br />
                                            necessitatibus praesentium voluptatum deleniti atque corrupti.</p>
                                        <a href="#">BUY NOW</a> </div>
                                    <div class="col-md-5 col-12 order-md-2 order-1"><img src="https://i.imgur.com/NKvkfTT.png" class="mx-auto" alt="slide" /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductSlide
