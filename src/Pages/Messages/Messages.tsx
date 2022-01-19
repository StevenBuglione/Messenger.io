import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Resizable } from "re-resizable";
import './Messages.css';

const style = {
  background: "black",
  display: "flex"
};

const style1 = {
  background: "#f0f0f0",
  display: "flex"
};

const Messages: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="messages">

          <div className="recent-chat">
          <Resizable
            style={style}
            defaultSize={{
            width:"100%",
            height:"auto",
            }}
            enable={{top:false, right: false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false, bottom:false}}
            >
            001
            </Resizable>
            <Resizable
            style={style1}
            defaultSize={{
            width:"100%",
            height:"50vh",
            }}
            enable={{top:true, right: false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false, bottom:false}}
            >
            001
            </Resizable>

          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Messages;
