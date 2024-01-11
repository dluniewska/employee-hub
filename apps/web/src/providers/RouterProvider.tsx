import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider as RootProvider } from "react-router-dom";
import MainTemplate from "~pages/MainTemplate";
import HomePage from "~components/pages/HomePage";
import UserPage from "~components/pages/UserPage";
import LoginPage from "~components/pages/LoginPage";
import PrivateRoute from "~helpers/PrivateRoute";
import UnitsPage from "~components/pages/UnitsPage";
import SingleUnitPage from "~/components/pages/SingleUnitPage";


export const RouterProvider = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<MainTemplate />}>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/users/:id" element={<UserPage />} />
                    <Route path="/units" element={<UnitsPage />} />
                    <Route path="/units/:id" element={<SingleUnitPage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
            </Route>
        )
    );
    return <RootProvider router={router}/>
};
