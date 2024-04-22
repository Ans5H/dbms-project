import { connection } from "./index.js"

export const createItemsTable = () => {
    const createItemTable = `CREATE TABLE IF NOT EXISTS ITEMS(
        id char(4),
        name varchar(10) not null,
        seller_id char(4),
        constraint pk1 primary key(id, seller_id),
        constraint fk1 foreign key(seller_id) references SELLER(sid)
    );`
    connection.query(createItemTable, (err, res) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(res)
        }
    })
}

export const insertItems =  (id, name, seller_id) => {
    const data =   connection.query(`INSERT INTO ITEMS VALUES('${id}', '${name}', '${seller_id}');`, (err, res) => {
        if(err){
            console.log(err)
        }
        else{
            console.log(res)
        }
    })

    if(!data){
        console.log("cannot insert into items table")
        return
    }

} 