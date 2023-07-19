import { Route } from "@mui/icons-material";
import { createBrowserRouter } from "react-router-dom";
import DeshBoard from "../pages/DeshBoard";
import MuiForm from "../components/MuiForm";

export const router=createBrowserRouter(
    createRoutesFromElement(
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<DeshBoard/>}/>
            <Route path="login" element={<MuiForm/>}/>
        </Route>
    )



)