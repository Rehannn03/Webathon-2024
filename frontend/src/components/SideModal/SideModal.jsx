import React from 'react'
import Sidebar from './Sidebar'
function SideModal() {
  return (
    <aside className="hidden col-span-1 md:block w-full inset-0 my-4 ml-4 h-[calc(100vh - 32px)] rounded-xl bg-primary text-white">
      <div className="m-4 relative h-5/6 pt-4">
        <Sidebar /> 
      </div>
    </aside>
  );
}

export default SideModal