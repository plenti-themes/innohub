<script>
    export let title, subtitle, body, link, image;
</script>

<section class="section hero" id="home" aria-label="hero">
  <div class="container">
    <div class="hero-content">
      <p class="hero-subtitle">{subtitle}</p>

      <h1 class="h1 hero-title">{title}</h1>

      <p class="hero-text">
        {body}
      </p>

      <a href="." class="btn btn-primary">{link.title}</a>
    </div>

    <figure class="hero-banner">
      <img
        src="{image.url}"
        width="720"
        height="673"
        alt="{image.alt}"
        class="w-100"
      />
    </figure>
  </div>
</section>
