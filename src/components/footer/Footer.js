import React from 'react'
const footer = () => {
  return (
   <footer>
      <div className="container p-3 mb-2 footing "/>
          <div className="row">
              <div className="col ">
                <p>Main Menu</p>
                <hr/>
                <ul  className="list-unstyled">
                  <li><a href="/" className="text-decoration-none wall  ">Home</a></li>
                  <li><a href="/" className="text-decoration-none wall ">Shop All</a></li>
                  <li><a href="/" className="text-decoration-none wall "> Apparel</a></li>
                  <li><a href="/" className="text-decoration-none wall ">Plushies</a></li>
                  <li><a href="/" className="text-decoration-none wall ">Accessories</a></li>
                  <li><a href="/" className="text-decoration-none wall ">Footwear</a></li>
                  <li><a href="/" className="text-decoration-none wall ">Mystery Items</a></li>
                </ul>
            </div>
              <div className="col" >
                <p>More Info</p>
                <hr/>
                <ul className="list-unstyled ">
                  <li><a href="/" className="text-decoration-none wall " text-dark>Sizing Charts</a></li>
                  <li><a href="/" className="text-decoration-none wall ">Faq</a></li>
                  <li><a href="/" className="text-decoration-none wall ">Return & Exchange Policy</a></li>
                  <li><a href="/" className="text-decoration-none wall ">Contact</a></li>
                  <li><a href="/" className="text-decoration-none wall ">Search</a></li>
                  <li><a href="/" className="text-decoration-none wall ">Privacy Policy</a></li>
                  <li><a href="/" className="text-decoration-none wall ">Terms Of Service</a></li>
                </ul>
              </div>
              <div className="col">
                <p >Newsletter</p>
                <hr/>
                <p className="wall">Join to get special offers, free giveaways, and <br/>
                once-in-a-lifetime deals.
                </p>
                <form method="post" action="/contact#contact_form" id="contact_form" accept-charset="UTF-8" className="contact-form"><input type="hidden" name="form_type" value="customer"/><input type="hidden" name="utf8" value="✓"/>
                  <input type="hidden" name="contact[accepts_marketing]" value="true"/>
                  <div className="input-group newsletter-form">
                    <input type="email" placeholder="your-email@example.com" id="mail" className="input-group-field" aria-label="your-email@example.com" autocorrect="off" autocapitalize="off" name="contact[email]" fdprocessedid="2frdo"/>
                      <input type="submit" className="btn uppercase" name="subscribe" id="subscribe" value="Join" fdprocessedid="rxbiir"/>
                  </div>
                </form>
              </div>
            </div>
          <div className="container">
            <div className=" d-flex justify-content-evenly">
              <ul className="inline-list list-unstyled align-items-center ">
                <li className="list-inline-item fs-6 "><a className="text-decoration-none wall  "href="https://www.ketnipz.com">© KETNIPZ 2023</a></li>
                <li className="list-inline-item fs-6 pencil"><a className="text-decoration-none wall  "href="https://www.killermerch.com">Killer Merch</a></li>
              </ul>
            </div>
            <div className=" d-flex justify-content-evenly">
              <div className="inline-list list-unstyled ">
                <img src="twitter.png" className="rounded float-left social" href="https://twitter.com/ketnipz" target="_blank"/>
                <img src="facebook.png "  className="rounded float-left  social "/>
                <img src="ig (1).png" className="rounded float-left social " />
                <img src="youtube.png" className="rounded float-left social"/>
              </div>
            </div>
            <div>
              <div className=" d-flex justify-content-center">
                <div className="inline-list list-unstyled">
                  <img src="amazon.png" className="rounded float-left payment"/>
                  <img src="visa.png"  className="rounded float-left payment"/>
                  <img src="discover 1.png" className="rounded float-left payment"/>
                  <img className="rounded float-left payment" src="discover 2.png" alt=""/>
                </div>
              </div>
            </div>
        </div>
  </footer>
  
  )
}

export default footer
