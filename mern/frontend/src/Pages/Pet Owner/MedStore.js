import React from 'react';
import TopNavBar from './TopNavBar';

const MedStore = () => {
  return (
    <div>
      <TopNavBar />

      <h1
        className='container'
        style={{ textAlign: 'left', padding: '40px 0px' }}
      >
        Store
      </h1>
      <div className='container' style={{ marginTop: '20px' }}>
        <div className='row'>
          <div class='card col-3 card-style'>
            <img
              src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTl5PkH-1b4LkfxEjoUREh4CeX7Uew5Dl2QIiSXjGs1TOO4ANZJmlVOu86JK3Wo2bVuytvjJeBM0Nc3SgRAZnHWmG8gq8A2G5XdM92_n-epwgXFK_zVu9U8&usqp=CAE'
              class='card-img-top'
              alt='...'
            />
            <div class='card-body'>
              <h5 class='card-title'>Dog Heartgard Chewables</h5>
              <p class='card-text'> 59.99 $</p>
              <a href='#' class='btn btn-primary'>
                Add to Cart
              </a>
            </div>
          </div>

          <div class='card col-3 card-style'>
            <img
              src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRAaOWkbLBfg9Feu8eLBJm0taj3Es32eUTqd9q7_p5f7KP55fnqReEmxudDR8NPwMCLa2ZoEhKObFlnpLA9Rs9Akmaksd8XHBhss7EFLnY&usqp=CAE'
              class='card-img-top'
              alt='...'
            />
            <div class='card-body'>
              <h5 class='card-title'>
                Drontal Plus Chewable Tablet for Small Dogs and Puppies, 2-25
              </h5>
              <p class='card-text'> 18.79 $</p>
              <a href='#' class='btn btn-primary'>
                Add to Cart
              </a>
            </div>
          </div>
          <div class='card col-3 card-style'>
            <img
              src='https://m.media-amazon.com/images/I/91+fp-sph2L._AC_SX466_.jpg'
              class='card-img-top'
              alt='...'
            />
            <div class='card-body'>
              <h5 class='card-title'>
                Pedigree 18 Pouch Chopped Ground Dinner
              </h5>
              <p class='card-text'> 18.79 $</p>
              <a href='#' class='btn btn-primary'>
                Add to Cart
              </a>
            </div>
          </div>

          <div class='card col-3 card-style'>
            <img
              src='https://cdn-fsly.yottaa.net/5bec7d3d2bb0ac476731cced/www.allivet.com/v~4b.2a2/images/PRODUCT/large/1426.jpg?yocs=m_q_'
              class='card-img-top'
              alt='...'
            />
            <div class='card-body'>
              <h5 class='card-title'>Atopica for Dogs, 15 Capsules</h5>
              <p class='card-text'> 93.49 $</p>
              <a href='#' class='btn btn-primary'>
                Add to Cart
              </a>
            </div>
          </div>

          <div class='card col-3 card-style'>
            <img
              src='https://cdn-fsly.yottaa.net/5bec7d3d2bb0ac476731cced/www.allivet.com/v~4b.2a2/images/PRODUCT/large/907.jpg?yocs=m_q_'
              class='card-img-top'
              alt='...'
            />
            <div class='card-body'>
              <h5 class='card-title'>Diphenhydramine 50mg Capsules 100 ct.</h5>
              <p class='card-text'> 10.49 $</p>
              <a href='#' class='btn btn-primary'>
                Add to Cart
              </a>
            </div>
          </div>

          <div class='card col-3 card-style'>
            <img
              src='https://cdn-fsly.yottaa.net/5bec7d3d2bb0ac476731cced/www.allivet.com/v~4b.2a2/images/PRODUCT/large/9367.jpg?yocs=m_q_'
              class='card-img-top'
              alt='...'
            />
            <div class='card-body'>
              <h5 class='card-title'>
                MilbeGuard Flavored Tablets for Dogs and Cats, 6 Month Supply
              </h5>
              <p class='card-text'> 19.49 $</p>
              <a href='#' class='btn btn-primary'>
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedStore;
