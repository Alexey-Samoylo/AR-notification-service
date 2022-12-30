import Header from "./components/header/header";
import './components/fonts.css'
import ContentContext from "./Context/ContentContext";
import { useState } from "react";
import Notification from "./components/content/notification/notofication";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
console.log('App');
  const [content, setContent] = useState(<Notification />);
  return (
    <ContentContext.Provider value={{content, setContent}}>
      <Header />
      <Router>
        <Routes>
          <Route path="/:id" element={<Notification />}  />
        </Routes>
      </Router>
    </ContentContext.Provider>
  );
}

export default App;
