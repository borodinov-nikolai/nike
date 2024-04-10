import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import AuthPage from "./pages/auth";
import { SecureRoute } from "./features/secureRoute";
import Layout from "./layout";
import CategoriesPage from "./pages/categories";
import UsersPage from "./pages/users";
import CategoryEditPage from "./pages/categories/[edit]";
import SizesPage from "./pages/sizes";
import SizeEditPage from "./pages/sizes/[edit]";
import MaterialEditPage from "./pages/materials/[edit]";
import MaterialsPage from "./pages/materials";
import ColorsPage from "./pages/colors";
import ColorEditPage from "./pages/colors/[edit]";
import ProductsPage from "./pages/products";
import ImagesPage from "./pages/images";
import ImageEditPage from "./pages/images/[edit]";


const Router = () => {
  return (
    <BrowserRouter basename="/admin">
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route element={SecureRoute(<Layout />)}>
          <Route path="/" element={SecureRoute(<HomePage />)} />
          <Route path="/products" element={SecureRoute(<ProductsPage />)} />
          {/* <Route
            path="/products/:edit"
            element={SecureRoute(<ProductEditPage />)}
          /> */}
          <Route path="/categories" element={SecureRoute(<CategoriesPage />)} />
          <Route
            path="/categories/:edit"
            element={SecureRoute(<CategoryEditPage />)}
          />
          <Route path="/sizes" element={SecureRoute(<SizesPage/>)} />
          <Route
            path="/sizes/:edit"
            element={SecureRoute(<SizeEditPage />)}
          />
          <Route path="/colors" element={SecureRoute(<ColorsPage/>)} />
          <Route
            path="/colors/:edit"
            element={SecureRoute(<ColorEditPage />)}
          />
          <Route path="/materials" element={SecureRoute(<MaterialsPage/>)} />
          <Route
            path="/materials/:edit"
            element={SecureRoute(<MaterialEditPage />)}
          />
          <Route path="/images" element={SecureRoute(<ImagesPage/>)} />
          <Route
            path="/images/:edit"
            element={SecureRoute(<ImageEditPage/>)}
          />
          <Route path="/users" element={SecureRoute(<UsersPage />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
