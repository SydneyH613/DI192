import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ErrorBoundary from './Components/ErrorBoundary';
import PostList from './Components/PostList';
import Example1 from './Components/Example1';
import Example2 from './Components/Example2';
import Example3 from './Components/Example3';

function HomeScreen() {
  return <h1>Home</h1>;
}

function ProfileScreen() {
  return <h1>Profile</h1>;
}

function ShopScreen() {
  throw new Error('Shop crashed!');
}

const WEBHOOK_URL = 'https://webhook.site/ad49f4ab-af5f-4ccd-b1b1-2a5f198350ba';

async function sendData() {
  const response = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27,
    }),
  });
  const data = await response.text();
  console.log(data);
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            to="/profile"
          >
            Profile
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            to="/shop"
          >
            Shop
          </NavLink>
        </div>
      </nav>

      <div className="App">
        <h2>Exercise 1 : React Router Error Boundary</h2>
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary key="home">
                <HomeScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/profile"
            element={
              <ErrorBoundary key="profile">
                <ProfileScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/shop"
            element={
              <ErrorBoundary key="shop">
                <ShopScreen />
              </ErrorBoundary>
            }
          />
        </Routes>

        <h2>Exercise 2 : Display JSON Data in React JS</h2>
        <PostList />

        <h2>Exercise 3 : Display JSON Data and Parse It</h2>
        <Example1 />
        <Example2 />
        <Example3 />

        <h2>Exercise 4 : Post JSON Data with React JS</h2>
        <button onClick={sendData}>Send Data</button>
      </div>
    </BrowserRouter>
  );
}

export default App;
