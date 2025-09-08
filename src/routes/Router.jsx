import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));
const CaseStudy1 = lazy(() => import("../components/caseStudies/caseStudy1"));
const CaseStudy2 = lazy(() => import("../components/caseStudies/caseStudy2"));
const CaseStudy3 = lazy(() => import("../components/caseStudies/caseStudy3"));
const CaseStudy4 = lazy(() => import("../components/caseStudies/caseStudy4"));
const CaseStudy5 = lazy(() => import("../components/caseStudies/caseStudy5"));
const CaseStudy6 = lazy(() => import("../components/caseStudies/caseStudy6"));
const Contact = lazy(() => import("../components/contact/Contact"));

const repoName = import.meta.env.VITE_REPO_NAME || "";

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/caseStudies/caseStudy1",
          element: <CaseStudy1 />,
        },
        {
          path: "/caseStudies/caseStudy2",
          element: <CaseStudy2 />,
        },
        {
          path: "/caseStudies/caseStudy3",
          element: <CaseStudy3 />,
        },
        {
          path: "/caseStudies/caseStudy4",
          element: <CaseStudy4 />,
        },
        {
          path: "/caseStudies/caseStudy5",
          element: <CaseStudy5 />,
        },
        {
          path: "/caseStudies/caseStudy6",
          element: <CaseStudy6 />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ],
  { basename: `/${repoName}` }
);
