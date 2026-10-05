document.getElementById("OrderForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let product = document.getElementById("product").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;
    let status = document.getElementById("status").value;
    let delivery = document.getElementById("delivery").value;

    document.getElementById("output").innerHTML =
        "customer:" + name +
        "<br> product: " + product
    "<br> quantity:" + quantity
    "<br> price:" + price
    "<br> status:" + status
    "<br> delivery:" + delivery
});

document.getElementById("OrderForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let quantity = Number(document.getElementById("quantity").value);
    let price = Number(document.getElementById("price").value);

    let subtotal = quantity * price;
    let discount = 0;

    if (status === "member") {
        discount = subtotal * 0.10;
    }

    let finaltotal = subtotal - discount;

    document.getElementById("output").innerHTML = " finaltotal: R" + finaltotal.toFixed(2);
});

function calculatesubtotal(quantity, price) {

    return quantity * price
};

function calculatefinaltotal(subtotal, status) {

    if (status === "member") {
        discount = subtotal * 0.10;
    }

    return calculatefinaltotal
}

document.getElementById("OrderForm").addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let product = document.getElementById("product").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;
    let status = document.getElementById("status").value;
    let delivery = document.getElementById("delivery").value;

    if (name === "" || product === "" || status === "" || delivery === "") {
        output.innerHTML = " please enter the valid name, product name ,member status,delivery option.";
        return;
    };
    if (!Number.isInteger(quantity) || quantity < 0) {
        output.innerHTML = " please enter the valid Number.";
        return;
    };
    if (!Number.isFinite(price) || price < 0) {
        output.innerHTML = " please enter the valid Number.";
        return;
    };
    document.getElementById("output").innerHTML = "Order has Succesfully complete";

    orders.push({
        id: orders.leghth + 1,
        customername: customername,
        product: product,
        finaltotal: finaltotal,
        status: "Pending"
    });
    displayOrders(orders)
});


let orders = [];
// B3: reusable functions
function calculatesubtotal(quantity, price) {
    return quantity * price;
}
function calculatefinaltotal(subtotal, status) {
    let discount = 0;
    if (status === "member") {
        discount = subtotal * 0.10;
    }
    return subtotal - discount;
}
// B5: show orders and change Pending to Ready
function displayOrders(list) {
    document.getElementById("orders").innerHTML = list.map(function (order) {
        let line = order.id + " - " + order.customerName + " - " + order.productName +
            " - R " + order.finalTotal.toFixed(2) + " - " + order.status;
        if (order.status === "Pending") {
            line += ' <button onclick="markReady(' + order.id + ')">Mark Ready</button>';
        }
        return line;
    }).join("<br>");
}
function markReady(id) {
    let order = orders.find(function (order) {
        return order.id === id;
    });
    order.status = "Ready";
    displayOrders(orders);
}
// B4: one submit handler with validation
document.getElementById("OrderForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let output = document.getElementById("output");
    let name = document.getElementById("name").value.trim();
    let product = document.getElementById("product").value.trim();
    let quantity = Number(document.getElementById("quantity").value);
    let price = Number(document.getElementById("price").value);
    let status = document.getElementById("status").value.trim().toLowerCase();
    let delivery = document.getElementById("delivery").value.trim();
    if (name === "" || product === "" || status === "" || delivery === "") {
        output.textContent = "Please fill in all fields.";
        return;
    }
    if (!Number.isInteger(quantity) || quantity <= 0) {
        output.textContent = "Quantity must be a positive whole number.";
        return;
    }
    if (!Number.isFinite(price) || price <= 0) {
        output.textContent = "Unit price must be a positive number.";
        return;
    }
    // B2 + B3: calculate and show the summary
    let subtotal = calculatesubtotal(quantity, price);
    let finaltotal = calculatefinaltotal(subtotal, status);
    let discount = subtotal - finaltotal;
    output.textContent = "";
    [
        "Customer: " + name,
        "Product: " + product,
        "Subtotal: R" + subtotal.toFixed(2),
        "Discount: R" + discount.toFixed(2),
        "Final total: R" + finaltotal.toFixed(2)
    ].forEach(function (text) {
        let p = document.createElement("p");
        p.textContent = text;
        output.appendChild(p);
    });
    // B5: save the order
    orders.push({
        id: orders.length + 1,
        customerName: name,
        productName: product,
        finalTotal: finaltotal,
        status: "Pending"
    });
    displayOrders(orders);
});