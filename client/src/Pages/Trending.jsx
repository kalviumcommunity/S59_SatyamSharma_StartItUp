import React, { useState, useEffect, useMemo } from 'react';

function Trending() {
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [showScrollMessage, setShowScrollMessage] = useState(false);

  useEffect(() => {
    generateRandomColors();
  }, []);

  const getRandomDarkColor = useMemo(() => {
    return () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
      }
      return color;
    };
  }, []);

  const generateRandomColors = () => {
    const randomColor1 = getRandomDarkColor();
    const randomColor2 = getRandomDarkColor();
    setColor1(randomColor1);
    setColor2(randomColor2);
  };

  return (
    <div>
      <div className="relative">
        <button onClick={generateRandomColors} className='fixed z-50  xl:mt-24 mt-10 bg-black text-white p-1 font-itim lg:text-sm rounded-lg m-2 text-xs'>Change Colour</button>
        <div
          className="sticky top-0 h-screen flex flex-col items-center justify-center"
          style={{ background: `linear-gradient(to bottom, ${color1}, ${color2})` }}
        >
          <div className='p-1 flex flex-col justify-center items-center sm:w-2/6 w-full pt-10 sm:pt-0'>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-r to-slate-100 from-sky-300 text-6xl pt-8 p-2 lg:text-7xl xl:text-8xl font-itim text-center min-[400px]:text-7xl  sm:text-6xl '>
                Welcome to Most Trending Content
            </h1>
            <div className="relative flex justify-center items-start" onMouseEnter={() => setShowScrollMessage(true)} onMouseLeave={() => setShowScrollMessage(false)}>
              <div className={`absolute  p-1 z-50 lg:w-48 w-40 lg:text-base text-sm text-center bg-black text-white font-itim rounded-xl ${showScrollMessage ? 'block' : 'hidden'}`}>
                Scroll Down To See More
              </div> 
              <img src="https://cdn.geekboots.com/geek/scroll-down-arrow-animation-screenshot-1663661146798.gif" className="lg:w-16 w-12 rounded-3xl" alt="" />
            </div>
          </div>
        </div>


        <div
          className="sticky top-0 h-screen flex flex-col items-center justify-center text-white"
          style={{ background: `linear-gradient(to bottom, ${color2}, ${color1})` }}
        >
          <div className='w-full h-full p-3 flex justify-around items-center'>
            <div className='lg:w-1/2 lg:m-5 m-1 w-full'>
              <h2 className="lg:text-6xl text-4xl  font-bold">Bella Beta</h2>
            <div>
          <p className="mt-2 text-xl">A perfume brand</p>

          <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum exercitationem tempora quas neque voluptatem fugiat, commodi dolor porro minima voluptatibus, voluptas quo aliquam ducimus reiciendis totam obcaecati adipisci id sit consequuntur optio expedita deleniti repellendus in. Inventore consectetur deserunt deleniti nisi ex, ullam neque? Eaque atque quo porro odio?</p>
          
          </div>
          </div>

          <div className='flex flex-col justify-center items-center'>
          <img src="https://cdn.geekboots.com/geek/scroll-down-arrow-animation-screenshot-1663661146798.gif" className="lg:w-72 w-52 rounded-3xl" alt="" />
          <div className='bg-black p-1 mt-10 rounded-md'>Visit Site</div>
          </div>

          </div>
        </div>
        <div
          className="sticky top-0 h-screen flex flex-col items-center justify-center text-white"
          style={{ background: `linear-gradient(to bottom, ${color2}, ${color1})` }}
        >
          <div className='w-full h-full p-3 flex justify-around items-center'>
            <div className='lg:w-1/2 lg:m-5 m-1 w-full'>
              <h2 className="lg:text-6xl text-4xl  font-bold">Bella Beta</h2>
            <div>
          <p className="mt-2 text-xl">A perfume brand</p>

          <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum exercitationem tempora quas neque voluptatem fugiat, commodi dolor porro minima voluptatibus, voluptas quo aliquam ducimus reiciendis totam obcaecati adipisci id sit consequuntur optio expedita deleniti repellendus in. Inventore consectetur deserunt deleniti nisi ex, ullam neque? Eaque atque quo porro odio?</p>
          
          </div>
          </div>

          <div className='flex flex-col justify-center items-center'>
          <img src="https://cdn.geekboots.com/geek/scroll-down-arrow-animation-screenshot-1663661146798.gif" className="lg:w-72 w-52 rounded-3xl" alt="" />
          <div className='bg-black p-1 mt-10 rounded-md'>Visit Site</div>
          </div>

          </div>
        </div>


      </div>
    </div>
  );
}

export default Trending;
