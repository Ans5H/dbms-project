import { deleteBuyer, insertBuyer, showAllBuyer } from "./db/buyer.table.js";
import { connection } from "./db/index.js";

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
showAllBuyer()
