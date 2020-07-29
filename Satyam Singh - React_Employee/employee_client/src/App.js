import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Static/navbar'
import List from './Components/Dynamic/EmployeeList/empList'
import CreateEMP from './Components/Dynamic/CreateEmployee/CreateEMP'
import showResults from './utils/showResults';
import ViewEmployee from './Components/Dynamic/ViewEmployee/ViewEmployee'
import Info from './Components/Static/Info'
import styles from './utils/viewStyles.module.css'
function App() {
  return (
    <div className="App">
      <div className={styles.appcss}>
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' render={() => <List />} />
        <Route path='/register' render={() => <CreateEMP onSubmit={showResults} />} />
        <Route path='/view/:id' render={(props) => <ViewEmployee id={props.match.params.id}/>} />
        <Route path="/Info" render={() => <Info />} />
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
