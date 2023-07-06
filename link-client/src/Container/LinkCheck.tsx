import React, { ChangeEvent, useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { AppDispatch , RootState } from '../index'
import { LinkProps } from '../Interface/Interface'
import { postLinkString ,changeInput } from '../Store/LinkStore'
import Input from '../Component/Input'
import Button from '../Component/Button'
import '../Styles/Input.css'

const LinkCheck = () => {

       const link = useSelector<RootState , LinkProps> (state => state.link)
       const dispatch = useDispatch<AppDispatch>()

       const postData = (e:ChangeEvent<HTMLFormElement>) => {
              e.preventDefault()

              const valueLink: string = link.originalLink.trim().split(' ').join('')

              if(valueLink.length !== 0) {
                     dispatch(postLinkString(link.originalLink))
              }

       }


       return (
              <>
                     <form 
                            className='enterBlock'
                            onSubmit={postData}
                            >
                            <Input
                                   value={link.originalLink}
                                   onChange={(e) => dispatch(changeInput(e.target.value))}
                                   styles='enterLink'
                                   placeholder='ENTER LINK'
                            />

                            <Button
                                   styles='BTN'
                                   onClick={() =>{}}
                            >
                                   CLICK
                            </Button>
                     </form>

                     {
                            link.shortUrl &&
                            <a
                                   className='link'
                                   href={`http://localhost:8000/links/${link.shortUrl}`}
                                   target='_blank'
                            >
                                   http://localhost:8000/links/{link.shortUrl}
                            </a>
                     }
              
              </>
       )
}

export default LinkCheck