import './subscribe-form.css'
import { useForm } from "../../../hooks/useForm";
import { Navigate } from 'react-router-dom';

const initialForm = {
    email: ""
}
function validateForm(form) {
    const error = {}
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
    if (!form.email.trim()) error.email = "Email field required"
    else if (!regexEmail.test(form.email.trim())) error.email = "Valid email required"
    return error

}
export default function SubscribeForm() {
    const { form, error, handleOnChange, handleOnBlur, state, handleOnSubmit } = useForm(initialForm, validateForm)
    if (state == "success") return  <Navigate to="/success"/>
    return (
        <form className="sform" onSubmit={handleOnSubmit}>
            <div className="email-text">
                <label htmlFor="email">Email address</label>
                {error.email && <span>{error.email}</span>}
            </div>
            <input
                className={error.email ? "failed" : "success"}
                onChange={handleOnChange}
                value={form.email}
                onBlur={handleOnBlur} type="email" name="email" placeholder="email@company.com" />

            <button disabled={form.email.length == 0}>Subscribe to monthly newsletter</button>
        </form>
    );
}