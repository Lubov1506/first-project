import React from 'react';

const ButtonTrFn = ({onClick, title="button"}) => {
    return (
        <button onClick={onClick} className='px-2 py-1 bg-teal-600 rounded-md text-teal-100 text-xl hover:text-teal-50 hover:bg-teal-700 transition-all duration-200'>
            {title}
        </button>
    );
}

export default ButtonTrFn;
