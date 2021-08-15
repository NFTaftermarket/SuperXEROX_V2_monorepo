import React, { useState, useEffect } from "react";
import styles from './styles.module.css'
import { getCopyTokenBalance } from './utils'

interface Props {
  text: string
}

export const CopyToken = ({ text }: Props) => {
  const [copyTokenBalance, setCopyTokenBalance] = useState('🦄');

  const updateNFT = async () => {
    await getCopyTokenBalance('0x9E4C996EFD1Adf643467d1a1EA51333C72a25453').then((balance) => {
      setCopyTokenBalance(balance)
    }
    )
  }

  useEffect(() => {
    updateNFT()
    const timer = window.setInterval(() => {
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div>
      <div className={styles.test}>
        {text}
        <p>
          Copy Token Balance: {copyTokenBalance}
        </p>
      </div>
    </div>
  )
}
