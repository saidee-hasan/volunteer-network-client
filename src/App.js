import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Routes';
import MainLayout from './Layout/MainLayout';
import { createContext, useState } from 'react';
export const UserContaxt = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <div className="App">
       <UserContaxt.Provider value={[loggedInUser,setLoggedInUser]}>
    <p>Name : {loggedInUser.name}</p>
    <RouterProvider router={router} >
      <MainLayout></MainLayout>
    </RouterProvider>
    </UserContaxt.Provider>
    </div>
  );
}

export default App;
