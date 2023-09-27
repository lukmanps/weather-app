import axios from "axios";
import { api_key } from "../../api";

export default function fetchWeather(location) {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`)
        .then((response) => {
            resolve(response.data);
        })
        .catch((err) => {
            reject(err);
        })
    })
}
