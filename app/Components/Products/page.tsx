import Link from "next/link";
import GoBack from "../buttons/GoBack";

const products = [
  { name: "All Products", href: "/Components/Products/AllProducts" },
  { name: "Mobile", href: "/Components/Products/Mobile" },
  { name: "Smart Watch", href: "/Components/Products/SmartWatch" },
  { name: "Cover", href: "/Components/Products/Cover" },
  { name: "Screen Protector", href: "/Components/Products/ScreenProtector" },
  { name: "Headphones", href: "/Components/Products/Headphones" },
  { name: "Charger", href: "/Components/Products/Charger" },
  { name: "Custom Options", href: "/Components/Products/CustomOptions" },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.name}
            href={product.href}
            className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <span className="text-lg font-semibold text-gray-900">
              {product.name}
            </span>
          </Link>
        ))}
      </div>
      {/* Back Button */}
      <GoBack/>
    </div>
  );
}