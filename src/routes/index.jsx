import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";

// Lazy loaded components
const Main = lazy(() => import("../components/layout/Main"));
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const MattSchool = lazy(() => import("../pages/pages/MattSchool"));
const MattFurnishing = lazy(() => import("../pages/pages/MattFurnishing"));
const MattModel = lazy(() => import("../pages/pages/MattModel"));
const Service = lazy(() => import("../pages/Service"));
const OurSkills = lazy(() => import("../pages/OurSkills"));
const Experience = lazy(() => import("../pages/pages/Experience"));
const OurCollection = lazy(() => import("../pages/pages/OurCollection"));
const AboutUs = lazy(() => import("../components/aboutUs/AboutUs"));
const Company = lazy(() => import("../pages/Company"));
const Portfolio = lazy(() => import("../pages/Portfolio"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-black z-50">
    <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-blue-500 border-blue-200"></div>
  </div>
);

const ErrorElement = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">Oops!</h1>
      <p className="text-xl text-gray-600 mb-4">
        Sorry, an unexpected error has occurred.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Go Back Home
      </Link>
    </div>
  </div>
);

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Main />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
              <AboutUs />
              <Service />
              <OurSkills />
              <Experience />
              <Company />
              <OurCollection />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="portfolio"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Portfolio />
            </Suspense>
          }
        />
        <Route path="mattcompany">
          <Route
            path="mattschool"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <MattSchool />
              </Suspense>
            }
          />
          <Route
            path="mattfurnishing"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <MattFurnishing />
              </Suspense>
            }
          />
          <Route
            path="mattmodel"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <MattModel />
              </Suspense>
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<ErrorElement />} />
    </Routes>
  );
};

export default Router;
