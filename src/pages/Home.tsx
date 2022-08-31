import { IonContent, IonPage } from "@ionic/react";
import { Header, TextContent } from "../components";
import { HightLight } from "../components/hightlight";
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
      </IonContent>
    </IonPage>
  );
};

export default Home;
