import { MenuItem } from "./navigationTypes";
import { Icons } from "../assets/icons";
import { buildPathMap } from "./menuPathUtils";

export const menuConfig: MenuItem[] = [
  {
    text: "Review Intelligence",
    icon: "",
    path: "/review-intelligence",
    children: [
      { text: "Dashboard", icon: <Icons.DrawerIcons.Dashboard />, path: "/review-intelligence/dashboard" },
      { text: "SES Dashboard", icon: <Icons.DrawerIcons.SESDashboard />, path: "/review-intelligence/ses-dashboard" },
      { text: "Review Analysis", icon: <Icons.DrawerIcons.ReviewAnalysis />, path: "/review-intelligence/review-analysis" },
      { text: "Reviews", icon: <Icons.DrawerIcons.Reviews />, path: "/review-intelligence/reviews" },
      { text: "Survey Analysis", icon: <Icons.DrawerIcons.SurveyAnalysis />, path: "/review-intelligence/survey-analysis" },
    ],
  },
  {
    text: "Voice of Employee",
    icon: "",
    path: "/voice-of-employee",
    children: [
      { text: "Guest Journey", icon: <Icons.DrawerIcons.GuestJourney />, path: "/voice-of-employee/guest-journey" },
      { text: "Guest Survey", icon: <Icons.DrawerIcons.GuestSurvey />, path: "/voice-of-employee/guest-survey" },
      { text: "Milestones", icon: <Icons.DrawerIcons.Milestones />, path: "/voice-of-employee/milestones" },
    ],
  },
  {
    text: "Comparative Analysis",
    icon: "",
    path: "/comparative-analysis",
    children: [
      { text: "Brand Comparison", icon: <Icons.DrawerIcons.BrandComparision />, path: "/comparative-analysis/brand-comparison" },
      { text: "Comparative Analysis", icon: <Icons.DrawerIcons.ComparativeAnalysis />, path: "/comparative-analysis/comparative-analysis" },
    ],
  },
  {
    text: "Customer Engagement",
    icon: "",
    path: "/customer-engagement",
    children: [
      { text: "WhatsApp QR Code", icon: <Icons.DrawerIcons.WAQRCode />, path: "/customer-engagement/wa-qr-code" },
      { text: "WhatsApp ChatScreen", icon: <Icons.DrawerIcons.WAChatScreen />, path: "/customer-engagement/wa-chatscreen" },
    ],
  },
  {
    text: "Utility",
    icon: "",
    path: "/utility",
    children: [
      { text: "Notifications", icon: <Icons.DrawerIcons.NotificationDrawer />, path: "/utility/notifications" },
      { text: "Logout", icon: <Icons.DrawerIcons.Logout />, path: "/utility/logout" },
    ],
  },
];

export const menuPathMap = buildPathMap(menuConfig);
