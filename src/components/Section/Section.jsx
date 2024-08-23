import './Section.css'
export const Section = ({ contents }) => {
    return (
        <div>
            <ul className='sect__list'>
                <li className='sect__item'>
                    {contents.list}
                </li>
                <li className='sect__plus'>
                    {contents.add}
                </li>
            </ul>
            <p className='sect__cont'>{contents.cont}</p>
        </div>
    )
}