import { UseFormHandleSubmit } from "react-hook-form"
import { userProps } from "../types/atoms";
import { useAuth } from "../context/authContext";
import { toaster } from "../components/ui/toaster";
import { useNavigate } from "react-router-dom";
export type manageToastertype = {
    handleSubmit: UseFormHandleSubmit<userProps, undefined>;
    authApi: (user: userProps, login: (user: userProps) => void) => Promise<any>;

}

export const usemanageToaster = (props: manageToastertype) => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const onSubmit = props.handleSubmit(async (data) => {
        try {
            const promise = props.authApi(data, login);
            toaster.promise(promise, {
                success: {
                    title: "ログインに成功しました",
                },
                error: {
                    title: "ログインに失敗しました",
                },
                loading: { title: "Uploading..." },
            });
            navigate("/Top");
        } catch (error) {
            console.error("Signup failed:", error);
        }
    })
    return { onSubmit }
}
