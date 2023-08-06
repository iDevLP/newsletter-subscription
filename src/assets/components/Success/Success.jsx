import iconList from './icon-list.svg'
import './success.css'
export default function Success() {
    return (
        <main className='success-sub-main'>
            <section className='success-sub'>
                <img src={iconList} />
                <div className='success-sub-text'>
                    <h1>Thanks for subscribing!</h1>
                    <p>A confirmation email has been sent to <strong>ash@loremcompany.com</strong>. Please open it and click the button inside to confirm your subscription</p>
                    <button>Dismiss message</button>
                </div>
            </section>
        </main>

    );
}