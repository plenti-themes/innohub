<script>
    export let image, title, subtitle, link;
</script>

<section
  class="section cta"
  aria-label="cta"
  alt="{image.alt}"
  style= "background-image: url(./media/cta-bg.jpg);"
>
  <div class="container">
    <p class="cta-subtitle">{subtitle}</p>

    <h2 class="h2 section-title">{title}</h2>

    <a href="{link.url}" class="btn btn-secondary">{link.title}</a>
  </div>
</section>
