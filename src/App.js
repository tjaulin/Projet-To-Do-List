// Tout ce qui est en commentaire ce sont des choses vu dans les cours mais pas utile pour le TP Todolist

import React, {useState} from 'react';
import './App.css';
import '../node_modules/bulma/css/bulma.min.css';
import Header from './Components/Header/Header';
import Container from './Components/Container/Container';
import Card from './Components/Card/Card';
// import Content from './Content';

function App() {
  // ---- TP TODOLIST ----

  const [monState, setMonState] = useState([
    // {tache: 'Promener le chien', txt: 'Une fois à 8h, une fois à 19h.'},
    // {tache: 'Preparer le repas', txt: 'Acheter du poisson et du riz.'},
    // {tache: 'App web', txt: 'Apprendre ReactJS'}
  ]);

  // récupération du tableau depuis le localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks"));

  console.log(tasks);
  // vérification de la récupération du tableau
  console.log("tasks localStorage :");
  console.log(tasks);

  function supprCarte(index) {
    const tabNettoyage = [...monState];
    console.log(index);
    const newValues = tabNettoyage.filter(item => tabNettoyage.indexOf(item) !== tabNettoyage.indexOf(tabNettoyage[index]));
    setMonState(newValues);
    // Récupérez les tâches du localStorage
    console.log(localStorage.getItem("tasks"))
    let tasks = JSON.parse(localStorage.getItem("tasks"));

    // Supprimez la tâche sélectionnée en utilisant la méthode filter()
    const localStorageNettoyage = tasks.filter(item => tasks.indexOf(item) !== tasks.indexOf(tasks[index]));

    // Mettez à jour le localStorage avec le nouveau tableau de tâches
    localStorage.setItem("tasks", JSON.stringify(localStorageNettoyage));
  }

  if (tasks == null || tasks.length === 0) {
    return (
      <div>
        <Header />
        <Container monState={monState} setMonState={setMonState} tasks={tasks}/>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Container monState={monState} setMonState={setMonState} tasks={tasks}/>
      <div className="container tasks">
        {
          tasks.map((todo, index) => (
            <Card
            key={index}
            index={index}
            tache={todo.tache}
            txt={todo.txt}
            supprFunc={supprCarte}
            />
          ))
        }
      </div>
      {/* {
        monState.map((todo, index) => (
          <Card 
          key={index}
          index={index}
          tache={todo.tache}
          txt={todo.txt}
          supprFunc={supprCarte}
          />
        ))
      } */}
    </div>
  )







  // ---- COURS INTRODUCTION A REACT ---- 


  // const [valState, setValState] = useState('Ceci est un titre');

  // console.log(valState);
  
  // function foo() {
  //   const btn = document.querySelector(".btn");
  //   btn.classList.toggle("clicked");
  //   setValState(20);
  //   console.log(valState);
  // }

  // function toChild(param1) {
  //   console.log("Hi !", param1);
  // }

  // return (
  //   <div>
  //     <Content func={toChild} msg={valState} />
  //     <button className='btn' onClick={foo}>Clique !</button>
  //   </div>
  // );
}

export default App;
