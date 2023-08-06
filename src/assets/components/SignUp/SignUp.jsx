import imgSignUp from './illustration-sign-up-desktop.svg'
import iconList from './icon-list.svg'
import './signup.css'
import SubscribeForm from '../SubscribeForm/SubscribeForm';
export default function SignUp() {
    return (
        <main className='sign-up'>
            <section className='sign-up-container'>
                <div className='su-text'>
                    <h1>Stay updated!</h1>
                    <p>Join 60,000+ product managers receiving monthly updates on:</p>
                    <ul>
                        <li>
                            <img src={iconList} />
                            Product discovery and building what matters
                        </li>
                        <li>
                            <img src={iconList} />
                            Measuring to ensure updates are a success
                        </li>
                        <li>
                            <img src={iconList} />
                            And much more!
                        </li>
                    </ul>
                    <SubscribeForm />
                </div>
                <div className='su-img'>
                    <img src={imgSignUp} alt="Sign up image" />
                </div>
            </section>
        </main>
    );
}