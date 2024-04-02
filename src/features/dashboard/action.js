import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../axios_config/axios";

// categories
export const getCategories = createAsyncThunk(
  "dashboard/getCategories",
  async () => {
    const response = await instance.get("/categories");
    const { data } = response;

    return data.categories;
  }
);

export const addParentCategories = createAsyncThunk(
  "dashboard/addParentCategories",
  async (dataObj) => {
    const post = await instance.post("/categories", dataObj);
    const { status } = post;

    return status;
  }
);

export const deleteParentCategories = createAsyncThunk(
  "dashboard/deleteParentCategories",
  async (id) => {
    const response = await instance.delete(`/categories/${id}`);
    const { data } = response;
    return data.massage;
  }
);

export const editParentCategories = createAsyncThunk(
  "dashboard/editParentCategories",
  async ({ id, title, category_id }) => {
    const Edit = await instance.put(`/categories/${id}`, {
      title,
      category_id,
    });
    const { data } = Edit;
    return data.massage;
  }
);

export const setSupervisorProjects = createAsyncThunk(
  "dashboard/setSupervisorProjects",
  async ({ user_id, project_id }) => {
    const res = await instance.get(
      `/setSupervisorProject/${user_id}/${project_id}`
    );

    const { data } = res;

    console.log(data);
  }
);

export const getSupervisorProjects = createAsyncThunk(
  "dashboard/getSupervisorProjects",
  async (user_id) => {
    const response = await instance.get(`/getSupervisorProjects/${user_id}`);

    const { data } = response;

    return data.projects;
  }
);

export const getSupervisors = createAsyncThunk(
  "dashboard/getSupervisors",
  async () => {
    const res = await instance.get("/supervisors");
    const { data } = res;

    return data.supervisors;
  }
);

// products
export const getProducts = createAsyncThunk(
  "dashboard/getProducts",
  async () => {
    const response = await instance.get("/products");
    const { data } = response;
    return data;
  }
);

export const addProduct = createAsyncThunk(
  "dashboard/addProduct",
  async (formData) => {
    const response = await instance.post("/products", formData);
  }
);

export const deleteProduct = createAsyncThunk(
  "dashboard/deleteProduct",
  async (id) => {
    const response = await instance.delete(`/products/${id}`);
    const { data } = response;
    return data;
  }
);

export const editProduct = createAsyncThunk(
  "dashboard/editProduct",
  async ({ id, formdata }) => {
    const response = await instance.post(
      `/products/${id}?_method=PATCH`,
      formdata
    );
    const { status } = response;
    return status;
  }
);

// projects
export const getProjects = createAsyncThunk(
  "dashboard/getProjects",
  async () => {
    const response = await instance.get("/projects");
    const { data } = response;
    return data.data;
  }
);

export const addProject = createAsyncThunk(
  "dashboard/addProject",
  async (dataObj) => {
    const response = await instance.post("/projects", dataObj);
    const { data } = response;
    return data;
  }
);

export const addSefaresh = createAsyncThunk(
  "dashboard/addSefaresh",
  async (dataObj) => {
    const response = await instance.post("/projects", dataObj);
    const { data } = response;
    return data;
  }
);

export const editProject = createAsyncThunk(
  "dashboard/editProject",
  async ({ id, dataObj }) => {
    const response = await instance.put(`/projects/${id}`, dataObj);
    const { data } = response;
    return data;
  }
);

export const choiceRecruitment = createAsyncThunk(
  "dashboard/choiceRecruitment",
  async ({ user, status }) => {
    const response = await instance.post(`/role/choiceRecruitment/${user}`, {
      status,
    });
    const { data } = response;
    return data;
  }
);

// discount
export const addDiscount = createAsyncThunk(
  "dashboard/addDiscount",
  async ({ id, value }) => {
    const response = await instance.post(`/discounts/${id}`, { value });
    const { data } = response;
    return data;
  }
);

export const deleteDiscount = createAsyncThunk(
  "dashboard/deleteDiscount",
  async (id) => {
    const response = await instance.delete(`/discounts/${id}`);
    const { data } = response;
    return data;
  }
);

