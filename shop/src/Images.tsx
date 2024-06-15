import imgs from './images.ts'

export default function Images() {

  return (
    <div>
      <div 
        className=" h-50 w-dvw flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {imgs.map((image, id) => (
            <img
              className="mx-2 my-2 rounded-3xl h-auto w-fit" 
              src={image} 
              alt={`image-${id}`}
              key={id}
            />
        ))}
      </div>
    </div>
  );
}
