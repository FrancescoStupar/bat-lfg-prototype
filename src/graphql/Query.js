import { ApolloClient, ApolloProvider, InMemoryCache, useQuery, gql } from '@apollo/client'
import React, { useEffect, useState } from "react";
import Display from './Display';
import { ethers } from "ethers";

const Query = () => {

	const [currentAccount, setCurrentAccount] = useState("");
  
  
	const checkIfWalletIsConnected = async () => {
	  try {
		const { ethereum } = window;
  
		if (!ethereum) {
		  console.log("Make sure you have metamask!");
		  return;
		} else {
		  console.log("We have the ethereum object", ethereum);
		}
  
		const accounts = await ethereum.request({ method: "eth_accounts" });
  
		if (accounts.length !== 0) {
		  const account = accounts[0];
		  console.log("Found an authorized account:", account);
		  setCurrentAccount(account);
		} else {
		  console.log("No authorized account found")
		}
	  } catch (error) {
		console.log(error);
	  }
	}
  
	const connectWallet = async () => {
	  try {
		const { ethereum } = window;
  
		if (!ethereum) {
		  alert("Get MetaMask!");
		  return;
		}
  
		const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  
		console.log("Connected", accounts[0]);
		setCurrentAccount(accounts[0]);
	  } catch (error) {
		console.log(error)
	  }
	}





const APIURL = 'https://api-mumbai.lens.dev/';

const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
})

// CHANGE BELOW TO {"profileIds" : [currentAccount]}

const request = {"ownedBy" : [0x3A5bd1E37b099aE3386D13947b6a90d97675e5e3]}


useEffect(() => {
    checkIfWalletIsConnected();
  }, [])


return(
	<ApolloProvider client={client}>
	<div className="h-screen">
	<div>
	<Display request = {request}/>
	</div>
	</div>
	</ApolloProvider>
)
}

export default Query;