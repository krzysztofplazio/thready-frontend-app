import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem("token");
        navigate("/login");
    };

    return logout;
}

export default useLogout;