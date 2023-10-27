import React, { useEffect, useState } from "react";
import { useStore } from "../store";
import { getCurrentUser } from "../api/axios";

const useAccountMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // useEffect(() => {
    //     const setGlobalUser = async () => {
    //         // if (user.id === undefined && localStorage.getItem("token") != null) {
    //             console.log("jestem w jusie")
    //             setLocalUser(await getCurrentUser());
    //             console.log(localUser);
    //             setUser(localUser);
    //         // }
    //     }
    //     setGlobalUser();
    // }, [user])
    

    return { open, handleClick, handleClose, anchorEl };
}

export default useAccountMenu;