// For Card component
export interface CardProps {
  children: React.ReactNode
  className?: string
}

// For Button component
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

// For listing items (you'll use this later)
export interface Listing {
  id: string
  title: string
  description: string
  price: number
  imageUrl: string
}