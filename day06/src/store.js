// An order: { id, customer, item, qty, status }   status ∈ "new" | "paid" | "packed" | "shipped" | "canceled"
let nextId = 1;
const orders = []; // keep simple for the exercise

function createOrder(customer, item, qty) {
    // validate inputs (non-empty customer/item, qty > 0)
    // If invalid, return { ok:false, error:"message" }
     if (customer.trim().length === 0)
    {
        return { ok: false, error: "Customer not found" };
    }
     if (item.trim().length === 0)
    {
        return { ok: false, error: "item not found" };
    }
    if ( qty <= 0) 
    {
        return { ok: false, error: "Quantity >0" };
    }
   const order ={
        id: nextId++,
        customer: customer.trim(),
        item: item.trim(),
        qty: Number(qty),
        status: "new"
    }

    // Create a new order with the following properties:
    // id: nextId++,
    // customer: customer.trim(),
    // item: item.trim(),
    // qty: Number(qty),
    // status: "new"

    // Add the order to the orders array
    orders.push(order   )
    // Return { ok:true, order }
    return{ok : true , order}
}

function findById(id) {
    // classic loop to find the order by id from the orders array
    // Return the order if found, otherwise return null
     for (let i = 0; i < orders.length; i++) 
    {
        if (orders[i].id === id) 
        {
            return orders[i];
        }
    }
    return null;
}

function list() {
    // return a shallow copy of the orders array
    return [orders];
}

function setStatus(id, newStatus) {
    // find the order by id from the orders array
    // if the order is not found, return { ok: false, error: "Order not found" }
    // if the order is found, update the status of the order to the newStatus
    // return { ok: true, order }
    const order = findById(id);
    if (!order) 
    {
        return { ok: false, error: "Order not found" };
    }
    order.status = newStatus;
    return { ok: true, order };
}

// export the functions to be used in the application

module.exports = {
    createOrder,
    findById,
    list,
    setStatus
};
