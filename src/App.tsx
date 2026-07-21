import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackToTop, Footer, Header, RevealObserver } from "./components/layout";
import { useJson } from "./hooks/useJson";
import { BusinessDetailPage, BusinessPage } from "./pages/BusinessPages";
import { CredentialsPage, HistoryPage } from "./pages/CompanyPages";
import { LocationPage, ProjectInquiryPage } from "./pages/ContactPages";
import { HomePage } from "./pages/HomePage";
import { AchievementsPage, EquipmentPage } from "./pages/ResourcePages";
import type { AchievementMap, EquipmentMap } from "./types";

function App() {
  const achievements = useJson<AchievementMap>("/business/achievements/data.json", {});
  const equipments = useJson<EquipmentMap>("/equipments/data.json", {});

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <RevealObserver />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/business/:slug" element={<BusinessDetailPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/credentials" element={<CredentialsPage />} />
          <Route path="/achievements" element={<AchievementsPage achievements={achievements} />} />
          <Route path="/equipment" element={<EquipmentPage equipments={equipments} />} />
          <Route path="/contact" element={<LocationPage />} />
          <Route path="/contact/location" element={<LocationPage />} />
          <Route path="/contact/project" element={<ProjectInquiryPage />} />
        </Routes>
        <BackToTop />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
