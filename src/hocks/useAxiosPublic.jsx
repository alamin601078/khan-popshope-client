
import axios from "axios";

export const axiosPublic = axios.create({
    // baseURL: 'http://localhost:4000',
    baseURL: 'https://khan-popshope-server-4tphqau3f-alamin601078s-projects.vercel.app/',
})
const useAxiosPublic = () => {
    return axiosPublic;
}
export default useAxiosPublic;