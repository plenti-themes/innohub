<script>
    export let title, description, image, icon, sectionText1, sectionText2, items, sectionText3;
</script>
<section class="section about" id="about" aria-label="about">
  <div class="container">
    <div class="about-banner img-holder" style="--width: 720; --height: 960;">
      <img
        src="{image.url}"
        width="720"
        height="960"
        loading="lazy"
        alt="{image.alt}"
        class="img-cover"
      />

      <button class="play-btn" aria-label="Play video">
        <ion-icon name="{icon.name}" aria-hidden="true" />
      </button>
    </div>

    <div class="about-content">
      <h2 class="h2 section-title">{title}</h2>

      <p class="section-text">
        {description}
      </p>

      <h3 class="h3">{sectionText1.title}</h3>

      <p class="section-text">
     {sectionText1.description}
      </p>

      <h3 class="h3">{sectionText2.title}</h3>

      <ul class="about-list">
        {#each items as item}
        <li class="about-item">
          <ion-icon name="{item.list.icon}" aria-hidden="true" />
          <p class="section-text">
            {item.list.text}
          </p>
        </li>
        {/each}
      </ul>

      <h3 class="h3">{sectionText3.title}</h3>

      <p class="section-text">
        {sectionText3.description}
      </p>
    </div>
  </div>
</section>
