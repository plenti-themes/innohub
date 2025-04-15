<script>
	export let title, subtitle, author, date, tags, image, body;
</script>

<section class="blog container section">
	<h1 class="h1">{title}</h1>
	<div class="subtitle">{subtitle}</div>
	<div class="post-meta">
		<div>
			<ion-icon name="person"/><a href="/about">{author}</a>
		</div>
		<div>
			<ion-icon name="pricetag"/><a href="#">{tags[0]}</a>
		</div>
		<div>
			<ion-icon name="calendar"/>{date}
		</div>
	</div>
	<img src={image.src} alt={image.alt} />
	<p class="body">{@html body}</p>
</section>

<style>
	.subtitle {
		padding-left: 20px;
		border-left: 3px solid var(--persian-rose);
		font-style: italic;
		font-size: 2rem;
		margin-bottom: 10px;
	}
	.post-meta {
		display: flex;
		gap: 20px;
		margin-bottom: 20px;
	}
	.post-meta > div {
		display: flex;
		align-items: center;
		gap: 5px;
		color: var(--red-crayola);
	}
	img {
		width: 50%;
		border-radius: 10px;
	}
	.blog :global(p) {
		margin: 10px 0;
	}
	.blog :global(li) {
		list-style: disc;
		margin-left: 20px;
		padding-left: 10px;
	}
    .blog .body :global(a) {
        display: inline;
        color: var(--persian-rose);
    }
</style>