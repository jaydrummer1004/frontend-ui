import './App.css';
import { SideBar } from './sidebar';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='flex'>
      <SideBar />
      <main className="container mx-auto flex h-screen items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
