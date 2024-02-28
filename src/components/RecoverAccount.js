import React from "react";
import { BulbOutlined } from "@ant-design/icons";
import {Button, Input} from "antd"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ethers } from "ethers";

const {TextArea} = Input;

function RecoverAccount(
  {setWallet, setSeedPhrase}
) {

  return (
    <>
      <div className="content">
        <div className="mnemonic">
            <BulbOutlined style={{fontSize:"20px"}}/>
            <div>
              Type your seed phrase in the field below to recover your wallet (it should 
              include 12 words separated with spaces)
            </div>
          </div>
          <TextArea
          rows={4}
          className="seedPhraseContainer"
          placeholder="Type your seed phrase here..."
          />
      </div>
    </>
  );
}

export default RecoverAccount;
