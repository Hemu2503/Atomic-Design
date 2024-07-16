import "bootstrap";
import "./Header.css";
function Header() {
  return (
    <div class='topnav'>
        
      <nav class="navbar navbar-background navbar-expand-lg navbar-light"id="navb">
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
                  <li id="lis">
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
  );
}

export default Header;