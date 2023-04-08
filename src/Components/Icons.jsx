import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

export function UpdateIcon({ className = "", onclick = () => {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
      />
    </svg>
  );
}
export function ArrowIcons() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="white"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

export function ForwardArrow({ className = "", onClick = () => {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
}

export function ProfileIcon({ className = "", onClick = () => {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

export function BellIcon({ className = "", onClick = () => {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
      />
    </svg>
  );
}

export function SearchIcon({ className = "", onClick = () => {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6.375-6.375M10.5 6a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
      />
    </svg>
  );
}

export function DarkModeIcon({ className = "", onClick = () => {} }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        d="M28.9935 19.1734C28.085 22.1392 26.2642 24.7428 23.7904 26.6139C21.6184 28.2486 19.0337 29.2456 16.3266 29.493C13.6194 29.7404 10.8969 29.2283 8.46461 28.0144C6.03229 26.8004 3.98646 24.9326 2.55675 22.6205C1.12703 20.3084 0.370016 17.6436 0.370674 14.9251C0.3609 11.7521 1.3924 8.66357 3.30692 6.13325C5.17799 3.65937 7.78165 1.83863 10.7474 0.930126C10.9429 0.869939 11.151 0.864176 11.3495 0.913456C11.548 0.962736 11.7293 1.0652 11.874 1.20982C12.0186 1.35443 12.121 1.53574 12.1703 1.73424C12.2196 1.93273 12.2138 2.14091 12.1536 2.33638C11.5051 4.48151 11.4508 6.7624 11.9963 8.936C12.5419 11.1096 13.6669 13.0945 15.2515 14.6791C16.8362 16.2637 18.821 17.3888 20.9946 17.9343C23.1682 18.4799 25.4491 18.4255 27.5943 17.777C27.7897 17.7168 27.9979 17.7111 28.1964 17.7603C28.3949 17.8096 28.5762 17.9121 28.7208 18.0567C28.8654 18.2013 28.9679 18.3826 29.0172 18.5811C29.0665 18.7796 29.0607 18.9878 29.0005 19.1833L28.9935 19.1734Z"
        fill="black"
      />
    </svg>
  );
}
export function LightModeIcon({ className = "", onClick = () => {} }) {
  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        d="M17.3438 5.78125V2.3125C17.3438 2.00584 17.4656 1.71175 17.6824 1.49491C17.8992 1.27807 18.1933 1.15625 18.5 1.15625C18.8067 1.15625 19.1008 1.27807 19.3176 1.49491C19.5344 1.71175 19.6562 2.00584 19.6562 2.3125V5.78125C19.6562 6.08791 19.5344 6.382 19.3176 6.59884C19.1008 6.81568 18.8067 6.9375 18.5 6.9375C18.1933 6.9375 17.8992 6.81568 17.6824 6.59884C17.4656 6.382 17.3438 6.08791 17.3438 5.78125ZM18.5 9.25C16.6705 9.25 14.8821 9.7925 13.361 10.8089C11.8398 11.8253 10.6542 13.27 9.95411 14.9602C9.254 16.6504 9.07082 18.5103 9.42774 20.3046C9.78465 22.0989 10.6656 23.7471 11.9593 25.0407C13.2529 26.3344 14.9011 27.2154 16.6954 27.5723C18.4897 27.9292 20.3496 27.746 22.0398 27.0459C23.73 26.3458 25.1747 25.1602 26.1911 23.639C27.2075 22.1179 27.75 20.3295 27.75 18.5C27.7473 16.0476 26.7719 13.6964 25.0378 11.9622C23.3036 10.2281 20.9524 9.25268 18.5 9.25ZM8.43195 10.068C8.64891 10.285 8.94317 10.4069 9.25 10.4069C9.55683 10.4069 9.85109 10.285 10.068 10.068C10.285 9.85109 10.4069 9.55683 10.4069 9.25C10.4069 8.94317 10.285 8.64891 10.068 8.43195L7.75555 6.11945C7.53859 5.90249 7.24433 5.78061 6.9375 5.78061C6.63067 5.78061 6.33641 5.90249 6.11945 6.11945C5.90249 6.33641 5.78061 6.63067 5.78061 6.9375C5.78061 7.24433 5.90249 7.53859 6.11945 7.75555L8.43195 10.068ZM8.43195 26.932L6.11945 29.2445C5.90249 29.4614 5.78061 29.7557 5.78061 30.0625C5.78061 30.3693 5.90249 30.6636 6.11945 30.8805C6.33641 31.0975 6.63067 31.2194 6.9375 31.2194C7.24433 31.2194 7.53859 31.0975 7.75555 30.8805L10.068 28.568C10.1755 28.4606 10.2607 28.3331 10.3188 28.1927C10.377 28.0524 10.4069 27.9019 10.4069 27.75C10.4069 27.5981 10.377 27.4476 10.3188 27.3073C10.2607 27.1669 10.1755 27.0394 10.068 26.932C9.96062 26.8245 9.83309 26.7393 9.69272 26.6812C9.55236 26.623 9.40193 26.5931 9.25 26.5931C9.09807 26.5931 8.94764 26.623 8.80728 26.6812C8.66692 26.7393 8.53938 26.8245 8.43195 26.932ZM27.75 10.4062C27.9019 10.4064 28.0523 10.3766 28.1927 10.3185C28.333 10.2605 28.4606 10.1754 28.568 10.068L30.8805 7.75555C31.0975 7.53859 31.2194 7.24433 31.2194 6.9375C31.2194 6.63067 31.0975 6.33641 30.8805 6.11945C30.6636 5.90249 30.3693 5.78061 30.0625 5.78061C29.7557 5.78061 29.4614 5.90249 29.2445 6.11945L26.932 8.43195C26.7701 8.59366 26.6598 8.79977 26.6151 9.02418C26.5704 9.24859 26.5933 9.48121 26.6809 9.6926C26.7685 9.90399 26.9168 10.0846 27.1071 10.2117C27.2975 10.3387 27.5212 10.4064 27.75 10.4062ZM28.568 26.932C28.3511 26.715 28.0568 26.5931 27.75 26.5931C27.4432 26.5931 27.1489 26.715 26.932 26.932C26.715 27.1489 26.5931 27.4432 26.5931 27.75C26.5931 28.0568 26.715 28.3511 26.932 28.568L29.2445 30.8805C29.3519 30.988 29.4794 31.0732 29.6198 31.1313C29.7601 31.1895 29.9106 31.2194 30.0625 31.2194C30.2144 31.2194 30.3649 31.1895 30.5052 31.1313C30.6456 31.0732 30.7731 30.988 30.8805 30.8805C30.988 30.7731 31.0732 30.6456 31.1313 30.5052C31.1895 30.3649 31.2194 30.2144 31.2194 30.0625C31.2194 29.9106 31.1895 29.7601 31.1313 29.6198C31.0732 29.4794 30.988 29.3519 30.8805 29.2445L28.568 26.932ZM6.9375 18.5C6.9375 18.1933 6.81568 17.8992 6.59884 17.6824C6.382 17.4656 6.08791 17.3438 5.78125 17.3438H2.3125C2.00584 17.3438 1.71175 17.4656 1.49491 17.6824C1.27807 17.8992 1.15625 18.1933 1.15625 18.5C1.15625 18.8067 1.27807 19.1008 1.49491 19.3176C1.71175 19.5344 2.00584 19.6562 2.3125 19.6562H5.78125C6.08791 19.6562 6.382 19.5344 6.59884 19.3176C6.81568 19.1008 6.9375 18.8067 6.9375 18.5ZM18.5 30.0625C18.1933 30.0625 17.8992 30.1843 17.6824 30.4012C17.4656 30.618 17.3438 30.9121 17.3438 31.2188V34.6875C17.3438 34.9942 17.4656 35.2883 17.6824 35.5051C17.8992 35.7219 18.1933 35.8438 18.5 35.8438C18.8067 35.8438 19.1008 35.7219 19.3176 35.5051C19.5344 35.2883 19.6562 34.9942 19.6562 34.6875V31.2188C19.6562 30.9121 19.5344 30.618 19.3176 30.4012C19.1008 30.1843 18.8067 30.0625 18.5 30.0625ZM34.6875 17.3438H31.2188C30.9121 17.3438 30.618 17.4656 30.4012 17.6824C30.1843 17.8992 30.0625 18.1933 30.0625 18.5C30.0625 18.8067 30.1843 19.1008 30.4012 19.3176C30.618 19.5344 30.9121 19.6562 31.2188 19.6562H34.6875C34.9942 19.6562 35.2883 19.5344 35.5051 19.3176C35.7219 19.1008 35.8438 18.8067 35.8438 18.5C35.8438 18.1933 35.7219 17.8992 35.5051 17.6824C35.2883 17.4656 34.9942 17.3438 34.6875 17.3438Z"
        fill="#FEB95A"
      />
    </svg>
  );
}

export function MenuIcon({ className = "", onClick = () => {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

export function LogoutIcon({ className = "", onClick = () => {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 5l7 7-7 7M5 12h14M5 12a9 9 0 0118 0"
      />
    </svg>
  );
}

export function DeleteIcons({ className = "", onClick = () => {} }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
          stroke="#FEB95A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
        <path
          d="M15 16L17.5 18.5M20 21L17.5 18.5M17.5 18.5L20 16M17.5 18.5L15 21"
          stroke="#FEB95A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}

export function SettingIcons({ className = "", onClick = () => {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

export function SupportIcon({ className = "", onClick = () => {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
      />
    </svg>
  );
}

export function AnalyticsIcon({ className = "", onClick = () => {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
      />
    </svg>
  );
}

export function HomeIcon({ className = "", onClick = () => {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}

export function SalesIcon({ fill = "", className = "", onClick = () => {} }) {
  const { theme } = useContext(ThemeContext);
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.42493 2.30563H3.71599V21.6722H23.0819V22.9633H2.42493V2.30563ZM21.5546 6.32483C21.6202 6.37855 21.6746 6.44469 21.7147 6.51946C21.7548 6.59422 21.7797 6.67616 21.7881 6.76057C21.7965 6.84499 21.7882 6.93023 21.7636 7.01142C21.7391 7.09262 21.6987 7.16817 21.6449 7.23377L15.8352 14.3348C15.7781 14.4045 15.707 14.4615 15.6266 14.5021C15.5461 14.5427 15.4581 14.566 15.3681 14.5705C15.2781 14.575 15.1881 14.5606 15.104 14.5282C15.0199 14.4959 14.9436 14.4463 14.8798 14.3826L11.5398 11.0425L6.81969 17.5329C6.71644 17.6642 6.56631 17.7504 6.40085 17.7733C6.2354 17.7962 6.0675 17.7541 5.93244 17.6558C5.79738 17.5575 5.70568 17.4107 5.6766 17.2462C5.64753 17.0817 5.68334 16.9124 5.77652 16.7737L10.9408 9.67267C10.9956 9.59716 11.0661 9.53443 11.1475 9.4888C11.2289 9.44317 11.3192 9.41573 11.4122 9.40837C11.5052 9.401 11.5987 9.41389 11.6863 9.44615C11.7738 9.4784 11.8534 9.52925 11.9194 9.5952L15.2878 12.965L20.6457 6.41521C20.6994 6.34956 20.7655 6.29514 20.8403 6.25506C20.915 6.21498 20.997 6.19003 21.0814 6.18164C21.1658 6.17324 21.251 6.18157 21.3322 6.20614C21.4134 6.23071 21.489 6.27104 21.5546 6.32483V6.32483Z"
        fill={`${theme ? "white" : "black"}`}
      />
    </svg>
  );
}

export function MoneyIcon({ className = "", onClick = () => {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function CalculatorIcon({ className = "", onClick = () => {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
      />
    </svg>
  );
}

export function CreateIcons({ className = "", onClick = () => {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6M6 18h12"
      />
    </svg>
  );
}

export function EditIcons({ className = "", onClick = () => {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );
}

export function Instagram({ className = "", onClick = () => {} }) {
  return (
    <svg
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        d="M4.9659 0.443848C6.26492 0.443848 6.427 0.448629 6.93666 0.472534C7.44585 0.49644 7.79248 0.576284 8.09751 0.694855C8.41306 0.816294 8.67889 0.980764 8.94472 1.24611C9.18784 1.48512 9.37595 1.77423 9.49598 2.09332C9.61407 2.39788 9.6944 2.74498 9.7183 3.25417C9.74077 3.76383 9.74699 3.92591 9.74699 5.22493C9.74699 6.52395 9.74221 6.68603 9.7183 7.1957C9.6944 7.70488 9.61407 8.05151 9.49598 8.35654C9.3763 8.67581 9.18814 8.96499 8.94472 9.20375C8.70565 9.44679 8.41656 9.63489 8.09751 9.75501C7.79296 9.87311 7.44585 9.95343 6.93666 9.97733C6.427 9.9998 6.26492 10.006 4.9659 10.006C3.66688 10.006 3.5048 10.0012 2.99514 9.97733C2.48595 9.95343 2.13932 9.87311 1.83429 9.75501C1.51507 9.63523 1.22591 9.44708 0.987081 9.20375C0.743918 8.96479 0.555794 8.67567 0.435822 8.35654C0.317251 8.05199 0.237406 7.70488 0.213501 7.1957C0.19103 6.68603 0.184814 6.52395 0.184814 5.22493C0.184814 3.92591 0.189596 3.76383 0.213501 3.25417C0.237406 2.74451 0.317251 2.39836 0.435822 2.09332C0.555462 1.77403 0.74363 1.48484 0.987081 1.24611C1.22598 1.00287 1.51512 0.814731 1.83429 0.694855C2.13932 0.576284 2.48547 0.49644 2.99514 0.472534C3.5048 0.450063 3.66688 0.443848 4.9659 0.443848ZM4.9659 2.83439C4.33189 2.83439 3.72385 3.08625 3.27553 3.53456C2.82722 3.98288 2.57536 4.59092 2.57536 5.22493C2.57536 5.85894 2.82722 6.46699 3.27553 6.9153C3.72385 7.36362 4.33189 7.61548 4.9659 7.61548C5.59991 7.61548 6.20796 7.36362 6.65627 6.9153C7.10458 6.46699 7.35644 5.85894 7.35644 5.22493C7.35644 4.59092 7.10458 3.98288 6.65627 3.53456C6.20796 3.08625 5.59991 2.83439 4.9659 2.83439V2.83439ZM8.07361 2.71486C8.07361 2.55636 8.01064 2.40435 7.89856 2.29227C7.78649 2.18019 7.63447 2.11723 7.47597 2.11723C7.31747 2.11723 7.16546 2.18019 7.05338 2.29227C6.9413 2.40435 6.87834 2.55636 6.87834 2.71486C6.87834 2.87337 6.9413 3.02538 7.05338 3.13746C7.16546 3.24953 7.31747 3.3125 7.47597 3.3125C7.63447 3.3125 7.78649 3.24953 7.89856 3.13746C8.01064 3.02538 8.07361 2.87337 8.07361 2.71486ZM4.9659 3.79061C5.34631 3.79061 5.71113 3.94172 5.98012 4.21071C6.24911 4.4797 6.40023 4.84453 6.40023 5.22493C6.40023 5.60534 6.24911 5.97017 5.98012 6.23916C5.71113 6.50814 5.34631 6.65926 4.9659 6.65926C4.58549 6.65926 4.22067 6.50814 3.95168 6.23916C3.68269 5.97017 3.53157 5.60534 3.53157 5.22493C3.53157 4.84453 3.68269 4.4797 3.95168 4.21071C4.22067 3.94172 4.58549 3.79061 4.9659 3.79061V3.79061Z"
        fill="white"
      />
    </svg>
  );
}

export function Facebook({ className = "", onClick = () => {} }) {
  return (
    <svg
      width="11"
      height="10"
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        d="M5.41951 0.443848C2.77892 0.443848 0.638428 2.58434 0.638428 5.22493C0.638428 7.61117 2.38687 9.58911 4.67271 9.94817V6.60667H3.45831V5.22493H4.67271V4.17166C4.67271 2.97352 5.38605 2.31182 6.47852 2.31182C7.00157 2.31182 7.54853 2.40505 7.54853 2.40505V3.5812H6.94611C6.35183 3.5812 6.1668 3.94982 6.1668 4.328V5.22493H7.49259L7.28079 6.60667H6.1668V9.94817C8.45216 9.58959 10.2006 7.6107 10.2006 5.22493C10.2006 2.58434 8.06011 0.443848 5.41951 0.443848Z"
        fill="white"
      />
    </svg>
  );
}

export function Linkedin({ fill, className = "", onClick = () => {} }) {
  return (
    <svg
      width="12"
      height="11"
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        d="M2.81256 1.87734C2.81241 2.17243 2.69464 2.45537 2.48515 2.66393C2.27567 2.87248 1.99163 2.98956 1.69552 2.98942C1.39941 2.98927 1.11548 2.8719 0.906206 2.66314C0.696929 2.45438 0.579442 2.17132 0.57959 1.87623C0.579738 1.58114 0.697509 1.2982 0.906995 1.08965C1.11648 0.881094 1.40052 0.764013 1.69663 0.76416C1.99274 0.764308 2.27667 0.881672 2.48594 1.09043C2.69522 1.2992 2.81271 1.58226 2.81256 1.87734ZM2.84605 3.81332H0.613084V10.7784H2.84605V3.81332ZM6.37414 3.81332H4.15234V10.7784H6.35181V7.12338C6.35181 5.08727 9.01462 4.89813 9.01462 7.12338V10.7784H11.2197V6.3668C11.2197 2.93434 7.27849 3.06229 6.35181 4.74792L6.37414 3.81332Z"
        fill={fill}
      />
    </svg>
  );
}

export function Twitter({ className = "", onClick = () => {} }) {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        stroke="#000000"
        stroke-linejoin="round"
        stroke-width="12"
        d="M126 38c-14.359 0-26 11.64-26 26a25.89 25.89 0 0 0 2.929 12C72 76 56 70 30 46c0 39.5 10 66 34 81-8 11.2-29.333 14.333-42 14.5 0 0 14 13.5 46 13.5 56 0 84-46.783 84-91l18-20h-27.386A25.892 25.892 0 0 0 126 38Z"
      />
    </svg>
  );
}

export function WhatsApp({ className = "", onClick = () => {} }) {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z" />
      <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z" />
    </svg>
  );
}

// DashBoard Icons

export function Sale1({ className = "", onClick = () => {} }) {
  return (
    <svg
      width="38"
      height="43"
      viewBox="0 0 38 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={` ${className}`}
      onClick={onClick}
    >
      <path
        d="M35.5128 11.6807L18.9859 1.95895L2.45898 11.6807V31.1241L18.9859 40.8458L35.5128 31.1241V11.6807Z"
        stroke="#20AEF3"
        stroke-width="3.2306"
        stroke-linejoin="round"
      />
      <path
        d="M11.2085 23.3467V27.2354M18.9859 19.458V27.2354V19.458ZM26.7632 15.5693V27.2354V15.5693Z"
        stroke="#20AEF3"
        stroke-width="3.2306"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function Sale2({ className = "", onClick = () => {} }) {
  return (
    <svg
      width="33"
      height="41"
      viewBox="0 0 33 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={` ${className}`}
      onClick={onClick}
    >
      <path
        d="M24.6364 4.93939H29.2186C29.7096 4.93939 30.1805 5.13636 30.5277 5.48698C30.8749 5.83759 31.07 6.31312 31.07 6.80896V37.6569C31.07 38.1527 30.8749 38.6283 30.5277 38.9789C30.1805 39.3295 29.7096 39.5265 29.2186 39.5265H3.29926C2.80824 39.5265 2.33733 39.3295 1.99013 38.9789C1.64293 38.6283 1.44788 38.1527 1.44788 37.6569V6.80896C1.44788 6.31312 1.64293 5.83759 1.99013 5.48698C2.33733 5.13636 2.80824 4.93939 3.29926 4.93939H9.77909V7.74375H22.7388V4.93939H24.6364Z"
        stroke="#A9DFD8"
        stroke-width="2.48507"
        stroke-linejoin="round"
      />
      <path
        d="M19.0367 16.1561L11.6312 23.6353H20.8918L13.4825 31.1136M9.77979 2.13432H22.7394V7.74304H9.77979V2.13432Z"
        stroke="#A9DFD8"
        stroke-width="2.48507"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function Sale3({ className = "", onClick = () => {} }) {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={` ${className}`}
      onClick={onClick}
    >
      <path
        d="M31.3977 12.8234H37.3708C37.732 12.8238 38.0803 12.9582 38.3481 13.2007C38.6159 13.4432 38.7841 13.7764 38.8203 14.1358L39.7098 23.0312H36.7758L36.0467 15.7399H31.3977V20.1147C31.3977 20.5015 31.2441 20.8724 30.9706 21.1458C30.6972 21.4193 30.3262 21.573 29.9395 21.573C29.5527 21.573 29.1818 21.4193 28.9083 21.1458C28.6349 20.8724 28.4812 20.5015 28.4812 20.1147V15.7399H16.8152V20.1147C16.8152 20.5015 16.6616 20.8724 16.3881 21.1458C16.1146 21.4193 15.7437 21.573 15.3569 21.573C14.9702 21.573 14.5993 21.4193 14.3258 21.1458C14.0523 20.8724 13.8987 20.5015 13.8987 20.1147V15.7399H9.24685L6.91364 39.072H22.6482V41.9885H5.30081C5.09713 41.9883 4.89576 41.9455 4.70965 41.8627C4.52355 41.7799 4.35685 41.6591 4.2203 41.508C4.08374 41.3568 3.98035 41.1788 3.9168 40.9853C3.85325 40.7918 3.83094 40.5871 3.8513 40.3844L6.47616 14.1358C6.51229 13.7764 6.68055 13.4432 6.94835 13.2007C7.21615 12.9582 7.56441 12.8238 7.92567 12.8234H13.8987V11.8056C13.8987 6.74833 17.7951 2.61563 22.6482 2.61563C27.5013 2.61563 31.3977 6.74833 31.3977 11.8056V12.8263V12.8234ZM28.4812 12.8234V11.8056C28.4812 8.32324 25.8505 5.53214 22.6482 5.53214C19.4459 5.53214 16.8152 8.32324 16.8152 11.8056V12.8263H28.4812V12.8234ZM37.6595 34.5223C37.7925 34.3775 37.9534 34.2612 38.1326 34.1802C38.3117 34.0993 38.5054 34.0553 38.7019 34.0511C38.8985 34.0469 39.0938 34.0825 39.2763 34.1557C39.4587 34.2289 39.6245 34.3383 39.7636 34.4772C39.9027 34.6161 40.0123 34.7817 40.0857 34.964C40.1592 35.1464 40.1951 35.3417 40.1911 35.5382C40.1872 35.7348 40.1436 35.9285 40.0628 36.1077C39.9821 36.287 39.866 36.4481 39.7215 36.5813L33.8885 42.4143C33.615 42.6877 33.2441 42.8413 32.8575 42.8413C32.4708 42.8413 32.0999 42.6877 31.8265 42.4143L25.9935 36.5813C25.8542 36.4468 25.7431 36.2859 25.6667 36.108C25.5902 35.9301 25.55 35.7387 25.5483 35.5451C25.5466 35.3515 25.5835 35.1594 25.6569 34.9802C25.7302 34.801 25.8385 34.6382 25.9754 34.5013C26.1123 34.3643 26.2751 34.2561 26.4543 34.1827C26.6335 34.1094 26.8256 34.0725 27.0192 34.0742C27.2128 34.0759 27.4042 34.1161 27.5821 34.1925C27.76 34.269 27.9209 34.3801 28.0554 34.5193L31.3977 37.8646V27.406C31.3977 27.0192 31.5514 26.6483 31.8249 26.3748C32.0983 26.1014 32.4693 25.9477 32.856 25.9477C33.2428 25.9477 33.6137 26.1014 33.8871 26.3748C34.1606 26.6483 34.3143 27.0192 34.3143 27.406V37.8646L37.6595 34.5193V34.5223Z"
        fill="#F2C8ED"
      />
    </svg>
  );
}

export function Sale4({ className = "", onClick = () => {} }) {
  return (
    <svg
      width="38"
      height="39"
      viewBox="0 0 38 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      onClick={onClick}
    >
      <path
        d="M17.9693 19.3582C22.9956 19.3582 27.0703 15.3404 27.0703 10.3843C27.0703 5.42816 22.9956 1.41042 17.9693 1.41042C12.9429 1.41042 8.86816 5.42816 8.86816 10.3843C8.86816 15.3404 12.9429 19.3582 17.9693 19.3582Z"
        stroke="#FEB95A"
        stroke-width="2.48507"
      />
      <path
        d="M25.2505 26.5373H36.1718M27.0707 37.3059H5.71227C5.19603 37.306 4.68566 37.1979 4.21505 36.9887C3.74443 36.7794 3.32433 36.4739 2.98263 36.0923C2.64093 35.7107 2.38544 35.2619 2.23312 34.7755C2.0808 34.2891 2.03513 33.7764 2.09914 33.2713L2.80903 27.6644C2.97411 26.3618 3.61614 25.1635 4.61438 24.2949C5.61261 23.4263 6.89829 22.9472 8.22963 22.9477H8.86853L27.0707 37.3059ZM30.7111 21.153V31.9216V21.153Z"
        stroke="#FEB95A"
        stroke-width="2.48507"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function More2({ className = "", onClick = () => {} }) {
  return (
    <svg
      width="17"
      height="4"
      viewBox="0 0 17 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        d="M2.17077 0.489052C3.03528 0.489052 3.7361 1.18988 3.7361 2.05439C3.7361 2.91889 3.03528 3.61972 2.17077 3.61972C1.30626 3.61972 0.605438 2.91889 0.605438 2.05439C0.605438 1.18988 1.30626 0.489052 2.17077 0.489052Z"
        fill="white"
      />
      <path
        d="M8.4321 0.489052C9.29661 0.489052 9.99743 1.18988 9.99743 2.05438C9.99743 2.91889 9.29661 3.61972 8.4321 3.61972C7.56759 3.61972 6.86677 2.91889 6.86677 2.05438C6.86677 1.18988 7.56759 0.489052 8.4321 0.489052Z"
        fill="white"
      />
      <path
        d="M16.2588 2.05438C16.2588 1.18988 15.5579 0.489052 14.6934 0.489052C13.8289 0.489052 13.1281 1.18988 13.1281 2.05438C13.1281 2.91889 13.8289 3.61972 14.6934 3.61972C15.5579 3.61972 16.2588 2.91889 16.2588 2.05438Z"
        fill="white"
      />
    </svg>
  );
}

export function Reload({ className = "", onClick = () => {} }) {
  return (
    <svg
      fill="#000000"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000000"
      stroke-width="0.00024000000000000003"
      className={`${className}`}
      onClick={onClick}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M1,12A11,11,0,0,1,17.882,2.7l1.411-1.41A1,1,0,0,1,21,2V6a1,1,0,0,1-1,1H16a1,1,0,0,1-.707-1.707l1.128-1.128A8.994,8.994,0,0,0,3,12a1,1,0,0,1-2,0Zm21-1a1,1,0,0,0-1,1,9.01,9.01,0,0,1-9,9,8.9,8.9,0,0,1-4.42-1.166l1.127-1.127A1,1,0,0,0,8,17H4a1,1,0,0,0-1,1v4a1,1,0,0,0,.617.924A.987.987,0,0,0,4,23a1,1,0,0,0,.707-.293L6.118,21.3A10.891,10.891,0,0,0,12,23,11.013,11.013,0,0,0,23,12,1,1,0,0,0,22,11Z"></path>
      </g>
    </svg>
  );
}
export function Search({ className = "", onClick = () => {}, stroke = "" }) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      onClick={onClick}
    >
      <g opacity="0.5">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.31508 14.4767C11.9328 14.4767 14.8655 11.5438 14.8655 7.92586C14.8655 4.30792 11.9328 1.375 8.31508 1.375C4.69738 1.375 1.76465 4.30792 1.76465 7.92586C1.76465 11.5438 4.69738 14.4767 8.31508 14.4767Z"
          stroke={`${stroke}`}
          stroke-width="2.15625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.3901 13.0002L17.5073 17.1177"
          stroke={`${stroke}`}
          stroke-width="2.15625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}
export function Cross({ className = "", onClick = () => {} }) {
  return (
    <svg
      width="800"
      height="800"
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        d="M533.333 266.667L266.667 533.333M266.667 266.667L533.333 533.333"
        stroke="#71717A"
        stroke-width="50"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={`${className}`}
      />
    </svg>
  );
}

export function User2({ className = "", onClick = () => {} }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 ${className}`}
    >
      <path
        d="M6.91383 6.42311C8.28605 6.42311 9.39845 5.31071 9.39845 3.93848C9.39845 2.56626 8.28605 1.45386 6.91383 1.45386C5.5416 1.45386 4.4292 2.56626 4.4292 3.93848C4.4292 5.31071 5.5416 6.42311 6.91383 6.42311Z"
        stroke="#87898E"
        stroke-width="0.745388"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.1822 11.3924C11.1822 9.46927 9.26903 7.91389 6.91361 7.91389C4.55818 7.91389 2.64502 9.46927 2.64502 11.3924"
        stroke="#87898E"
        stroke-width="0.745388"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function LeftArrow({ className = "", onClick = () => {} }) {
  return (
    <svg
      fill="#000000"
      width="800px"
      height="800px"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path d="M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z" />
    </svg>
  );
}

export function Twitter2({ fill = "", className = "", onClick = () => {} }) {
  return (
    <svg
      width="15"
      height="13"
      viewBox="0 0 15 13"
      fill="#none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        d="M14.5426 2.15884C14.0248 2.37879 13.4613 2.53709 12.8809 2.59874C13.4835 2.24621 13.9348 1.68928 14.15 1.03243C13.5846 1.36367 12.9651 1.59594 12.3191 1.71894C12.0491 1.43471 11.7226 1.20829 11.3599 1.05377C10.9971 0.899249 10.606 0.819948 10.2107 0.820808C8.61168 0.820808 7.32567 2.09719 7.32567 3.6635C7.32567 3.88345 7.35274 4.10341 7.39674 4.31502C5.00238 4.19172 2.86691 3.0653 1.44722 1.34069C1.18854 1.77579 1.05298 2.27119 1.05465 2.77537C1.05465 3.76181 1.56398 4.63162 2.34066 5.14317C1.88295 5.12542 1.43595 5.00153 1.03603 4.78159V4.81658C1.03603 6.19794 2.02762 7.34268 3.34917 7.60595C3.10103 7.66942 2.84577 7.70189 2.58941 7.7026C2.40158 7.7026 2.22391 7.68427 2.04454 7.65928C2.41004 8.78569 3.47439 9.60384 4.74179 9.6305C3.7502 10.3953 2.50818 10.8452 1.15956 10.8452C0.917584 10.8452 0.694224 10.8369 0.462402 10.8102C1.74165 11.6184 3.25949 12.0849 4.89408 12.0849C10.2006 12.0849 13.1043 7.75592 13.1043 3.99843C13.1043 3.87512 13.1043 3.75182 13.0958 3.62851C13.6576 3.2236 14.15 2.72205 14.5426 2.15884Z"
        fill={fill}
      />
    </svg>
  );
}

export function RightArrow3({ className = "", onClick = () => {} }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className}`}
      onClick={onClick}
    >
      <path
        d="M15.9773 8.09746C15.9773 3.77555 12.4756 0.273865 8.15367 0.273865C3.83177 0.273865 0.330078 3.77555 0.330078 8.09746C0.330078 12.4194 3.83177 15.9211 8.15367 15.9211C12.4756 15.9211 15.9773 12.4194 15.9773 8.09746ZM1.84432 8.09746C1.84432 4.61154 4.66776 1.78811 8.15367 1.78811C11.6396 1.78811 14.463 4.61154 14.463 8.09746C14.463 11.5834 11.6396 14.4068 8.15367 14.4068C4.66776 14.4068 1.84432 11.5834 1.84432 8.09746ZM4.11569 8.7284V7.46653C4.11569 7.25832 4.28604 7.08796 4.49425 7.08796H8.15367V4.97433C8.15367 4.63678 8.56063 4.46958 8.80038 4.70618L11.9235 7.82931C12.0718 7.97758 12.0718 8.21734 11.9235 8.36561L8.80038 11.4887C8.56063 11.7285 8.15367 11.5581 8.15367 11.2206V9.10696H4.49425C4.28604 9.10696 4.11569 8.9366 4.11569 8.7284Z"
        // fill="none"
      />
    </svg>
  );
}
