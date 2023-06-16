<script>
    export let items, title, body;
</script>

<section class="section project" id="project" aria-label="project">
  <div class="container">
    <h2 class="h2 section-title">{title}</h2>

    <p class="section-text">
      {body}
    </p>

    <ul class="grid-list">
    {#each items as item}
      <li>
        <div class="project-card">
          <figure
            class="card-banner img-holder"
            style="--width: 510; --height: 700;"
          >
            <img
              src="{item.image.url}"
              width="510"
              height="700"
              loading="lazy"
              alt="{item.image.alt}"
              class="img-cover"
            />
          </figure>

          <div class="card-content">
            <p class="card-subtitle">{item.card.subtitle}</p>

            <h3 class="h3">
              <a href="." class="card-title"
                >{item.card.title}</a
              >
            </h3>
            <a href="." class="btn btn-primary">{item.link.title}</a>
          </div>
        </div>
        </li>
      {/each}
    </ul>
    <div class="view-more-work">
      <a class="btn btn-primary" href="projects"><ion-icon name="list" class="check fa-solid"></ion-icon> View More</a>
    </div>
  </div>
</section>

<style>
  .view-more-work {
   margin-top: 40px;
   text-align: center;
 }
  .fa-solid {
   -webkit-font-smoothing: antialiased;
   font-family: "Font Awesome 6 Free";
   font-feature-settings: normal;
   font-variant: normal;
   font-weight: 900;
   line-height: 1;
   text-rendering: auto;
 }
 .check {
   display: inline-block;
   vertical-align: middle;
 }
</style>