
import './App.css';
import ContactList from './Components/Contacts_view';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

function App() {
  return (
   <>
     <div className="container">
      <h1 className="app">My Contact App</h1>
   <ContactList/>
   </div>
   </>
  );
}

export default App;
