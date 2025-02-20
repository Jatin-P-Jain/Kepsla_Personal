import { motion } from "framer-motion";
import { FC, SVGProps } from "react";
import SearchAppBarSVG from "../assets/icons/search-app-bar.svg?react";
import TranslateAppBarSVG from "../assets/icons/translate-app-bar.svg?react";
import NotificationAppBarSVG from "../assets/icons/notification-app-bar.svg?react";
import DashboardSVG from "../assets/icons/dashboard.svg?react";
import SESDashboardSVG from "../assets/icons/ses-dashboard.svg?react";
import ReviewAnalysisSVG from "../assets/icons/review-analysis.svg?react";
import ReviewsSVG from "../assets/icons/reviews.svg?react";
import SurveyAnalysisSVG from "../assets/icons/survey-analysis.svg?react";
import GuestJourneySVG from "../assets/icons/guest-journey.svg?react";
import GuestSurveySVG from "../assets/icons/guest-survey.svg?react";
import MilestonesSVG from "../assets/icons/Milestones.svg?react";
import BrandComparisionSVG from "../assets/icons/brand-comparison.svg?react";
import ComparativeAnalysisSVG from "../assets/icons/comparative-analysis.svg?react";
import WAQRCodeSVG from "../assets/icons/wa-qr-code.svg?react";
import WAChatScreenSVG from "../assets/icons/wa-chat-screen.svg?react";
import NotificationDrawerSVG from "../assets/icons/notification-drawer.svg?react";
import LogoutSVG from "../assets/icons/Logout.svg?react";
import SortingIconSVG from "../assets/icons/sorting-icon.svg?react";
import FilterIconSVG from "../assets/icons/filter-icon.svg?react";

type MotionIcon = FC<SVGProps<SVGSVGElement>>;

// Define the interface for the icons
interface Icons {
  DrawerIcons: {
    SESDashboard: MotionIcon;
  };
  AppBar: {
    SearchIcon: MotionIcon;
    TranslateIcon: MotionIcon;
    NotificationIcon: MotionIcon;
  };
}
// Wrap SVGs with Framer Motion
export const Icons = {
  DrawerIcons: {
    Dashboard: motion.create(DashboardSVG),
    SESDashboard: motion.create(SESDashboardSVG),
    ReviewAnalysis: motion.create(ReviewAnalysisSVG),
    Reviews: motion.create(ReviewsSVG),
    SurveyAnalysis: motion.create(SurveyAnalysisSVG),
    GuestJourney: motion.create(GuestJourneySVG),
    GuestSurvey: motion.create(GuestSurveySVG),
    Milestones: motion.create(MilestonesSVG),
    BrandComparision: motion.create(BrandComparisionSVG),
    ComparativeAnalysis: motion.create(ComparativeAnalysisSVG),
    WAQRCode: motion.create(WAQRCodeSVG),
    WAChatScreen: motion.create(WAChatScreenSVG),
    NotificationDrawer: motion.create(NotificationDrawerSVG),
    Logout: motion.create(LogoutSVG),
  },
  AppBar: {
    SearchIcon: motion.create(SearchAppBarSVG),
    TranslateIcon: motion.create(TranslateAppBarSVG),
    NotificationIcon: motion.create(NotificationAppBarSVG),
  },
  Dashboard: {
    SortingIcon: motion.create(SortingIconSVG),
    FilterIcon: motion.create(FilterIconSVG)
  }
};
