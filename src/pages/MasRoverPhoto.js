import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import nasalogo from '../assets/nasa-logo.png';
import Footer from '../components/Footer'; 
import Header from '../components/Header';



const apiKey = 'tycCgPBhOWJ9vRtLLfFHnkFYq3gB37Xqw1zdnC73';

const navigation1 = [
  { name: 'Picture Of The Day', href: 'apod' },
  { name: 'Mas Rover Photo', href: 'MasRoverPhoto' },
  { name: 'Epic', href: 'Epic' },

];
const navigation2 = {
  main: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}
const MarsRoverPhotosPage = () => {
  const [roverPhotos, setRoverPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cameraName, setCameraName] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(null);

  useEffect(() => {
    fetchRoverPhotos();
  }, [currentPage, cameraName]);

  const fetchRoverPhotos = async () => {
    try {
      let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${currentPage}&per_page=24&api_key=${apiKey}`;
      if (cameraName) {
        url += `&camera=${cameraName}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setRoverPhotos(data.photos);
    } catch (error) {
      console.error('Error fetching Mars Rover photos:', error);
    }
  };

  const handleCameraChange = (event) => {
    setCameraName(event.target.value);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  return (
    <div className="bg-white min-h-screen">
      <Header navigation1={navigation1} nasalogo={nasalogo} />



      <div className="isolate overflow-hidden pt-32 flex flex-col items-center mb-6 ">
        <h1 className="text-3xl font-semibold mb-4">Mars Rover Photos</h1>
        <div className='mb-6'>
          <label htmlFor="camera" className="mr-2">Filter by Camera:</label>
          <select
            id="camera"
            value={cameraName}
            onChange={handleCameraChange}
            className="px-2 py-1 rounded-lg bg-gray-100 focus:outline-none"
          >
            <option value="">All Cameras</option>
            <option value="FHAZ">Front Hazard Avoidance Camera</option>
            <option value="RHAZ">Rear Hazard Avoidance Camera</option>
            <option value="MAST">Mast Camera</option>
            <option value="CHEMCAM">Chemistry and Camera Complex</option>
            <option value="MAHLI">Mars Hand Lens Imager</option>
            <option value="MARDI">Mars Descent Imager</option>
            <option value="NAVCAM">Navigation Camera</option>
            <option value="PANCAM">Panoramic Camera</option>
            <option value="MINITES">Mini-TES</option>

          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {roverPhotos.map((photo,index) => (
            <div key={photo.id} className="p-4 rounded-lg">
              <img src={photo.img_src} alt='' className="w-64 h-auto rounded-lg mb-2" />
              
                <p>Date - {photo.earth_date}</p>
                <p>Camera Name - {photo.camera.name}</p>
              
              <div className="flex justify-center">
                <button 
                 onClick={() => setShowModal(index)}
                 className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Read More
                </button>
              </div>
              {showModal === index && (
                <Dialog open={true} onClose={() => setShowModal(null)} className="fixed inset-0 flex items-center justify-center bg-opacity-70 backdrop-filter backdrop-blur-lg">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-5" style={{ width: '600px' }}> 
                    <img src={photo.img_src} alt='' className="w-64 h-auto rounded-lg mb-2 mx-auto" /> 
              
                    <div className="space-y-4">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Earth Date : {photo.earth_date}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Camera Name : {photo.camera.name}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                       Rover Landing Date : {photo.rover.landing_date}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Rover Launch Date : {photo.rover.launch_date}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Rover Max Date : {photo.rover.max_date}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Rover Total Photos : {photo.rover.total_photos}
                      </p>
                    </div>
                    <div className="flex items-center justify-end mt-4">
                      <button onClick={() => setShowModal(null)} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Close
                      </button>
                    </div>
                  </div>
                </Dialog>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-4 py-2 mr-2 bg-gray-200 rounded-lg focus:outline-none">Previous Page</button>
          <button onClick={handleNextPage} className="px-4 py-2 bg-gray-200 rounded-lg focus:outline-none">Next Page</button>
        </div>
      </div>

      <Footer navigation={navigation2} />

    </div>
  );
};

export default MarsRoverPhotosPage;