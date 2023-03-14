import React, {useState} from 'react'
import './Container.css'

export default function Container({monState, setMonState, tasks}) {
    const [tache, setTache] = useState('');
    const [txt, setTxt] = useState('');

    // DEUX MANIERES DE FAIRE
    function getTxt(txt) {
        setTxt(txt);
    }

    function creationCarte(e) {
        // On évite que lors du click cela raffraichi la page (preventDefault empêche le comportement de base de l'élément, ici du bouton)
        e.preventDefault();
        if(tache === "") {
            return alert("Vous devez indiquer un titre à votre tâche");
        }
        // Les ... représente le début du tableau qui existe déja, au lieu de recrée le tableau, on prend ce qui est existant et on ajoute la nouvelle tache a la suite. Par contre se sera un nv tableau, ca ne sera pas le tableau "monState" qui sera modifié.
        const nvTab = [...monState, {tache: tache, txt: txt}]
        setMonState(nvTab);

        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.push({tache: tache, txt: txt})

        localStorage.setItem("tasks", JSON.stringify(tasks));
        // Je remet à 0 pour que l'utilisateur n'est pas a effacer à chaque fois les tâches
        setTache("");
        setTxt("");
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
            {tasks.length > 0 && <h2 className='title mt-5'>Mes tâches</h2>}
        </div>
    )
}
