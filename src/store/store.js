import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";

// Este archivo representa el estado de la aplicación
// Como vimos en la teoria, esta seria "La unica fuente de la verdad"
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  }
})