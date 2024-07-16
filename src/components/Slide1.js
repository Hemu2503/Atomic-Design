import "bootstrap";
import "./Slide1.css";
import "./Footer.css";
import "./Header.css";
import "./Slide2.css";
function Slide1(){
    return(
        <div class="bg-black">
        <div class='topnav'>
        
        <nav class="navbar navbar-background navbar-expand-lg navbar-light"style={{padding:"20px 10px",backgroundColor:"black"}}>
          <div class="navbar-menu navbar-container-fluid d-flex justify-content-between align-items-center w-100" id="menu">
            <div>
            <a class="navbar-brand text-white" href="#">
              {/* <b>atomic</b>digital.design */}
              <img src="https://web.archive.org/web/20240328201000im_/https://assets-global.website-files.com/63c51da2c092f85f95b40ac3/6476334cfcfe6f3251669575_logo-line.svg" id="img1"></img>
            </a>
            </div>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
              <ul class="navbar-nav me-5 mb-lg-0" id="nav">
              <li class="nav-item dropdown"id="navdrop">
                  <a
                    class="nav-link text-white"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul class="dropdown-menu" id="dropdwn"aria-labelledby="navbarDropdown">
                    <li>
                      <a class="navbar-dropdown-link dropdown-item text-white" id="df" 
                      href="https://web.archive.org/web/20240328201000/https://atomicdigital.design/social-ar">
                        <div class="d-flex">
                        <img sizes="" class="img" src="https://web.archive.org/web/20240526001717im_/https://assets-global.website-files.com/63c51da2c092f85f95b40ac3/6421b240f91f1276ba75bcbc_SOCIAL_AR_LOGO_512.webp">
                        </img>
                        
                        <div class="navbar-text-wrapper">
                        <div class="h5 text-color-white">Social AR</div>
                        <p class="p">Engage your audience with social AR</p>
                      
                        </div>
                        
                        </div> 
                        
                        
                      </a>
                    </li>
                    {/* <li>
                      <a class="dropdown-item bg-dark text-white" href="#">
                        Web AR
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item bg-dark text-white" href="#">
                        AR Consulting
                      </a>
                    </li> */}
                    <li>
                    <a class="navbar-dropdown-link dropdown-item text-white" id="df" 
                      href="https://web.archive.org/web/20240524093906/https://atomicdigital.design/web-ar">
                        <div class="d-flex">
                        <img sizes="" class="img" src="https://web.archive.org/web/20240524093906im_/https://assets-global.website-files.com/63c51da2c092f85f95b40ac3/642c2286f76f000564cf1283_WEB_AR_LOGO_512.webp">
                        </img>
                        
                        <div class="navbar-text-wrapper">
                        <div class="h5 text-color-white">Web AR</div>
                        <p class="p">Bring your products to life with web AR</p>
                      
                        </div>
                        
                        </div> 
                        
                        
                      </a>
                      </li>
                      <li>
                      <a class="navbar-dropdown-link dropdown-item text-white" id="df"
                      href="https://web.archive.org/web/20240524093906/https://atomicdigital.design/ar-consulting">
                        <div class="d-flex">
                        <img sizes="" class="img" src="https://web.archive.org/web/20240526001717im_/https://assets-global.website-files.com/63c51da2c092f85f95b40ac3/6421b25cf91f1220a875d836_KNOWLEDGE_LOGO_512.webp">
                        </img>
                        
                        <div class="navbar-text-wrapper">
                        <div class="h5 text-color-white">AR Consulting</div>
                        <p class="p">Don't get left behind and embrace the future</p>
                      
                        </div>
                        
                        </div> 
                        
                        
                      </a>
                      </li>
                  </ul>
                </li>
                <li class="nav-item" id="navdrop">
                  <a class="nav-link active text-white" aria-current="page" href="#">
                    Gallery
                  </a>
                </li>
                <li class="nav-item active" id="navdrop">
                  <a class="nav-link active text-white" href="#">
                    Case Studies
                  </a>
                </li>
                
                <li class="nav-item active"id="navdrop">
                  <a
                    class="nav-link active text-white"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Blog
                  </a>
                </li>
                <li class="nav-item active" id="navdrop">
                  <a class="nav-link active text-white" aria-current="page" href="#">
                    Careers
                  </a>
                </li>
                <li class="nav-item active"id="navdrop">
                  <a class="nav-link active text-white" aria-current="page" href="#">
                    About
                  </a>
                </li>
              <li class="nav-item"></li>
                <button class="btn active btn-outline-light bg-dark text-white is-small w-button" id="sub"type="submit">
                  Contact us
                </button>
              <li/>
              </ul>
            </div>
          </div>
        </nav>
        
  </div>

{/* body */}
        <div class="container-large d-flex" id="body">
            <div class="container">
                <strong class="strong">The Augmented Reality<br/>Powerhouse</strong>
                <p class="text-color rocket-entry"id="text">Merging creativity and technology to empower brands</p>
                <div data-w-id="3c19da7d-4953-98ac-464b-d2536f404978" id="butto"class="button-circle-wrapper is-circle-small">
                    <a href="#subheader" class="w-inline-block">
                        <div class="button-circle-wrapper is-circle-small">
                            <div class="icon-button is-arrow down w-embed">
                                <svg xmlns="http://www.w3.org/2000/svg"fill="" class="bi bi-arrow-down-circle" viewBox="0 0 16 16"  id="iconbut">
                                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>
                {/* SLIDE-2 */}
                <header id="subheader" class="section_home_subheader">
            <div class="padding-global">
                <div class="container-large">
                    <div class="padding-section-medium">
                        <div class="w-layout-grid home_subheader_component">
                            <div class="max-width-large">
                                <div class="fade-in-100ms">
                                    <p class="text-size-large text-color-white">
                                        <br/>
                                        In today's fast-paced digital world, businesses must evolve and adapt to the ever-changing landscape. Traditional marketing methods and e-commerce platforms are no&nbsp;longer enough to keep customers engaged and drive sales. The challenge lies in creating an interactive, immersive, and unique shopping experience that stands out among the competition.
                                        </p>
                                        </div>
                                        <div class="padding-bottom padding-medium">
                                            </div>
                                            <div class="fade-in-100ms">
                                                <div class="button-circle-wrapper is-circle-small">
                                                    <a href="#service" class="button is-circle-small w-inline-block">
                                                        <div class="icon-button is-arrow down w-embed">
                                                            <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title id="linkedin">Arrow icon</title>
        <path d="M1.33317 6.66667H8.77984L5.5265 9.92001C5.2665 10.18 5.2665 10.6067 5.5265 10.8667C5.7865 11.1267 6.2065 11.1267 6.4665 10.8667L10.8598 6.47334C10.9216 6.41166 10.9707 6.33841 11.0041 6.25776C11.0376 6.17711 11.0548 6.09065 11.0548 6.00334C11.0548 5.91603 11.0376 5.82957 11.0041 5.74892C10.9707 5.66828 10.9216 5.59502 10.8598 5.53334L6.47317 1.13334C6.41145 1.07162 6.33818 1.02266 6.25753 0.989255C6.17689 0.955852 6.09046 0.93866 6.00317 0.93866C5.91588 0.93866 5.82945 0.955852 5.74881 0.989255C5.66817 1.02266 5.59489 1.07162 5.53317 1.13334C5.47145 1.19506 5.42249 1.26833 5.38909 1.34898C5.35568 1.42962 5.33849 1.51605 5.33849 1.60334C5.33849 1.69063 5.35568 1.77706 5.38909 1.8577C5.42249 1.93835 5.47145 2.01162 5.53317 2.07334L8.77984 5.33334H1.33317C0.966504 5.33334 0.666504 5.63334 0.666504 6.00001C0.666504 6.36667 0.966504 6.66667 1.33317 6.66667Z" fill="currentColor"></path>
        </svg></div></a></div></div></div><div class="home_subheader_image-wrapper">

        </div>
        </div>
        </div>
        </div>
        </div>
        </header>

        {/* FOOTER */}
      <div class="container text-center footer" id="col-container">
        <div class="row align-items-start" id="row-container">
          <div class="col text-white text-start fw-bolder fs-5 mr-3" id="footer-head1">
            Atomic
            <div class="text-start fw-normal fs-6 mt-2" id="col1-text">
              <a href="#" class="href-link">Case Studies</a>
            </div>
            <div class="text-start fw-normal fs-6 mt-2" id="col1-text">
              <a href="#">Blog</a>
            </div>
            <div class="text-start fw-normal fs-6 mt-2" id="col1-text">
              <a href="">Careers</a>
            </div>
            <div class="text-start fw-normal fs-6 mt-2" id="col1-text">
              <a href="#">About</a>
            </div>
          </div>
          <div class="col text-white text-start fw-bold fs-5" id="footer-head2">
            Services
            <div class="text-start fw-normal fs-6 mt-2" id="col1-text">
              <a href="#">Social AR</a>
            </div>
            <div class="text-start fw-normal fs-6 mt-2" id="col1-text">
              <a href="#">Web AR</a>
            </div>
            <div class="text-start fw-normal fs-6 mt-2" id="col1-text">
              <a href="#">AR Consulting</a>
            </div>
          </div>
          <div class="col text-white text-start fw-bold fs-5" id="footer-head3">
            AR Gallery
            <div class="text-start fw-normal fs-6 mt-2" id="col1-text">
              <a href="#">Luxury</a>
            </div>
            <div class="text-start fw-normal fs-6 mt-2" id="col1-text">
              <a href="#">Art & Culture</a>
            </div>
            <div class="text-start fw-normal fs-6 mt-2" id="col1-text">
              <a href="#">Food and Beverage</a>
            </div>
            <div class="text-start fw-normal fs-6 mt-2" id="col1-text">
              <a href="#">Beauty</a>
            </div>
          </div>
          <div class="col text-white text-start fw-bold fs-5 ml-5" id="footer-head4">
            The place to be
            <div class="text-start fw-normal fs-6 mt-2" id="col1-text">
              Paris,FR<br/>42 Rue Marguerite<br/>deRochechouart 75009, Paris, France
            </div>
            <div class="text-start fw-normal fs-6 mt-2" id="col1-text">
              contact@atomicdigital.design
            </div>
            <div class="text-start fw-normal fs-6 mt-2" id="col1-text">
            +33 (0)1 84 16 33 85
            </div>
          </div>
        </div>
      </div>        
    </div>
  </div>
</div>
    );
}
export default Slide1;