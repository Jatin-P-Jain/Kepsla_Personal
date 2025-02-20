import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import KeyMetrics from "../pages/KeyMetrics";
import ComingSoon from "../pages/ComingSoon";

const routeConfig = [
    {
        path: "/",
        element: <ComingSoon pageName="Home Page" />,
    },
    {
        path: "/review-intelligence",
        children: [
            {
                path: "dashboard",
                element: <KeyMetrics />,
            },
            { path: "ses-dashboard", element: <ComingSoon pageName="SES Dashboard" /> },
            { path: "review-analysis", element: <ComingSoon pageName="Review Analysis" /> },
            { path: "reviews", element: <ComingSoon pageName="Reviews" /> },
            { path: "survey-analysis", element: <ComingSoon pageName="Survey Analysis" /> },
        ],
    },
    {
        path: "/voice-of-employee",
        children: [
            { path: "guest-journey", element: <ComingSoon pageName="Guest Journey" /> },
            { path: "guest-survey", element: <ComingSoon pageName="Guest Survey" /> },
            { path: "milestones", element: <ComingSoon pageName="Milestones" /> },
        ],
    },
    {
        path: "/comparative-analysis",
        children: [
            { path: "brand-comparison", element: <ComingSoon pageName="Brand Comparison" /> },
            { path: "comparative-analysis", element: <ComingSoon pageName="Comparative Analysis" /> },
        ],
    },
    {
        path: "/customer-engagement",
        children: [
            { path: "wa-qr-code", element: <ComingSoon pageName="WhatsApp QR Code" /> },
            { path: "wa-chatscreen", element: <ComingSoon pageName="WhatsApp ChatScreen" /> },
        ],
    },
    {
        path: "/utility",
        children: [
            { path: "notifications", element: <ComingSoon pageName="Notifications" /> },
            { path: "logout", element: <ComingSoon pageName="Logout" /> },
        ],
    },
];

const NavigationRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                {routeConfig.map(({ path, element, children }) => (
                    <Route key={path} path={path} element={element}>
                        {children?.map(({ path, element }) => (
                            <Route key={path} path={path} element={element} />
                        ))}
                    </Route>
                ))}
            </Route>
        </Routes>
    );
};

export default NavigationRoutes;
