import Link from "next/link";
export default function ItemList(props) {
  const { children, page } = props;
  return (
    <>
      <li className="text-white lg:text-xl font-semibold hover:text-gray-500 scroll-smooth ">
        <Link href={`${page}`}>
          <a>{children}</a>
        </Link>
      </li>
    </>
  );
}
