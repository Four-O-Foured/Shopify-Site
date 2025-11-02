import axios from "../../APIs/axios";

export const asyncUserRegistration = (data) => async (dispatch, getState) => {
    try {
        const res = await axios.post('/users', data);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}