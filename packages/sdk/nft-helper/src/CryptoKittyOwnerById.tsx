import React, { useState, useEffect } from "react";
import styles from './styles.module.css'

interface Props {
  text: string
}

export const CryptoKittyOwnerById = ({ text }: Props) => {
  const DEFAULT_KITTY_ID = '31459'
  const KITTY_API_URL = 'https://api.cryptokitties.co/kitties/' // example: https://api.cryptokitties.co/kitties/31459
  const [id, setId] = useState(DEFAULT_KITTY_ID);
  const [kittyImage, setKittyImage] = useState('🦄');
  const [kittyOwner, setKittyOwner] = useState('🦄');

  useEffect(() => {
    updateKittyInfo(id)
    const timer = window.setInterval(() => {
    }, 5000);
    return () => window.clearInterval(timer);
  }, [id]);

  const updateKittyInfo = async (id: string) => {
    if (id !== '') {
      const url = KITTY_API_URL + id
      console.log(url)
      const response = await fetch(url);
      const json = await response.json()
      setKittyImage(json.image_url_cdn)
      setKittyOwner(json.owner.address)
      console.log('image url: ', json.image_url_cdn)
      // it cound be a svg or image file
      console.log('kitty owner: ', json.owner.address)
    }
  };

  return (
    <div>
      <div className={styles.test}>
        <div>
          <div className={styles.copies}>
            <img src={kittyImage} width="300" height="300" />
          </div>
        </div>
        {text}
        <p>
          Current cryptoKitty id: {id}
        </p>
        Owner: {kittyOwner}
        <input type="text" onChange={(e) => {
          setId(e.target.value)
          console.log(e.target.value)
          updateKittyInfo(e.target.value)
          /* 用 e.target.value 去 setState */
        }} />
      </div>
    </div>
  )
}
