import { IonContent, IonPage } from "@ionic/react";
import { Header, TextContent } from "../components";
import { HightLight } from "../components/hightlight";
import { NftCardCollection } from "../components/nft-card-collection";
import { NftCard } from "../components/nft-owner";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <NftCard />
        <TextContent />
        <HightLight />
        <NftCardCollection />
      </IonContent>
    </IonPage>
  );
};

export default Home;
