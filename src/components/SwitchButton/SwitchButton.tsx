import React, {FC, ReactElement} from 'react';
import s from './SwitchButton.module.css'

type SwitchButtonPropsType = {
  active: boolean
  title: string,
  onClick: () => void,
  children?: ReactElement
}

export const SwitchButton: FC<SwitchButtonPropsType> = ({title, onClick, children, active}) => {
  console.log(active)
  const className = s.button + (active ? s.active : s.inactive)
  return (
    <button className={className} onClick={onClick}>
      <div className={s.title}>
        {children}
        {title}
      </div>
    </button>
  )
}