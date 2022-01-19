import { Redirect, Route } from 'react-router-dom';
import {
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Messages from '../Pages/Messages/Messages';
import History from '../Pages/History/History';
import PhoneCall from '../Pages/PhoneCall/PhoneCall';
import UserProfile from '../Pages/UserProfile/UserProfile';

/* Icons */
import PhoneInTalk from '@mui/icons-material/PhoneInTalk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Custome Css */
import './AppNavigation.css'


function AppNavigation(){
    return(
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/messages">
              <Messages />
            </Route>
            <Route exact path="/history">
              <History />
            </Route>
            <Route path="/phonecall">
              <PhoneCall />
            </Route>
            <Route path="/userprofile">
              <UserProfile />
            </Route>
            <Route exact path="/">
              <Redirect to="/messages" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar className="nav-bar" slot="bottom">
            <IonTabButton tab="messages" href="/messages">
              <FontAwesomeIcon icon={["fas","comment"]} size="3x"/>
            </IonTabButton>
            <IonTabButton tab="history" href="/history">
              <FontAwesomeIcon icon={["fas","clock"]} size="3x"/>
            </IonTabButton>
            <IonTabButton tab="phonecall" href="/phonecall">
              <PhoneInTalk style={{ fontSize: 35}}></PhoneInTalk>
            </IonTabButton>
            <IonTabButton tab="userprofile" href="/userprofile">
              <FontAwesomeIcon icon={["fas","user-circle"]} size="3x"/>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    );
}

export default AppNavigation;