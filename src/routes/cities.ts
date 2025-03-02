import express, {Request, Response} from "express";
const router = express.Router()

router.get('/weather/cities', async (req: Request, res: Response) => {
    try {
    const response = await fetch('https://vnexpress.net/microservice/weather') //Gọi lên sv thông qua API để lấy dữ liệu
    const data = await response.json() 
    const cities = Object.keys(data) // Tên thành phố là 1 key
    res.json(cities)
    } 
    catch (error) {
    res.status(500).send(error.message);
}
  })
  
  export default router