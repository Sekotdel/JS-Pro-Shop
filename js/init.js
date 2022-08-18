const productsSale = [
    {id: 1, title: 'Notebook', price: 200, icon: 'notebook.jpg', images: ['mi-1.jpg',   'mi-2.jpg',   'mi-3.jpg',   'mi-4.jpg'  ]},
    {id: 2, title: 'Mouse',    price: 2,   icon: 'mouse.jpg',    images: ['logi-1.jpg', 'logi-2.jpg', 'logi-3.jpg', 'logi-4.jpg']},
    {id: 3, title: 'Keyboard', price: 20,  icon: 'keyboard.jpg', images: ['dual-1.jpg', 'dual-2.jpg', 'dual-3.jpg', 'dual-4.jpg']},
    {id: 4, title: 'Gamepad',  price: 5,   icon: 'gamepad.jpg',  images: ['gama-1.jpg', 'gama-2.jpg', 'gama-3.jpg', 'gama-4.jpg']},
];

const productsNew = JSON.parse(JSON.stringify(productsSale)).map(product => {
	product.id += 100;
	product.price *= 10;
	product.images.reverse();
	
	return product;
}).reverse();

const templateCarouselItem = (image) => `
	<div class="wrapItem"></div>
	<img alt="" src="images/products/imageswrp/${image}" />
`;

const templateCard = ({title, price, icon, images}) => `
	    <div class="productsTest">
			<div class="product-item">
				<div class="image-wrap">${(images || []).reduce((html, image) => html + templateCarouselItem(image), '')}</div>
				<h3 class="product-name">${title}</h3>
				<p class="product-price">${price} ₽</p>
				<button class="buy-btn">Купить</button>
			</div>
		</div>
`;

const renderProduct = product => templateCard(product);

const renderCards = (containerEl, list) => containerEl.innerHTML = list.map(renderProduct).join('');

renderCards(document.querySelector('.products.sale'), productsSale);
renderCards(document.querySelector('.products.new'),  productsNew);