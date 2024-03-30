import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addBlog,
  addCoupon,
  addDiscount,
  addGallery,
  addLink,
  addNews,
  addParentCategories,
  addProduct,
  addProject,
  addRole,
  addSefaresh,
  addSeller,
  addBanner,
  addTag,
  deleteBlog,
  deleteCoupon,
  deleteDiscount,
  deleteGallery,
  deleteLink,
  deleteNews,
  deleteParentCategories,
  deleteProduct,
  deleteRole,
  deleteSeller,
  deleteUser,
  deletingTag,
  editBlog,
  editCoupon,
  editDiscount,
  editNews,
  editParentCategories,
  editProduct,
  editProject,
  getBlogs,
  getCategories,
  getCoupons,
  getGalleryById,
  getLinks,
  getNews,
  getOrders,
  getDetailOrders,
  getProducts,
  getProjects,
  getRoleById,
  getRoles,
  getSellers,
  getTags,
  getUserRole,
  getUsers,
  getEmployee,
  getWorkSamples,
  updateRole,
  updateUser,
  getSupervisors,
  getSupervisorProjects,
  choiceEmployee,
  getBanner,
  editBanner,
  deleteBanner,
  getWorkSampleCategories,
  addWorkSampleCategories,
  deleteWorkSampleCategories,
  addWorkSample,
  getWorkSample,
  editWorkSample,
  deleteWorkSample,
  getworkSampleGalleries,
  addworkSampleGalleries,
  deleteworkSampleGalleries,
  getworkSampleGalleriesDetail,
  getWorkSampleDetail,
} from "./action";

