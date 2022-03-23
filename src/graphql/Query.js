import { ApolloClient, ApolloProvider, InMemoryCache, useQuery, gql } from '@apollo/client'
import React from 'react'
import Display from './Display';

const Query = () => {

const APIURL = 'https://api-mumbai.lens.dev/';

const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
})

const request = {"profileIds" : ["0x13"]}

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