import React from "react";
import { IonCard, IonImg, IonText } from "@ionic/react";
import "./style.css";

const NftHeader: React.FC = () => {
  return (
    <IonCard className="nft-card">
      <IonText color="light" className="nft-card__header">
        <p>NFT Owner </p>
      </IonText>
      <IonImg src="./assets/ntf-image.svg" className="nft__image"></IonImg>
      <p className="nft__sign">※クリエイティブなデザイン背景</p>
    </IonCard>
  );
};
export { NftHeader };
