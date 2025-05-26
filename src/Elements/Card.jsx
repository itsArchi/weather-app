export const Card = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>
}

// export const CardHeader = ({ children, className = "" }) => {
//   return <div className={className}>{children}</div>
// }

// export const CardTitle = ({ children, className = "" }) => {
//   return <h3 className={className}>{children}</h3>
// }

export const CardContent = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>
}