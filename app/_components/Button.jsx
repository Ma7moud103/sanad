"use client"
import { cva } from 'class-variance-authority'
import Link from 'next/link'
import { tailwindCMergeO } from '../_utli'


const buttonVarient = cva(" py-2 px-3 ", {
    variants: {
        intent: {
            primary: "flex items-center gap-x-2  bg-gradient-to-tr from-blue_light to-mainColor text-white ",
            link: "text-mainColor text-mainColor underline text-[1.1rem] font-bold",
            submit: "bg-mainColor text-white text-center  py-2 px-3 text-[1.2rem]",
            transparent: "bg-transparent"
        },
        size: {
            base: "text-base",
            xs: "text-xs",
            sm: "text-sm",
            md: "text-md",
            lg: "text-lg",
        },
        fullWidth: {
            true: "w-full"
        },
        rounded: {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl',
            full: 'rounded-full',
        }
    }
    ,
    defaultVariants: {
        intent: "primary",
        size: 'base',
        rounded: 'xl'
    }
})
function Button({ children, onClick, intent, size, fullWidth, rounded, isLink = false, href = "" }) {
    return isLink ? (
        <Link href={href} className={tailwindCMergeO(buttonVarient({ intent, size, fullWidth, rounded }))}>
            {children}
        </Link>
    ) :
        (
            <button onClick={() => onClick?.()} className={tailwindCMergeO(buttonVarient({ intent, size, fullWidth, rounded }))}>
                {children}
            </button>
        )
}

export default Button