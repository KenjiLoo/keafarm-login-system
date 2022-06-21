import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider serverUrl="https://ddyy8tonrywq.usemoralis.com:2053/server" appId="PzkNeV9cK7IxAi7SBeTO5LLq8w43CssElbPLLVoe">
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;