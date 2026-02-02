import React from 'react'

const CheckBox = ({label, selected = false, onChangeFn = ()=>{} }) =>{
    return(
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type="checkbox" checked={selected} onChange ={(e)=>onChangeFn(e.target.checked, label)} />
            <span className='font-light select-none'>{label}</span>
        </label>
    )
}

export default CheckBox