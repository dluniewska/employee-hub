import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider as RootProvider } from "react-router-dom"
import MainTemplate from "../components/pages/MainTemplate";
import HomePage from "../components/pages/HomePage";
import UserPage from "@/components/pages/UserPage";
import LoginPage from "@/components/pages/LoginPage";

export const RouterProvider = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<MainTemplate />}>
                <Route path="/" element={<HomePage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="users/:id" element={<UserPage />}/>
            </Route>
        )
    );
    return <RootProvider router={router}/>
};