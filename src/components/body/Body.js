import React from 'react'
import './body.css'
import fronthoodie from '../../assets/front-hoodie.webp'
import facecap from '../../assets/facecap.webp'
import hoodie from '../../assets/hoodie.webp'
import ankara from '../../assets/ankara.jpg'
import arsenal from '../../assets/arsenal.jpg'
import beach from '../../assets/beach.jpg'
import cap from '../../assets/cap.webp'
import chelsea from '../../assets/chelsea.jpg'
import gown from '../../assets/gown.jpg'
import jeans from '../../assets/jeans.webp'
import kid from '../../assets/kid.webp'
import long from '../../assets/long.webp'
import love from '../../assets/love.webp'
import smores from '../../assets/smores.webp'
import suit from '../../assets/suit.webp'
import teddy from '../../assets/teddy.webp'
import thong from '../../assets/thong.jpg'
import united from '../../assets/united.jpg'
import white from '../../assets/white.webp'



const Body = () => {
  return (

<body>
  <div class="container-fluid">
    <div class="row">
        <div class="col-lg-12">
            <div class="image">
                <img class="first" src={fronthoodie} alt=""/>
                <img class="second" src={facecap} alt=""/>
                <img class="third" src={hoodie} alt=""/>
            </div>
        </div>
    </div>
  </div>

    <div class="container-fluid">
      <div class="row">
          <div class="col-lg-3">
            <div class="card1">
                <img src={teddy} class="card-img-top" alt=""/>
                <div class="card-body">
                  <h5 class="card-title">Basson teddy</h5>
                  <p class="card-text">Price - $400</p>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="card1">
                <img src={long} class="card-img-top" alt=""/>
                <div class="card-body">
                  <h5 class="card-title">Basson long sleeve</h5>
                  <p class="card-text">Price - $350</p>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="card1">
                <img src={love} class="card-img-top" alt=""/>
                <div class="card-body">
                  <h5 class="card-title">Basson top</h5>
                  <p class="card-text">Price - $200</p>
                </div>
              </div>
            </div>

              <div class="col-lg-3">
              <div class="card1">
                <img src={smores} class="card-img-top" alt=""/>
                <div class="card-body">
                  <h5 class="card-title">Basson blue hoodie</h5>
                  <p class="card-text">Price - $400</p>
                </div>
              </div>
            </div>
        </div>   
   </div>

   <div class="container-fluid">
    <div class="row">
        <div class="col-lg-3">
          <div class="card2">
              <img src={white} class="card-img-top" alt=""/>
              <div class="card-body">
                <h5 class="card-title">Basson white sleeve</h5>
                <p class="card-text">Price - $300</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card2">
              <img src={suit} class="card-img-top" alt=""/>
              <div class="card-body">
                <h5 class="card-title">Basson men suits</h5>
                <p class="card-text">Price - $450</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card2">
              <img src={cap} class="card-img-top" alt=""/>
              <div class="card-body">
                <h5 class="card-title">Basson cap</h5>
                <p class="card-text">Price - $200</p>
              </div>
            </div>
          </div>

            <div class="col-lg-3">
            <div class="card2">
              <img src={kid} class="card-img-top" alt=""/>
              <div class="card-body">
                <h5 class="card-title">Basson kid top</h5>
                <p class="card-text">Price - $150</p>
              </div>
            </div>
          </div>
      </div>   
 </div>

 <div class="container-fluid">
    <div class="row">
        <div class="col-lg-3">
          <div class="card3">
              <img src={ankara} class="card-img-top" alt=""/>
              <div class="card-body">
                <h5 class="card-title">Basson super ankara</h5>
                <p class="card-text">Price - $40/yard</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card3">
              <img src={beach} class="card-img-top" alt=""/>
              <div class="card-body">
                <h5 class="card-title">Basson beach wear</h5>
                <p class="card-text">Price - $100</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card3">
              <img src={gown} class="card-img-top" alt=""/>
              <div class="card-body">
                <h5 class="card-title"> Basson short gown </h5>
                <p class="card-text">Price - $250</p>
              </div>
            </div>
          </div>

            <div class="col-lg-3">
            <div class="card3">
              <img src={thong} class="card-img-top" style="height: 230px;" alt=""/>
              <div class="card-body">
                <h5 class="card-title">Basson red G-string</h5>
                <p class="card-text">Price - $90</p>
              </div>
            </div>
          </div>
      </div>   
 </div>

 <div class="container-fluid">
    <div class="row">
        <div class="col-lg-3">
          <div class="card4">
              <img src={united} class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">Basson man united jersey</h5>
                <p class="card-text">Price - $200</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card4">
              <img src={chelsea} class="card-img-top" alt=""/>
              <div class="card-body">
                <h5 class="card-title">Basson chelsea jersey</h5>
                <p class="card-text">Price - $200</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card4">
              <img src={arsenal} class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">Basson arsenal jersey</h5>
                <p class="card-text">Price - $200</p>
              </div>
            </div>
          </div>

            <div class="col-lg-3">
            <div class="card4">
              <img src={jeans} class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">Basson mens jeans</h5>
                <p class="card-text">Price - $150</p>
              </div>
            </div>
          </div>
      </div>   
 </div>
</body>
    
  )
}

export default Body