export const editDiscount = createAsyncThunk(
  "dashboard/getDiscount",
  async ({ productId, discountValue }) => {
    const response = await instance.patch(`/discounts/${productId}`, {
      value: discountValue,
    });
    const { data } = response;
    return data;
  }
);

// gallery
export const getGalleries = createAsyncThunk(
  "dashboard/getGalleries",
  async () => {
    const response = await axios.get(`/galleries`);
    return response;
  }
);

export const addGallery = createAsyncThunk(
  "dashboard/addGallery",
  async ({ id, formdata }) => {
    const response = await instance.post(`/galleries/${id}`, formdata);
    let { status } = response;
    return status;
  }
);

export const deleteGallery = createAsyncThunk(
  "dashboard/deleteGallery",
  async (id) => {
    const response = await instance.delete(`/galleries/${id}`);
    const { data } = response;
    return data;
  }
);

export const getGalleryById = createAsyncThunk(
  "dashboard/getGalleryById",
  async (id) => {
    const response = await instance.get(`/galleries/${id}`);
    const { data } = response;
    return data;
  }
);

export const editGallery = createAsyncThunk(
  "dashboard/getGalleries",
  async ({ id }) => {
    const response = await axios.put(`/galleries/${id}`, {});

    return response;
  }
);

// roles
export const getRoles = createAsyncThunk("dashboard/getRoles", async () => {
  const response = await instance.get("/roles");
  const { data } = response;
  return data;
});

export const getRoleById = createAsyncThunk(
  "dashboard/getRoleById",
  async (id) => {
    const response = await instance.get(`/roles/${id}`);
    const { data } = response;
    return data;
  }
);

export const getUserRole = createAsyncThunk(
  "dashboard/getUserRole",
  async (id) => {
    const response = await instance.get(`/roles/${id}`);
    const { data } = response;
    return data;
  }
);

export const addRole = createAsyncThunk(
  "dashboard/addRole",
  async (formData) => {
    const response = await instance.post(`/roles`, formData);
    return response;
  }
);

export const deleteRole = createAsyncThunk(
  "dashboard/deleteRole",
  async (id) => {
    const response = await instance.delete(`/roles/${id}`);
    const { data } = response;
    return data.massage;
  }
);

export const updateRole = createAsyncThunk(
  "dashboard/updateRole",
  async ({ id, formData }) => {
    const response = await instance.put(`/roles/${id}`, formData);
    return response;
  }
);

// blogs
export const getBlogs = createAsyncThunk("dashboard/getBlogs", async () => {
  const response = await instance.get("/blogs");
  const { data } = response;
  return data;
});

export const addBlog = createAsyncThunk(
  "dashboard/addBlog",
  async (dataObj) => {
    const response = await instance.post("/blogs", dataObj);
    const { data } = response;
    return data;
  }
);

export const editBlog = createAsyncThunk(
  "dashboard/editBlog",
  async ({ id, formdata }) => {
    const response = await instance.post(`/blogs/${id}`, formdata);
    const { data } = response;
    return data;
  }
);

export const deleteBlog = createAsyncThunk(
  "dashboard/deleteBlog",
  async (id) => {
    const response = await instance.delete(`/blogs/${id}`);
    const { data } = response;
    return data;
  }
);

// news
export const getNews = createAsyncThunk("dashboard/getNews", async () => {
  const response = await instance.get("/news");
  const { data } = response;
  return data;
});

export const addNews = createAsyncThunk(
  "dashboard/addNews",
  async (formdata) => {
    const response = await instance.post("/news", formdata);
    const { data } = response;
    return data;
  }
);

export const editNews = createAsyncThunk(
  "dashboard/editNews",
  async ({ id, formdata }) => {
    const response = await instance.post(`/news/${id}?_method=PATCH`, formdata);
    const { data } = response;
    return data;
  }
);

export const deleteNews = createAsyncThunk(
  "dashboard/deleteNews",
  async (id) => {
    const response = await instance.delete(`/news/${id}`);
    const { data } = response;
    return data;
  }
);

