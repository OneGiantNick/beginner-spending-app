var spending_form = document.getElementById('spendingForm');
function handleForm(event) {
    event.preventDefault();
}
spending_form.addEventListener('submit', handleForm);

function closeTodo(close) {
    var span = close.parentElement;
    span.parentElement.parentElement.remove();
    totalCost()
}

function addItem() {
    var new_item = document.getElementById('nameInput').value;
    var new_item_price = document.getElementById('priceInput').value;
    document.getElementById('nameInput').value = '';
    document.getElementById('priceInput').value = '';

    var new_item_div = document.createElement('div');
    new_item_div.appendChild(document.createTextNode(new_item));
    new_item_div.id = 'itemName';

    var close_icon = document.createElement('span');
    close_icon.appendChild(document.createTextNode('\u00d7'));
    close_icon.id = 'close';

    var new_price = document.createElement('span');
    new_price.appendChild(document.createTextNode(new_item_price));
    new_price.appendChild(close_icon);
    new_price.id = 'itemPrice';
    new_price.className = 'itemPrice';

    var new_item_list = document.createElement('div');
    new_item_list.id = 'listItem'
    new_item_list.appendChild(new_item_div);
    new_item_list.appendChild(new_price);

    var list_item = document.createElement('li');
    list_item.appendChild(new_item_list)

    close_icon.onclick = function () {
        var span = this.parentElement;
        span.parentElement.parentElement.remove();
        totalCost()
    };

    var price_list = document.getElementById('spendingList');
    price_list.appendChild(list_item);
    totalCost()
}



function totalCost() {
    var allItems = document.getElementsByClassName('itemPrice');
    var sum = 0
    for (var i = 0; i < allItems.length; i++) {
        console.log(i)
        console.log(allItems[i].childNodes[0].textContent)
        sum = sum + Number(allItems[i].childNodes[0].textContent);
    }
    var totalCost = document.getElementById('totalCost');
    if (sum === 0) {
        totalCost.textContent = 0.00;
    } else {
        totalCost.textContent = sum
    }
}
