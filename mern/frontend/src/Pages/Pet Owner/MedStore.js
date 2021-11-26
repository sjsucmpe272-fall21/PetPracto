import React from 'react'
import TopNavBar from './TopNavBar'

const MedStore = () => {
    return (
        <div>
            <TopNavBar />

            <h1 className="container" style={{ textAlign: "left", padding: "40px 0px" }}>Store</h1>
            <div className="container" style={{ marginTop: "20px" }}>

                <div className="row">
                    <div class="card col-3 card-style">
                        <img src="https://m.media-amazon.com/images/I/91+fp-sph2L._AC_SX466_.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Pedigree 18 Pouch Chopped Ground Dinner</h5>
                            <p class="card-text"> 18.79 $</p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>

                    <div class="card col-3 card-style" >
                        <img src="https://m.media-amazon.com/images/I/91+fp-sph2L._AC_SX466_.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Pedigree 18 Pouch Chopped Ground Dinner</h5>
                            <p class="card-text"> 18.79 $</p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                    <div class="card col-3 card-style">
                        <img src="https://m.media-amazon.com/images/I/91+fp-sph2L._AC_SX466_.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Pedigree 18 Pouch Chopped Ground Dinner</h5>
                            <p class="card-text"> 18.79 $</p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>

                    <div class="card col-3 card-style">
                        <img src="https://m.media-amazon.com/images/I/91+fp-sph2L._AC_SX466_.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Pedigree 18 Pouch Chopped Ground Dinner</h5>
                            <p class="card-text"> 18.79 $</p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MedStore
