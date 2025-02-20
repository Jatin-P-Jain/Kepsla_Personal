import { motion } from "framer-motion";
import { FC, SVGProps } from "react";
import KepslaInlineWhiteBWSVG from "../assets/logos/keplsa-inline-white-bw.svg?react";
import KepslaInlineBlueSVG from "../assets/logos/kepsla-inline-blue.svg?react";
import KepslaInlineWhiteSVG from "../assets/logos/kepsla-inline-white.svg?react";
import KepslaWrapBlueSVG from "../assets/logos/kepsla-wrap-blue.svg?react";
import KepslaWrapWhiteSVG from "../assets/logos/kepsla-wrap-white.svg?react";
import KepslaInlineBlackBWSVG from "../assets/logos/kepsla-inline-black-bw.svg?react";
import KepslaWrapWhiteBWSVG from "../assets/logos/kepsla-wrap-white-bw.svg?react";
import KepslaWrapBlackBWSVG from "../assets/logos/kepsla-wrap-black-bw.svg?react";

type MotionIcon = FC<SVGProps<SVGSVGElement>>;

// Define the interface for the icons
interface Logos {
  KepslaInlineBlue: MotionIcon;
  KepslaInlineWhite: MotionIcon;
  KepslaWrapBlue: MotionIcon;
  KepslaWrapWhite: MotionIcon;
  KepslaInlineWhiteBW: MotionIcon;
  KepslaInlineBlackBW: MotionIcon;
  KepslaWrapWhiteBW: MotionIcon;
  KepslaWrapBlackBW: MotionIcon;
}
// Wrap SVGs with Framer Motion
export const Logos = {
  KepslaInlineBlue: motion.create(KepslaInlineBlueSVG),
  KepslaInlineWhite: motion.create(KepslaInlineWhiteSVG),
  KepslaWrapBlue: motion.create(KepslaWrapBlueSVG),
  KepslaWrapWhite: motion.create(KepslaWrapWhiteSVG),
  KepslaInlineWhiteBW: motion.create(KepslaInlineWhiteBWSVG),
  KepslaInlineBlackBW: motion.create(KepslaInlineBlackBWSVG),
  KepslaWrapWhiteBW: motion.create(KepslaWrapWhiteBWSVG),
  KepslaWrapBlackBW: motion.create(KepslaWrapBlackBWSVG),
};
