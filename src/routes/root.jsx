import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, Routes } from "react-router-dom";
import Contador from "../components/Contador";
import ErrorPage from "../components/ErrorPage";
import FetchNews from "../components/FetchNews";
import FetchProducts from "../components/FetchProducts";
import { PageLayout } from "../components/PageLayout";

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<PageLayout />} errorElement={<ErrorPage />}>
            <Route path="noticia" element={<FetchNews />}></Route>
            <Route path="produto" element={<FetchProducts />}></Route>
            <Route path="contador" element={<Contador />}></Route>
        </Route>     
    )
)


const  Root = () => {
    return (
        
        <RouterProvider router={route} />
       
    )
}

export default Root;