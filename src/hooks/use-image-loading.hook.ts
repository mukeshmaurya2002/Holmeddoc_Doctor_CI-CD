import { useState } from "react";

const useImageLoading = () => {
    const [imageLoading, setImageLoading] = useState(true);

    const onImageLoading = () => setImageLoading(false)

    return {
        imageLoading,
        onImageLoading
    }
}

export default  useImageLoading 