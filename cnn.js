const pgPromise = require('pg-promise')
const {DB_HOST,DB_PORT,DB_NAME,DB_USER,DB_PASSWORD}=require("./config")
const config={
    host:DB_HOST,
    port:DB_PORT,
    database:DB_NAME,
    user:DB_USER,
    password:DB_PASSWORD
}
const pgp = pgPromise({})
const db = pgp(config)
exports.db=db