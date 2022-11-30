import React from 'react'

const PageAppoint = () => {
const onPrint =()=>{
    window.print()
}
  return (
    <div>
        <span> บัตรนัดตรวจโรค </span> <span> คลินิก : คลินิกเติมยา </span>
        <button onClick={onPrint}>print</button>
    </div>
  )
}

export default PageAppoint