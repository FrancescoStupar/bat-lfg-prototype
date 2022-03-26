import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { ethers } from "ethers";
import { ApolloClient, ApolloProvider, InMemoryCache, useQuery, gql } from '@apollo/client'


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


const Hero = ({ request }) => {
 const [lens, setLens] = useState(false);
 const { loading, error, data } = useQuery(QUERY_PROFILE, {
  variables: { request },
  });
    
    
  useEffect(() => {
    if(data && data.profiles.items.length != 0) {
      setLens(true);
    }
  }, [data])


    if (loading){
      return <div className="flex flex-row justify-center my-72 "><h1 className="lg:text-8xl md:text:8xl sm:text-5xl text-5xl animate-spin">🦇</h1></div>
    }

    if(error){
      console.log(error)
      return <div className="flex flex-row justify-center my-72 "><h1 className="lg:text-5xl md:text:5xl sm:text-5xl text-5xl">Alfred is useless and cannot find your data :(</h1></div>
    }

    console.log("e8i")


   
  return (
    <div>
    
    {!lens && (
    <button className='text-violet-600 font-medium py-6 px-10 bg-white rounded-full text-3xl hover:bg-black transition duration-300 ease-in-out flex items-center animate-bounce'>
    🦇 Connected! Create your profile 🦇
    </button>
        )}
    {lens && (
    <Link to='/profile' className='text-violet-600 font-medium py-6 px-10 bg-white rounded-full text-3xl hover:bg-black transition duration-300 ease-in-out flex items-center animate-bounce'>
    🦇 Go to your profile! 🦇
    </Link>
        )}
  </div>
  )
};

export default Hero;
