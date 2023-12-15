import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider as RootProvider } from "react-router-dom"
import MainTemplate from "../components/pages/MainTemplate";

export const RouterProvider = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainTemplate />}>
            </Route>
        )
    );
    return <RootProvider router={router}/>
};