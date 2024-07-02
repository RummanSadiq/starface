import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from './Card';
import Button from './ui/Button';
import { FaStar, FaShareAlt } from 'react-icons/fa';

const imageUrls = [
  { url: '/slider_img2.jpg', caption: 'Third slide label', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
];

const MainContent = () => {

  interface CardData {
    icon: React.ReactNode;
    title: string;
    content: string;
  }

  const cardData: CardData[] = [
    {
      icon: <FaStar className="text-gray-500" />,
      title: 'Meine Favoriten',
      content: 'Unterlizenz 1NDXY INBXB L3ZZM FAL6S GW Test LGW Test Unterlizenz 1NDXY INBXB L3ZZM FAL6S GW Test LGW Test',
    },
    {
      icon: <FaShareAlt className="text-gray-500" />,
      title: 'Getelite Elemente',
      content: 'Unterlizenz 1NDXY INBXB L3ZZM FAL6S GW Test LGW Test Unterlizenz 1NDXY INBXB L3ZZM FAL6S GW Test LGW Test',
    }
  ];

  return (
    <main className="px-4">
      <div className="mt-2 rounded">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={3000}
          showStatus={false}
        >
          {imageUrls.map((item, index) => (
            <div key={index} className="relative h-56">
              <img src={item.url} alt={`Slide ${index + 1}`} className="rounded-xl shadow-sm w-full h-full object-cover" />
              <div className="rounded-xl shadow-sm absolute inset-0 flex items-center bg-black bg-opacity-50 text-white p-4">
                <div className="text-left pl-8">
                  <h5 className="text-3xl font-bold">{item.caption}</h5>
                  <p className="mt-2 text-gray-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="mt-6">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="h-9 flex items-center justify-left rounded-lg text-gray-700 space-x-4"
          tabIndex={-1}
          style={{ outline: "none" }}
        >
          {['Dashboard', 'Produkte', 'Dokumente', 'Projekte'].map(tab => (
            tab === 'Dashboard' ? (
              <Button
                key={tab}
                type="button"
                title={tab}
                styles="inline-flex font-medium items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2"
              >
                {tab}
              </Button>
            ) : (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={tab === 'Dashboard'}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold px-4 py-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 ${
                  tab === 'Dashboard' ? 'bg-gradient-to-r from-orange-500 to-yellow-500 px-4 text-white' : 'hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            )
          ))}
        </div>
      </div>

      <div className="mx-auto pt-4 mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardData.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title} content={card.content} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
