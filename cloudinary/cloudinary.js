import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: "reserve-it-fyp",
    api_key: "979423271914452",
    api_secret: "SWyHfA5VJ44wNwdl1KUpR5o3T7E"
});

export default cloudinary;