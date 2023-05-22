import { useState, useEffect } from 'react';

function Post3() {

    const [inputValue, setInputValue] = useState('No que você está pensando?');

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
    return (

        
        <input type='text' value={inputValue} onChange={handleChange} className='Post3' />
        

    )
}

export default Post3;