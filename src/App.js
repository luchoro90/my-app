import NavBar from "./Components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
function App() {
return (
    <div>
        <NavBar/>
        <ItemListContainer greeting="hola mundo" /> 
    </div>
    );
}

export default App;