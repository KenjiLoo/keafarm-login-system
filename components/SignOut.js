import { useMoralis } from "react-moralis";
import signOutStyle from "../styles/SignOut.module.css";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export const SignOut = () => {
  const { logout, Moralis, user } = useMoralis();
  const [balance, setBalance] = useState(0);
  const fetchBalance = async () => {
    try {
      const options = { chain: Moralis.Chains.POLYGON_MUMBAI };
      const balance = await Moralis.Web3API.account.getNativeBalance(options);
      setBalance(balance.balance / 10 ** 18);
    } catch {}
  };
  useEffect(() => {
    fetchBalance();
  }, []);

  const handleTransfer = async () => {
    try {
      await Moralis.transfer({
        amount: Moralis.Units.Polygon("0.1"),
        receiver: "0xbDa9846D029C211cca737c51085233Ced1F8297D",
        type: "native",
      }).then((e) => {
        alert("sucesfully transfered");
      });
      await fetchBalance();
    } catch {
      console.log("Unable to make transaction");
      window.alert("Unable to make transaction")
    }
  };

  return (
    <div className={signOutStyle.signOutCard}>
      <h4>Welcome To Keafarm's Wallet</h4>
      <button className={signOutStyle.refresh} onClick={fetchBalance}>
        Refresh
      </button>
      <p className={signOutStyle.subHeader}>Details: </p>
      <p className={signOutStyle.subHeader}>You are sending to 0xbDa9846D029C211cca737c51085233Ced1F8297D</p>

      <div className={signOutStyle.detailsDiv}>
        <div>
          <h5>Account:</h5>
          <p>{user.attributes.accounts}</p>
        </div>
        <div>
          <h5>Balance (MATIC)</h5>
          <p>{balance} </p>
        </div>
      </div>

      <div className={signOutStyle.fotter}>
        <button className={styles.loginButton} onClick={handleTransfer}>
          Test Transfer
        </button>
        <button className={styles.loginButton} onClick={logout}>
          Sign Out
        </button>
      </div>
    </div>
  );
};