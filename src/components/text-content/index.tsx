import React from "react";
import "./style.css";

const TextContent: React.FC = () => {
  return (
    <div className="text-content">
      <div>NFT Owners とは</div>
      <div className="section-1">
        <p>NFT Owners</p>
        <p>
          とは、応援したいチームのNFT会員権を保有して、ここだけにしかないカタチで応援するもの。
        </p>
      </div>

      <div>
        <h1> 3つの方法で選手を応援！</h1>
        <p>①会員権限定の特典に参加！</p>
        <p>
          オーナーズにしか参加できない限定イベントに参加し、選手を近くで応援！
        </p>
        <p>
          ②投票に参加！ オーナーズしか参加できない投票で、自分の意見を伝えよう！
          オーナーズランクによってはチームの運営に携われる機会も！
        </p>
        <p>③NFTカード売買で応援！</p>
        <p>
          NFTカードを売買することで、その一部をチーム、選手に還元！関わる人全員がWin-Winなマーケット！
        </p>
      </div>
    </div>
  );
};

export { TextContent };
