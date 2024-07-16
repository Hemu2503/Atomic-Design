import "bootstrap";
import "./Footer.css";

function Footer(){
    return(
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
    );
}
export default Footer;