import { BrowserRouter, Route, Switch } from "react-router-dom";

import ProtectedRoute from "./component/ProtectRoute";
import Another from "./component/Another";
import Main from "./component/Main";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <ProtectedRoute exact path="/an" component={Another} />
          <Route path="*" component={() => {
            window.location.href = "/";
          }} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;