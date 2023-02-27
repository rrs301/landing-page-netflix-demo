import React from 'react'
import { HiChevronRight,HiChevronLeft } from "react-icons/hi2";
function MovieList() {
    const videoList = [
        {
          id: 1,
          image:
            "https://tilt.goombastomp.com/wp-content/uploads/2021/12/Jungle-Cruise-poster-4538533-819x1024.jpg",
        },
        {
          id: 2,
          image:
            "https://i0.wp.com/movienooz.com/wp-content/uploads/2019/06/Spider-Man-Far-from-Home-Teaser-Poster-2.jpg?ssl=1",
        },
        {
          id: 3,
          image:
            "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
        },
        {
          id: 4,
          image:
            "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_240x360_crop_center.progressive.jpg?v=1573616089",
        },
        {
          id: 5,
          image:
            "https://tilt.goombastomp.com/wp-content/uploads/2021/12/Jungle-Cruise-poster-4538533-819x1024.jpg",
        },
        {
          id: 6,
          image:
            "https://i0.wp.com/movienooz.com/wp-content/uploads/2019/06/Spider-Man-Far-from-Home-Teaser-Poster-2.jpg?ssl=1",
        },
        {
          id: 7,
          image:
            "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
        },
        {
          id: 8,
          image:
            "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_240x360_crop_center.progressive.jpg?v=1573616089",
        },
      ];
  return (
    <div className="mt-10 "> 
    <p className=" px-5 text-white text-[20px] font-bold">New Releases</p>

    <div className="w-full py-5  px-5 overflow-x-scroll 
    scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        {/* <HiChevronLeft className='text-white text-[30px] 
        absolute  z-10 hover:scale-125 cursor-pointer  h-[250px]' /> */}
      {videoList.map((item) => (
        <div className="inline-block m-2 md:m-3" key={item.id}>
          <img
            src={item.image}
            className="
                  w-[130px] h-[200px]
                  transition-all ease-in-out
                  duration-500 rounded-2xl object-cover
                  md:w-[160px] md:h-[240px] 
                  
                  cursor-pointer
                  hover:scale-125
                  "
          />
           
         <div
      class="absolute  inset-x-[15%] z-10 bottom-5 hidden py-5 text-center text-white md:block">
      {/* <h5 class="text-xl">First slide label</h5> */}
      
    </div>
    
        </div>
      ))}
     {/* <HiChevronRight className='text-white text-[30px] right-0 
        absolute  z-10 hover:scale-125 cursor-pointer ' /> */}
      </div>
      
    </div>
  )
}

export default MovieList