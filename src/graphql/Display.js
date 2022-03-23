import React from 'react'
import { useQuery, gql } from '@apollo/client'

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
  }
  }
  }
`;

const Display = ({ request }) => {
	const { loading, error, data } = useQuery(QUERY_PROFILE, {
		variables: { request },
	  });
	

	if (loading){
		return <div className="flex flex-row justify-center my-72 "><h1 className="lg:text-8xl md:text:8xl sm:text-5xl text-5xl animate-spin">🦇</h1></div>
	}

	if (data){
		console.log(data)
	}

	if(error){
		console.log(error)
		return <div className="flex flex-row justify-center my-72 "><h1 className="lg:text-5xl md:text:5xl sm:text-5xl text-5xl">Alfred is useless and cannot find your data :(</h1></div>
	}

	return (
		<div>
			{data.profiles.items[0].name}
		</div>
	)
}

export default Display