// pages/portfolio.js
import React from 'react';
import Head from 'next/head';

const Portfolio = () => {
  return (
    <div className="px-4 py-6 font-sans">
      <Head>
        <title>RAICHANDS Social Media Feed</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1 className="text-3xl font-bold mb-6">
        <span className="text-pink-500">RAI</span>
        <span className="text-purple-500">CHAN</span>
        <span className="text-blue-500">DS </span>
        <span className="font-roboto-slab">Social Media Feed</span>
      </h1>

      <h3
        className="text-xs font-bold"
        style={{ color: '#555', fontStyle: 'italic', textAlign: 'right' }}
      >
        Scroll right for old posts &rarr;
      </h3>

      <div className="gap-1">
        <div className="mb-4 mt-0">
          <div style={{ height: '480px', width: '100%' }}>
            <iframe
              src="https://widget.taggbox.com/128117"
              style={{ height: '550px', width: '100%', border: 'none' }}
            />
          </div>
        </div>
        <div className="mb-4 mt-0">
          <div style={{ height: '480px', width: '100%' }}>
            <iframe
              src="https://widget.taggbox.com/128128"
              style={{ height: '550px', width: '100%', border: 'none' }}
            />
          </div>
        </div>
        <div className="mb-4 mt-0">
          <div style={{ height: '480px', width: '100%' }}>
            <iframe
              src="https://widget.taggbox.com/128130"
              style={{ height: '550px', width: '100%', border: 'none' }}
            />
          </div>
        </div>
        <div className="mt-0">
          <div style={{ height: '480px', width: '100%' }}>
            <iframe
              src="https://widget.taggbox.com/128129"
              style={{ height: '550px', width: '100%', border: 'none' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
