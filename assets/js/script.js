// Centralized, cleaned JS for the site

document.addEventListener('DOMContentLoaded', () => {
	// Mensaje básico
	console.log('Página de FreshAgain cargada correctamente');

	// ===== detalle-producto.html =====
	(function initProductDetail() {
		const thumbnails = document.querySelectorAll('.thumbnail');
		const mainImg = document.getElementById('main-image');
		if (thumbnails.length && mainImg) {
			thumbnails.forEach(t => t.addEventListener('click', function () {
				thumbnails.forEach(x => x.classList.remove('active'));
				this.classList.add('active');
				const newImage = this.getAttribute('data-image') || '';
				if (newImage) mainImg.src = newImage;
			}));
		}

		const btnAddCart = document.querySelector('.btn-add-cart');
		if (btnAddCart) btnAddCart.addEventListener('click', () => {
			alert('Producto añadido al carrito (simulación)');
		});

		const btnFavorite = document.querySelector('.btn-favorite');
		if (btnFavorite) btnFavorite.addEventListener('click', function () {
			this.classList.toggle('active');
			alert(this.classList.contains('active') ? 'Producto añadido a favoritos' : 'Producto removido de favoritos');
		});
	})();

	// ===== categorias.html =====
	(function initCategoriasFilter() {
		// Detectar si la página tiene grid de productos
		const productsGrid = document.querySelector('.products-grid');
		if (!productsGrid) return;

		const dropsBtn = document.getElementById('filter-drops');
		const offersBtn = document.getElementById('filter-offers');
		const allBtn = document.getElementById('filter-all');
		const cards = Array.from(document.querySelectorAll('.products-grid .product-card'));

		// if no product cards, nothing to do
		if (!cards.length) return;

		function aplicarFiltro(tipo) {
			// tipo: 'all' | 'drops' | 'ofertas'
			cards.forEach(card => {
				if (tipo === 'all') {
					card.style.display = '';
				} else if (tipo === 'drops') {
					card.style.display = card.querySelector('.tag-drops') ? '' : 'none';
				} else if (tipo === 'ofertas') {
					card.style.display = card.querySelector('.tag-offer') ? '' : 'none';
				}
			});
			// actualizar estado visual en botones (opcional)
			[dropsBtn, offersBtn, allBtn].forEach(b => b && b.classList.remove('active'));
			if (tipo === 'drops' && dropsBtn) dropsBtn.classList.add('active');
			if (tipo === 'ofertas' && offersBtn) offersBtn.classList.add('active');
			if (tipo === 'all' && allBtn) allBtn.classList.add('active');
		}

		if (dropsBtn) dropsBtn.addEventListener('click', () => aplicarFiltro('drops'));
		if (offersBtn) offersBtn.addEventListener('click', () => aplicarFiltro('ofertas'));
		if (allBtn) allBtn.addEventListener('click', () => aplicarFiltro('all'));

		// Aplicar filtro si viene por query string (?filter=drops o ?filter=ofertas)
		const params = new URLSearchParams(window.location.search);
		const q = (params.get('filter') || '').toLowerCase();
		if (q === 'drops' || q === 'ofertas') {
			// corto delay para asegurar render inicial
			setTimeout(() => aplicarFiltro(q === 'drops' ? 'drops' : 'ofertas'), 20);
		}
	})();

	// ===== UI generales =====
	(function initGeneralUI() {
		const showMore = document.querySelector('.show-more');
		if (showMore) showMore.addEventListener('click', () => {
			alert('Funcionalidad de "Mostrar más" activada. Cargarían más productos en una implementación real.');
		});

		const viewSelect = document.querySelector('.view-options select');
		if (viewSelect) viewSelect.addEventListener('change', function () {
			alert('Mostrando ' + this.value);
		});

		const filterBtn = document.querySelector('.filter-btn');
		if (filterBtn) filterBtn.addEventListener('click', () => {
			alert('Aplicando filtros...');
		});
	})();

	// ===== signin.html =====
	(function initSignin() {
		const signinForm = document.getElementById('signin-form');
		if (!signinForm) return;
		signinForm.addEventListener('submit', function (e) {
			e.preventDefault();
			const email = document.getElementById('email').value;
			const password = document.getElementById('password').value;
			if (!email || !password) {
				alert('Por favor, completa todos los campos');
				return;
			}
			alert('Inicio de sesión exitoso (simulación)');
			setTimeout(() => { window.location.href = 'index.html'; }, 800);
		});
	})();

	// ===== signup.html =====
	(function initSignup() {
		const signupForm = document.getElementById('signup-form');
		if (!signupForm) return;
		signupForm.addEventListener('submit', function (e) {
			e.preventDefault();
			const password = document.getElementById('password').value;
			const confirmPassword = document.getElementById('confirm-password').value;
			if (password !== confirmPassword) {
				alert('Las contraseñas no coinciden');
				return;
			}
			alert('Cuenta creada con éxito (simulación)');
		});
	})();

});
