const orderBtns = document.querySelectorAll('.add-cart');
const orderForm = document.querySelector('.order-form');
<<<<<<< HEAD
const customOrder = document.querySelector('.custom-order');
const table = document.querySelector('.order-table');
const popupMenu = document.querySelector('.popup-menu');
const deleteBtn = document.querySelectorAll('.deleteBtn');
const noOrders = document.querySelector('.no-orders');
const priceTotal = document.querySelector('.total');

let message = "";
let totals = [];
console.log(deleteBtn);
=======
const deleteBtns = document.querySelectorAll('.deleteBtn');
const customOrder = document.querySelector('.custom-order');
const table = document.querySelector('.order-table');
>>>>>>> 9ffc3c1b213b6a9afb48a00305cabafe36193276

const Foods = [{
    foodId: 1,
    foodName: "Rice Salad",
    foodPrice: 20000
}, {
    foodId: 2,
    foodName: "Pork Salad",
<<<<<<< HEAD
    foodPrice: 30000
}, {
    foodId: 3,
    foodName: "Chicken Salad",
    foodPrice: 24000
}, {
    foodId: 4,
    foodName: "Italian Beef",
    foodPrice: 40000
}];

noOrders.classList.add('view');

=======
    foodPrice: 20000
}, {
    foodId: 3,
    foodName: "Chicken Salad",
    foodPrice: 20000
}, {
    foodId: 4,
    foodName: "Italian Beef",
    foodPrice: 20000
}];

>>>>>>> 9ffc3c1b213b6a9afb48a00305cabafe36193276
orderBtns.forEach(orderBtn => {
    orderBtn.addEventListener('click', () => {
        const orderId = +orderBtn.getAttribute('data-target');

<<<<<<< HEAD
        let sum = 0;

        noOrders.classList.remove('view');

        let food = Foods.find(food => food.foodId === orderId);
        console.log(food);
        const div = document.createElement('tr');
        div.className = "order";
=======
        let food = Foods.find(food => food.foodId === orderId);
        console.log(food);
        const div = document.createElement('tr');
        // div.className = "orders";
>>>>>>> 9ffc3c1b213b6a9afb48a00305cabafe36193276

        // console.log(div);

        div.innerHTML = `
             
<<<<<<< HEAD
                        <td class="${food.foodId}">
=======
                        <td>
>>>>>>> 9ffc3c1b213b6a9afb48a00305cabafe36193276
                        <input type="text" id="${food.foodId}" value="${food.foodName}" name="${food.foodId}">
                        </td>
                        <td>
                            <input type="text" id="${food.foodId}" value="UGX ${food.foodPrice}" name="${food.foodId}">
                        </td>
<<<<<<< HEAD
                        <td onclick="removeFoodItem(this, ${food.foodPrice})">
=======
                        <td>
>>>>>>> 9ffc3c1b213b6a9afb48a00305cabafe36193276
                            <a class="deleteBtn" data-target="${food.foodId}">Delete</a>
                        </td>
    
                `;

        table.appendChild(div);
<<<<<<< HEAD
        message = `${food.foodName} has been added to your order menu.`;
        showPopupMenu(message);

        let price = food.foodPrice;

        totals.push(price);
        console.log(totals);

        console.log(sum);

        totals.forEach(total => {
            sum += total;
            console.log(sum);
            return sum;
        });

        removePrice = (price) => {
            totals.splice(totals.indexOf(price), 1);
            console.log(totals);

            sum -= price;
            console.log(sum);
            priceTotal.innerHTML = `TOTAL: UGX ${sum}`;

            return sum;
        }
        priceTotal.innerHTML = `TOTAL: UGX ${sum}`;
    });
});


function removeFoodItem(elmnt, foodPrice) {
    elmnt.parentElement.style.display = 'none';
    removePrice(foodPrice);
}

showPopupMenu = (popupMessage) => {
    //Set initial state of menu
    let showMenu = false;
    if (!showMenu) {
        popupMenu.classList.add('show');
        popupMenu.innerHTML = popupMessage;
        showMenu = true;
    }

    setTimeout(() => {
        popupMenu.classList.remove('show');
        popupMenu.innerHTML = '';
        showMenu = false;
    }, 3000);

}
=======


        // orderForm.insertBefore(div, customOrder);

        // console.log(div);

    });

    console.log(deleteBtns);

    deleteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', () => {
            const deleteId = +deleteBtn.getAttribute('data-target');

            console.log(deleteId);
        });
    });
});
>>>>>>> 9ffc3c1b213b6a9afb48a00305cabafe36193276
