import React, {FC} from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
  value?: string
}
export const Display: FC<DisplayPropsType> = ({value}) => {
  return (
    <div className={s.displayContainer}>
      <input className={s.displayInput} value={value} readOnly />
    </div>
  )
}
