import axios from "axios";
export const axio = axios.create({
  baseURL: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline",
  //https://mern-acadamy-app.herokuapp.com
  headers: { 
  "X-Custom-Header": "foobar",
  "Accept": "application/json",
  "Content-Type":"application/x-www-form-urlencoded",
  "Access-Control-Allow-Origin": "https://http://localhost:3000/"
},
});