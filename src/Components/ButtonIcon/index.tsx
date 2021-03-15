import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}


const ButtonIcon =({text}:Props) => (
<div>    
    <button className="btn btn-primary btn-icon">
          {text} 
    </button>
</div>

);

export default ButtonIcon;