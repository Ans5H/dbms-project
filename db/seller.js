import { connection } from "./index.js"

export const createSellerTable = () => {
    const createSellerTable = `CREATE TABLE IF NOT EXISTS SELLER(
        sid CHAR(4) PRIMARY KEY,
        name varchar(10) NOT NULL,
        address varchar(20) NOT NULL
    );`
    
    connection.query(createSellerTable, (err, res) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(res)
        }
    })
}


export const insertSeller =  (id, name, address, phone) => {
    const data =   connection.query(`INSERT INTO SELLER VALUES(${id}, '${name}', '${address}', '${phone}');`, (err, res) => {
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

 export const showAllSeller =  () => {
    const data =  connection.query("SELECT * FROM SELLER", (err,res) => {
        if(err){
            console.log(err)
        }
        else{
            console.log(res)
            res.forEach(row => {
                console.log(row.sid)
            });
        }
    })
    
}


export const deleteSeller = (id) => {
    connection.query(`DELETE FROM SELLER WHERE sid = '${id}'`, (err,res) => {
        if(err){
            console.log(err)
        }
        else{
            console.log(res)
        }
    })
}


export const showBuyerById = (id) => {
    connection.query(`SELECT * FROM SELLER WHERE sid = '${id}'`, (err,res) => {
        if(err){
            console.log(err)
        }
        else{
            console.log(res)
        }
    })
}
