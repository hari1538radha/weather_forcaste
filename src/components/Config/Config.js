import axios from "axios";
export const axio = axios.create({
  baseURL: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline",
  //https://mern-acadamy-app.herokuapp.com
  headers: { 
},
});