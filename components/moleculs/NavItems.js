import ItemList from "../atoms/Nav/ItemList";
export default function NavItems() {
  return (
    <>
      <ul className="flex justify-evenly font-mono scroll-smooth">
        <ItemList page="#dataPage" className="scroll-smooth">
          Data
        </ItemList>
        <ItemList page="#dataGallery">Gallery</ItemList>
        <ItemList page="#dataDesign">Design</ItemList>
      </ul>
    </>
  );
}
