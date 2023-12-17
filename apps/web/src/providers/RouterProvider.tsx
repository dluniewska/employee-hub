import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider as RootProvider } from "react-router-dom"
import MainTemplate from "../components/pages/MainTemplate";
import HomePage from "../components/pages/HomePage";

export const RouterProvider = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<MainTemplate />}>
                <Route path="/" element={<HomePage />}/>
            </Route>
        )
    );
    return <RootProvider router={router}/>
};