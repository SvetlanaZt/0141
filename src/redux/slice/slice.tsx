import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData, IState } from "./type";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState: IState = {
  data: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IData[]>) => {
      state.data = action.payload;
    },
  },
});

const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  todoSlice.reducer
);

export const { setData } = todoSlice.actions;
