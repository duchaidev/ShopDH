import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const App = () => {
  return (
    <div className='w-[100%]'>
      <Suspense
        fallback={
          <div className="bg-[#1F2833] min-h-screen min-w-full flex items-center justify-center">
            <span>Loading</span>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

// export default React.memo(App);
export default App;