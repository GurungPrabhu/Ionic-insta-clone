import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonGrid,
  IonImg,
  IonRow,
} from "@ionic/react";
import React from "react";
import "./style.css";

const CARD_SRCS = [
  "./assets/cards/1.png",
  "./assets/cards/2.png",
  "./assets/cards/3.png",
  "./assets/cards/4.png",
  "./assets/cards/5.png",
  "./assets/cards/6.png",
];

const NftCardCollection: React.FC = () => {
  return (
    <IonCard color="light" className="nft-card-collection">
      <IonGrid>
        <IonRow>
          {CARD_SRCS.map((item: string) => {
            return (
              <IonCol size="4">
                <IonImg src={item} className="nft-img" />
              </IonCol>
            );
          })}
        </IonRow>
        <IonRow className="nft-card-footer">
          <IonCol size="auto">
            <IonButton size="small" color="dark" fill="clear">
              他のカードも見てみる
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export { NftCardCollection };
