// require the eventBus and store from the respective files
const eventBus = require("./eventBus");
const store = require("./store");

// make order:created event listener to log the order created
// console.log the following message: [EVT] order:created #<id of the order> for <customer name who created the order> (<order item> x<qty of the item ordered>)
eventBus.on('event listener ',(order) => {
    console.log(`[EVT] order:created #${order.id} for ${order.customer} (${order.item} x${order.qty})`)
})

// make order:paid event listener to log the order paid
// if the order is not found, emit 'error' event with the message "Order not found"
// this event listener should transition the order to "paid" using store.setStatus function
// if the order is already shipped or canceled, emit 'error' event with the message "Invalid transition to paid"
// console.log the following message: [EVT] order:paid #<id of the order>
// emit "order:statusChanged" with the id and status=paid

eventBus.on('order' ,(id) => {
    const order = store.findById(id);
    if (!order)
    {
        eventBus.emit("error", "Order not found");
    } 
    else if(order.status === "shipped" || order.status === "canceled") 
    {
        eventBus.emit("error", "Invalid transition to paid");
    } 
    else 
    {
        store.setStatus(id, "paid");
        console.log(`[EVT] order:paid #${id}`);
        eventBus.emit("statusChanged", { id, status: "paid" });
    }

})
// make order:packed event listener to log the order packed
// if the order is not found, emit 'error' event with the message "Order not found"
// if the order is not paid, emit 'error' event with the message "Pack requires status=paid"
// this event listener should transition the order to "packed" using store.setStatus function
// console.log the following message: [EVT] order:packed #<id of the order>
// emit "order:statusChanged" with the id and status=packed

eventBus.on("packed",(id) => {
    const orders =store.findById(id)
    if(!orders)
    {
        eventBus.emit("error", "Order not found")
    }
    else if(orders.status != "paid")
    {
        eventBus.emit("error", "Pack requires status=paid")
    }
    else
    {
        store.setStatus(id,"packed")
        console.log(`[EVT] order:packed #${id}`);
        eventBus.emit("statusChanged", { id, status: "packed" });
    }
})

// make order:shipped event listener to log the order shipped
// if the order is not found, emit 'error' event with the message "Order not found"
// if the order is not packed, emit 'error' event with the message "Ship requires status=packed"
// this event listener should transition the order to "shipped" using store.setStatus function
// console.log the following message: [EVT] order:shipped #<id of the order>
// emit "order:statusChanged" with the id and status=shipped

eventBus.on("shipped",(id) => {
    const orderss=store.findById(id)
    if(!orderss)
    {
        eventBus.emit("error", "Order not found")
    }
    else if(orderss.status != "packed")
    {
        eventBus.emit("error", "Ship requires status=packed")
    }
    else
    {
        store.setStatus(id,"shipped")
        console.log(`[EVT] order:shipped #${id}`);
        eventBus.emit("statusChanged", { id, status: "shipped" });
    }
})

// make order:canceled event listener to log the order canceled
// if the order is not found, emit 'error' event with the message "Order not found"
// if the order is already shipped, emit 'error' event with the message "Cannot cancel shipped order"
// this event listener should transition the order to "canceled" using store.setStatus function
// console.log the following message: [EVT] order:canceled #<id of the order> ❌
// emit "order:statusChanged" with the id and status=canceled

eventBus.on("canceled",(id) => {
    const orders2=store.findById(id)
    if(!orders2)
    {
        eventBus.emit("error", "Order not found")
    }
    else if(orders2.status === "shipped")
    {
        eventBus.emit("error", "Cannot cancel shipped order")
    }
    else
    {
        store.setStatus(id,"canceled")
        console.log(`[EVT] order:canceled #${id} `);
        eventBus.emit("statusChanged", { id, status: "canceled" });
    }
})

// make order:statusChanged event listener to log the order status changed
// console.log the following message: [EVT] statusChanged  #<id of the order> → <status of the order>

eventBus.on("statusChanged",({id,status}) => {
    console.log(`[EVT] statusChanged #${id} ${status}`)
})

// make error event listener to log the error
// console.log the following message: [ERR] <error message>

eventBus.on("erore", (msg) => {
    console.log("[ERR]",msg)
})

// Export nothing; requiring this file attaches listeners

module.exports = {};
