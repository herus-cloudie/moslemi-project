import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios_config/axios";

export const getBaskets = createAsyncThunk("cart/getBaskets", async () => {
  const response = await instance.get("/baskets");
  const { data } = response;
  return data.data;
});
export const getBasketsByUserId = createAsyncThunk(
  "cart/getBasketsByUserId",
  async (id) => {
    const response = await instance.get(`/baskets/${id}`);
    const { data } = response;
    return data.data;
  }
);
export const addBasket = createAsyncThunk("cart/addBasket", async (dataObj) => {
  try {
    const response = await instance.post("/baskets", dataObj);
    return { data: response.data };
  } catch (axiosError) {
    let err = axiosError;
    return {
      error: {
        status: err?.status,
        data: err.response?.data || err.massage,
      },
    };
  }
});
export const deleteBasket = createAsyncThunk(
  "cart/deleteBasket",
  async (id) => {
    const response = await instance.delete(`/baskets/${id}`);
    const { data } = response;
    return data;
  }
);
export const addOrder = createAsyncThunk(
  "cart/addOrder",
  async ({ userId, dataObj }) => {
    try {
      const [response1, response2] = await Promise.all([
        await instance({
          headers: {
            "Content-Type": "application/json",
          },
          data: dataObj,
          method: "post",
          url: "/orders",
        }),
        await instance.delete(`/baskets/destroyAll/${userId}`),
      ]);

      return { res: response1.data, newData: response2.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.massage,
        },
      };
    }
  }
);
export const getOrderById = createAsyncThunk(
  "cart/getOrderById",
  async (id) => {
    const response = await instance.get(`/orders/${id}`);
    const { data } = response;
    return data;
  }
);
