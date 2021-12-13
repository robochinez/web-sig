export default function GalleryImage({ glr }) {
  return (
    <div className="  px-2 text-xs font-bold text-center ">
      <img
        className=" transition duration-200 ease-in-out rounded-lg transform hover:-translate-y-1  hover:shadow-3xl w-60 h-full "
        src={glr.image}
        alt=""
      />
      {glr.name}
    </div>
  );
}
