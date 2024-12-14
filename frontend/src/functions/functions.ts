import { NavigateFunction } from "react-router-dom";
import { authApi } from "../api/auth";
import { toaster } from "../components/ui/toaster";
import { userProps } from "../types/atoms";
import { useAuth } from "../context/authContext";

export const registFucntion=((data:userProps,navigate:NavigateFunction)=>{
    const {login}=useAuth();
    try {
        const promise = authApi.signup(data,login)
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