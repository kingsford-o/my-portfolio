import React from 'react'

const About = () => {
  return (
    <div>
    <div className='rounded-2xl'>
    <div className="card lg:card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">My Personality</h2>
    <p>Click on the button below to read more.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Read More</button>
    </div>
  </div>
</div>
    </div>
      <div className='flex flex-row mt-50 items-center '>
        <div className='flex-2'>
        <div className="avatar">
  <div className="w-50 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
        </div>
        <div className='flex-1 h-50'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam excepturi illum praesentium ipsam autem ratione consectetur rerum, similique suscipit explicabo reiciendis natus. Nisi accusantium porro dolores, necessitatibus laborum sequi! Unde voluptatibus voluptatum temporibus asperiores ea ex nostrum est!</p>
        </div>
      </div>
    </div>
  )
}

export default About