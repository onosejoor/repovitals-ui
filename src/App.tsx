import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import Explore from './pages/Explore';
import RepoOverview from './pages/RepoOverview';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Docs from './pages/Docs';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/repo/:owner/:name" element={<RepoOverview />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/docs" element={<Docs />} />
            {/* <Route path="/repo/:owner/:name/details" element={<RepoDetail />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;