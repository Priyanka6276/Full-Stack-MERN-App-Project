const mongoose = require("mongoose")

// mongoose.connect(process.env.DATABASE_URL)

// const db = mongoose.connection

const db = process.env.DATABASE_URL

// db.on("connected", () => {
//     console.log(`Connected to ${db.name} at ${db.host} : ${db.port}`)
// })

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;