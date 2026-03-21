import { Routes, Route } from 'react-router-dom'
import { useIsMobile } from './hooks/useIsMobile'
import LandscapeLayout from './pages/Landscape/Layout/LandscapeLayout/LandscapeLayout';
import Landing from './pages/Landscape/Landing/Landing';
import Work from './pages/Landscape/Work/Work';
import Contact from './pages/Landscape/Contact/Contact';
import { AboutChaeProvider } from './context/AboutChaeContext';

function App() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <>
        Hi
      </>
    )
  }

  return (
    <AboutChaeProvider>
      <Routes>
        <Route element={<LandscapeLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </AboutChaeProvider>
  )
}

export default App
