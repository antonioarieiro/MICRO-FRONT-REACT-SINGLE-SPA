import React from 'react';

export default function CurrentMovie(props) {
  return (
    <>
      <div className='flex text-white flex-col w-[80%] justify-center mx-auto mt-10 h-full'>
        <div>
          <video width={'80%'} height={'100%'} className="flex justify-center mx-auto mt-2 mb-2" controls>
            <source
              src="https://bafybeidcug55vpjjvqigesns635mern67i2ymrv3so33l2xvhrgjdyv2oa.ipfs.w3s.link/sadd%20asd%20asa.mp4"
              type="video/webm">
            </source>
          </video>
        </div>
      </div>
    </>
  );
}
