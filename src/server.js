import app from "./app"
import mongoose from "mongoose"
import * as dotenv from "dotenv"

dotenv.config()

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@enafoodcluster.meccxob.mongodb.net/?retryWrites=true&w=majority`
)
.then(
    app.listen(process.env.PORT, () => {
        console.log(`App running in port ${process.env.PORT}`)
    })

)
.catch((err) => console.log(err))