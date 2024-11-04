let total = 0;

function addItem(name, price) {
    const cartItems = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');

    // Adiciona item ao carrinho
    const li = document.createElement('li');
    li.innerHTML = `${name} - R$ ${price.toFixed(2)} <button class="remove-button" onclick="removeItem(this, ${price})">Remover</button>`;
    cartItems.appendChild(li);

    // Atualiza o total
    total += price;
    totalDisplay.innerHTML = `<strong>Total: R$ ${total.toFixed(2)}</strong>`;
}

function removeItem(button, price) {
    const cartItems = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');

    // Remove item do carrinho
    cartItems.removeChild(button.parentElement);

    // Atualiza o total
    total -= price;
    totalDisplay.innerHTML = `<strong>Total: R$ ${total.toFixed(2)}</strong>`;
}
