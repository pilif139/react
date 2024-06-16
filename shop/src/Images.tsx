import imgs from './images.ts'
import { Link } from 'react-router-dom';

export default function Images() {

  return (
    <div className='bg-indigo-50 h-4/6'>
      <Link to="item-shop"
        className="h-full w-full flex overflow-x-scroll ">
        {imgs.map((image, id) => (
            <img
              className="mx-2 my-2 rounded-3xl w-auto cursor-pointer hover:border-8 hover:border-indigo-600 transition-all" 
              src={image} 
              alt={`image-${id}`}
              key={id}
            />
        ))}
      </Link>
    </div>
  );
}
