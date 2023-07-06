import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"; 
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { LinkProps } from "../Interface/Interface";

const LinkState:LinkProps = {
       _id:'',
       shortUrl:'',
       originalLink:''
}

export const getLinkString = createAsyncThunk(
       'getlink/',
       async (shortUrl:string) => {
              const responce = await axios.get<AxiosRequestConfig , AxiosResponse<LinkProps>>(`/links/${shortUrl}`)
              return responce.data
       }
)

export const postLinkString = createAsyncThunk(
       'postlink/',
       async (originallink:string) => {
              const responce = await axios.post<AxiosRequestConfig , AxiosResponse>(`/links` , {originalLink :originallink})
              return responce.data
       }
)


const LinkReducer = createSlice({
       name:'Link',
       initialState: LinkState,
       reducers: {
              changeInput:(state , {payload}:PayloadAction<string>) => {
                     return state = {...state , originalLink: payload}
              }
       },
       extraReducers:(builder) => {
              builder
              .addCase(getLinkString.fulfilled , (state , {payload}) => {
                     return state = payload
              })
              .addCase(postLinkString.fulfilled , (state , {payload}) => {
                     return state = payload
              })
       }
})

export const {changeInput} = LinkReducer.actions
export default LinkReducer.reducer