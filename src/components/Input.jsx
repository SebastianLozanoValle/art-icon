export const Input = ({ register, field, type, message, required, errors, placeholder="", label, color = 'white', step = '1' }) => {
    return (
        <div className='flex flex-col text-black w-full'>
            <label className={`text-${color} w-full`} htmlFor={field}>
                {label}
            </label>
            <input id={field} type={type} placeholder={placeholder} step={type == 'number' && step}
                className='border border-blue-500 rounded-md hover:outline-blue-500 p-1'
                {...register(field, {
                    required: {
                        value: required,
                        message: message,
                    }
                })}
            />
            {
                errors[field] && <span className='text-red-500'>{errors[field].message}</span>
            }
        </div>
    )
}