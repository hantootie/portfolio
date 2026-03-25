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
import MobileLanding from './pages/Mobile/MobileLanding/MobileLanding';
import MobileLayout from './pages/Mobile/Layout/MobileLayout/MobileLayout';
import MobileAbout from './pages/Mobile/MobileAbout/MobileAbout';

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

const mobileRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<WorkDetailProvider><MobileLayout /></WorkDetailProvider>}>
      <Route path="/" element={<MobileLanding />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/work" element={<Work /> } />
      <Route path="/about" element={<MobileAbout />} />
      <Route
        path="/work/:type"
        element={<WorkDetail />}
        loader={projectsLoader}
      />
    </Route>
  )
)

function App() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <RouterProvider router={mobileRouter} />
  }

  return <RouterProvider router={router} />;
}

export default App
