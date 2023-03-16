import React, {useState} from 'react';
import './App.css';
import '../node_modules/bulma/css/bulma.min.css';
import Header from './Components/Header/Header';
import Container from './Components/Container/Container';
import Card from './Components/Card/Card';
import Footer from './Components/Footer/Footer'

function App() {
  const [monState, setMonState] = useState([]);

  let tasks = JSON.parse(localStorage.getItem("tasks"));

  function supprCarte(index) {
    const tabNettoyage = [...monState];
    const newValues = tabNettoyage.filter(item => tabNettoyage.indexOf(item) !== tabNettoyage.indexOf(tabNettoyage[index]));
    setMonState(newValues);

    let tasks = JSON.parse(localStorage.getItem("tasks"));
    const localStorageNettoyage = tasks.filter(item => tasks.indexOf(item) !== tasks.indexOf(tasks[index]));
    localStorage.setItem("tasks", JSON.stringify(localStorageNettoyage));
  }

  if (tasks == null || tasks.length === 0) {
    return (
      <div className='content'>
        <Header />
        <Container monState={monState} setMonState={setMonState} tasks={tasks}/>
        <Footer />
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
      <Footer />
    </div>
  )
}

export default App;
