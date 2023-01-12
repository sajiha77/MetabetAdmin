import {
    useState
} from "react";
import {
    useArray
} from "./useArray";
export const useBanner = () => {
    const [bannerData, setBannerdata] = useState({})
    const [eventData, setEventData] = useState({})
    const formdata = new FormData();

    const handleBanner = async (e) => {
        const {
            files,
            name
        } = e.target;
        await useArray(files[0]).then((val) => {
            setBannerdata({
                ...bannerData,
                [name]: val,
            });
        });
    };

    const handleChange = (e) => {
        const {
            name,
            value
        } = e.target;
        setEventData({
            ...eventData,
            [name]: value,
        });
    };

    const handleVideo = (e) => {

        const {
            name,
            files
        } = e.target;
        console.log({
            name
        })
        formdata.append(name, files[0]);
        // console.log(formdata.get(name), "check")
    }

    const getFormData = () => formdata;

    return {
        bannerData,
        handleBanner,
        handleChange,
        eventData,
        handleVideo,
        getFormData
    };
};