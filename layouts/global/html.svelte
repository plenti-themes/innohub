<script>
  import Head from './head.svelte';
  import Nav from './nav.svelte';
  import Footer from './footer.svelte';
  import Login from './login.svelte';

  export let content, layout, env, allContent, allLayouts, user;
</script>

<html lang="en">
  <Head title={content.filename} {env} {...content.fields} />
  <body id="top">
    {#if user && $user.isAuthenticated}
    <svelte:component this={$user.menu} {user} bind:content={content} />
  {/if}
    <header class="header" data-header>
      <div class="container">
        <Nav />
      </div>
    </header>
    <main>
      <Login {user} />
      <article>
    <svelte:component this={layout} {...content.fields} {allContent} {allLayouts} {content}/>
      </article>
    </main>
    <Footer />
  </body>
</html>