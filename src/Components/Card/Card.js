import React from 'react'
import './Card.css';

export default function Card({tache, txt, supprFunc, index}) {

  function isCheck() {
    let checkBoxs = document.querySelectorAll(".isCheckbox");
    let divContents = document.querySelectorAll(".divContent");
    
    for (let i = 0; i < checkBoxs.length; i++) {
      if (checkBoxs[i] === checkBoxs[index]) {
        if (checkBoxs[i].checked) {
          divContents[i].classList.add("isChecked");
        } else {
          divContents[i].classList.remove("isChecked");
        }
      }
    }
  }

  return (
    <div className='card has-background-primary my-4'>
        <div className="card-content is-flex is-align-items-center">
            <div className='checkbox'>
              <input type="checkbox" className='checkbox isCheckbox' onClick={isCheck}/>
            </div>
            <div className="content divContent">
                <h3 className="px-4">{tache}</h3>
                <p className="is-size-4 px-4">{txt}</p>
                <button onClick={() => supprFunc(index)} className="delete is-large btn-top">X</button>
            </div>
        </div>
    </div>
  )
}
