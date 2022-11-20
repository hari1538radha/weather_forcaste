import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getEducationInfo = createAsyncThunk("excel/education", async () => {
  return  fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/coimbatore?unitGroup=us&key=7XTCGNF3ZVWDYVF8TCHLTKW6C&contentType=json", {
        "method": "GET",
        "headers": {
        }
        }).then(response => response.json())
        
  
});

const educationInfo = createSlice({
    name: "educationExcel",
    initialState: {
        weatherData: [],
        Loading: false,
      },
    extraReducers: {
        [getEducationInfo.pending]: (state, action) => {
            state.Loading = true
        },
        [getEducationInfo.fulfilled]: (state, action) => {
            state.weatherData = action.payload
            state.Loading = false
        },
        [getEducationInfo.rejected]: (state, action) => {
            state.Loading = false
        }
    }
})

const educationDetails = educationInfo.reducer;

export default educationDetails