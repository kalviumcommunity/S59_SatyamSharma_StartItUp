import React, { useState, useEffect } from 'react';

function Trending() {
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [showScrollMessage, setShowScrollMessage] = useState(false);

  useEffect(() => {
    generateRandomColors();
  }, []);

  const generateRandomColors = () => {
    const randomColor1 = getRandomDarkColor();
    const randomColor2 = getRandomDarkColor();
    setColor1(randomColor1);
    setColor2(randomColor2);
  };

  const getRandomDarkColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  };

  return (
    <div>
      <div className="relative">
        <button onClick={generateRandomColors} className='fixed z-50 mt-14 bg-white text-black'>Change Colour</button>
        <div
          className="sticky top-0 h-screen flex flex-col items-center justify-center"
          style={{ background: `linear-gradient(to bottom, ${color1}, ${color2})` }}
        >
          <div className='p-1 flex flex-col justify-center items-center sm:w-2/6 w-full pt-10 sm:pt-0'>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-r to-slate-100 from-sky-300 text-5xl pt-8 p-2 lg:text-7xl xl:text-8xl font-itim text-center min-[400px]:text-7xl  sm:text-6xl '>
                Welcome to Most Trending Content
            </h1>
            <div className="relative" onMouseEnter={() => setShowScrollMessage(true)} onMouseLeave={() => setShowScrollMessage(false)}>
              <div className={`absolute p-1 z-50 bg-black text-white font-itim rounded-xl ${showScrollMessage ? 'block' : 'hidden'}`}>
                Scroll Down to see more
              </div> 
              <img src="https://cdn.geekboots.com/geek/scroll-down-arrow-animation-screenshot-1663661146798.gif" className="w-16 rounded-3xl" alt="" />
            </div>
          </div>
        </div>
        <div
          className="sticky top-0 h-screen flex flex-col items-center justify-center text-white"
          style={{ background: `linear-gradient(to bottom, ${color2}, ${color1})` }}
        >
          <h2 className="text-4xl font-bold">Bella Beta The ferfume band</h2>
          <p className="mt-2">Scroll Down for next slide</p>
        </div>
      </div>
    </div>
  );
}

export default Trending;
