import React from "react";
import mwallet from "../mwallet.png";
import { Button } from "antd";

function Home() {

  return (
    <>
      <div className="content">
        <img src={mwallet} alt="logo" className="frontPageLogo" />
        <h2>Hey There 🦅</h2>
        <h4 className="h4">Welcome to our Web3 Wallet 🦅</h4>
        <Button
          className="frontPageButton"
          type="primary">
          Create a Wallet
        </Button>
        <Button
          className="frontPageButton"
          type="default">
          Sign In with Seed Phrase
        </Button>
        <p className="frontPageBottom">
          Buraya kendi linkimizi koyabiliriz: {" "}
          <a href="https://moralismoney.com/" target="_blank" rel="noreferrer">
            money.moralis.io
          </a>
        </p>
      </div>
    </>
  );
}

export default Home;
