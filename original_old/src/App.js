import "./App.css";
import React, { Suspense } from "react";
import SplashPage from "./components/SplashLoading/SplashPage";
import Home from "./components/Home/Home";

const OtherComponent = React.lazy(() => import("./components/Home/Home"));

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <div class="content">
          <div className="backgroundDesignContainer">
            <div className="backgroundDesignHome" />
            <Suspense fallback={<SplashPage />}>
              <OtherComponent />
             
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
