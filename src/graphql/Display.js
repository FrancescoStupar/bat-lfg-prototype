import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Bat from '../images/bat.jpeg'

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
		<>
		   <main className="profile-page">
			<section className="relative block" style={{ height: "500px" }}>
			  <div
				className="absolute top-0 w-full h-full bg-center bg-cover"
				style={{
				  backgroundImage: `url(${Bat})`
				}}
			  >
				<span
				  id="blackOverlay"
				  className="w-full h-full absolute opacity-50 bg-black"
				></span>
			  </div>
			  <div
				className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
				style={{ height: "70px" }}
			  >
				<svg
				  className="absolute bottom-0 overflow-hidden"
				  xmlns="http://www.w3.org/2000/svg"
				  preserveAspectRatio="none"
				  version="1.1"
				  viewBox="0 0 2560 100"
				  x="0"
				  y="0"
				>
				  <polygon
					className="text-gray-300 fill-current"
					points="2560 0 2560 100 0 100"
				  ></polygon>
				</svg>
			  </div>
			</section>
			<section className="relative py-16 bg-gray-300">
			  <div className="container mx-auto px-4">
				<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
				  <div className="px-6">
					<div className="flex flex-wrap justify-center">
					  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
					  <div className="relative">
						  <img
							alt="..."
							src="https://picsum.photos/800/800"
							className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
							style={{ maxWidth: "150px" }}
						  />
						</div>
					  </div>
					  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
						<div className="py-6 px-3 mt-32 sm:mt-0">
						  <button
							className="bg-violet-500 active:bg-violet-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
							type="button"
							style={{ transition: "all .15s ease" }}
						  >
							Follow
						  </button>
						</div>
					  </div>
					  <div className="w-full lg:w-4/12 px-4 lg:order-1">
						<div className="flex justify-center py-4 lg:pt-4 pt-8">
						  <div className="mr-4 p-3 text-center">
							<span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
							{data.profiles.items[0].stats.totalFollowers}
							</span>
							<span className="text-sm text-gray-500">Followers</span>
						  </div>
						  <div className="mr-4 p-3 text-center">
							<span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
							{data.profiles.items[0].stats.totalPosts}
							</span>
							<span className="text-sm text-gray-500">Publications</span>
						  </div>
						  <div className="lg:mr-4 p-3 text-center">
							<span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
							{data.profiles.items[0].stats.totalComments}
							</span>
							<span className="text-sm text-gray-500">Comments</span>
						  </div>
						</div>
					  </div>
					</div>
					<div className="text-center mt-12">
					  <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
					  {data.profiles.items[0].name}
					  </h3>
					  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
						<i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
						@{data.profiles.items[0].handle}
					  </div>
					  <div className="mb-2 text-gray-700 mt-10">
						<i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
						📍 {data.profiles.items[0].location}
					  </div>
					  <div className="mb-2 text-gray-700">
						<i className="fas fa-university mr-2 text-lg text-gray-500"></i>
						42 Lisboa
					  </div>
					</div>
					<div className="mt-10 py-10 border-t border-gray-300 text-center">
					  <div className="flex flex-wrap justify-center">
						<div className="w-full lg:w-9/12 px-4">
						  <p className="mb-4 text-lg leading-relaxed text-gray-800">
						  {data.profiles.items[0].bio}
						  </p>
						  <a
							href={data.profiles.items[0].twitterUrl}
							className="font-normal text-violet-500"
							onClick={e => e.preventDefault()}
						  >
							Follow {data.profiles.items[0].name} on Twitter
						  </a>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</section>
		  </main>
		</>
	  );
	};

export default Display