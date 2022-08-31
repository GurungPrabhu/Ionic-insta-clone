import { IonContent, IonPage } from "@ionic/react";
import { Header, TextContent } from "../components";
import { NftCard } from "../components/nft-owner";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <NftCard />
        <TextContent />
      </IonContent>
    </IonPage>
  );
};

export default Home;
