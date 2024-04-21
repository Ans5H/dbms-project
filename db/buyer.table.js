import { connection } from "./index.js"

const createBuyerTable = () => {
    const createBuyerTable = `CREATE TABLE IF NOT EXISTS BUYER(
        bid CHAR(4) PRIMARY KEY,
        name varchar(10) NOT NULL,
        address varchar(20) NOT NULL
    );`
    
    connection.query(createBuyerTable, (err, res) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(res)
        }
    })
}


export const insertBuyer =  (id, name, address) => {
    const data =   connection.query(`INSERT INTO BUYER VALUES(${id}, '${name}', '${address}');`, (err, res) => {
        if(err){
            console.log(err)
        }
        else{
            console.log(res)
        }
    })

    if(!data){
        console.log("cannot insert into buyer table")
        return
    }

    console.log(data)
} 

 export const showAllBuyer =  () => {
    const data =  connection.query("SELECT * FROM BUYER", (err,res) => {
        if(err){
            console.log(err)
        }
        else{
            console.log(res)
            res.forEach(row => {
                console.log(row.bid)
            });
        }
    })
    
}


export const deleteBuyer = (id) => {
    connection.query(`DELETE FROM BUYER WHERE bid = '${id}'`, (err,res) => {
        if(err){
            console.log(err)
        }
        else{
            console.log(res)
        }
    })
}