// users
export const getUsers = createAsyncThunk("dashboard/getUsers", async () => {
  const response = await instance.get("/users");
  const { data } = response;
  return data;
});
export const updateUser = createAsyncThunk(
  "dashboard/updateUser",
  async (id, dataObj) => {
    const response = await instance.put(`/users/${id}`, dataObj);
    const { data } = response;
    return data;
  }
);
export const deleteUser = createAsyncThunk(
  "dashboard/deleteUser",
  async (id) => {
    const response = await instance.delete(`/users/${id}`);
    return response;
  }
);

export const getEmployee = createAsyncThunk(
  "dashboard/getEmployee",
  async () => {
    const response = await instance.get("/recruitments");
    const { data } = response;
    console.log(data);
    return data.recruitment;
  }
);
export const choiceEmployee = createAsyncThunk(
  "dashboard/choiceEmployee",
  async ({ user, status }) => {
    const response = await instance.post(`/choiceRecruitment/${user}`, {
      status,
    });
    console.log(user , status)
    return response
  }
);

// work_samples
export const getWorkSamples = createAsyncThunk(
  "dashboard/getWorkSamples",
  async () => {
    const response = await instance.get("/work-sample");
    return response;
  }
);

// seller
export const getSellers = createAsyncThunk("dashboard/getSellers", async () => {
  const response = await instance.get("/sellers");
  const { data } = response;
  return data;
});
export const deleteSeller = createAsyncThunk(
  "dashboard/deleteSeller",
  async (id) => {
    const response = await instance.delete(`/sellers/${id}`);
    const { data } = response;
    return data;
  }
);
export const addSeller = createAsyncThunk(
  "dashboard/addSeller",
  async (dataObj) => {
    const response = await instance.post(`/sellers`, dataObj);
    const { data } = response;
    return data;
  }
);

// orders
export const getOrders = createAsyncThunk("dashboard/getOrders", async () => {
  const response = await instance.get("/orders");
  const { data } = response;
  console.log(data);
  return data;
});
export const getDetailOrders = createAsyncThunk(
  "dashboard/getDetailOrders",
  async (id) => {
    const response = await instance.get(`/orders/${id}`);
    const { data } = response;
    console.log(data);
    return data;
  }
);
// banner
export const getBanner = createAsyncThunk("dashboard/getBanner", async () => {
  const response = await instance.get("/banners");
  const { data } = response;
  return data;
});

export const addBanner = createAsyncThunk(
  "dashboard/addBanner",
  async (dataObj) => {
    const response = await instance.post("/banners", dataObj);
    const { data } = response;
    return data;
  }
);

export const deleteBanner = createAsyncThunk(
  "dashboard/deleteBanner",
  async (id) => {
    const response = await instance.delete(`/banners/${id}`);
    const { data } = response;
    return data;
  }
);
export const editBanner = createAsyncThunk(
  "dashboard/editBanner",
  async (id, dataObj) => {
    const response = await instance.post(
      `/banners/${id}?_method=PATCH`,
      dataObj
    );
    const { data } = response;
    return data;
  }
);
// coupons
export const getCoupons = createAsyncThunk("dashboard/getCoupons", async () => {
  const response = await instance.get(`/coupons`);
  const { data } = response;
  return data;
});
export const addCoupon = createAsyncThunk(
  "dashboard/addCoupon",
  async (dataObj) => {
    const response = await instance.post(`/coupons`, dataObj);
    const { data } = response;
    return data;
  }
);
export const deleteCoupon = createAsyncThunk(
  "dashboard/deleteCoupon",
  async (id) => {
    const response = await instance.delete(`/coupons/${id}`);
    const { data } = response;
    return data;
  }
);
export const editCoupon = createAsyncThunk(
  "dashboard/editCoupon",
  async ({ id, dataObj }) => {
    const response = await instance.put(`/coupons/${id}`, dataObj);
    const { data } = response;
    return data;
  }
);

