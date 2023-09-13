import axios from "axios";

const params={
    headers: {
        Authorization: "bearer "+ process.env.REACT_APP_STRIPE_APP_KEY,
    },
};

export const fetchDataFromApi = async(url)=>{
    try {
        const{data}=await axios.get(process.env.REACT_APP_DEV_URL + url, params);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const makePaymentRequest = axios.create({
    baseURL: "http://localhost:1337",
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    },
});