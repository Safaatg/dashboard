
import './Header.css';
import Switch from '../Switch/Switch';

function Header() {

    return (
        <div className='Header-container'>
            <header >
                <div className='title'>
                    <h1>Social Media Dashboard</h1>
                    <p>Total Followers: 23,004</p>
                </div>
                <Switch  />
            </header>
        </div>
    );
}

export default Header;