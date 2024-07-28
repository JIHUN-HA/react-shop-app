import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IOrder } from "./order.type";


export const fetchOrder = createAsyncThunk(
  "order/fetchOrder" ,
  async(userId :string, thunkAPI) => { 
    try{
      const response = await axios.get<IOrder[]>
      (`https://66a522335dc27a3c190ac120.mockapi.io/orders?search=${userId}`)
      console.log(response)
      return response.data;

    } catch(err) {
      return thunkAPI.rejectWithValue("Error receiving order")
    }
  }
)



type OrderState = { 
  order:IOrder[];
  isLoading : boolean;
  error : string;
}


const initialState:OrderState = { 
  order: [], 
  isLoading: false, 
  error:""
}

export const orderSlice = createSlice({
  name:'orderSlice',
  initialState,
  reducers:{},
  extraReducers: (builder) => { 
    builder
    .addCase(fetchOrder.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchOrder.fulfilled, (state,action) => { 
      state.isLoading = false; 
      state.order = action.payload
      console.log('state : ', state.order)
    })
    .addCase(fetchOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    })
    
  }
})

export default orderSlice.reducer; 