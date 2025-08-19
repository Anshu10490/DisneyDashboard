import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';

import Navbar from './components/Navbar';
import BackgroundMusic from './components/BackgroundMusic';

import Home from './pages/Home';
import Explore from './pages/Explore';
import About from './pages/About';
import LovePage from './pages/LovePage';
import FriendshipPage from './pages/FriendshipPage';
import BraveryPage from './pages/BraveryPage';
import CelebrationPage from './pages/CelebrationPage';
import MagicPage from './pages/MagicPage';
import FamilyPage from './pages/FamilyPage';
import AuthMagic from './pages/AuthMagic';
import MagicPortal from './pages/MagicPortal';

// ✅ ProtectedRoute
function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/" />;
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <BackgroundMusic />
          <Navbar />

          <Routes>
            {/* 🔐 Public Login Route */}
            <Route path="/" element={<AuthMagic />} />

            {/* 🔒 Private Routes */}
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/explore" element={<ProtectedRoute><Explore /></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
            <Route path="/love" element={<ProtectedRoute><LovePage /></ProtectedRoute>} />
            <Route path="/friendship" element={<ProtectedRoute><FriendshipPage /></ProtectedRoute>} />
            <Route path="/bravery" element={<ProtectedRoute><BraveryPage /></ProtectedRoute>} />
            <Route path="/celebration" element={<ProtectedRoute><CelebrationPage /></ProtectedRoute>} />
            <Route path="/magic" element={<ProtectedRoute><MagicPage /></ProtectedRoute>} />
            <Route path="/family" element={<ProtectedRoute><FamilyPage /></ProtectedRoute>} />
            <Route path="/magic-portal" element={<ProtectedRoute><MagicPortal /></ProtectedRoute>} />


            {/* 🔁 Catch-all route (optional) */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
