import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Layout from "./components/Header/Layout";
import MainHeader from "./pages/MainHeader";
import Card from "./components/UI/Card";
import LikedPerfume from "./pages/LikedPerfume";
import { Redirect } from "react-router-dom";
import OrderPerfume from './pages/OrderPerfume';
import OrderedPerfume from './pages/OrderedPerfume';

function App() {

  return (
    <Card>
      <Layout>
        <Switch>
            <Route path='/' exact>
              <Redirect to='/main'/>
            </Route>
            <Route path='/main'>
              <MainHeader />
            </Route>
            <Route path='/liked' exact>
              <LikedPerfume />
            </Route>
            <Route path='/order'>
              <OrderPerfume />
            </Route>
            <Route path='/form'>
              <OrderedPerfume />
            </Route>
          </Switch>
        </Layout>
      </Card>
  );
}

export default App;
