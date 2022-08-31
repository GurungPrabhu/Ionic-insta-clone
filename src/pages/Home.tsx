import { IonContent, IonPage } from "@ionic/react";
import { Header } from "../components";
import { NftHeader } from "../components/nft-owner";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <NftHeader />
      </IonContent>
    </IonPage>
  );
};

export default Home;
