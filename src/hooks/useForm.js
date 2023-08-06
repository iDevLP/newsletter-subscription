import { useState } from "react";

export function useForm(initialForm, validateForm) {
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState({});
    const [state, setState] = useState("empty");

    function handleOnChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        setState("writing");

    }
    function handleOnBlur(e) {
        handleOnChange(e);
        setError(validateForm(form));
    }
    function handleOnSubmit(e) {
        e.preventDefault();
        setError(validateForm(form));
        Object.keys(error).length===0 && setState("success");

    }
    return {
        form, error, state, handleOnChange, handleOnBlur, handleOnSubmit
    }
}