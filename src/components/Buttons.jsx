import React from 'react'

export const Buttons = ({buttonInfo, buttonClass}) => {
  const buttonsProps = buttonInfo
  return (
    <div
    id={buttonsProps.name}
    className={buttonClass}
    >
      <p>{buttonsProps.value}</p>
    </div>
  )
}
