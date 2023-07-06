import React, { ReactNode } from 'react'

interface ButtonProps {
       children:ReactNode
       onClick: () => void
       styles:string
}

const Button = ({styles , children ,onClick}:ButtonProps) => {
       return (
              <button
                     className={styles}
                     onClick={onClick}
              >
                     {children}
              </button>
       )
}

export default Button