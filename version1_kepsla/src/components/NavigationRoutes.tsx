import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import GuestJourney from "../pages/GuestJourney";
import Reviews from "../pages/Reviews";
import ComingSoon from "../pages/ComingSoon";

const NavigationRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<ComingSoon pageName={"Home Page"} />} />
    <Route path="/review-intelligence">
      <Route path="dashboard" element={<Dashboard />} />
      <Route
        path="ses-dashboard"
        element={<ComingSoon pageName={"SES Dashboard"} />}
      />
      <Route
        path="review-analysis"
        element={<ComingSoon pageName={"Review Analysis"} />}
      />
      <Route path="reviews" element={<ComingSoon pageName={"Reviews"} />} />
      <Route
        path="survey-analysis"
        element={<ComingSoon pageName={"Survey Analysis"} />}
      />
    </Route>
    <Route path="/voice-of-employee">
      <Route
        path="guest-journey"
        element={<ComingSoon pageName={"Guest Journey"} />}
      />
      <Route
        path="guest-survey"
        element={<ComingSoon pageName={"Guest Survey"} />}
      />
      <Route
        path="milestones"
        element={<ComingSoon pageName={"Milestones"} />}
      />
    </Route>
    <Route path="/comparative-analysis">
      <Route
        path="brand-comparison"
        element={<ComingSoon pageName={"Brand Comparison"} />}
      />
      <Route
        path="comparative-analysis"
        element={<ComingSoon pageName={"Comparative Analysis"} />}
      />
    </Route>
    <Route path="/customer-engagement">
      <Route
        path="wa-qr-code"
        element={<ComingSoon pageName={"WhatsApp QR Code"} />}
      />
      <Route
        path="wa-chatscreen"
        element={<ComingSoon pageName={"WhatsApp ChatScreen"} />}
      />
    </Route>
    <Route path="/utility">
      <Route
        path="notifications"
        element={<ComingSoon pageName={"Notifications"} />}
      />
      <Route path="logout" element={<ComingSoon pageName={"Logout"} />} />
    </Route>
  </Routes>
);

export default NavigationRoutes;
