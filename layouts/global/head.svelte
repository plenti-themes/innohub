<script>
  export let env, meta;
</script>

<head>
  <meta charset='utf-8'>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name='viewport' content='width=device-width,initial-scale=1'>

  <title>{meta?.title}</title>
  
  <base href="{env.baseurl}">
  <script type="module" src={`${env.entrypointJS}/core/main.js`}></script>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>"
 
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <link rel='stylesheet' href={`${env.entrypointJS}/bundle.css`}>
  <link rel='stylesheet' href='global.css?{env.fingerprint}'>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
  href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&family=Roboto:wght@400;500;700&display=swap"
  rel="stylesheet">

</head>