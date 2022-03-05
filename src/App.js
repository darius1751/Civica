import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import EventPage from "./pages/EventPage";
import Gustos from "./pages/Gustos";
import Index from "./pages/Index";
//import Index from "./pages/Index";

function App() {
  return (
      <HashRouter>
        <Switch >
          <Route path='/' exact>
            <Index/>
          </Route>
          <Route path='/editar-preferidos' exact>
              <Gustos/>
          </Route>
          <Route path='/evento' exact>
            <EventPage/>
          </Route>
        </Switch>
      </HashRouter>
    
  );
}

export default App;
