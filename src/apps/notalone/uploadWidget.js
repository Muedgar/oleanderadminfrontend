import { useEffect, useRef } from "react";

const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: process.env.REACT_APP_CLOUD_NAME,
            uploadPreset: process.env.REACT_APP_UPLOAD_PRESET
        }, function(error, result) {
            if(!error && result && result.event === "success") {
                console.log('Done ',result.info)
            }
        })
    },[])
    return (
        <button onClick={() => widgetRef.current.open()}>Upload</button>
    )
}

export default UploadWidget;