import { SVGProps } from "react";
import { commonSVGProps } from "../../utils/svgsProps";

export const FacebookIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg {...props} {...commonSVGProps} className="w-12 h-12 text-blue-600 hover:text-blue-500 transition-colors">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
};
