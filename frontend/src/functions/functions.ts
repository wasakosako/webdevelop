import { NavigateFunction } from "react-router-dom";
import { userApi } from "../api/users";
import { toaster } from "../components/ui/toaster";
import { userProps } from "../types/atoms";

export const registFucntion=((data:userProps,navigate:NavigateFunction)=>{
    try {
        const promise = userApi.post(data);
        toaster.promise(promise, {
            success: {
                title: "ユーザー登録が完了しました",
            },
            error: {
                title: "ユーザー登録が失敗しました",
            },
            loading: { title: "Uploading..." },
        })
        navigate("/Top");
    } catch (error) {
        console.error("Signup failed:", error);
    }
})