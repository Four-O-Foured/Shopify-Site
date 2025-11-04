// SuccessIcon.jsx
export const SuccessIcon = () => (
  <svg 
    width="28" 
    height="28" 
    viewBox="0 0 28 28" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="text-green-500"
  >
    <circle cx="14" cy="14" r="12" fill="currentColor" opacity="0.1"/>
    <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2"/>
    <path 
      d="M10 14.5l3 3 5-5" 
      stroke="currentColor" 
      strokeWidth="2.2" 
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// ErrorIcon.jsx
export const ErrorIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-red-500"
  >
    <circle cx="14" cy="14" r="12" fill="currentColor" opacity="0.1"/>
    <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2"/>
    <path
      d="M10.5 10.5l7 7M17.5 10.5l-7 7"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// InfoIcon.jsx
export const InfoIcon = () => (
  <svg
    width="30"
    height="32"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-amber-500"
  >
    <circle cx="14" cy="14" r="12" fill="currentColor" opacity="0.1"/>
    <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2"/>
    <rect x="13" y="10" width="2" height="8" rx="1" fill="currentColor"/>
    <rect x="13" y="7" width="2" height="2" rx="1" fill="currentColor"/>
  </svg>
);


