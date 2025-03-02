import express, {Request, Response} from "express";
import { CityWeather } from "../types/types";
const router = express.Router()

router.get('/weather', async (req: Request, res: Response) => {
    const city = req.query.city as string 
    //as string là một cú pháp của TypeScript được sử dụng để chuyển đổi kiểu dữ liệu (type casting)
    // một giá trị về kiểu chuỗi (string). Khi sử dụng as string, bạn đảm bảo với TypeScript rằng 
    // giá trị đó chắc chắn là một chuỗi và nó sẽ tránh các lỗi kiểm tra kiểu dữ liệu.

    //Nếu sử dụng code của js ban đầu thì TS sẽ báo lỗi vì không rõ kiểu dữ liệu của "city" là gì
    //req.query.city có thể nhận các giá trị chuỗi, object, mảng,...
    if(typeof city === "string"){
      try {
          const response = await fetch('https://vnexpress.net/microservice/weather')
          const data  = await response.json()
          const cityWeather = data[city]
          if(data[city]) {
            const result : CityWeather = {
              temperature : cityWeather.temperature,
              temperature_max : cityWeather.temperature_max,
              temperature_min : cityWeather.temperature_min,
              phrase : cityWeather.phrase
            }
            res.json(result)
          } 
          else {
            res.status(400).send("Không tìm thấy thành phố")
          }
          }
      catch (error) {
        console.error(error)
        res.status(500).send("Đã xảy ra lỗi khi lấy dữ liệu thời tiết")
      }
    }
    else {
      res.status(404).send("Giá trị nhập vào không phải là một chuỗi")
    }
  })
  
  export default router
