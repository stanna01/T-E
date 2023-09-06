document.addEventListener('DOMContentLoaded', function() {
    const showcase = document.querySelector('.items');
    const addItemButton = document.getElementById('addItem');
    const removeItemButton = document.getElementById('removeItem');

    addItemButton.addEventListener('click', function() {
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.textContent = 'Promo Item';
        showcase.appendChild(newItem);
    });

    removeItemButton.addEventListener('click', function() {
        const items = document.querySelectorAll('.item');
        if (items.length > 0) {
            const lastItem = items[items.length - 1];
            showcase.removeChild(lastItem);
        }
    });
});
