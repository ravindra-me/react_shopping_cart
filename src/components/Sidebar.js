import { useContext } from "react";
import Context from "./Context";

function Sidebar() {
  const { products } = useContext(Context);
  let sizes = products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);
  let uniqueSizes = [...new Set(sizes)];
  return (
    <aside className="flex-20 sidebar">
      <div className="flex wrap">
        {uniqueSizes.map((size) => (
          <span className="size">{size}</span>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
