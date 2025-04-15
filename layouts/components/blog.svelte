<script>
  export let title, body, allContent;

  let posts = allContent.filter(content => content.type == "blog").sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date));
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
              src="{posts[0]?.fields?.image?.src}"
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
                <ion-icon name="person"/><a href="/about">{posts[0]?.fields?.author}</a>
              </li>
              <li>
                <ion-icon name="pricetag"/><a href="/blog-details/"
                  >{posts[0]?.fields?.tags[0]}</a
                >
              </li>
              <li><ion-icon name="calendar"/>{posts[0]?.fields?.date}</li>
            </ul>

            <h3 class="h3">
              <a href="{posts[0]?.path}" class="card-title">{posts[0]?.fields?.title}</a>
            </h3>
            <a class="subtitle" href="{posts[0]?.path}">{posts[0]?.fields?.subtitle}</a>
          </div>
        </div>
      </li>
      {#each posts.slice(1) as post}
        <li>
          <div class="blog-card grid">
            <figure
              class="card-banner img-holder"
              style="--width: 860; --height: 646;"
            >
              <img
                src={post.fields.image.src}
                width="860"
                height="646"
                loading="lazy"
                alt={post.fields.image.alt}
                class="img-cover"
              />
            </figure>

            <div class="card-content">
              <ul class="post-meta">
                <li>
                  <ion-icon name="person"/><a href="/about">{post.fields.author}</a>
                </li>
                <li>
                  <ion-icon name="pricetag"/><a href="#">{post.fields.tags[0]}</a>
                </li>
                <li>
                  <ion-icon name="calendar"/>{post.fields.date}
                </li>
              </ul>

              <h3 class="h3"><a href="{post.path}" class="card-title">{post.fields.title}</a></h3>
              <a class="subtitle" href="{post.path}">{post.fields.subtitle}</a>
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
  a.subtitle {
	  color: initial;
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