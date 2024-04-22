import { connection } from "./index.js"

export const createDeliveryTable = () => {
    const deliverySchema = `CREATE TABLE IF NOT EXISTS DELIVERY(
        delivery_id char(4),
        delivery_date char(10) not null,
        delivery_address varchar(15) not null,
        order_id char(4),
        buyer_id char(4) not null,
        constraint pk3 primary key(delivery_id, order_id),
        constraint fk3 foreign key(delivery_address) references BUYER(address),
        constraint fk4 foreign key(order_id) references ORDERS(order_id),
        constraint fk5 foreign key(buyer_id) references BUYER(bid)
    );`

    connection.query(deliverySchema, (err , res) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(res)
        }
    })
}

export const insertDelivery =  (delivery_id, delivery_date, delivery_address, order_id, buyer_id) => {
    const data =   connection.query(`INSERT INTO DELIVERY VALUES('${delivery_id}', '${delivery_date}', '${delivery_address}',
    '${order_id}', '${buyer_id}');`, (err, res) => {
        if(err){
            console.log(err)
        }
        else{
            console.log(res)
        }
    })

    if(!data){
        console.log("cannot insert into delivery table")
        return
    }

} 