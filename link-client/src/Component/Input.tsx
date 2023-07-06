import React, { ChangeEvent } from 'react'

interface InputProps {
       value:string
       onChange:(e:ChangeEvent<HTMLInputElement>) => void
       styles: string
       placeholder:string
}


const Input = ({placeholder , onChange , value , styles}:InputProps) => {
       return (
              <input
                     value={value}
                     onChange={onChange}
                     placeholder={placeholder}
                     className={styles}
              />
       )
}

export default Input