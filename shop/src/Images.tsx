import { Link } from 'react-router-dom';
import {Image} from './App'

interface Props{
  imgs: Image[]
}

export default function Images({imgs}: Props) {

  return (
    <div className='bg-indigo-50 h-4/6'>
    <div className="h-full w-full flex overflow-x-scroll overflow-hidden">
      {imgs.map((image, id) => (
        <Link to={`/${image.tag}`} key={id} className="flex-shrink-0">
          <img
            className="mx-2 my-2 rounded-3xl h-full w-auto cursor-pointer hover:border-8 hover:border-indigo-600 transition-all" 
            src={image.src} 
            alt={`image-${id}`}
          />
        </Link>
      ))}
    </div>
  </div>
  );
}
