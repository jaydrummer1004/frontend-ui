import './App.css';
import { BadgeExample } from './examples/badge-example';
import { ButtonExample } from './examples/button-example';

function App() {
  return (
    <div className="container mx-auto flex h-screen items-center justify-center">
      <BadgeExample />
      <ButtonExample />
    </div>
  );
}

export default App;
