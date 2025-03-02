import dotenv from "dotenv";
import express, {Express, Request, Response} from "express";
import cities from "./routes/cities"; 
import weatherCity from "./routes/weatherCity"; 
dotenv.config()
const app : Express = express();
const port : number | string = process.env.PORT || 3000;

// app.get("/weather", (req : Request, res : Response) => {
//     res.send("Test")
// })

// Routes
app.use('/', cities)
app.use('/', weatherCity)

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})