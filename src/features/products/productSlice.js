import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getTags, getTagsById } from "./action";

const initialState = {
  products: [],
  discounts: [],
  tags: [],
  productsCate: [],
  FilteredProducts: [],
  goalProduct: "",
  isLoading: false,
  maxPrice: 0,
  minPrice: 0,
  categorySearch: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    foundProduct: (state, action) => {
      let id = action.payload;
      const target = state.products.find((item) => item.id === id);
      state.goalProduct = target;
    },
    sortByAll: (state) => {
      state.categorySearch = false;
      state.FilteredProducts = state.products;
    },
    sortByLatest: (state) => {
      if (state.categorySearch) {
        let newList = state.productsCate.sort((a, b) => {
          let dateA = a.created_at.split("/");
          let dateB = b.created_at.split("/");

          dateA = dateA[0] + dateA[1] + dateA[2];
          dateB = dateB[0] + dateB[1] + dateB[2];

          return dateB - dateA;
        });
        state.FilteredProducts = newList;
      } else {
        let newList = state.products.sort((a, b) => {
          let dateA = a.created_at.split("/");
          let dateB = b.created_at.split("/");

          dateA = dateA[0] + dateA[1] + dateA[2];
          dateB = dateB[0] + dateB[1] + dateB[2];

          return dateB - dateA;
        });
        state.FilteredProducts = newList;
      }
    },
    sortByCheapest: (state) => {
      if (state.categorySearch) {
        let newList = state.productsCate.sort((a, b) => {
          return a.price - b.price;
        });
        state.FilteredProducts = newList;
      } else {
        let newList = state.products.sort((a, b) => {
          return a.price - b.price;
        });
        state.FilteredProducts = newList;
      }
    },
    sortByExpensive: (state) => {
      if (state.categorySearch) {
        let newList = state.productsCate.sort((a, b) => {
          return b.price - a.price;
        });
        state.FilteredProducts = newList;
      } else {
        let newList = state.products.sort((a, b) => {
          return b.price - a.price;
        });
        state.FilteredProducts = newList;
      }
    },
    sortByPriceRange: (state, action) => {
      if (state.categorySearch) {
        let { min: minPrice, max: maxPrice } = action.payload;
        let newList = state.productsCate.filter((product) => {
          return product.price >= minPrice && product.price <= maxPrice;
        });
        state.FilteredProducts = newList;
      } else {
        let { min: minPrice, max: maxPrice } = action.payload;
        let newList = state.products.filter((product) => {
          return product.price >= minPrice && product.price <= maxPrice;
        });
        state.FilteredProducts = newList;
      }
    },
    sortByName: (state, action) => {
      let value = action.payload;
      
      if (state.categorySearch) {
        if (value !== "") {
          let newList = state.productsCate.filter((product) => {
            return product.title.includes(value);
          });
          state.FilteredProducts = newList;
        } else {
          state.FilteredProducts = state.productsCate;
        }
      } else {
        if (value !== "") {
          let newList = state.products.filter((product) => {
            return product.title.includes(value);
          });
          state.FilteredProducts = newList;
        } else {
          state.FilteredProducts = state.products;
        }
      }
    },
    sortByCategory: (state, action) => {
      state.categorySearch = true;

      state.productsCate = action.payload;
      state.FilteredProducts = action.payload;
      // state.maxPrice = state.FilteredProducts.reduce(
      //   (max, item) => Math.max(max, item.price),
      //   -Infinity
      // );
      // state.minPrice = state.FilteredProducts.reduce(
      //   (min, item) => Math.min(min, item.price),
      //   Infinity
      // );
    },
    deleteAllFilters: (state) => {
      return {
        ...state,
        FilteredProducts: state.products,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.discounts = action.payload.discounts;
        state.isLoading = false;
        state.products = action.payload.products;
        state.FilteredProducts = action.payload.products;
        state.maxPrice = action.payload.products.reduce(
          (max, item) => Math.max(max, item.price),
          -Infinity
        );
        state.minPrice = action.payload.products.reduce(
          (min, item) => Math.min(min, item.price),
          Infinity
        );
      })
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action);
      })
      // tags
      .addCase(getTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload.tags;
      })
      .addCase(getTags.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTags.rejected, (state, action) => {
        state.isLoading = false;
      })
      // get tags by id
      .addCase(getTagsById.fulfilled, (state, action) => {
        state.tags = action.payload.tags;
      });
  },
});

export const {
  foundProduct,
  sortByAll,
  sortByLatest,
  sortByCheapest,
  sortByExpensive,
  sortByPriceRange,
  sortByCategory,
  deleteAllFilters,
  sortByName,
} = productsSlice.actions;

export default productsSlice.reducer;
