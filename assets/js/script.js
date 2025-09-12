// ===== index.html =====
console.log("Página de FreshAgain cargada correctamente");

// ===== detalle-producto.html =====
document.addEventListener('DOMContentLoaded', function() {
    // Miniaturas de imágenes
    if (document.querySelectorAll('.thumbnail').length) {
        document.querySelectorAll('.thumbnail').forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                const newImage = this.getAttribute('data-image');
                document.getElementById('main-image').src = newImage;
            });
        });
    }

    // Botón añadir al carrito
    const btnAddCart = document.querySelector('.btn-add-cart');
    if (btnAddCart) {
        btnAddCart.addEventListener('click', function() {
            alert('Producto añadido al carrito (simulación)');
        });
    }

    // Botón favoritos
    const btnFavorite = document.querySelector('.btn-favorite');
    if (btnFavorite) {
        btnFavorite.addEventListener('click', function() {
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                alert('Producto añadido a favoritos');
            } else {
                alert('Producto removido de favoritos');
            }
        });
    }
});

// ===== categorias.html =====
document.addEventListener('DOMContentLoaded', function() {
    // Botón "Mostrar más"
    const showMore = document.querySelector('.show-more');
    if (showMore) {
        showMore.addEventListener('click', function() {
            alert('Funcionalidad de "Mostrar más" activada. Cargarían más productos en una implementación real.');
        });
    }

    // Selector de productos a mostrar
    const viewSelect = document.querySelector('.view-options select');
    if (viewSelect) {
        viewSelect.addEventListener('change', function() {
            alert('Mostrando ' + this.value);
        });
    }

    // Botón de filtro
    const filterBtn = document.querySelector('.filter-btn');
    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            alert('Aplicando filtros...');
        });
    }

// ===== categorias.html =====
document.addEventListener('DOMContentLoaded', function() {
    // Botón "Mostrar más"
    const showMore = document.querySelector('.show-more');
    if (showMore) {
        showMore.addEventListener('click', function() {
            alert('Funcionalidad de "Mostrar más" activada. Cargarían más productos en una implementación real.');
        });
    }

    // Selector de productos a mostrar
    const viewSelect = document.querySelector('.view-options select');
    if (viewSelect) {
        viewSelect.addEventListener('change', function() {
            alert('Mostrando ' + this.value);
        });
    }

    // Botón de filtro general
    const filterBtn = document.querySelector('.filter-btn');
    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            alert('Aplicando filtros...');
        });
    }

    // Filtro rápido por DROPS u OFERTAS
    const dropsBtn = document.getElementById('filter-drops');
    const offersBtn = document.getElementById('filter-offers');
    const allBtn = document.getElementById('filter-all');
    const cards = document.querySelectorAll('.products-grid .product-card');

    // Función para aplicar filtros
    function aplicarFiltro(tipo) {
        cards.forEach(card => {
            if (tipo === 'all') {
                card.style.display = '';
            } else if (tipo === 'drops') {
                card.style.display = card.querySelector('.tag-drops') ? '' : 'none';
            } else if (tipo === 'ofertas') {
                card.style.display = card.querySelector('.tag-offer') ? '' : 'none';
            }
        });
    }

    // Event listeners para los botones de filtro
    if (dropsBtn) {
        dropsBtn.addEventListener('click', function() {
            aplicarFiltro('drops');
        });
    }

    if (offersBtn) {
        offersBtn.addEventListener('click', function() {
            aplicarFiltro('ofertas');
        });
    }

    if (allBtn) {
        allBtn.addEventListener('click', function() {
            aplicarFiltro('all');
        });
    }

    // ✅ NUEVO: Filtro automático desde URL
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get('filter');
    
    if (filter && (filter === 'drops' || filter === 'ofertas')) {
        // Esperar un momento para asegurar que todo esté cargado
        setTimeout(() => {
            aplicarFiltro(filter);
            
            // También simular click en el botón correspondiente si existe
            if (filter === 'drops' && dropsBtn) {
                dropsBtn.click();
            } else if (filter === 'ofertas' && offersBtn) {
                offersBtn.click();
            }
        }, 100);
    }
});
});

// ===== signin.html =====
document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signin-form');
    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            if (!email || !password) {
                alert('Por favor, completa todos los campos');
                return;
            }
            alert('Inicio de sesión exitoso (simulación)');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }
});

// ===== signup.html =====
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }
            alert('Cuenta creada con éxito (simulación)');
        });
    }
});
