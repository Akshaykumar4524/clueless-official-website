import React from 'react';
import Image from 'next/image';
import GSSOC from '../../../../public/Gssoc.png';
import MLH from '../../../../public/MLH.png';
import LFX from '../../../../public/LFX.png';

function PcOpenSource() {
  return (
    <>
      <div className="bg-black flex h-[600px] box-border">
        <div className="p-3 w-1/3 h-[20rem] m-[5rem] space-y-10">
          <h1 className="leading-[3rem] text-[40px]">
            <span className="font-bold  text-[#7EE787]">
              Learn about some biggest
            </span>{' '}
            <span className="text-white">Open-source Programs</span>
          </h1>
          <button className="bg-[#7EE787] px-[3rem] py-[10px]  rounded-md">
            <a>Explore</a>
          </button>
        </div>
        <div className="m-6  h-[600px] text-[30px] relative">
          <div className="absolute z-7">
            <div className="bg-[#282E36] rounded-[4rem] h-[200px] space-y-6  w-[40rem] border border-white bg-blend-darken">
              <div className="flex mx-4 my-1 justify-between">
                <h3 className="ml-4 text-white h-[4rem] w-[16rem] my-2">
                  LFX Mentorship
                </h3>
                <Image
                  src={LFX}
                  alt="Picture of the LFX"
                  height={60}
                  width={160}
                  className="mr-[1rem]"
                />
              </div>
              <div className="space-y-3 mx-4">
                <div className="h-1 max-w-[300px] bg-white mx-5"></div>
                <div className="h-1 max-w-[200px] bg-white mx-5"></div>
                <div className="h-1 max-w-[270px] bg-white mx-5"></div>
                <div className="h-1 max-w-[300px] bg-white mx-5"></div>
              </div>
            </div>
          </div>
          <div className="absolute -left-10 my-[6rem] z-8">
            <div className="bg-[#272D36] rounded-[4rem] h-[200px] space-y-6 right-15 shadow-green-900 w-[40rem] border border-white mr-4">
              <div className="flex mx-4 my-1 justify-between">
                <h3 className="ml-4 text-white h-[4rem] w-[16rem] my-2 mx-4">
                  MLH Fellowship
                </h3>
                <Image
                  src={MLH}
                  alt="MLH"
                  className="mr-[2.5rem] mt-[1rem]"
                  height={25}
                  width={120}
                />
              </div>
              <div className="space-y-3 mx-4">
                <div className="h-1 max-w-[300px] bg-white mx-5"></div>
                <div className="h-1 max-w-[200px] bg-white mx-5"></div>
                <div className="h-1 max-w-[270px] bg-white mx-5"></div>
                <div className="h-1 max-w-[300px] bg-white mx-5"></div>
              </div>
            </div>
          </div>
          <div className="absolute -left-20 my-[12rem] z-10">
            <div className="bg-[#282E36F7] rounded-[4rem] h-[200px] space-y-6 right-20 shadow-green-900 w-[40rem] border border-white mr-4">
              <div className="flex mx-4 justify-between">
                <h3 className="ml-4 text-white h-[4rem] w-[45rem] my-1">
                  Google Summer Of Code
                </h3>
                <Image
                  src={GSSOC}
                  alt="GSSOC"
                  className="h-[5rem] left-[10rem]"
                />
              </div>
              <div className="space-y-3 mx-4">
                <div className="h-1 max-w-[380px] bg-white opacity-30 mx-5"></div>
                <div className="h-1 max-w-[290px] bg-white mx-5"></div>
                <div className="h-1 max-w-[330px] bg-white mx-5"></div>
                <div className="h-1 max-w-[380px] bg-white mx-5"></div>
              </div>
            </div>
          </div>
          <div className="absolute -left-20 top-15 w-[30rem] h-[20rem] bg-[#43ff64d9] rounded-full blur-[140px] opacity-40 z-5"></div>
        </div>
      </div>
    </>
  );
}

export default PcOpenSource;
