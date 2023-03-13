import React, {FC} from 'react'
import s from './Button.module.css'

type ButtonPropsType = {
  title: string | number,
  onClick?: () => void
}

export const Button: FC<ButtonPropsType> = ({title, onClick}) => {
  return (
   <button className={s.button} >{title}</button>
  )
}

