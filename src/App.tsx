import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { useIsMobile } from './hooks/useIsMobile'
import LandscapeLayout from './pages/Landscape/Layout/LandscapeLayout/LandscapeLayout';
import Landing from './pages/Landscape/Landing/Landing';
import Work from './pages/Landscape/Work/Work';
import Contact from './pages/Landscape/Contact/Contact';
import { AboutChaeProvider } from './context/AboutChaeContext';
import { WorkDetailProvider } from './context/WorkDetailContext';
import WorkDetail from './pages/Landscape/WorkDetail/WorkDetail';
import { projectsLoader } from './loaders/projectsLoader';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AboutChaeProvider><WorkDetailProvider><LandscapeLayout /></WorkDetailProvider></AboutChaeProvider>}>
      <Route path="/" element={<Landing />} />
      <Route path="/work" element={<Work />} />
      <Route
        path="/work/:type"
        element={<WorkDetail />}
        loader={projectsLoader}
      />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <>
        Hi
      </>
    )
  }

  return <RouterProvider router={router} />;
}

export default App
