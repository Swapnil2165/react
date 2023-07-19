import { Outlet } from "@mui/icons-material";
import React from "react";
import MuiNavbar from "../../components/MuiNavbar";

function RootLayout(){
    return(
        <>
            <MuiNavbar/>
            <Outlet/>
        </>
    )
}

export default RootLayout;