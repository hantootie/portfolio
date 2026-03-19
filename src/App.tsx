import { Routes, Route } from 'react-router-dom'
import { useIsMobile } from './hooks/useIsMobile'
import LandscapeLayout from './pages/Landscape/LandscapeLayout';
import Landing from './pages/Landscape/Landing/Landing';

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
    <Routes>
      <Route element={<LandscapeLayout />}>
        <Route path="/" element={<Landing />} />
      </Route>
    </Routes>
  )
}

export default App
