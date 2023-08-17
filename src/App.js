import { useEffect, lazy, suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

// import Home from "./routes/home/home.component"; // Static import
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Spinner from "./components/spinner/spinner.component";
import Checkout from "./routes/checkout/checkout.component";

import { checkUserSession } from "./store/user/user.action";

const Home = lazy(() => import("./routes/home/home.component")); // Dymamic import

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    // getCurrentUser().then((user) => console.log(user));
  }, []); // dispatch dependency is missing but, dispach is a hook, so it never changes, you can choose if you want to put that, but it's not necessary.

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
