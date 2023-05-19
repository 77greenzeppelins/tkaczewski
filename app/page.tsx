import React from 'react';
/**Components*/
import LocomotiveTemplate from '@/components/multipagesComponents/LocomotiveTemplate/LocomotiveTemplate';
import Scene3D from '@/components/3D/3D_Scene/Scene3D';

// const sceneWrapperConfig = {
//   position:"fixed",
//   top: 0,
//   left: 0,
//   width:' 100%',
//   height: '100%',
//   overflow: 'hidden'
// }
const sceneWrapperConfig = 'fixed top-0 left-0 w-full h-full overflow-hidden';

/**------------------------------* */
export default function Home() {
  /**JSX**/
  return (
    <LocomotiveTemplate>
      <div data-scroll-section className="w-full h-full min-h-screen">
        <div className={sceneWrapperConfig}>
          <Scene3D />
        </div>
      </div>
    </LocomotiveTemplate>
  );
}

{
  /* <div className="flex gap-3 justify-center items-center  h-[50vh] w-full bg-[#02040c]">
          <p className="select-none text-slate-200">Home</p>
          <p className="select-none text-sky-400">Home</p>
          <p className="select-none text-sky-500">Homeme</p>
          <p className="select-none text-blue-500">Home</p>
          <p className="select-none text-blue-600">Home</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-[#02040c]">
          <p className="select-none text-gray-100">Contact Page</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-gray-800">
          <p className="select-none text-gray-100">3</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-gray-700">
          <p className="select-none text-gray-100">Contact Page</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-gray-600">
          <p className="select-none text-gray-100">5</p>
        </div>
        <div className="flex justify-center items-center  h-[50vh] w-full bg-gray-500">
          <p className="select-none text-gray-100">Contact Page</p>
        </div> */
}
