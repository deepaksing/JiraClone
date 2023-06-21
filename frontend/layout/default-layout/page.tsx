import React from 'react'

type Props = {
    children: React.ReactNode
}

const DefaultLayout: React.FC<Props> = ({children}) => {
  return (
    <div className="h-screen w-full overflow-auto bg-brand-surface-1">
        <>{children}</>
    </div>
  )
}

export default DefaultLayout