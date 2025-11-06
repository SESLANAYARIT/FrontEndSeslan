import { SVGProps } from "react";
import { commonSVGProps } from "../../utils/svgsProps";

export const CheckIcon = (
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
  ) => {
    return (
      <svg {...props} {...commonSVGProps}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    );
  };

