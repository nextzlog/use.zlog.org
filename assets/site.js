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

	const heads = [...body.querySelectorAll('h2[id]')];
	const contents = document.querySelector('.contents');
	if (heads.length >= 3 && contents && here.startsWith('/manual/')) {
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
			const links = [...doc.querySelectorAll('.body ol a[href]')]
				.map((a) => ({ a, path: decode(new URL(a.getAttribute('href'), `${location.origin}/manual/`).href) }))
				.filter((x) => x.path.startsWith('/manual/'));
			const i = links.findIndex((x) => x.path === here);
			if (i < 0) return;
			const item = links[i].a.closest('li').parentElement.closest('li');
			const section = item && [...item.childNodes].filter((n) => !['OL', 'UL'].includes(n.nodeName)).map((n) => n.textContent).join('').trim();
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
