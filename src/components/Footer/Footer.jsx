import './Footer.css'

export const Footer = () => {
    return (
        <div className='footer'>
            <ul className="iconList">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" width="24px" height="24px">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <p>Улюблені</p>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" width="24px" height="24px">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M19 3h-1V2h-2v1H8V2H6v1H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V10h14v11zM5 8V5h14v3H5z" />
                    </svg>
                    <p>Недавні</p>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" width="24px" height="24px">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <p>Контакти</p>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" width="24px" height="24px">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 3H4c-1.1 0-1.99.9-1.99 2L2 19c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14z" />
                    </svg>
                    <p>Клавіші</p>
                </li>
            </ul>

        </div>
    )
}