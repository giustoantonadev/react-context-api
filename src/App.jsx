import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import WhoAreWe from "./pages/WhoAreWe"
import DefaultLayout from "./layouts/DefaultLayout"
import ContactPage from "./pages/ContactPage"
import FaqPage from "./pages/FaqPage"
import ShippingPage from "./pages/ShippingPage"
import ReturnsPage from "./pages/ReturnsPage"
import PrivacyPage from "./pages/PrivacyPage"
import TermsPage from "./pages/TermsPage"
import SupportPage from "./pages/SupportPage"
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/whoweare' element={<WhoAreWe />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/faq' element={<FaqPage />} />
            <Route path='/shipping' element={<ShippingPage />} />
            <Route path='/returns' element={<ReturnsPage />} />
            <Route path='/privacy' element={<PrivacyPage />} />
            <Route path='/terms' element={<TermsPage />} />
            <Route path='/support' element={<SupportPage />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<SingleProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
