import React from 'react'

function TaskList() {
  return (
    <div id='tasklist' className='flex overflow-x-auto items-center justify-start gap-5 flex-nowrap h-[55%] w-full py-5  mt-10'>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
             <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 >20 Feb 2024</h4>
             </div>
             <h2>Make a youtube video</h2>
             
             

        </div>



 



    </div>
  )
}

export default TaskList