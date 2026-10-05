document.getElementById("OrderForm").addEventListener("submit",function(event){
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


document.getElementById("OrderForm").addEventListener("submit",function(event){
    event.preventDefault();

    let quantity = Number (document.getElementById("quantity").value);
    let price = Number(document.getElementById("price").value); 

    let subtotal = quantity * price;
    let discount =0;

    if (status ==="member"){
        discount= subtotal * 0.10;
    }

    let finaltotal = subtotal - discount;

    document.getElementById("output").innerHTML=" finaltotal: R" + finaltotal.toFixed(2);
});

function calculatesubtotal (quantity,price){
    
    return quantity * price
};

function calculatefinaltotal (subtotal , status){
    
    if (status ==="member"){
        discount= subtotal * 0.10;
    }
  
    return calculatefinaltotal 
}

document.getElementById("OrderForm").addEventListener("submit",function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let product = document.getElementById("product").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;
    let status = document.getElementById("status").value;
    let delivery = document.getElementById("delivery").value;

    if (name ==="" || product ==="" || status==="" || delivery===""){
        output.innerHTML = " please enter the valid name, product name ,member status,delivery option.";
        return;
    };
     if (!Number.isInteger(quantity) ||quantity <0){
        output.innerHTML = " please enter the valid Number.";
        return;
    };
      if (!Number.isFinite(price) ||price <0){
        output.innerHTML = " please enter the valid Number.";
        return;
    };
     document.getElementById("output").innerHTML="Order has Succesfully complete";

        orders.push ({
        id: orders.leghth + 1,
        customername : customername,
        product : product,
        finaltotal : finaltotal,
        status: "Pending"
    });
    displayOrders(orders)
});


let Order = [];

function displayOrders(List){
    document.getElementById("orderlist").innerHTML = List.map(function(Order){
        let line = Order.id + " " + Order.customername + " " + Order.productname + " R" + Order.finaltotal.toFixed(2) + " " + orderstatus;

        if (orderstatus === "pending"){
            line += '<button onclick "markready(' + order.id + ')"> mark ready</buttonn>';
        }
        return line;
    }) .join("br");
}

function markready (id){
    let order = order.find (function(order){
        return order.id === id;
    });
    order.status = "Ready";
    displayOrders(Orders);
}

function filterorders (status){
    if (status === "All"){
        displayOrders(orders)
        return;
    }
    let filtered = orde.filter(function(order){
        return order.status === status;
    });
    displayOrders(filtered)
};