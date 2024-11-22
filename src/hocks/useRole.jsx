import { useEffect, useState } from "react";
import { axiosPublic } from "./useAxiosPublic";
import useAuth from './useAuth';


const useRole = () => {
    const { user } = useAuth();
    const [role, setRole]= useState([])
    useEffect(() =>{
        axiosPublic.get(`/getUserRole/${user?.email}`)
        .then(res =>{
            // console.log(res.data)
            setRole(res.data)
        })
    })
    return role;
};

export default useRole;