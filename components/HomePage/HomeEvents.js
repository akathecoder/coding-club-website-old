import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://picsum.photos/id/1018/1000/600/",
    thumbnail:
      "https://picsum.photos/id/1018/250/150/",
  },
  {
    original:
      "https://picsum.photos/id/1015/1000/600/",
    thumbnail:
      "https://picsum.photos/id/1015/250/150/",
  },
  {
    original:
      "https://picsum.photos/id/1019/1000/600/",
    thumbnail:
      "https://picsum.photos/id/1019/250/150/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, iure molestias unde officiis cumque illum quos magnam eligendi debitis quod eum itaque, dolor dicta sequi illo soluta nisi doloremque natus. Iste minima repellendus ea at quae, accusantium, a excepturi optio eveniet harum assumenda doloremque explicabo odit dolorem dicta adipisci repudiandae?",
  },
];

function HomeEvents() {
  return (
    <div className="bg-backgroundColor-main mt-20 pb-20">
      <div className="h1 flex justify-center text-5xl font-normal ">
        Events
      </div>
      <div className="flex justify-center mt-20 rounded-2xl overflow-hidden">
        <ImageGallery
          className="rounded-2xl overflow-hidden"
          items={images}
          showNav={true}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
          slideInterval={2500}
          slideDuration={600}
          showBullets={true}
        />
      </div>
    </div>
  );
}

export default HomeEvents;
