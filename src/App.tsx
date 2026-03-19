import { Routes, Route } from 'react-router-dom'
import { useIsMobile } from './hooks/useIsMobile'
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
      <Route path="/" element={<Landing />} />
    </Routes>
  )
}

export default App
