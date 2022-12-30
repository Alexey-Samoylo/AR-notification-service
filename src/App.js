import Header from "./components/header/header";
import './components/fonts.css'
import ContentContext from "./Context/ContentContext";
import { useState } from "react";
import Notification from "./components/content/notification/notofication";

function App() {

  const [content, setContent] = useState(<Notification />);

  return (
    <div>
      <ContentContext.Provider value={{content, setContent}}>
        <Header />
        {content}
      </ContentContext.Provider>
    </div>
  );
}

export default App;
