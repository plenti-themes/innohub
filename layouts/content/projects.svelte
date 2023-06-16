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
  </div>
</section>