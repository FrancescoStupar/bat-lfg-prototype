import React from 'react';

const Lens = () => {

  return (
    <div className="h-screen justify-center">
      <img
        src="https://files.readme.io/c2459de-illustration_grow.svg"
        className="mx-auto mt-6"
        alt="lenslogo"
      />
      <div className="flex justify-center">
        <div className=" flex justify-center bg-clip-text bg-gradient-to-r from-black-300 to-black-500 max-w-lg my-6">
          <p>
          <a href="https://lens.dev/" className="text-violet-700 underline"> Lens Protocol</a> seeks to solve major issues in existing social media
            networks. Namely, Web2 networks all read from their unique,
            centralized database. There is no portability. <br/><br/>Your profile,
            friends, and content are locked to a specific network and owned by
            the network operator. This causes each network to fight a zero-sum
            game for your attention.<br/><br/>
            Lens Protocol corrects this by being a <b>user-owned</b>, open social graph
            that any application can plug into. Since users own their data, they
            can bring it to any application built on top of Lens Protocol. As
            the true owners of their content, creators no longer need to worry
            about losing their content, audience, and livelihood based on the
            whims of an individual platform's algorithms and policies.<br/><br/>
            Additionally, each application using Lens Protocol benefits the
            whole ecosystem,  <b>turning the zero-sum game into a collaborative one.</b><br/><br/>
            Developers can design meaningful social experiences without needing
            to turn to feedback mechanisms to lock in a user's attention.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lens;
