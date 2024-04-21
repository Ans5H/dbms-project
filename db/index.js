import mysql from "mysql"

export const connection = mysql.createConnection({
    host: "database-1.cf0y6aeg6q07.us-east-1.rds.amazonaws.com",
    user: "ansh24",
    password: "mypassword",
    port: 3306,
    database: "mydb"
})
