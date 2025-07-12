import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { useLocation } from "react-router-dom";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const location = useLocation();
  const subCategory = location.state?.subCategory?.toLowerCase();

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [groupedItems, setGroupedItems] = useState({});

  useEffect(() => {
    if (!subCategory) return;

    if (subCategory === "fresh-frozen") {
      // Group fresh-frozen products by waterType
      const waterGrouped = {};
      products.forEach((item) => {
        if (item.subCategory?.toLowerCase() === "fresh-frozen") {
          const waterType = item.waterType?.toLowerCase() || "unknown";
          if (!waterGrouped[waterType]) waterGrouped[waterType] = [];
          waterGrouped[waterType].push(item);
        }
      });
      setGroupedItems(waterGrouped);
      setFilteredProducts([]);
    } else if (subCategory === "cereals/pulses") {
      // Group cereals/pulses by type
      const cerealGrouped = {};
      products.forEach((item) => {
        if (item.subCategory?.toLowerCase() === "cereals/pulses") {
          const type = item.type?.toLowerCase() || "other";
          if (!cerealGrouped[type]) cerealGrouped[type] = [];
          cerealGrouped[type].push(item);
        }
      });
      setGroupedItems(cerealGrouped);
      setFilteredProducts([]);
    } else {
      // Handle other categories
      const matched = products.filter(
        (item) => item.subCategory?.toLowerCase() === subCategory
      );
      setFilteredProducts(matched);
      setGroupedItems({});
    }
  }, [products, subCategory]);

  // Friendly display for cereal types
  const getCerealLabel = (type) => {
    switch (type) {
      case "basmati":
        return "BASMATI RICE";
      case "non-basmati":
        return "NON-BASMATI RICE";
      case "wheat":
        return "Wheat";
      case "maize":
        return "MAIZE (CORN)";
      case "pulses":
        return "PULSES";
      default:
        return type.toUpperCase();
    }
  };

  return (
    <div className="flex flex-col gap-8 pt-10 border-t border-gray-200 px-4 sm:px-6">
      <div className="text-center">
        <Title text1={subCategory?.toUpperCase()} text2="" />
      </div>

      {/* Grouped display for fresh-frozen or cereals/pulses */}
      {(subCategory === "fresh-frozen" || subCategory === "cereals/pulses") &&
        Object.entries(groupedItems).map(([group, items]) => (
          <div key={group} className="flex flex-col gap-4 mt-6">
            <Title
              text1={
                subCategory === "fresh-frozen"
                  ? group === "sea"
                    ? "SEA FISH"
                    : group === "fresh"
                    ? "FRESH WATER FISH"
                    : "OTHER"
                  : getCerealLabel(group)
              }
              text2=""
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {items.map((item, i) => (
                <ProductCard key={i} item={item} />
              ))}
            </div>
          </div>
        ))}

      {/* Ungrouped subcategories */}
      {filteredProducts.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((item, i) => (
            <ProductCard key={i} item={item} />
          ))}
        </div>
      )}

      {/* Fallback for no products */}
      {filteredProducts.length === 0 &&
        subCategory !== "fresh-frozen" &&
        subCategory !== "cereals/pulses" && (
          <p className="text-center text-gray-500 text-sm">
            No products found.
          </p>
        )}
    </div>
  );
};

const ProductCard = ({ item }) => (
  <div className="flex flex-col bg-white rounded-xl p-3 border border-gray-300 shadow hover:shadow-md transition duration-300">
    <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-fill border border-gray-300"
      />
    </div>
    <p className="mt-3 font-semibold text-sm sm:text-base text-center">
      {item.name}
    </p>
    <p className="text-gray-500 text-center text-sm">
      {item.price ? `₹${item.price}` : ""}
    </p>
  </div>
);

export default Collection;
