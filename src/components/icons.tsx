import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      className={cn("size-4 shrink-0 cursor-pointer", className)}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.834 4.167 4.167 15.833m0-11.667 11.667 11.667"
      />
    </svg>
  );
}

export function LogoIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      className={cn("size-9", className)}
    >
      <path
        fill="currentColor"
        d="m19.78 17.112-4.239 1.887-1.006.448-5.028 2.239a.27.27 0 0 0-.159.209l-.003.04v5.792c0 .197.203.33.384.25l10.273-4.575.035-.018a.27.27 0 0 0 .127-.23V17.36a.273.273 0 0 0-.384-.25"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m14.536 18.552 4.912-2.187a1.09 1.09 0 0 1 1.534.996v4.06l1.29.575c.18.08.383-.052.383-.25v-5.791a.27.27 0 0 0-.162-.25l-5.067-2.256-1.006-.447-4.62-2.058-.819-.364-1.252-.557a.273.273 0 0 0-.384.248v5.793c0 .108.064.205.162.249zm-3.555-3.913.003.074zM17.426 12.554 11.8 10.049V8.847l.002-.04a.27.27 0 0 1 .16-.21l10.273-4.573c.18-.08.383.052.383.249v5.792c0 .094-.048.181-.126.23l-.036.02z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      className={cn("size-5", className)}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.25"
        d="M2 8a2 2 0 0 1 .8-1.6l6-4.5a2 2 0 0 1 2.4 0l6 4.5A2 2 0 0 1 18 8v7.667a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M10 15.394v-4.71"
      />
    </svg>
  );
}

export function FolderIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      className={cn("size-5", className)}
    >
      <path
        stroke="currentColor"
        strokeWidth="1.25"
        d="M2 4.5a2 2 0 0 1 2-2h4.171a2 2 0 0 1 1.415.586l.828.828a2 2 0 0 0 1.414.586H16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M13 14.5H7"
      />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      className={cn("size-5", className)}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M12.365 8.365A2.37 2.37 0 0 1 10 10.737 2.368 2.368 0 0 1 10 6a2.363 2.363 0 0 1 2.365 2.365"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M12.36 1.83A8.5 8.5 0 0 0 10 1.5a8.486 8.486 0 0 0-8.5 8.488c0 4.695 3.799 8.512 8.5 8.512s8.5-3.817 8.5-8.512q0-.502-.057-.988"
      />
      <path
        fill="currentColor"
        d="M19.999 3.838a.41.41 0 0 1-.271.389l-.262.096a2.5 2.5 0 0 0-1.48 1.482l-.096.262a.414.414 0 0 1-.778 0l-.098-.264a2.5 2.5 0 0 0-1.48-1.478l-.264-.097a.415.415 0 0 1 0-.777l.264-.098a2.5 2.5 0 0 0 1.478-1.48l.097-.264a.414.414 0 0 1 .778 0l.098.264a2.5 2.5 0 0 0 1.48 1.478l.264.096a.41.41 0 0 1 .27.39"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M13.499 14.75s-1.064-1.25-3.5-1.25-3.5 1.25-3.5 1.25"
      />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      className={cn("size-5", className)}
    >
      <g stroke="currentColor" strokeWidth="1.25" clipPath="url(#menu-user-clip)">
        <circle cx="10.098" cy="4.922" r="3.652" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.228 11.594a8.6 8.6 0 0 0-3.458-.712c-3.884 0-7.124 2.515-7.862 5.855-.174.787.496 1.45 1.303 1.45h6.887"
        />
        <path strokeLinecap="round" d="M15.5 18.501v-4.5m-2.5 3v-1.5m5 1.5v-1.5" />
      </g>
      <defs>
        <clipPath id="menu-user-clip">
          <path fill="currentColor" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      viewBox="0 0 28 28"
      className={cn("size-7", className)}
    >
      <path
        fill="currentColor"
        d="M21.5 14a.624.624 0 0 1-.625.625H7.125a.625.625 0 1 1 0-1.25h13.75A.624.624 0 0 1 21.5 14M7.125 9.625h13.75a.625.625 0 1 0 0-1.25H7.125a.625.625 0 0 0 0 1.25m13.75 8.75H7.125a.625.625 0 1 0 0 1.25h13.75a.624.624 0 1 0 0-1.25"
      />
    </svg>
  );
}

export function ArrowUpIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.5 7.427 8 4.072m0 0 3.5 3.355M8 4.072v7.855"
      />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
    >
      <path
        fill="currentColor"
        d="M14 8a.5.5 0 0 1-.5.5h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 1 1 0-1h5v-5a.5.5 0 1 1 1 0v5h5a.5.5 0 0 1 .5.5"
      />
    </svg>
  );
}

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-6", className)}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-6", className)}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      className={cn("size-5 cursor-pointer", className)}
    >
      <path
        fill="currentColor"
        d="M13.906 3.125c-1.613 0-3.026.694-3.906 1.866-.88-1.172-2.293-1.866-3.906-1.866A4.85 4.85 0 0 0 1.25 7.969c0 5.469 8.109 9.895 8.454 10.078a.63.63 0 0 0 .592 0c.345-.183 8.454-4.61 8.454-10.078a4.85 4.85 0 0 0-4.844-4.844M10 16.781c-1.427-.831-7.5-4.618-7.5-8.812a3.6 3.6 0 0 1 3.594-3.594c1.52 0 2.795.81 3.328 2.11a.625.625 0 0 0 1.156 0c.533-1.303 1.809-2.11 3.328-2.11A3.6 3.6 0 0 1 17.5 7.969c0 4.188-6.075 7.98-7.5 8.812"
      />
    </svg>
  );
}

export function SparklesIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      className={cn("size-5", className)}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 2v2m0 12v2M2 10h2m12 0h2"
      />
      <circle cx="10" cy="10" r="2" fill="currentColor" />
    </svg>
  );
}
