"use client"
import Lottie from "lottie-react";
import notFound from "@/public/assets/error.json";
const notFoundPage = () => {
    return (
        <div>
            <Lottie animationData={notFound} loop={true} />
        </div>
    );
};

export default notFoundPage;