import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getEducationInfo = createAsyncThunk(
  "excel/education",
  async (data) => {
    return fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${data}?unitGroup=us&key=7XTCGNF3ZVWDYVF8TCHLTKW6C&contentType=json`,
      {
        method: "GET",
        headers: {},
      }
    ).then((response) => response.json());
  }
);

const educationInfo = createSlice({
  name: "educationExcel",
  initialState: {
    weatherData: [],
    Loading: true,
  },
  extraReducers: {
    [getEducationInfo.pending]: (state, action) => {
      state.Loading = true;
    },
    [getEducationInfo.fulfilled]: (state, action) => {
      state.weatherData = action.payload;
      state.Loading = false;
    },
    [getEducationInfo.rejected]: (state, action) => {
      state.Loading = false;
    },
  },
});

const educationDetails = educationInfo.reducer;

export default educationDetails;
