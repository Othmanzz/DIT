import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ITSolutionsPage from './pages/ITSolutions';
import BusinessAppsPage from './pages/BusinessApps';
import SoftwareDevelopmentPage from './pages/SoftwareDevelopment';
import CybersecurityPage from './pages/Cybersecurity';
import CloudDevOpsPage from './pages/CloudDevOps';
import ProcurementPage from './pages/Procurement';
import EduITPage from './pages/EduIT';
import ITProjectsPage from './pages/ITProjects';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import BlogPost1 from './pages/BlogPost1';
import BlogPost2 from './pages/BlogPost2';
import BlogPost3 from './pages/BlogPost3';
import ScrollToTopOnMount from './components/ScrollToTopOnMount';

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTopOnMount />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/it-solutions" element={<ITSolutionsPage />} />
        <Route path="/services/business-apps" element={<BusinessAppsPage />} />
        <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
        <Route path="/services/cybersecurity" element={<CybersecurityPage />} />
        <Route path="/services/cloud-devops" element={<CloudDevOpsPage />} />
        <Route path="/services/procurement" element={<ProcurementPage />} />
        <Route path="/services/eduit" element={<EduITPage />} />
        <Route path="/services/it-projects" element={<ITProjectsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/1" element={<BlogPost1 />} />
        <Route path="/blog/2" element={<BlogPost2 />} />
        <Route path="/blog/3" element={<BlogPost3 />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;