const initialState = {
  content: "categories",
  supervisorsSwitch: "all",
  bannerSwitch: "all",
  articlesSwitch: "all",
  gallerySwitch: "all",
  productsSwitch: "all",
  rolesSwitch: "all",
  couponSwitch: "all",
  projectSwitch: "all",
  discountSwitch: "all",
  linksSwitch: "all",
  newsSwitch: "all",
  tagsSwitch: "all",
  worksampleSwitch:'all',
  productId: null,
  supervisors: [],
  supervisorProjects: [],
  products: [],
  projects: [],
  discounts: [],
  coupons: [],
  workSampleCategories:[],
  workSampleGalleriesDetail:[],
  workSampleDetail:[],
  workSample:[],
  workSampleGalleries:[],
  supervisorsLoading: false,
  workSamplesLoading: false,
  supervisorProjectsLoading: false,
  productsLoading: false,
  discountsLoading: false,
  newsLoading: false,
  linksLoading: false,
  deleteProductSuccess: false,
  couponsSuccess: false,
  usersLoading: false,
  sellerLoading: false,
  editNewsLoading: false,
  tagsLoading: false,
  deleteGallerySuccess: false,
  deleteNewsSuccess: false,
  newsDeleteLoading: false,
  linkDeleteLoading: false,
  ordersLoading: false,
  deleteSellerSuccess: false,
  deleteTagSuccess: false,
  users: [],
  news: [],
  links: [],
  projectsLoading: false,
  couponLoading: false,
  blogsLoading: false,
  rolesLoading: false,
  editProjectLoading: false,
  galleryLoading: false,
  blogsDeleteLoading: false,
  bannerLoading: false,
  categories: [],
  blogs: [],
  orders: [],
  banner: [],
  detailOrders: [],
  gallery: [],
  employee: [],
  employeesSwitch: "unapproval",
  galleryId: "",
  categoriesLoading: false,
  categoriesError: "",
  addSuccess: false,
  scrollUp: false,
  deleteSuccess: false,
  getGallerySuccess: false,
  editSuccess: false,
  articleLoading: false,
  employeeLoading: false,
  workSamplesLoading: false,
  discountId: "",
  roles: [],
  tags: [],
  sellers: [],
  permissions: [],
  userPermissions: [],
  permissionsForEdit: [],
  photoSlider: [],
  categoriesSwitch: {
    key: "PARENT",
    title: "",
    id: "",
    title_2: "",
    id_2: "",
  },
  token: localStorage.getItem('access_token') || '', 
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setContent: (state, action) => {
      console.log(state);
      state.content = action.payload;
    },
    setSwitch: (state, action) => {
      let { key, value, id } = action.payload;

      switch (key) {
        case "articles":
          {
            state.articlesSwitch = value;
            state.articleId = id;
          }
          break;
        case "products":
          {
            state.productsSwitch = value;
            state.productId = id;
          }
          break;
        case "categories":
          state.categoriesSwitch = value;
          break;
        case "gallery":
          {
            state.gallerySwitch = value;
            state.galleryId = id;
          }
          break;
        case "roles":
          {
            state.rolesSwitch = value;
            console.log(value);
          }
          break;
        case "supervisors": {
          state.supervisorsSwitch = value;
        }
        case "employee":
          {
            state.employeesSwitch = value;
          }
          break;
        case "worksample":
          state.worksampleSwitch = value;
          break;
        case "projects":
          state.projectSwitch = value;
          break;
        case "discount":
          state.discountSwitch = value;
          break;
        case "tags":
          state.tagsSwitch = value;
          break;
          case "banner":
          state.bannerSwitch = value;
          break;
        case "coupon":
          state.couponSwitch = value;
          break;
        case "news":
          state.newsSwitch = value;
          break;
        case "links":
          state.linksSwitch = value;
          break;
        default:
          console.log("non value");
      }
    },
    setSwitchCategories: (state, action) => {
      let { key, title, id } = action.payload;
      console.log(action.payload);
      // let { key , title , id } = action.payload;
      state.categoriesSwitch = { key, title, id };
      // state.categoriesSwitch = {key,title,id};
    },
    setSwitchCategories_2: (state, action) => {
      let { key, title_2, id_2 } = action.payload;
      state.categoriesSwitch = {
        key,
        title: state.categoriesSwitch.title,
        id: state.categoriesSwitch.id,
        title_2,
        id_2,
      };
    },
    setScrollUp: (state, action) => {
      state.scrollUp = !state.scrollUp;
    },
    setDiscountId: (state, action) => {
      state.discountId = action.payload;
    },
    setDeleteNewsSuccess: (state, action) => {
      state.deleteNewsSuccess = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // get categories
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categoriesLoading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.pending, (state) => {
        state.categoriesLoading = true;
      })
      .addCase(getCategories.rejected, (state) => {
        state.categories = [];
        state.categoriesLoading = false;
        console.error("* error in getting categories *");
        state.categoriesError = "خطا در دریافت دسته بندی ها";
      })

      //  add parent
      .addCase(addParentCategories.fulfilled, (state, action) => {
        state.categoriesLoading = false;
        if (action.payload === 200) {
          toast.success("دسته بندی با موفقیت اضافه شد");
        }
        state.addSuccess = !state.addSuccess;
      })
      .addCase(addParentCategories.pending, (state) => {
        state.categoriesLoading = true;
      })
      .addCase(addParentCategories.rejected, (state) => {
        toast.error("خطا در اضافه کردن دسته بندی");
        console.error("* error in adding category *");
        state.categoriesLoading = false;
      })

      //  delete parent
      .addCase(deleteParentCategories.fulfilled, (state, action) => {
        state.categoriesLoading = false;
        toast.success(action.payload);
        state.deleteSuccess = !state.deleteSuccess;
      })
      .addCase(deleteParentCategories.pending, (state) => {
        state.categoriesLoading = true;
      })
      .addCase(deleteParentCategories.rejected, (state, action) => {
        state.categoriesLoading = false;
        console.log("error in deleting category =>", action.payload);
        toast.error("ابتدا باید زیر شاخه ها را حذف کنید");
      })

      // edit parent
      .addCase(editParentCategories.fulfilled, (state, action) => {
        state.categoriesLoading = false;
        toast.success(action.payload);
        state.editSuccess = !state.editSuccess;
      })
      .addCase(editParentCategories.pending, (state, action) => {
        state.categoriesLoading = true;
      })
      .addCase(editParentCategories.rejected, (state, action) => {
        state.categoriesLoading = false;
        console.error("* error in editing category *");
        toast.error("خطا در ویرایش دسته بندی");
      })

      // get products
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsLoading = false;
        state.products = action.payload.products;
        state.discounts = action.payload.discounts;
      })
      .addCase(getProducts.pending, (state, action) => {
        state.productsLoading = true;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.productsLoading = faladdprodse;
        console.error("* error in getting products *");
      })

      // add product
      .addCase(addProduct.fulfilled, (state, action) => {
        state.productsLoading = false;
        toast.success("محصول با موفقیت ذخیره شد");
      })
      .addCase(addProduct.pending, (state, action) => {
        state.productsLoading = true;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.productsLoading = false;
        console.log("error in adding product with this status =>", action);
        toast.error("خطا در ذخیره محصول");
      })

      // delete product
      .addCase(deleteProduct.fulfilled, (state) => {
        state.productsLoading = false;
        state.deleteProductSuccess = !state.deleteProductSuccess;
        toast.success("محصول با موفقیت حذف شد");
      })
      .addCase(deleteProduct.pending, (state, action) => {
        state.productsLoading = true;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.productsLoading = false;
        console.log("error in deleting product with this status =>", action);
        toast.error("خطا در حذف محصول");
      })

      // edit product
      .addCase(editProduct.fulfilled, (state, action) => {
        state.productsLoading = false;
        console.log(action.payload);
        toast.success("ویرایش محصول با موفقیت انجام شد");
      })
      .addCase(editProduct.pending, (state, action) => {
        state.productsLoading = true;
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.productsLoading = false;
        toast.error("خطا در ویرایش محصول");
        console.log(action);
      })

      // delete discount
      .addCase(deleteDiscount.fulfilled, (state, action) => {
        state.discountsLoading = false;
        toast.success(action.payload.massage);
        console.log(action);
      })
      .addCase(deleteDiscount.pending, (state, action) => {
        state.discountsLoading = true;
      })
      .addCase(deleteDiscount.rejected, (state, action) => {
        state.discountsLoading = false;
        toast.error("خطا در حذف تخفیف ");
        console.log(action);
      })

      // edit discount
      .addCase(editDiscount.fulfilled, (state, action) => {
        state.discountsLoading = false;
        state.discountId = "";
        toast.success(action.payload.massage);
        console.log(action);
      })
      .addCase(editDiscount.pending, (state, action) => {
        state.discountsLoading = true;
      })
      .addCase(editDiscount.rejected, (state, action) => {
        state.discountsLoading = false;
        state.discountId = "";
        toast.error("خطا در ویرایش ");
        console.log(action);
      })

      // add discount
      .addCase(addDiscount.fulfilled, (state, action) => {
        state.discountsLoading = false;
        toast.success("تخفیف اضافه شد");
      })
      .addCase(addDiscount.pending, (state, action) => {
        state.discountsLoading = true;
      })
      .addCase(addDiscount.rejected, (state, action) => {
        state.discountsLoading = false;
        toast.error("خطا در افزودن تخفیف ");
        console.log(action);
      })

      // get projects
      .addCase(getProjects.fulfilled, (state, action) => {
        state.projectsLoading = false;
        state.projects = action.payload;
      })
      .addCase(getProjects.pending, (state, action) => {
        state.projectsLoading = true;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.projectsLoading = false;
        console.error("* error in getting project *");
        toast.error("خطا در بارگیری پروژه ها");
      })

      // add projects
      .addCase(addProject.fulfilled, (state, action) => {
        state.projectsLoading = false;
        toast.success("پروژه با موفقیت ذخیره شد");
      })
      .addCase(addProject.pending, (state, action) => {
        state.projectsLoading = true;
      })
      .addCase(addProject.rejected, (state, action) => {
        state.projectsLoading = false;
        console.log(action);
        toast.error("خطا در ذخیره پروژه");
      })

      // add Sefaresh
      .addCase(addSefaresh.fulfilled, (state, action) => {
        state.projectsLoading = false;
        toast.success("سفارش با موفقیت ذخیره شد");
      })
  .addCase(addSefaresh.pending, (state, action) => {
        state.projectsLoading = true;
      })
      .addCase(addSefaresh.rejected, (state, action) => {
        state.projectsLoading = false;
        console.log(action);
        toast.error("خطا در ذخیره پروژه");
      })

      // edit projects
      .addCase(editProject.fulfilled, (state, action) => {
        state.editProjectLoading = false;
        toast.success(action.payload[0]);
      })
      .addCase(editProject.pending, (state, action) => {
        state.editProjectLoading = true;
      })
      .addCase(editProject.rejected, (state, action) => {
        state.editProjectLoading = false;
        toast.error("خطا در ویرایش پروژه");
        console.log(action);
      })

      // add gallery
      .addCase(addGallery.fulfilled, (state, action) => {
        state.galleryLoading = false;
        if (action.payload === 201) {
          toast.success("گالری ذخیره شد");
        }
      })
      .addCase(addGallery.pending, (state, action) => {
        state.galleryLoading = true;
      })
      .addCase(addGallery.rejected, (state, action) => {
        state.galleryLoading = false;
        console.log(action);
        toast.error("گالری ذخیره نشد");
      })

      // delete gallery
      .addCase(deleteGallery.fulfilled, (state, action) => {
        state.galleryLoading = false;
        state.deleteGallerySuccess = !state.deleteGallerySuccess;
        toast.success("تصویر با موفقیت حذف شد");
        console.log(action);
      })
      .addCase(deleteGallery.pending, (state, action) => {
        state.galleryLoading = true;
      })
      .addCase(deleteGallery.rejected, (state, action) => {
        state.galleryLoading = false;
        toast.error("خطا در حذف تصویر");
      })

      // get gallery by id
      .addCase(getGalleryById.fulfilled, (state, action) => {
        state.galleryLoading = false;
        state.getGallerySuccess = !state.getGallerySuccess;
        state.gallery = action.payload.data;
      })
      .addCase(getGalleryById.pending, (state, action) => {
        state.galleryLoading = true;
      })
      .addCase(getGalleryById.rejected, (state, action) => {
        state.galleryLoading = false;
        console.error(action);
      })

      // get blogs
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.blogsLoading = false;
        state.blogs = action.payload.data;
      })
      .addCase(getBlogs.pending, (state, action) => {
        state.blogsLoading = true;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.blogsLoading = false;
        console.error(action);
      })

      // add blog
      .addCase(addBlog.fulfilled, (state, action) => {
        state.blogsLoading = false;
        toast.success("مقاله با موفقیت ذخیره شد");
      })
      .addCase(addBlog.pending, (state, action) => {
        state.blogsLoading = true;
      })
      .addCase(addBlog.rejected, (state, action) => {
        state.blogsLoading = false;
        toast.error("خطا در ذخیره مقاله");
      })

      // edit blog
      .addCase(editBlog.fulfilled, (state, action) => {
        state.blogsLoading = false;
        toast.success(action.payload.message);
        console.log(action);
      })
      .addCase(editBlog.pending, (state, action) => {
        state.blogsLoading = true;
      })
      .addCase(editBlog.rejected, (state, action) => {
        state.blogsLoading = false;
        toast.error("خطا در ویرایش مقاله");
        console.log(action);
      })

      // delete blog
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.blogsDeleteLoading = false;
        state.articlesSwitch = "all";
        toast.success("مقاله با موفقیت حذف شد");
      })
      .addCase(deleteBlog.pending, (state, action) => {
        state.blogsDeleteLoading = true;
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.blogsDeleteLoading = false;
        toast.error("خطا در حذف مقاله");
      })

      // get roles
      .addCase(getRoles.fulfilled, (state, action) => {
        state.rolesLoading = false;
        state.roles = action.payload.roles;
        state.permissions = action.payload.permissions;
      })
      .addCase(getRoles.pending, (state, action) => {
        state.rolesLoading = true;
      })
      .addCase(getRoles.rejected, (state, action) => {
        state.rolesLoading = false;
        console.log("* error in getting roles *");
      })

      // add role
      .addCase(addRole.fulfilled, (state, action) => {
        state.rolesLoading = false;
        toast.success("نقش با موفقیت اضافه شد");
      })
      .addCase(addRole.pending, (state, action) => {
        state.rolesLoading = true;
      })
      .addCase(addRole.rejected, (state, action) => {
        state.rolesLoading = false;
        console.log("* error in getting roles *", action);
        toast.error("خطا در افزودن نقش");
      })

      // get roleById
      .addCase(getRoleById.fulfilled, (state, action) => {
        state.rolesLoading = false;
        state.permissionsForEdit = action.payload.permissions;
      })
      .addCase(getRoleById.pending, (state, action) => {
        state.rolesLoading = true;
      })
      .addCase(getRoleById.rejected, (state, action) => {
        state.rolesLoading = false;
        console.log("error in getting role by id =>", action);
      })

      // get userRole
      .addCase(getUserRole.fulfilled, (state, action) => {
        let permissionsIds = action.payload.permissions.map((per) => per.id);
        state.userPermissions = permissionsIds;
      })
      .addCase(getUserRole.pending, (state, action) => {})
      .addCase(getUserRole.rejected, (state, action) => {
        console.log("error in getting user role =>", action);
      })

      // delete role
      .addCase(deleteRole.fulfilled, (state, action) => {
        state.rolesLoading = false;
        toast.success(action.payload);
      })
      .addCase(deleteRole.pending, (state, action) => {
        state.rolesLoading = true;
      })
      .addCase(deleteRole.rejected, (state, action) => {
        state.rolesLoading = false;
        toast.error("خطا در حذف نقش");
      })

      // update role
      .addCase(updateRole.fulfilled, (state, action) => {
        state.rolesLoading = false;
        toast.success("نقش با موفقیت ویرایش شد");
        console.log(action.payload);
      })
      .addCase(updateRole.pending, (state, action) => {
        state.rolesLoading = true;
      })
      .addCase(updateRole.rejected, (state, action) => {
        state.rolesLoading = false;
        toast.error("خطا در ویرایش نقش");
      })

      // get users
      .addCase(getUsers.fulfilled, (state, action) => {
        state.usersLoading = false;
        state.users = action.payload.users;
      })
      .addCase(getUsers.pending, (state, action) => {
        state.usersLoading = true;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.usersLoading = false;
        console.error(action);
      })
      // supervisors
      .addCase(getSupervisors.pending, (state) => {
        state.supervisorsLoading = true;
      })
      .addCase(getSupervisors.fulfilled, (state, action) => {
        state.supervisorsLoading = false;
        state.supervisors = action.payload;
      })
      .addCase(getSupervisors.rejected, (state, action) => {
        state.supervisors = false;
        console.error(action);
      })

      .addCase(getSupervisorProjects.pending, (state) => {
        state.supervisorProjectsLoading = true;
      })
      .addCase(getSupervisorProjects.fulfilled, (state, action) => {
        state.supervisorProjectsLoading = false;
        console.log(action)
        state.supervisorProjects = action.payload;
      })
      .addCase(getSupervisorProjects.rejected, (state, action) => {
        state.supervisorProjects = false;
        console.error(action);
      })
      //getEmployees
      .addCase(getEmployee.fulfilled, (state, action) => {
        state.employeeLoading = false;
        console.log(action)
        state.employee = action.payload
      
      })
      .addCase(getEmployee.pending, (state, action) => {
        state.employeeLoading = true;
      })
      .addCase(getEmployee.rejected, (state, action) => {
        state.employeeLoading = false;
        console.error(action);
      })
      .addCase(choiceEmployee.fulfilled, (state, action) => {
        state.employeeLoading = false;
        if(action.payload.error) {
          toast.warn(action.payload.error.data?.massage);
          console.log(action)
      } else
      {
        console.log(action)
          toast.success(action.payload.massage);
      }
      
      })
      .addCase(choiceEmployee.pending, (state, action) => {
        state.employeeLoading = true;
      })
      .addCase(choiceEmployee.rejected, (state, action) => {
        state.employeeLoading = false;
        console.error(action);
      })
      // update user
      .addCase(updateUser.fulfilled, (state, action) => {
        state.usersLoading = false;
        console.log(action);
      })
      .addCase(updateUser.pending, (state, action) => {
        state.usersLoading = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.usersLoading = false;
        toast.error("خطا در ویرایش کاربر");
        console.log(action);
      })

      // delete user
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.usersLoading = false;
        toast.success("کاربر با موفقیت حذف شد");
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.usersLoading = true;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.usersLoading = false;
        toast.error("خطا در حذف کاربر");
        console.log(action);
      })

      // get work-sample
      .addCase(getWorkSamples.fulfilled, (state, action) => {
        state.workSamplesLoading = false;
        console.log(action.payload);
      })
      .addCase(getWorkSamples.pending, (state, action) => {
        state.workSamplesLoading = true;
      })
      .addCase(getWorkSamples.rejected, (state, action) => {
        state.workSamplesLoading = false;
        toast.error("خطا در بارگیری نمونه کارها");
        console.log(action);
      })

      // get sellers
      .addCase(getSellers.fulfilled, (state, action) => {
        state.sellerLoading = false;
        state.sellers = action.payload.data;
      })
      .addCase(getSellers.pending, (state, action) => {
        state.sellerLoading = true;
      })
      .addCase(getSellers.rejected, (state, action) => {
        state.sellerLoading = false;
        toast.error("خطا در بارگیری  فروشنده ها");
        console.log(action);
      })

      // delete seller
      .addCase(deleteSeller.fulfilled, (state, action) => {
        state.sellerLoading = false;
        state.deleteSellerSuccess = !state.deleteSellerSuccess;
        toast.success(action.payload.message);
      })
      .addCase(deleteSeller.pending, (state, action) => {
        state.sellerLoading = true;
      })
      .addCase(deleteSeller.rejected, (state, action) => {
        state.sellerLoading = false;
        toast.error("خطا در حذف فروشنده");
        console.log(action);
      })

      // add seller
      .addCase(addSeller.fulfilled, (state, action) => {
        state.sellerLoading = false;
        toast.success("درخواست با موفقیت ارسال شد");
      })
      .addCase(addSeller.pending, (state, action) => {
        state.sellerLoading = true;
      })
      .addCase(addSeller.rejected, (state, action) => {
        state.sellerLoading = false;
        toast.error("متاسفانه درخواست با مشکل روبرو شد!");
      })
      // get banner 
      .addCase(getBanner.fulfilled, (state, action) => {
        state.bannerLoading = false;
     
        state.banner = action.payload.banners;
      
      })
      .addCase(getBanner.pending, (state, action) => {
        state.bannerLoading = true;
      })
      .addCase(getBanner.rejected, (state, action) => {
        state.bannerLoading = false;
        toast.error("متاسفانه درخواست با مشکل روبرو شد!");
      })

      .addCase(addBanner.fulfilled, (state, action) => {
        state.bannerLoading = false;
        toast.success("درخواست با موفقیت ارسال شد");
      })
      .addCase(addBanner.pending, (state, action) => {
        state.bannerLoading = true;
      })
      .addCase(addBanner.rejected, (state, action) => {
        state.bannerLoading = false;
        toast.error("متاسفانه درخواست با مشکل روبرو شد!");
      })

      .addCase(deleteBanner.fulfilled, (state, action) => {
        state.bannerLoading = false;
        toast.success("درخواست با موفقیت ارسال شد");
      })
      .addCase(deleteBanner.pending, (state, action) => {
        state.bannerLoading = true;
      })
      .addCase(deleteBanner.rejected, (state, action) => {
        state.bannerLoading = false;
        toast.error("متاسفانه درخواست با مشکل روبرو شد!");
      })

      .addCase(editBanner.fulfilled, (state, action) => {
        state.bannerLoading = false;
        toast.success("درخواست با موفقیت ارسال شد");
      })
      .addCase(editBanner.pending, (state, action) => {
        state.bannerLoading = true;
      })
      .addCase(editBanner.rejected, (state, action) => {
        state.bannerLoading = false;
        toast.error("متاسفانه درخواست با مشکل روبرو شد!");
      })

      
      // get orders
      .addCase(getOrders.fulfilled, (state, action) => {
        state.ordersLoading = false;
        state.orders = action.payload.data;
      })
      .addCase(getOrders.pending, (state, action) => {
        state.ordersLoading = true;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.ordersLoading = false;
      })
      .addCase(getDetailOrders.fulfilled, (state, action) => {
  
        state.ordersLoading = false;
        console.log(action.payload);
        state.detailOrders = action.payload;
      })
      .addCase(getDetailOrders.pending, (state, action) => {
        state.ordersLoading = true;
      })
      .addCase(getDetailOrders.rejected, (state, action) => {
        state.ordersLoading = false;
      })

      // get coupons
      .addCase(getCoupons.fulfilled, (state, action) => {
        state.couponLoading = false;
        state.coupons = action.payload.data;
      })
      .addCase(getCoupons.pending, (state, action) => {
        state.couponLoading = true;
      })
      .addCase(getCoupons.rejected, (state, action) => {
        state.couponLoading = false;
        console.log(action);
      })

      // add coupon
      .addCase(addCoupon.fulfilled, (state, action) => {
        state.couponLoading = false;
        toast.success("کوپن با موفقیت ذخیره شد");
      })
      .addCase(addCoupon.pending, (state, action) => {
        state.couponLoading = true;
      })
      .addCase(addCoupon.rejected, (state, action) => {
        state.couponLoading = false;
        toast.error("خطا در  ذخیره کوپن");
      })

      // delete coupon
      .addCase(deleteCoupon.fulfilled, (state, action) => {
        state.couponLoading = false;
        state.couponsSuccess = !state.couponsSuccess;
        toast.success("کوپن با موفقیت حذف شد");
      })
      .addCase(deleteCoupon.pending, (state, action) => {
        state.couponLoading = true;
      })
      .addCase(deleteCoupon.rejected, (state, action) => {
        state.couponLoading = false;
        toast.error("خطا در  حذف کوپن");
      })

      // edit coupon
      .addCase(editCoupon.fulfilled, (state, action) => {
        state.couponLoading = false;
        toast.success("ویرایش با موفقیت انجام شد");
      })
      .addCase(editCoupon.pending, (state, action) => {
        state.couponLoading = true;
      })
      .addCase(editCoupon.rejected, (state, action) => {
        state.couponLoading = false;
        toast.error("خطا در  ویرایش کوپن");
      })

      // get tags
      .addCase(getTags.fulfilled, (state, action) => {
        state.tagsLoading = false;
        state.tags = action.payload.tags;
      })
      .addCase(getTags.pending, (state, action) => {
        state.tagsLoading = true;
      })
      .addCase(getTags.rejected, (state, action) => {
        state.tagsLoading = false;
        toast.error("خطا در بارگیری تک ها");
      })

      // add tag
      .addCase(addTag.fulfilled, (state, action) => {
        state.tagsLoading = false;
        toast.success("تگ اضافه شد");
      })
      .addCase(addTag.pending, (state, action) => {
        state.tagsLoading = true;
      })
      .addCase(addTag.rejected, (state, action) => {
        state.tagsLoading = false;
        toast.error("خطا در افزودن تگ");
      })

      // delete tag
      .addCase(deletingTag.fulfilled, (state, action) => {
        state.tagsLoading = false;
        state.deleteTagSuccess = !state.deleteTagSuccess;
        toast.success(action.payload.massage);
      })
      .addCase(deletingTag.pending, (state, action) => {
        state.tagsLoading = true;
      })
      .addCase(deletingTag.rejected, (state, action) => {
        state.tagsLoading = false;
        toast.error("خطا در حذف تک");
      })

      // get news
      .addCase(getNews.fulfilled, (state, action) => {
        state.newsLoading = false;
        state.news = action.payload.data;
      })
      .addCase(getNews.pending, (state, action) => {
        state.newsLoading = true;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.newsLoading = false;
        toast.error("خطا در  بارگیری اخبار");
      })

      // add news
      .addCase(addNews.fulfilled, (state, action) => {
        state.newsLoading = false;
        toast.success("با موفقیت ذخیره شد");
      })
      .addCase(addNews.pending, (state, action) => {
        state.newsLoading = true;
      })
      .addCase(addNews.rejected, (state, action) => {
        state.newsLoading = false;
        toast.error("خطا در  افزودن خبر");
      })

      // delete news
      .addCase(deleteNews.fulfilled, (state, action) => {
        state.newsDeleteLoading = false;
        state.deleteNewsSuccess = true;
        toast.success(action.payload.massage);
        console.log(action);
      })
      .addCase(deleteNews.pending, (state, action) => {
        state.newsDeleteLoading = true;
      })
      .addCase(deleteNews.rejected, (state, action) => {
        state.newsDeleteLoading = false;
        toast.error("خطا در  حذف خبر");
      })

      // edit news
      .addCase(editNews.fulfilled, (state, action) => {
        state.editNewsLoading = false;
        toast.success(action.payload.massage);
      })
      .addCase(editNews.pending, (state, action) => {
        state.editNewsLoading = true;
      })
      .addCase(editNews.rejected, (state, action) => {
        state.editNewsLoading = false;
        toast.error("خطا در  ویرایش خبر");
      })

      // get Links
      .addCase(getLinks.fulfilled, (state, action) => {
        state.linksLoading = false;
        state.links = action.payload.data;
        console.log(action);
      })
      .addCase(getLinks.pending, (state, action) => {
        state.linksLoading = true;
      })
      .addCase(getLinks.rejected, (state, action) => {
        state.linksLoading = false;
        toast.error("خطا در  بارگیری مسیر ها");
      })

      // add link
      .addCase(addLink.fulfilled, (state, action) => {
        state.linksLoading = false;
        toast.success("با موفقیت ذخیره شد");
      })
      .addCase(addLink.pending, (state, action) => {
        state.linksLoading = true;
      })
      .addCase(addLink.rejected, (state, action) => {
        state.linksLoading = false;
        toast.error("خطا در  افزودن مسیر");
      })

      // delete link
      .addCase(deleteLink.fulfilled, (state, action) => {
        state.linkDeleteLoading = false;
        toast.success(action.payload.massage);
      })
      .addCase(deleteLink.pending, (state, action) => {
        state.linkDeleteLoading = true;
      })
      .addCase(deleteLink.rejected, (state, action) => {
        state.linkDeleteLoading = false;
        toast.error("خطا در  حذف مسیر");
      })

      // get WorkSampleCategories
      .addCase(getWorkSampleCategories.fulfilled, (state, action) => {
        state.workSamplesLoading = false;
        state.workSampleCategories = action.payload.categories;
        console.log(action);
      })
      .addCase(getWorkSampleCategories.pending, (state, action) => {
        state.workSamplesLoading = true;
      })
      .addCase(getWorkSampleCategories.rejected, (state, action) => {
        state.workSamplesLoading = false;
        toast.error("خطا در  بارگیری ");
      })

      // add WorkSampleCategories
      .addCase(addWorkSampleCategories.fulfilled, (state, action) => {
        state.workSamplesLoading = false;
        toast.success("با موفقیت ذخیره شد");
      })
      .addCase(addWorkSampleCategories.pending, (state, action) => {
        state.workSamplesLoading = true;
      })
      .addCase(addWorkSampleCategories.rejected, (state, action) => {
        state.workSamplesLoading = false;
        toast.error("خطا در  افزودن ");
      })

      // delete WorkSampleCategories
      .addCase(deleteWorkSampleCategories.fulfilled, (state, action) => {
        state.workSamplesLoading = false;
        toast.success(action.payload.massage);
      })
      .addCase(deleteWorkSampleCategories.pending, (state, action) => {
        state.workSamplesLoading = true;
      })
      .addCase(deleteWorkSampleCategories.rejected, (state, action) => {
        state.workSamplesLoading = false;
        toast.error("خطا در  حذف ");
      })
      //get WorkSample
      .addCase(getWorkSample.fulfilled, (state, action) => {
        state.workSamplesLoading = false;
        state.workSample = action.payload.data;
        console.log(action);
      })
      .addCase(getWorkSample.pending, (state, action) => {
        state.workSamplesLoading = true;
      })
      .addCase(getWorkSample.rejected, (state, action) => {
        state.workSamplesLoading = false;
        toast.error("خطا در  بارگیری ");
      })
      .addCase(getWorkSampleDetail.fulfilled, (state, action) => {
        state.workSamplesLoading = false;
        state.workSampleDetail = action.payload.data;
        console.log(action);
      })
      .addCase(getWorkSampleDetail.pending, (state, action) => {
        state.workSamplesLoading = true;
      })
      .addCase(getWorkSampleDetail.rejected, (state, action) => {
        state.workSamplesLoading = false;
        toast.error("خطا در  بارگیری ");
      })

      // add WorkSample
      .addCase(addWorkSample.fulfilled, (state, action) => {
        state.workSamplesLoading = false;
        toast.success("با موفقیت ذخیره شد");
      })
      .addCase(addWorkSample.pending, (state, action) => {
        state.workSamplesLoading = true;
      })
      .addCase(addWorkSample.rejected, (state, action) => {
        state.workSamplesLoading = false;
        toast.error("خطا در  افزودن ");
      })

      // delete WorkSample
      .addCase(deleteWorkSample.fulfilled, (state, action) => {
        state.workSamplesLoading = false;
        console.log(action.payload)
        toast.success(action.payload);
      })
      .addCase(deleteWorkSample.pending, (state, action) => {
        state.workSamplesLoading = true;
      })
      .addCase(deleteWorkSample.rejected, (state, action) => {
        state.workSamplesLoading = false;
        toast.error("خطا در  حذف ");
      })
      //edit worksample
      .addCase(editWorkSample.fulfilled, (state, action) => {
        state.workSamplesLoading = false;
        console.log(action)
        toast.success(action.payload.message);
      })
      .addCase(editWorkSample.pending, (state, action) => {
        state.workSamplesLoading = true;
      })
      .addCase(editWorkSample.rejected, (state, action) => {
        state.workSamplesLoading = false;
        toast.error("خطا در  حذف ");
        })
        
      // get getworkSampleGalleries
      .addCase(getworkSampleGalleries.fulfilled, (state, action) => {
        state.workSamplesLoading = false;
        state.workSampleGalleries = action.payload.work_samples_gallery;
        toast.success(action.payload.massage);
      })
      .addCase(getworkSampleGalleries.pending, (state, action) => {
        state.workSamplesLoading = true;
      })
      .addCase(getworkSampleGalleries.rejected, (state, action) => {
        state.workSamplesLoading = false;
        toast.error("خطا در  بارگیری ");
      })

      // add workSampleGalleries
      .addCase(addworkSampleGalleries.fulfilled, (state, action) => {
        state.workSamplesLoading = false;
        toast.success("با موفقیت ذخیره شد");
      })
      .addCase(addworkSampleGalleries.pending, (state, action) => {
        state.workSamplesLoading = true;
      })
      .addCase(addworkSampleGalleries.rejected, (state, action) => {
        state.workSamplesLoading = false;
        toast.error("خطا در  افزودن ");
      })
      
      // delete WorkSamplegallery
      .addCase(deleteworkSampleGalleries.fulfilled, (state, action) => {
        state.workSamplesLoading = false;
        toast.success(action.payload.massage);
      })
      .addCase(deleteworkSampleGalleries.pending, (state, action) => {
        state.workSamplesLoading = true;
      })
      .addCase(deleteworkSampleGalleries.rejected, (state, action) => {
        state.workSamplesLoading = false;
        toast.error("خطا در  حذف ");
      })
      .addCase(getworkSampleGalleriesDetail.fulfilled, (state, action) => {
        state.workSamplesLoading = false;
        console.log(action)
        state.workSampleGalleriesDetail = action.payload;

        toast.success(action.payload.massage);
      })
      .addCase(getworkSampleGalleriesDetail.pending, (state, action) => {
        state.workSamplesLoading = true;
      })
      .addCase(getworkSampleGalleriesDetail.rejected, (state, action) => {
        state.workSamplesLoading = false;
        toast.error("خطا در  گرفتن اطلاعات ");
      })
  },
})
       

export const { setContent,
               setSwitch,
               setSwitchCategories, 
               setSwitchCategories_2,
               setScrollUp,
               setDiscountId,
               setDeleteNewsSuccess } = dashboardSlice.actions;

export default dashboardSlice.reducer;
