import Image from "next/image";
import { useMoralis } from "react-moralis";
import styles from "../styles/Home.module.css";
import Logo from "./images/keafarm.png";
import { useState } from "react";

export default function SignIn() {
  const { authenticate, authError, isAuthenticating, Moralis } = useMoralis();

  const handleCustomLogin = async () => {
    await authenticate({
      provider: "web3Auth",
      clientId: "BPVhi27CVwW6z653UZsfUSSfTcWIiFqOTMXsu0C9PoKo7ASu9q27QZavOewMAt4y4DompaDu64TYluIDLmj2D10",
      chainId: Moralis.Chains.POLYGON_MUMBAI,
      theme: "light",
      appLogo: "Logo",
    });
  };

  return (
    <div className={styles.card}>
      <Image className={styles.img} src={Logo} width={80} height={80} />
      {isAuthenticating && <p className={styles.green}>Authenticating</p>}
      {authError && (
        <p className={styles.error}>{JSON.stringify(authError.message)}</p>
      )}
      <div className={styles.buttonCard}>
        <button className={styles.loginButton} onClick={handleCustomLogin}>
          Login with Web3Auth
        </button>
      </div>
    </div>
  );
}