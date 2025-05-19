
import { LucideIcon } from "lucide-react";
import { forwardRef } from "react";

// Custom icon for AR/VR
export const ArVr: LucideIcon = forwardRef(({ ...props }, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    ref={ref}
    {...props}
  >
    <path d="M3 8v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z" />
    <path d="M12 7v10" />
    <path d="M7 12h4" />
    <path d="M15 12h2" />
    <path d="M9 15a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1z" />
  </svg>
));
ArVr.displayName = "ArVr";

// Custom icon for Mobile apps
export const MobileApps: LucideIcon = forwardRef(({ ...props }, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    ref={ref}
    {...props}
  >
    <rect x="7" y="4" width="10" height="16" rx="1" />
    <path d="M11 5h2" />
    <path d="M12 17v.01" />
  </svg>
));
MobileApps.displayName = "MobileApps";

// Custom icon for Cloud Computing
export const CloudComputing: LucideIcon = forwardRef(({ ...props }, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    ref={ref}
    {...props}
  >
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    <path d="M17 14h.01" />
    <path d="M13 14h.01" />
    <path d="M9 14h.01" />
  </svg>
));
CloudComputing.displayName = "CloudComputing";
