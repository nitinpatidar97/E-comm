import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import ErrorPage from '../ErrorPage';
const HomeLazy = lazy(() => import("../Home"));
const AboutLazy = lazy(() => import("../About"));
const ProductsLazy = lazy(() => import("../Products"));
const SingleProductLazy = lazy(() => import("../SingleProduct"));
const ContactLazy = lazy(() => import("../Contact"));
const CartLazy = lazy(() => import("../Cart"));

const MainRoutes = () => {
    return useRoutes([
        {
            path: "/",
            element: <HomeLazy />
        },
        {
            path: "about",
            element: <AboutLazy />
        },
        {
            path: "products",
            element: <ProductsLazy />
        },
        {
            path: "singleproduct/:id",
            element: <SingleProductLazy />
        },
        {
            path: "contact",
            element: <ContactLazy />
        },
        {
            path: "cart",
            element: <CartLazy />
        },
        {
            path: '*',
            errorElement: <ErrorPage />
        }
    ])
}

export default MainRoutes;