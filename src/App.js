import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
//import Criteria1 from './components/criteria1';
import Criteria1 from './components/criteria1.component';
import c11List from './components/c1-1.component';
import c12List from './components/c1-2.component';
import CreateC11 from './components/createc11.component';
import EditC11 from './components/edit11.component';
import Criteria2 from './components/criteria2.component';
import CreateC21 from './components/createc21.component';


function App() {
	return (
		<Router>
			<Navbar />
		
			<div className="container">
				<Route path="/" exact component={ExercisesList} />
				<Route path="/edit/:id" component={EditExercise} />
				<Route path="/create" component={CreateExercise} />
				<Route path="/c11/create" component={CreateC11} />
				<Route path="/c21/create" component={CreateC21} />
				<Route path="/c11/edit" component={EditC11} />
				{/* <Route path="/create/exercise" component={()=><UpdateForm route={"exercise"}/>} /> */}
			
				<Route path="/criteria1" component={Criteria1} />
				<Route path="/criteria2" component={Criteria2} />
				{/* <Route path="/criteria2" component={Criteria2} /> */}
			</div>
		</Router>
	);
}

// export default function Page1(){
// 	return(
// 		<div>
// 			<ExercisesList/>
// 			<UsersList/>
// 			<VisionsList/>
// 		</div>
// 	);
// }
export default App;
