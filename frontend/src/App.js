import Weather from './components/Weather';
import './index.css';


function App() {

  return (
    <main>
      <p>To use Get Coordinates button</p>
      <p>Mac Users 'System Preferences > Security & Privacy > Privacy > Location Services'</p>
      <p>All Users must accept the option for the browser to use your location... </p>
      <p>Or just paste in your coords to avoid using the button</p>
      <Weather />
    </main>
  );
}

export default App;
