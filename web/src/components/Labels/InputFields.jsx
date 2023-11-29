import './InputFields.css'

export function InputField({ type, id, name, children, ...restProps }) {

    const inputClass = (type === 'submit' ? 'submit-button' : 'input-text')

    return (
        <>
            <label className="label-form">
                {children}
                <input className={inputClass} type={type} itemID={id} name={name} {...restProps} />
            </label>

        </>
    )
}

export default InputField;