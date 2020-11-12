const orderBtns = document.querySelectorAll('.add-cart');
const orderForm = document.querySelector('.order-form');
const deleteBtns = document.querySelectorAll('.deleteBtn');
const customOrder = document.querySelector('.custom-order');
const table = document.querySelector('.order-table');

const Foods = [{
    foodId: 1,
    foodName: "Rice Salad",
    foodPrice: 20000
}, {
    foodId: 2,
    foodName: "Pork Salad",
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

orderBtns.forEach(orderBtn => {
    orderBtn.addEventListener('click', () => {
        const orderId = +orderBtn.getAttribute('data-target');

        let food = Foods.find(food => food.foodId === orderId);
        console.log(food);
        const div = document.createElement('tr');
        // div.className = "orders";

        // console.log(div);

        div.innerHTML = `
             
                        <td>
                        <input type="text" id="${food.foodId}" value="${food.foodName}" name="${food.foodId}">
                        </td>
                        <td>
                            <input type="text" id="${food.foodId}" value="UGX ${food.foodPrice}" name="${food.foodId}">
                        </td>
                        <td>
                            <a class="deleteBtn" data-target="${food.foodId}">Delete</a>
                        </td>
    
                `;

        table.appendChild(div);


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