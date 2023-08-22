import axios from 'axios';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';

export const api = axios.create({
    baseURL: "http://localhost:8000/api"
})

export const getAllProperties = async () => {
    try {
        const response = await api.get("/residence/allresd", {
            timeout: 10 * 1000,
        });

        if (response.status=== 400 || response.status=== 500) {
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

//create new residencies
export const createResidency = async (data, token) => {
    console.log(data)
    try{
      const res = await api.post(
        `/residency/create`,
        {
          data
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    }catch(error)
    {
      throw error
    }
  }

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

//remove booking
export const removeBooking = async  ( id, email, token) => {
    try {
        await api.post(
            `/user/removeBooking/${id}`,
            {
                email,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }
        );
    } catch(error){
        toast.error("SOmething went wrong. Please remove again");
        throw error;
    }
};

//get all bookings
export const getAllBookings = async (email, token) => {
  
    if(!token) return 
    try {
      const res = await api.post(
        `/user/allBookings`,
        {
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data["bookedVisits"];
  
      
    } catch (error) {
      toast.error("Something went wrong while fetching bookings");
      throw error
    }
  }


//add favourite 
export const toFav = async (id, email, token) => {
    try {
      await api.post(
        `/user/toFav/${id}`,
        {
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      throw error;
    }
  };

  //get all favourite
  export const getAllFav = async (email, token) => {
    if(!token) return 
    try{
  
      const res = await api.post(
        `/user/allFav`,
        {
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
        
      return res.data["favResidenciesID"]
  
    }catch(e)
    {
      toast.error("Something went wrong while fetching favs");
      throw e
    }
  } 

