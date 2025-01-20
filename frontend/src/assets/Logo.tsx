import * as React from "react";

const LogoIcon = ({
  color = "#fff", // Default color
  ...props
}: React.SVGProps<SVGSVGElement> & { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="353"
    height="62"
    fill="none"
    viewBox="0 0 353 62"
    {...props}
  >
    <circle
      cx="200.091"
      cy="31"
      r="25.364"
      stroke={color}
      strokeOpacity="0.15"
      strokeWidth="10"
    ></circle>
    <circle
      cx="200.091"
      cy="31"
      r="24.364"
      stroke={color}
      strokeWidth="2"
      opacity="0.6"
    ></circle>
    <path
      fill={color}
      d="M8.201 62H0L23.72 0h8.075l23.72 62h-8.2L28.01 9.809h-.505zm3.028-24.219h33.057v6.66H11.23zM68.227 62h-8.2l23.72-62h8.075l23.72 62h-8.201L88.036 9.809h-.504zm3.028-24.219h33.058v6.66H71.255zM125.604 62V0h21.828q7.57 0 12.428 2.482 4.857 2.453 7.191 6.751 2.335 4.3 2.335 9.779 0 5.48-2.335 9.718t-7.16 6.66q-4.826 2.391-12.333 2.391h-17.664V31h17.412q5.172 0 8.327-1.453 3.186-1.453 4.605-4.117 1.452-2.695 1.451-6.418t-1.451-6.51q-1.45-2.784-4.637-4.298-3.186-1.545-8.422-1.544h-13.752V62zm30.407-27.852L171.909 62h-9.084l-15.646-27.852zM285.247 0v62h-7.587l-35.279-48.68h-.632V62h-7.84V0h7.587l35.406 48.8h.632V0zM352.273 0v62h-7.587l-35.279-48.68h-.632V62h-7.84V0h7.587l35.405 48.8h.632V0z"
    ></path>
  </svg>
);

export default LogoIcon;
