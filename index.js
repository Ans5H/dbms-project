import { deleteBuyer, insertBuyer, showAllBuyer} from "./db/buyer.table.js";
import { createDeliveryTable, insertDelivery } from "./db/delivery.js";
import { connection } from "./db/index.js";
import { createItemsTable, insertItems } from "./db/items.js";
import { createOrdersTable, insertOrders } from "./db/orders.js";
import { createSellerTable, insertSeller, showAllSeller } from "./db/seller.js";

connection.connect((err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("DB connected successfully")
    }
})

connection.query("USE mydb", (err) => {
    err && console.log(err)
})


// insertBuyer('0003', 'Alex', 'Chicago IL')
// showAllBuyer()
// deleteBuyer()
// showAllBuyer()

// createSellerTable()


// insertSeller(0o3, "Max", " Manhattan NY", "9999222201")
// showAllSeller()
// showAllBuyer()

// insertBuyer(0o1, "Alex", "Queens NY", "4555566667")
// insertBuyer(0o2, "Smith", "Houston TX", "7788991123")
// insertBuyer(0o3, "John", "Queens NY", "8899887765")


// createItemsTable()

// createOrdersTable()
createDeliveryTable()




// insertItems(4, "Laptop", 3)
// insertOrders(1, 4, 1, "2024-02-12", 2, 1200, "online")
// insertDelivery(1, "2024-03-12", "Houston TX", 1, 1)

connection.query(`SHOW CREATE TABLE ORDERS`, (err, res) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(res)
    }
})