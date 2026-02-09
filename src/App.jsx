import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import Careers from './pages/Careers'
import NoVacancy from './pages/NoVacancy'
import Error from './pages/Error'

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <ErrorBoundary fallback={<Error />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/no-vacancy" element={<NoVacancy />} />
              <Route path="/error" element={<Error />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
