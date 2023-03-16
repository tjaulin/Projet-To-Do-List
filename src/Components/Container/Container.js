import React, {useState} from 'react'
import './Container.css'

export default function Container({monState, setMonState, tasks}) {
    const [tache, setTache] = useState('');
    const [txt, setTxt] = useState('');

    function getTxt(txt) {
        setTxt(txt);
    }

    function creationCarte(e) {
        e.preventDefault();
        if(tache === "") {
            return alert("Vous devez indiquer un titre à votre tâche");
        }
        const nvTab = [...monState, {tache: tache, txt: txt}]
        setMonState(nvTab);

        let tasks = localStorage.getItem("tasks");
        if (tasks) {
            tasks = JSON.parse(tasks);
        } else {
            tasks = [];
        }
        tasks.push({tache: tache, txt: txt})

        localStorage.setItem("tasks", JSON.stringify(tasks));
        setTache("");
        setTxt("");
    }

    function deleteAll() {
        localStorage.removeItem('tasks');
        setMonState([]);
    }

    if (tasks == null || tasks.length === 0) {
        return (
          <div className='container'>
            <h2 className='title mt-5'>
                Rentrez vos tâches à faire
            </h2>

            <form onSubmit={creationCarte}>
                <div className="field">
                    <div className="control">
                        <label htmlFor="tache" className='label'>Tâche</label>
                        <input className='input' type="text" id='tache' placeholder='Nom de la tâche . . .' onChange={e => setTache(e.target.value)} value={tache} />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <label htmlFor="txt" className='label'>Description</label>
                        <textarea className='textarea' type="text" id='txt' placeholder='Description de la tâche . . .' onChange={e => getTxt(e.target.value)} value={txt}></textarea>
                    </div>
                </div>

                <div className="control">
                    <button type='submit' className="button is-link has-background-primary">Créer une tâche</button>
                </div>
            </form>
        </div>
        );
    }

    return (
        <div className='container'>
            <h2 className='title mt-5'>
                Rentrez vos tâches à faire
            </h2>

            <form onSubmit={creationCarte}>
                <div className="field">
                    <div className="control">
                        <label htmlFor="tache" className='label'>Tâche</label>
                        <input className='input' type="text" id='tache' placeholder='Nom de la tâche . . .' onChange={e => setTache(e.target.value)} value={tache} />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <label htmlFor="txt" className='label'>Description</label>
                        <textarea className='textarea' type="text" id='txt' placeholder='Description de la tâche . . .' onChange={e => getTxt(e.target.value)} value={txt}></textarea>
                    </div>
                </div>

                <div className="control">
                    <button type='submit' className="button is-link has-background-primary">Créer une tâche</button>
                </div>
            </form>
            <div className='container titleBtn'>
                <h2 className='title mt-5'>Mes tâches</h2>
                <div className='button has-text-white' onClick={deleteAll}>Tout supprimer</div>
            </div>
        </div>
    )
}
