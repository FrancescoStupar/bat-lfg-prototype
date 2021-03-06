import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { ethers } from "ethers";
import { ApolloClient, ApolloProvider, InMemoryCache, useQuery, gql } from '@apollo/client'
import Hero from "../components/Hero";




const QUERY_PROFILE = gql`
  	query($request: ProfileQueryRequest!) {
    profiles(request: $request) {
      items {
        id
        name
        bio
        location
        website
        twitterUrl
		handle
		stats {
			totalFollowers
			totalFollowing
			totalPosts
			totalComments
			totalMirrors
			totalPublications
			totalCollects
		  }
		  picture {
			... on MediaSet {
			  original {
				url
			  }
			}
		  }
  }
  }
  }
`;


const Home = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  //const [lens, setLens] = useState(false);
  const toggle = () => { 
  setIsOpen(!isOpen);
  };

  useEffect(()=>{
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)
  
    return() => {
      window.removeEventListener('resize', hideMenu)
    }
  })


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

  const request = {"ownedBy" : ["0x3A5bd1E37b099aE3386D13947b6a90d97675e5e3"]}
  
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])
  
  return (
    <ApolloProvider client={client}>
  <div className="h-screen bg-gradient-to-r from-violet-800 to-black flex flex-col justify-center items-center">
    <h1 className="lg:text-8xl md:text:8xl sm:text-5xl text-5xl text-white mb-14 animate-bounce"> 
    ???? FLY TO WEB3 ????
    </h1>
    {!currentAccount && (
    <button onClick={connectWallet} className='text-violet-700  font-medium py-6 px-10 bg-white rounded-full text-3xl hover:bg-black transition duration-300 ease-in-out flex items-center'>
    ????Connect your wallet????
    </button>
        )}
    {currentAccount && (
    <Hero request={request}/>
        )}
  </div>
  </ApolloProvider>
  )
};

export default Home;
