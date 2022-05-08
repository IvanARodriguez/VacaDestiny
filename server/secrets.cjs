require("dotenv").config();

const DbConnection = process.env.MONGODB_URL;

export default DbConnection;