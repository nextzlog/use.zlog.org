const decode = (url) => decodeURIComponent(new URL(url, location.href).pathname).replace(/(\.html|\/index\.html|\/)$/, '');
const here = decode(location.href);

document.querySelectorAll('.menu a').forEach((a) => {
	const path = decode(a.href);
	if (here === path || (path === '/manual/faq' && here.startsWith('/manual/faq'))) {
		a.setAttribute('aria-current', 'page');
	} else if (path === '/manual' && here.startsWith('/manual') && !here.startsWith('/manual/faq')) {
		a.setAttribute('aria-current', 'page');
	}
});

const body = document.querySelector('.body');

if (body) {
	body.querySelectorAll('table').forEach((t) => {
		const div = document.createElement('div');
		div.className = 'scroll';
		t.replaceWith(div);
		div.append(t);
	});

	body.querySelectorAll('h1, h2, h3').forEach((h) => {
		if (h.textContent.trim() !== '目次') return;
		const parts = [];
		for (let n = h.nextElementSibling; n; n = n.nextElementSibling) {
			if (n.tagName === 'HR' || /^H[1-6]$/.test(n.tagName)) break;
			parts.push(n);
		}
		const list = parts.find((n) => n.tagName === 'UL' || n.tagName === 'OL');
		const ul = list ? list.cloneNode(true) : document.createElement('ul');
		if (!list) parts.forEach((n) => n.querySelectorAll('a[href]').forEach((a) => {
			const li = document.createElement('li');
			li.append(a.cloneNode(true));
			ul.append(li);
		}));
		if (!ul.querySelector('a')) return;
		const card = document.createElement('nav');
		card.className = ul.querySelector('li ul, li ol') ? 'entry pagetoc' : 'entry pagetoc split';
		card.setAttribute('aria-label', '目次');
		const title = document.createElement('h2');
		title.textContent = '目次';
		card.append(title, ul);
		parts.filter((n) => n.querySelector('a[href]') || n === list).forEach((n) => n.remove());
		h.replaceWith(card);
		parts.filter((n) => n.isConnected).forEach((n) => card.before(n));
		const hr = card.nextElementSibling;
		if (hr && hr.tagName === 'HR') hr.remove();
	});

	const heads = [...body.querySelectorAll('h2[id]')];
	const contents = document.querySelector('.contents');
	if (heads.length >= 3 && contents && here.startsWith('/manual/') && !body.querySelector('.pagetoc')) {
		const list = contents.querySelector('ol');
		heads.forEach((h) => {
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.href = `#${h.id}`;
			a.textContent = h.textContent;
			li.append(a);
			list.append(li);
		});
		contents.hidden = false;
	}

	const zoom = document.querySelector('dialog.zoom');
	body.querySelectorAll('img').forEach((img) => {
		if (img.closest('a')) return;
		img.title = 'クリックで拡大';
		img.addEventListener('click', () => {
			zoom.querySelector('img').src = img.src;
			zoom.showModal();
		});
	});
	zoom.addEventListener('click', (e) => {
		if (e.target === zoom || e.target.tagName === 'IMG') zoom.close();
	});
}

const pager = document.querySelector('.pager');

if (pager && here.startsWith('/manual/')) {
	fetch('/manual/')
		.then((r) => r.text())
		.then((html) => {
			const doc = new DOMParser().parseFromString(html, 'text/html');
			const links = [...doc.querySelectorAll('.sections li a[href]')]
				.map((a) => ({ a, path: decode(new URL(a.getAttribute('href'), `${location.origin}/manual/`).href) }))
				.filter((x) => x.path.startsWith('/manual/'));
			const i = links.findIndex((x) => x.path === here);
			if (i < 0) return;
			const head = links[i].a.closest('section').querySelector('h2');
			const section = head && head.textContent.trim();
			if (section) document.querySelector('.crumbs .section').outerHTML = `<span>›</span><span>${section}</span>`;
			const link = (x, cls, label) => {
				if (!x) return;
				const a = document.createElement('a');
				a.className = cls;
				a.href = x.a.getAttribute('href').startsWith('http') ? x.a.href : new URL(x.a.getAttribute('href'), `${location.origin}/manual/`).href;
				a.innerHTML = `<small>${label}</small>`;
				a.append(x.a.textContent);
				pager.append(a);
			};
			link(links[i - 1], 'prev', '← 前のページ');
			link(links[i + 1], 'next', '次のページ →');
			pager.hidden = false;
		})
		.catch(() => {});
}
