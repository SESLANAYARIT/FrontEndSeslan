import { SVGProps } from 'react'
import { commonSVGProps } from '../../utils/svgsProps'

export const InstagramIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} {...commonSVGProps}>
    <path d="M16.5 8.5c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zM2 21h20v-2H2v2zm14-14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
  </svg>
  )
}
