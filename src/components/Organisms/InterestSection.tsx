import { FaBrain, FaGlobeAmericas, FaGuitar, FaMicrophoneAlt, FaLanguage, FaBook, FaRunning } from 'react-icons/fa';
import { SiRiotgames } from 'react-icons/si';
import { GiPianoKeys } from 'react-icons/gi';
import { FaCameraRetro, FaVideo } from 'react-icons/fa';

export default function InterestSection() {
  return (
    <div className="w-full md:flex-grow p-6 text-gray-500 bg-gray-800 border-r border-gray-700">
      <div className="flex items-center mb-4">
        <p>1</p>
        <p className="text-green-400 ml-4">/**</p>
      </div>
      <div className="">
        <div className="flex items-center mb-4">
          <p>2</p>
          <p className="text-blue-400 ml-4">* About my interest</p>
        </div>
        <div className="flex items-center mb-4">
          <p>3</p>
          <p className="flex items-center gap-3 text-gray-800 text-base px-4 ml-5 rounded-lg bg-gray-100 shadow-sm">
            <FaBrain className="text-purple-500" />
            <span>Mindfulness & mental health</span>
          </p>
        </div>
        <div className="flex items-center mb-4">
          <p>4</p>
          <p className="flex items-center gap-3 text-gray-800 text-base px-4 ml-5 rounded-lg bg-gray-100 shadow-sm">
            <FaGlobeAmericas className="text-blue-500" />
            <span>Traveling & culture exploration</span>
          </p>
        </div>
        <div className="flex items-center mb-4">
          <p>5</p>
          <p className="flex items-center gap-3 text-gray-800 text-base px-4 ml-5 rounded-lg bg-gray-100 shadow-sm">
            <FaLanguage className="text-green-500" />
            <span>Learning languages</span>
          </p>
        </div>
        <div className="flex items-center mb-4">
          <p>6</p>
          <p className="flex items-center gap-3 text-gray-800 text-base px-4 ml-5 rounded-lg bg-gray-100 shadow-sm">
            <FaBook className="text-yellow-500" />
            <span>Reading sci-fi / philosophy / tech</span>
          </p>
        </div>
        <div className="flex items-center mb-4">
          <p>7</p>
          <p className="flex items-center gap-3 text-gray-800 text-base px-4 ml-5 rounded-lg bg-gray-100 shadow-sm">
            <FaRunning className="text-red-500" />
            <span>Running, gyming, or any sport</span>
          </p>
        </div>
        <div className="flex items-center mb-4">
          <p>8</p>
          <p className="flex items-center gap-3 text-gray-800 text-base px-4 ml-5 rounded-lg bg-gray-100 shadow-sm">
            <SiRiotgames className="text-red-600" />
            <span>Playing Valorant</span>
          </p>
        </div>
        <div className="flex items-center mb-4">
          <p>9</p>
          <p className="flex items-center gap-3 text-gray-800 text-base px-4 ml-5 rounded-lg bg-gray-100 shadow-sm">
            <GiPianoKeys className="text-indigo-500" />
            <span>Playing piano</span>
          </p>        </div>
        <div className="flex items-center mb-4">
          <p>10</p>
          <p className="flex items-center gap-3 text-gray-800 text-base px-4 ml-5 rounded-lg bg-gray-100 shadow-sm">
            <FaGuitar className="text-yellow-600" />
            <span>Playing guitar</span>
          </p>
        </div>
        <div className="flex items-center mb-4">
          <p>11</p>
          <p className="flex items-center gap-3 text-gray-800 text-base px-4 ml-5 rounded-lg bg-gray-100 shadow-sm">
            <FaMicrophoneAlt className="text-pink-500" />
            <span>Singing</span>
          </p>
        </div>
        <div className="flex items-center mb-4">
          <p>12</p>
          <p className="flex items-center gap-3 text-gray-800 text-base px-4 ml-5 rounded-lg bg-gray-100 shadow-sm">
            <FaCameraRetro className="text-blue-600" />
            <span>Photography</span>
          </p>
        </div>
        <div className="flex items-center mb-4">
          <p>13</p>
          <p className="flex items-center gap-3 text-gray-800 text-base px-4 ml-5 rounded-lg bg-gray-100 shadow-sm">
            <FaVideo className="text-purple-600" />
            <span>Video editing</span>
          </p>
        </div>
        <div className="flex items-center mb-4">
          <p>*</p>
        </div>
      </div>
      <p className="text-green-400">*/</p>
    </div>
  );
}
