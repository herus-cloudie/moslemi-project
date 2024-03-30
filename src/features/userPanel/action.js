import { createAsyncThunk } from "@reduxjs/toolkit";

import instance from "../../axios_config/axios";

export const changeUserRole = createAsyncThunk(
  "userPanel/changeUserRole",
  async ({ user_id, role_id }) => {
    try {
      const response = await instance.post(`/role/changeUserRole/${user_id}`, {
        role_id,
      });
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
  }
);

export const updateUserInfo = createAsyncThunk(
  "userPanel/updateUserInfo",
  async ({ userId, dataObj }) => {
    try {
      const [response1, response2] = await Promise.all([
        await instance.put(`/users/${userId}`, dataObj),
        await instance.get(`/users/show`),
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

export const changeUserPassword = createAsyncThunk(
  "userPanel/changeUserPassword",
  async (dataObj) => {
    try {
      const response = await instance.post(`/users/changePassword`, dataObj);
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
  }
);
