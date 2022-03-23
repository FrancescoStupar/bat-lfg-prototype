import { gql } from "@apollo/client"
import { ApolloClient, InMemoryCache } from '@apollo/client'

const APIURL = 'https://api-mumbai.lens.dev/';

export const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache()
});

export const profileQuery = `
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

export interface ProfilesRequest {
  profileIds?: string[];
  ownedBy?: string;
  handles?: string[];
  whoMirroredPublicationId?: string;
}

export const getProfilesRequest = (request: ProfilesRequest) => {
  return client.query({
    query: gql(profileQuery),
    variables: {
      request,
    },
  });
};

export const profiles = async (ethAddress: string, request?: ProfilesRequest) => {
  const address = ethAddress;
  console.log('profiles: address', address);

  if (!request) {
    request = { ownedBy: address };
  }

  const profilesFromProfileIds = await getProfilesRequest(request);
  console.log(profilesFromProfileIds.data);
  

  return profilesFromProfileIds.data;
};