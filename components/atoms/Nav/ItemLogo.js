import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function ItemLogo() {
  return (
    <>
      <div className="flex items-center">
        <Link href="/">
          <a>
            <Image
              className="cursor-pointer "
              src="/img/logo.png"
              width={70}
              height={70}
            />
          </a>
        </Link>
        <div className="mx-4 font-semibold text-2xl tracking-wider text-white uppercase">
          <h2>sistem informasi</h2>
        </div>
      </div>
    </>
  );
}
