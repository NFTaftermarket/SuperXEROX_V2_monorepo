import React, { useState, useEffect } from 'react';
import './App.css';
import { SuperfluidToken, SuperXEROX, ethers, } from 'superxerox-sdk'
import { ConnectComponent } from '@nftaftermarket/superxerox2'
import '@nftaftermarket/superxerox2/dist/index.css'
declare let window: any;

function App() {
  if (!window) {
    alert('no window, not support node.js, command line')
  } else {
    console.log("window.ethereum -> ", window.ethereum)
  }
  const myAccount = '0x609683612D80A091C69747a76ec6efE284a7cf46' 
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  console.log("provider ->", provider)
  const sx = new SuperXEROX(provider)

  const fluidToken = new SuperfluidToken(provider);
  try {
    fluidToken.init().then((sf) => {
      console.log('sf ', sf.tokens.fDAIx.address);
      fluidToken.balanceOf(myAccount).then((x: string) => {
      //  document.body.textContent = 'COPY balance = ' + x;
      });
      /*
      fluidToken.sendXtoken(myAccount, 100).then((x: any) => {
        console.log('send COPY token ', x);
      });
      */
      
    });
  } catch (error) {
    throw new Error(error);
  }

  const [version, setVersion] = useState(sx.vers())
  try {
    sx.getNetFlow().then((x: string) => {
      setVersion('netflow = ' + x)
    });
  } catch (error) {
    throw new Error(error);
  }
  useEffect(() => {
    const timer = window.setInterval(() => {
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ConnectComponent text=" 😄" />
        <h1>{version}</h1>
      </header>
    </div>
  );
}

export default App;
