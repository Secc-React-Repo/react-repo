
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  const handleNameChanges = () => {
  const nameS= ['Aryan','Yahs', 'Sasha'];
  const int = Math.floor(Math.random() * 3);
  return nameS[int];
  }

  return (
    <div className="App">
     <Header />
     <Content/>
     <Footer />
    </div>
  );
}

export default App;
