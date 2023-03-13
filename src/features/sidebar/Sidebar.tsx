import React from 'react'
import {numbers, operations} from "../../common/constants";
import {Button} from "../../components/Button/Button";
import s from './Sidebar.module.css'
import {Display} from "../../components/Display/Display";


export const Sidebar = () => {
  return (
    <div className={s.sidebarContainer}>
      <Display value={'0'}/>
      <div className={s.numbersContainer}>
        {numbers.map((num) => <Button title={num} />)}
      </div>
      <div className={s.numbersContainer}>
        {operations.map((o) => <Button title={o} />)}
      </div>
    </div>
  )
}