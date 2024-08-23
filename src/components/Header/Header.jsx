import React, { useEffect, useState } from 'react';
import './Header.css'

export const Header = ({ contents }) => {
    const [bgColor, setBgColor] = useState('black');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setBgColor('gray');
            } else {
                setBgColor('black');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='header__list' style={{ backgroundColor: bgColor }}>
            <ul className='header__time'>
                <li className='time'>{contents.time}</li>
            </ul>
            <ul className='header__state'>
                <li className='fas fa-signal'></li>
                <li className='fas fa-wifi'></li>
                <li className='fas fa-battery-half'></li>
            </ul>
        </div>
    );
}