import React, { useState, useEffect } from 'react'
import './CheckBox.css'

export const CheckBox = ({ content, setFilteredContacts }) => {
    const [isChecked, setIsChecked] = useState(false)
    const [isSecondChecked, setIsSecondChecked] = useState(false)
    const [isThirdChecked, setIsThirdChecked] = useState(false)

    useEffect(() => {
        filterContacts(isChecked, isSecondChecked, isThirdChecked)
    }, [isChecked, isSecondChecked, isThirdChecked])

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked)
    }

    const handleSecondCheckboxChange = (event) => {
        setIsSecondChecked(event.target.checked)
    }

    const handleThirdCheckboxChange = (event) => {
        setIsThirdChecked(event.target.checked)
    }

    const filterContacts = (maleChecked, femaleChecked, unknownChecked) => {
        const filtered = content.filter(contact => {
            if (maleChecked && contact.gender === 'male') {
                return true
            }
            if (femaleChecked && contact.gender === 'female') {
                return true
            }
            if (unknownChecked && !contact.gender) {
                return true
            }
            return false
        })
        setFilteredContacts(filtered.length > 0 ? filtered : content)
    }

    return (
        <div className='cont'>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <p className='male'>male</p>
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={isSecondChecked}
                    onChange={handleSecondCheckboxChange}
                />
                <p className='female'>female</p>
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={isThirdChecked}
                    onChange={handleThirdCheckboxChange}
                />
                <p className='unknown'>unknown</p>
            </label>
        </div>
    );
};

