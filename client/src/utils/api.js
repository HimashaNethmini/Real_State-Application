import axios from 'axios';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';

export const api = axios.create({
    baseURL: "http://localhost:8000"
})

export const getAllProperties = async () => {
    try {
        const response = await api.get("/residency/allread", {
            timeout: 10 * 1000,
        });

        if (response.status===400 || response.status===500) {
            throw response.data
        }
        return response.data;

    }catch (error) {
        toast.error ( "Something went wrong");
        throw error
    }
};

//get specific property information
export const getProperty = async (id) => {
    try{
        const response = await api.get(`/residency/${id}`, {
           timeout: 10 * 1000, 
        });

        if (response.status === 400 || response.status === 500 ) {
            throw response.data;
        }
        return response.data;

    }catch(error) {
        toast.error("Something went wrong");
    }
};

//create new user
export const createUser = async (email,token) => {
    try{
        await api.post(
            `/user/register`,
            { email },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    } catch (error) {
        toast.error ("Something went wrong, please register again");
        throw error;
    }
};

//book visit
export const bookVisit = async ( date, propertyId, email, token ) => {
    try {
        await api.post(
            `/user/bookVisit/${propertyId}`,
            {
                email,
                id: propertyId,
                date: dayjs(date).format("DD/MM/YYYY"), 
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    } catch(error){
        toast.error("Something went wrong, please book again");
        throw error;
    }
};


