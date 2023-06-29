import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-a2.png'
import './index.scss';

const Home = () => {
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    Hi, <br />
                    I'm

                    <img src={LogoTitle} alt='developer' />
                    mith
                    <br />
                    full stack developer
                </h1>
                <h2>
                    Frontend Developer/ JavaScript Expert/ Youtuber
                    <Link to="/contact" className='flat-button'>Contact Me</Link>
                </h2>
            </div>
        </div>
    )
}

export default Home