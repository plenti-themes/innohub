<script>
  export let title, body, form, services, policy, button, email, address, phone;
</script>

<section class="section contact" id="contact" aria-label="contact">
  <div class="container">
    <h2 class="h2 section-title">{title}</h2>

    <p class="section-text">{body}</p>

    <form action="" class="contact-form">
      <div class="input-wrapper">
        <input
          type="text"
          name="name"
          aria-label="name"
          placeholder="Your name*"
          required
          class="input-field"
        />

        <input
          type="email"
          name="email_address"
          aria-label="email"
          placeholder="Email address*"
          required
          class="input-field"
        />
      </div>

      <div class="input-wrapper">
        <input
          type="text"
          name="subject"
          aria-label="subject"
          placeholder="Subject"
          class="input-field"
        />

        <input
          type="number"
          name="phone"
          aria-label="phone"
          placeholder="Phone number"
          class="input-field"
        />
      </div>

      <textarea
        name="message"
        aria-label="message"
        placeholder="Your message...*"
        required
        class="input-field"
      />

      <div class="checkbox-wrapper">
        <input
          type="checkbox"
          name="terms_and_policy"
          id="terms"
          required
          class="checkbox"
        />

        <label for="terms" class="label">
          Accept <a href="{services.url}" class="label-link">{services.text}</a> and
          <a href="{policy.url}" class="label-link">{policy.text}</a>
        </label>
      </div>

      <button type="submit" class="btn btn-primary">{button.title}</button>
    </form>

    <ul class="contact-list">
      <li class="contact-item">
        <div class="contact-card">
          <div class="card-icon">
            <ion-icon name="{email.icon}" aria-hidden="true" />
          </div>

          <div class="card-content">
            <h3 class="h3 card-title">{email.title}</h3>
            {#each email.addresses as email_address}
              <a href="mailto:{email_address}" class="card-link">{email_address}</a>
            {/each}
          </div>
        </div>
      </li>

      <li class="contact-item">
        <div class="contact-card">
          <div class="card-icon">
            <ion-icon name="{address.icon}" aria-hidden="true" />
          </div>

          <div class="card-content">
            <h3 class="h3 card-title">{address.title}</h3>

            <address class="card-address">
              {@html address.location}
            </address>
          </div>
        </div>
      </li>

      <li class="contact-item">
        <div class="contact-card">
          <div class="card-icon">
            <ion-icon name="{phone.icon}" aria-hidden="true" />
          </div>

          <div class="card-content">
            <h3 class="h3 card-title">{phone.title}</h3>
            {#each phone.numbers as phone_number}
              <a href="tel:{phone_number}" class="card-link">{phone_number}</a>
            {/each}
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>
