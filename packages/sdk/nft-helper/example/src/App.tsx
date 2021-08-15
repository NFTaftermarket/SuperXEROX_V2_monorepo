import React from 'react'
import { CryptoKittyOwnerById, CopyToken } from 'nft-helper'
import 'nft-helper/dist/index.css'
import { ExampleComponent } from 'ether-react'
import 'ether-react/dist/index.css'

const App = () => {
  return (
    <>
      <CryptoKittyOwnerById text='v0.0.1 (🧚‍♀️)' />
      <ExampleComponent text='v0.0.1 🧖‍♀️' />
      <CopyToken text='>>>> 🚀🔭🛰📡🌈   get tokens balance from Covalent <<<<' />
    </>
  )
}

export default App
