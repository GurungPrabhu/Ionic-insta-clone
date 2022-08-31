import React from "react";
import {
  IonButton,
  IonCol,
  IonGrid,
  IonHeader,
  IonImg,
  IonRow,
} from "@ionic/react";
import "./style.css";

const Header: React.FC = () => {
  return (
    <IonHeader>
      <IonGrid>
        <IonRow className="header-row">
          <IonCol size="auto">
            <IonImg src="./assets/scala.svg" className="scala-image" />
          </IonCol>
          <IonCol size="auto">
            <IonButton color="primary" size="small">
              Login
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonHeader>
  );
};

export { Header };
