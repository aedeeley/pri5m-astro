import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90 py-7 duration-500',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 duration-500',
        outline:
          'border border-input bg-background hover:border-slate-700 hover:text-accent-foreground py-7 px-7 tracking-wide transition ease-in-out duration-500',
          outlineintro:
          'border border-input bg-background hover:border-zinc-400 hover:dark:border-zinc-700 hover:text-accent-foreground py-7 px-5 tracking-wide transition duration-500 ease-in-out active:opacity-50 group', 
          harsh:
          'group bg-black dark:bg-white px-5 py-7 text-[11pt] text-zinc-300 dark:text-zinc-800', 
          clientHeader:
          'border border-input text-[9pt] bg-background dark:text-zinc-400 dark:hover:text-zinc-100 hover:border-black/20 dark:border-white/5 dark:hover:border-white/10 dark:bg-zinc-950/60 py-4 pl-2 pr-3 tracking-wide transition duration-500 ease-in-out active:opacity-50 group',
        secondary:
          'px-6 py-6 bg-secondary text-secondary-foreground hover:bg-secondary/80 duration-500 group',
        ghost: 'hover:animate-wiggle-more hover:opacity-70 active:opacity-40 duration-500',
        link: 'text-primary underline-offset-4 hover:underline duration-500',
        fade: 'text-primary-foreground border hover:border-pink-500 py-7 px-10 text-white text-lg tracking-wide bg-gradient-to-r from-pink-600 to-orange-500 transition ease-in-out duration-500',
        fadeintro: 'text-primary-foreground py-7 px-6 text-white text-lg tracking-wide bg-gradient-to-r from-pink-600 to-orange-500 transition ease-in-out hover:opacity-90 active:opacity-50',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