// tags
export const getTags = createAsyncThunk("dashboard/getTags", async () => {
  const response = await instance.get(`/tags`);
  const { data } = response;
  return data;
});
export const addTag = createAsyncThunk("dashboard/addTag", async (dataObj) => {
  const response = await instance.post(`/tags`, dataObj);
  const { data } = response;
  return data;
});
export const deletingTag = createAsyncThunk(
  "dashboard/deletingTag",
  async (id) => {
    const response = await instance.delete(`/tags/${id}`);
    const { data } = response;
    return data;
  }
);

// links
export const getLinks = createAsyncThunk("dashboard/getLinks", async () => {
  const response = await instance.get(`/sources`);
  const { data } = response;
  return data;
});
export const addLink = createAsyncThunk(
  "dashboard/addLink",
  async (dataObj) => {
    const response = await instance.post(`/sources`, dataObj);
    const { data } = response;
    return data;
  }
);
export const deleteLink = createAsyncThunk(
  "dashboard/deleteLink",
  async (id) => {
    const response = await instance.delete(`/sources/${id}`);
    const { data } = response;
    return data;
  }
);
// photo slider
export const getPhotoSlider = createAsyncThunk(
  "dashboard/getPhotoSlider",
  async () => {
    const response = await instance.get(`/images`);
    const { data } = response;
    return data;
  }
);

//work sample
export const getWorkSampleCategories = createAsyncThunk(
  "dashboard/workSampleCategories",
  async () => {
    const response = await instance.get(`/workSampleCategories`);
    const { data } = response;
    return data;
  }
);

export const getWorkSample = createAsyncThunk(
  "dashboard/workSample",
  async () => {
    const response = await instance.get(`/workSamples`);
    const { data } = response;
    return data;
  }
);

export const getWorkSampleDetail = createAsyncThunk(
  "dashboard/getWorkSampleDetail",
  async (id) => {
    const response = await instance.get(`/workSamples/${id}`);
    const { data } = response;
    return data;
  }
);

export const getworkSampleGalleries = createAsyncThunk(
  "dashboard/getworkSampleGalleries",
  async () => {
    const response = await instance.get(`/workSampleGalleries`);
    const { data } = response;
    return data;
  }
);

export const getworkSampleGalleriesDetail = createAsyncThunk(
  "dashboard/getworkSampleGalleriesDetail",
  async (id) => {
    const response = await instance.get(`/workSampleGalleries/${id} `);
    const { data } = response;
    return data;
  }
);

export const addWorkSampleCategories = createAsyncThunk(
  "dashboard/addWorkSampleCategories",
  async (obj) => {
    const response = await instance.post(`/workSampleCategories`, obj);
    const { data } = response;
    return data;
  }
);

export const deleteWorkSampleCategories = createAsyncThunk(
  "dashboard/deleteWorkSampleCategories",
  async (id) => {
    const response = await instance.delete(`/workSampleCategories/${id} `);
    const { data } = response;
    return data;
  }
);
export const addWorkSample = createAsyncThunk(
  "dashboard/addWorkSamples",
  async (obj) => {
    const response = await instance.post(`/workSamples`, obj);
    const { data } = response;
    return data;
  }
);

export const editWorkSample = createAsyncThunk(
  "dashboard/editWorkSamples",
  async (obj) => {
    const response = await instance.patch(`/workSamples/${obj.id} `, obj);
    const { data } = response;
    return data;
  }
);

export const deleteWorkSample = createAsyncThunk(
  "dashboard/deleteWorkSamples",
  async (id) => {
    const response = await instance.delete(`/workSamples/${id}`);
    const { data } = response;
    return data;
  }
);

export const addworkSampleGalleries = createAsyncThunk(
  "dashboard/addworkSampleGalleries",
  async (obj) => {
    const response = await instance.post("/workSampleGalleries", obj);

    return response;
  }
);
export const deleteworkSampleGalleries = createAsyncThunk(
  "dashboard/deleteworkSampleGalleries",
  async (id) => {
    const response = await instance.delete(`/workSampleGalleries/${id}`);
    const { data } = response;
    return data;
  }
);
