<script>
    export let title, body, items, allContent;
    $: selectedPath = allContent.find(content => content.type == "services" && content.fields.title === items.title);
</script>

<section class="section service" id="service" aria-label="service">
  <div class="container">
    <h2 class="h2 section-title">{title}</h2>

    <p class="section-text">
      {body}
    </p>

    <ul class="grid-list">
     {#each items as item}
      <li>
        <div class="service-card">
          <div class="card-icon" style="background-color: {item.icon.colour}">
            <ion-icon name="{item.icon.title}" />
          </div>

          <h3 class="h3">
            <a href="{selectedPath?.path}" class="card-title">{item.title}</a>
          </h3>

          <p class="card-text">
            {item.body}
          </p>
        </div>
      </li>
      {/each}
    </ul>
  </div>
</section>
