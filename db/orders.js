import { connection } from "./index.js"

export const createOrdersTable = () => {
    const orderTableSchema = `CREATE TABLE IF NOT EXISTS ORDERS(
        order_id varchar(4),
        item_id char(4),
        buyer_id char(4),
        order_Date char(10) not null,
        quantity INT default 1 not null,
        payment_method enum('online','cash on delivery') NOT NULL,
        amount_in_rs int not null default 0,
        constraint pk2 primary key(order_id, item_id),
        constraint fk2 foreign key(buyer_id) references BUYER(bid)
    );`
    connection.query(orderTableSchema, (err, res) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(res)
        }
    })
}

export const insertOrders =  (order_id,item_id, buyer_id, order_Date, quantity, amount_in_rs,mode) => {
    const data =   connection.query(`INSERT INTO ORDERS VALUES('${order_id}', '${item_id}', '${buyer_id}', 
        '${order_Date}', ${quantity}, ${amount_in_rs}, '${mode}');`, (err, res) => {
        if(err){
            console.log(err)
        }
        else{
            console.log(res)
        }
    })

    if(!data){
        console.log("cannot insert into seller table")
        return
    }

} 