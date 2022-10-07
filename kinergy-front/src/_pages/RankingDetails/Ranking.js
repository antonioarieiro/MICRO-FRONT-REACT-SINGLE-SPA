import React from 'react';
import { Components } from '../../_components/Components';
export default function Ranking() {
  return (
    <>
      <div className='rankings flex flex-col mb-8' style={{
        height: '100%'
      }}>
        <Components.HeaderRankingDetails />
        <div class="flex w-full">
          <Components.CurrentMovie />
        </div>
        <div className='flex w-[80%] mt-10 justify-around  border items-center mx-auto'>
          <div>
          <Components.RankingDetails />
          </div>
          <div>
            <Components.Votes />
          </div>
        </div>
      </div>
    </>
  );
}
