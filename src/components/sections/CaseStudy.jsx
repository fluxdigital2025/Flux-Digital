import { MoveRight, Palette } from 'lucide-react';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

 export const CaseStudy = () => {
  // Case study data
  const caseStudies = [
    {
      id: 1,
      
      title: 'Power Energy HVAC',
      description: 'We developed a comprehensive digital solution for Caribou Coffee\'s Kuwait operations, enhancing customer engagement and streamlining operations.',
      videoUrl: 'https://videos.pexels.com/video-files/18069234/18069234-uhd_1440_1440_24fps.mp4',
      thumbnail: 'https://res.cloudinary.com/dkbusg4bq/image/upload/v1753788701/adhunik_11zon_shrb78.webp',
      client: 'Adhunik Powertech Private Limited',
     
    },
    {
      id: 2,
       
      title: 'Interior Design ',
      description: 'Our solution for LuLu Hypermarket revolutionized their digital shopping experience with intelligent search and one-click purchasing.',
    videoUrl: 'https://videos.pexels.com/video-files/18069234/18069234-uhd_1440_1440_24fps.mp4',
      thumbnail: 'https://res.cloudinary.com/dkbusg4bq/image/upload/v1753788701/decodive_11zon_o02wag.webp',
      client: 'Adhunik DecoDive',
     
    },
    {
      id: 3,
     
      title: 'Food',
      description: 'We transformed Middlesex University\'s digital presence with a visually stunning, user-friendly platform that reflects their academic excellence.',
    videoUrl: 'https://videos.pexels.com/video-files/18069234/18069234-uhd_1440_1440_24fps.mp4',
     thumbnail: 'https://res.cloudinary.com/dkbusg4bq/image/upload/v1753788701/blackbites_11zon_gxi5nn.webp',
      client: 'BlackBites',
    
    }
  ];

  // Video component
  const VideoPlayer = ({ videoRef, videoUrl, isVisible }) => {
    return (
      <video
        ref={videoRef}
        src={videoUrl}
        className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
          isVisible ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
        loop
        muted
        autoPlay
        playsInline
      />
    );
  };

  // Case study card component
  const CaseStudyCard = ({ study }) => {
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <div className="rounded-xl overflow-hidden transition-all duration-300   bg-white">
        {/* Media container */}
        <div 
          className="relative   h-[28vh]   cursor-pointer overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Thumbnail image */}
          <img
            src={study.thumbnail}
            alt={study.title}
            className={`w-full h-full object-contain absolute inset-0 transition-opacity duration-300 ${
              isHovered ? 'opacity-0 z-0' : 'opacity-100 z-10'
            }`}
          />
          
          {/* Video player */}
          <VideoPlayer 
            videoRef={videoRef}
            videoUrl={study.videoUrl}
            isVisible={isHovered}
          />
          
          {/* Play button overlay */}
          {!isHovered && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
             
            </div>
          )}
          
          {/* Category badge */}
          <div className="absolute top-4 left-4 z-30">
      
          </div>
        </div>

       
        <div className="p-6 text-center md:text-left  bg-gray-50">
          <h3 className="text-xl mb-2 text-gray-900">{study.title}</h3>
          <p className="text-gray-500 text-sm mb-4">{study.description}</p>
          
          <div className="mb-4">
        
            <p className="text-gray-800">{study.client}</p>
          </div>
          
          {study.results && (
            <div>
              <h4 className="text-sm font-semibold text-gray-500 mb-1">Results</h4>
              <ul className="list-disc list-inside text-gray-800">
                {study.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>

      
    );
  };

  return (
    <section className="py-16    relative z-1 bg-transparent">
      <div className="container mx-auto px-4">
        <div className=" py-7 text-center md:text-left   mb-12 flex flex-col md:flex-row  justify-center items-start">
          <h2 className="text-3xl md:text-5xl   end-full font-sans font-thin mb-4 text-gray-900">
            Our Impactful Case Studies
          </h2>
           <p className=" text-sm md:text-lg   text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped industry leaders transform their digital presence and achieve remarkable results.
          </p>
        </div>
        
        <div className=" pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}

         
        </div>

         <div className=" w-full relative  text-center">
            <Link href="/services/web-development" className="relative px-6 py-3 font-bold   group">
    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-gradient-to-r from-cyan-600 to-teal-500  group-hover:translate-x-0 group-hover:translate-y-0"></span>
    <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
    <span className="relative font-medium font-sans p-5">View All Works  
</span>

</Link>

          </div>
      </div>
    </section>
  );
};


 