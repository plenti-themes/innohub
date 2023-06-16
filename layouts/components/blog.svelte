<script>
  export let title, body, items;
</script>

<section class="section blog" id="blog" aria-label="blog">
  <div class="container">
    <h2 class="h2 section-title">{title}</h2>

    <p class="section-text">
      {body}
    </p>

    <ul class="grid-list">
      <li>
        <div class="blog-card">
          <figure
            class="card-banner img-holder"
            style="--width: 860; --height: 646;"
          >
            <img
              src="./media/blog-1.jpg"
              width="860"
              height="646"
              loading="lazy"
              alt="How to Become a Successful Entry Level UX Designer"
              class="img-cover"
            />
          </figure>

          <div class="card-content">
            <ul class="post-meta inherited-styles">
              <li>
                <ion-icon name="person"/><a href=".">Admin</a>
              </li>
              <li>
                <ion-icon name="pricetag"/><a href="/blog-details/"
                  >Web Development</a
                >
              </li>
              <li><ion-icon name="calendar"/>Feb 15, 2023</li>
            </ul>

            <h3 class="h3">
              <a href="." class="card-title"
                >How to Become a Successful Entry Level UX Designer</a
              >
            </h3>
          </div>
        </div>
      </li>
      {#each items as item}
        <li>
          <div class="blog-card grid">
            <figure
              class="card-banner img-holder"
              style="--width: 860; --height: 646;"
            >
              <img
                src={item.image.url}
                width="860"
                height="646"
                loading="lazy"
                alt={item.image.alt}
                class="img-cover"
              />
            </figure>

            <div class="card-content">
              <ul class="post-meta">
                <li>
                  <ion-icon name="person"/><a href={item.author.url}
                    >{item.author.name}</a
                  >
                </li>
                <li>
                  <ion-icon name="pricetag"/><a href={item.category.url}
                    >{item.category.name}</a
                  >
                </li>
                <li>
                  <ion-icon name="calendar"/>{item.publish.date}
                </li>
              </ul>

              <h3 class="h3">
                <a href="." class="card-title">{item.card.title}</a>
              </h3>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  /* ".inherited-styles-for-exported-element" is a generated class for the inherited styles of the exported element, feel free to rename it. */
  
  *, ::after, ::before {
    box-sizing: border-box;
  }

.inherited-styles {
  color: #646464;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  text-align: start;
}
  
  a {
    text-decoration: none;
    transition: all .5s;
  }
  
  @media only screen and (max-width: 767px) {
    .inherited-styles {
      font-size: 14px;
    }
  }
  
  
  a:focus, a:hover {
    outline: 0 !important;
    text-decoration: none;
  }
  
  a:not([href]):not([class]), a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }
  
  .post-meta {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-block-end: 1em;
  }
  
  .post-meta li {
    color: var(--red-crayola);
    display: inline-block;
    font-size: 14px;
    margin-right: 18px;
    padding-left: 20px;
    position: relative;
  }
  
  @media only screen and (max-width: 767px) {
    .post-meta li {
      margin-bottom: 5px;
      margin-right: 18px;
    }
  }
  
  .post-meta li a {
    color: var(--red-crayola);
    display: inline-block;
  }
  
  .post-meta li ion-icon, .post-meta li::before {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .post-meta li ion-icon {
    left: 0;
    margin-right: 4px;
  }
  
/*   .post-meta li::before {
    background-color: #646464;
    content: "";
    height: 15px;
    right: -10px;
    width: 1px;
  } */
  
  
  .post-meta li:last-child {
    margin-right: 0;
  }
  
  .post-meta li a:focus, .post-meta li a:hover {
    color: var(--red-crayola);
  }
  
  .post-meta li:last-child::before {
    display: none;
  }
  
  /* ".inherited-styles-for-exported-element" is a generated class for the inherited styles of the exported element, feel free to rename it. */
  
  *, ::after, ::before {
    box-sizing: border-box;
  }
  
  
  a {
    text-decoration: none;
    transition: all .5s;
  }
  
  
  a:focus, a:hover {
    outline: 0 !important;
    text-decoration: none;
  }
  
  a:not([href]):not([class]), a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }
  
  li {
    color: var(--red-crayola);
    display: inline-block;
    font-size: 14px;
    margin-right: 18px;
    padding-left: 20px;
    position: relative;
  }
  
  @media only screen and (max-width: 767px) {
    li {
      margin-bottom: 5px;
      margin-right: 18px;
    }
  }
  
  
  li ion-icon, li::before {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  
  li ion-icon {
    left: 0;
    margin-right: 4px;
  }
  
  li::before {
    background-color: #646464;
    content: "";
    height: 15px;
    right: -10px;
    width: 1px;
  }
  
  
  li:last-child {
    margin-right: 0;
  }
  
  li a:focus, li a:hover {
    color: var(--red-crayola);
  }
  
  li:last-child::before {
    display: none;
  }
  
  </style>
