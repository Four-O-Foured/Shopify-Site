import axios from "../../APIs/axios";
import { showCustomToast } from "../../components/Notification";
import { loadProduct } from "../reducers/productSlice";

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
 try {
   await axios.post("/products", product);
    showCustomToast("Product created successfully", "success");
    dispatch(asyncLoadProduct());
 } catch (error) {
    console.log(error);
    
 }
};

export const asyncLoadProduct = () => async (dispatch, getState) => {
 try {
   const {data} = await axios.get("/products");
   console.log(data);
   
   dispatch(loadProduct(data));
 } catch (error) {
    console.log(error);
    
 }
};

export const asyncUpdateProduct = (id, product) => async (dispatch, getState) => {
 try {
   await axios.patch(`/products/${id}`, product);
    showCustomToast("Product updated successfully", "success");
    dispatch(asyncLoadProduct());
 } catch (error) {
    console.log(error);
 }
};