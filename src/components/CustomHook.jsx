import React , {useState, useEffect } from 'react'

const CustomHook = ({ value = '', delay = 300 } = {}) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    // const debouncedInputValue = CustomHook({ value: inputValue, delay: 300 });
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

  return () => { clearTimeout(handler) };
    }, [value, delay]);

    return debouncedValue;

  }
export default CustomHook