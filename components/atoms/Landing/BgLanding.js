import Image from "next/image";
export default function bgLanding() {
  return (
    <>
      <div className="absolute">
        <Image
          src="/img/landingbg.png"
          width={1920}
          height={810}
          alt="no Image"
        />
      </div>
    </>
  );
}
