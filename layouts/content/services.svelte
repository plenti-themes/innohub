<script> 
    // import Cta from '../components/cta.svelte';
    export let title, image, description, list;
</script>
<div class="services-details-area ptb-100 inherited-styles-for-exported-element">
    <div class="container">
        <h2 class="h2 section-title">{title}</h2>
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="services-details-image"><img src="{image.source}" alt="{image.altText}">
            <div class="video-box">
              <div class="video-btn"><i class="fa-solid fa-play"></i></div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="services-details-desc">
            <h2>{description.title}</h2>
            <p>{description.paragraph}</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="services-details-info">
            <h3>{list.title}</h3>
            <ul>
              <li>{list.item1}</li>
              <li>{list.item2}</li>
              <li>{list.item3}</li>
              <li>{list.item4}</li>
              <li>{list.item5}</li>
              <li>{list.item6}</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <Cta /> -->
    </div>
  </div>

  
<style>
  *, ::after, ::before {
    box-sizing: border-box;
  }

  .inherited-styles-for-exported-element {
    color: #646464;
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    text-align: start;
  }

  h2, h3, p {
    margin-bottom: 40px;
  }

  h2, h3 {
    color: #18181b;
    font-family: Saira, sans-serif;
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    color: #646464;
    font-size: 15px;
    line-height: 1.8;
    margin-bottom: 15px;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }

  p, ul {
    font-family: Inter, sans-serif;
  }

  @media only screen and (max-width: 767px) {

    .inherited-styles-for-exported-element,   p {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    p {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    p {
      font-size: 15px;
    }
  }

  .container {
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(1.5rem*.5);
    padding-right: calc(1.5rem*.5);
    width: 100%;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }

  @media (min-width: 1400px) {
    .container {
      max-width: 1320px;
    }
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(-.5*1.5rem);
    margin-right: calc(-.5*1.5rem);
    margin-top: calc(-1*0);
  }

  .row>* {
    flex-shrink: 0;
    margin-top: 0;
    max-width: 100%;
    padding-left: calc(1.5rem*.5);
    padding-right: calc(1.5rem*.5);
    width: 100%;
  }

  @media (min-width: 768px) {
    .col-md-12 {
      flex: 0 0 auto;
      width: 100%;
    }
  }

  @media (min-width: 992px) {
    .col-lg-4 {
      flex: 0 0 auto;
      width: 33.3333%;
    }

    .col-lg-12,   .col-lg-8 {
      flex: 0 0 auto;
      width: 66.6667%;
    }

    .col-lg-12 {
      width: 100%;
    }
  }

  .fa-solid {
    -webkit-font-smoothing: antialiased;
    display: block;
    font-family: "Font Awesome 6 Free";
    font-feature-settings: normal;
    font-variant: normal;
    font-weight: 900;
    line-height: 1;
    text-rendering: auto;
  }

  .ptb-100 {
    padding-bottom: 100px;
    padding-top: 100px;
  }

  .video-box {
    text-align: center;
  }

  .services-details-image {
    position: relative;
  }

  .services-details-desc, .services-details-info {
    margin-top: 50px;
  }

  @media only screen and (max-width: 767px) {
    .ptb-100 {
      padding-bottom: 50px;
      padding-top: 50px;
    }

    .services-details-desc,   .services-details-info {
      margin-top: 30px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .ptb-100 {
      padding-bottom: 70px;
      padding-top: 70px;
    }

    .services-details-desc,   .services-details-info {
      margin-top: 30px;
    }
  }

  .fa-play::before {
    content: "";
  }

  p:last-child {
    margin-bottom: 0;
  }

  .services-details-desc h2, .services-details-info h3 {
    font-size: 26px;
    margin-bottom: 15px;
  }

  .services-details-info ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @media only screen and (max-width: 767px) {
    .services-details-info h3 {
      font-size: 19px;
      margin-bottom: 15px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .services-details-info h3 {
      font-size: 20px;
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .services-details-info h3 {
      font-size: 22px;
    }
  }

  .services-details-info ul li {
    color: #646464;
    line-height: 1.8;
    margin-bottom: 10px;
    padding-left: 20px;
    position: relative;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .services-details-info ul li {
      font-size: 14px;
    }
  }

  .services-details-info ul li::before {
    background-color: initial;
    background-image: linear-gradient(to left top, #ff2c9c, #ff287b, #ff395a, #ff5137, #ff6a00);
    border-radius: 50%;
    content: "";
    height: 8px;
    left: 0;
    position: absolute;
    top: 11px;
    width: 8px;
  }

  .video-box .video-btn, .video-box .video-btn i {
    left: 0;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }

  .video-box .video-btn {
    background-color: #f9004d;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, .2) 0 20px 30px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 40px;
    height: 90px;
    width: 90px;
  }

  .video-box .video-btn::after, .video-box .video-btn::before {
    border: 1px solid #f9004d;
    border-radius: 50%;
    bottom: 0;
    content: "";
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: all .5s;
    z-index: -1;
  }

  .video-box .video-btn i {
    padding-left: 8px;
  }

  .video-box .video-btn::before {
    animation: ripple 2s linear infinite;
  }

  .video-box .video-btn::after {
    animation: ripple 2s linear 1s infinite;
  }

  .video-box .video-btn:focus, .video-box .video-btn:hover {
    background-color: #ff2c9c;
    color: #fff;
  }

  @media only screen and (max-width: 767px) {
    .services-details-image .video-box .video-btn {
      font-size: 30px;
      height: 50px;
      width: 50px;
    }
  }

  .video-box .video-btn:focus::after, .video-box .video-btn:focus::before, .video-box .video-btn:hover::after, .video-box .video-btn:hover::before {
    border-color: #ff2c9c;
  }
</style>