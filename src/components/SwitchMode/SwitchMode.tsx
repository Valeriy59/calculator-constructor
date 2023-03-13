import React, {useState} from 'react';
import {SwitchButton} from "../SwitchButton/SwitchButton";
import {modeType} from "../../common/constants";


export const SwitchMode = () => {
  const [mode, setMode] = useState<modeType>('Constructor')
  console.log(mode)
  const onclickRuntimeHandler = () => {
    setMode('Runtime')
  }
  const onclickConstructorHandler = () => {
    setMode('Constructor')
  }

  return (
    <div>
      <SwitchButton title={'Runtime'} onClick={onclickRuntimeHandler} active={mode === 'Constructor'}/>
      <SwitchButton title={'Constructor'} onClick={onclickConstructorHandler} active={mode === 'Runtime'}/>
    </div>
  )
}