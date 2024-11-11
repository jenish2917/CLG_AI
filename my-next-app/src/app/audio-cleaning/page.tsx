// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-white font-sans text-gray-800 min-h-screen">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Creator Studio</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold mb-4">Free Audio Tools Online</h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            Master Your Audio Journey! Dive deep into the intricacies of sound
            with our curated suite of tools. Unveil the full potential of your
            audio with our cutting-edge suite. From subtle tweaks to
            transformative adjustments, embark on an auditory journey like no
            other. Discover the magic within each note.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-3 bg-gray-300 rounded-full text-lg font-semibold text-gray-800 hover:bg-gray-400 focus:outline-none">
            UPLOAD AUDIO
          </button>
        </div>
      </main>
    </div>
  );
}
