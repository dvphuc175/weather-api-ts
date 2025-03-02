# About
This project is based on https://github.com/dvphuc175/weather-api and has been rewritten in TypeScript to better understand the differences between using JavaScript and TypeScript (such as data types, scalability, etc.).
The project offers two main APIs:
- An API that returns a list of cities supported by the system.
- An API that returns the weather information of a specific city.
# API

## List of cities

- Endpoint: `GET /weather/cities`
- Description: Returns a list of cities supported by the system, parsed from VnExpress's API.
- Example Request:

```
GET /weather/cities
```
- Example Response:
```json
[
    "Hà Nội",
    "Hồ Chí Minh",
    "Đà Nẵng",
]
```
## Weather Information of a City

- Endpoint: `GET /weather`
- Description: Returns weather information for a specific city, including current temperature, maximum temperature, minimum temperature, and weather description.
- Query Parameters:
**city**: The name of the city (required).
- Example Request:
```
GET /weather?city=Hà Nội
```
- Example Response:

```json
{
    "temperature": 25,
    "temperature_max": 28,
    "temperature_min": 22,
    "phrase": "Nhiều mây"
}
```
# Run project
In the project directory, you can run:

`npm install`
