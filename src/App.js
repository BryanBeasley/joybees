import './App.css';
import background3 from "./assets/bckgndimg.jpg";
import Navigation from './components/navbar';
import BookNow from './components/book-now';

function App() {
  return (
    <div className="App" style={{
      backgroundImage: 'url('+background3+')',
      backgroundSize:"cover",
      height: "100vh", 
    
    }}>
      <Navigation />
      <BookNow />
      
    </div>
  );
}

export default App;
