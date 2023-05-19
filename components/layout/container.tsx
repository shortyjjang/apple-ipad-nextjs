
export default function Container({
  children,
  className
}:{
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`max-[1200px] mx-auto px-5 ${className ? className : ''}`}>{children}</div>
  )
}
