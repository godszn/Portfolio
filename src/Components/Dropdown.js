import React, {useState} from 'react';

function Dropdown() {
    const [isOpen , setIsOpen] = useState(false);

    const menuOptions = [
        {id:1, label : 'option 1'},
        {id:2, label : 'option 2'},
        {id:3, label : 'option 3'},
        {id:3, label : 'option 3'},
        {id:3, label : 'option 3'},
    ];

  return (
    <div>
        <button onClick = {() => setIsOpen(!isOpen)}> Menu </button>

        {isOpen && (
            <ul>
                {menuOptions.map(option => (
                    <div>
                    <li key = {option.id}>{option.label}</li>
                    </div>
                ))}
            </ul>
        )}
      
    </div>
  )
}

export default Dropdown
