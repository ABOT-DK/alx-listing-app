import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-lg shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
  )
}
