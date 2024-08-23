import React, { useState } from 'react'
import './Article.css'

export const Article = ({ onSearch }) => {
    const [inputVal, setInputVal] = useState('')

    const handleChange = (event) => {
        const value = event.target.value
        setInputVal(value)
        onSearch(value)
    }

    return (
        <div className="container">
            <input className='cont__item'
                placeholder='Пошук'
                value={inputVal}
                onChange={handleChange}
            />
            <div className="myAvatar">
                <svg className='avatar'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="gray"
                >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <p className='myCard'>Моя картка</p>
            </div>
        </div>
    )
}