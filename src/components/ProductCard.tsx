import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types'; // Adjust path if your types file is elsewhere

interface ProductCardProps {
  product: Product;
  priorityImage?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, priorityImage = false }) => {
  const whatsAppNumber = process.env.NEXT_PUBLIC_WA_NUMBER;
  const orderLink = `https://wa.me/${whatsAppNumber}?text=I%27m%20interested%20in%20${encodeURIComponent(product.waMessage || product.title)}`;

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden flex flex-col bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: 'cover' }} // Ensures image covers the area, might crop
          priority={priorityImage}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Example sizes, adjust as needed
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate" title={product.title}>{product.title}</h3>
        <div className="mb-3">
          <span className="bg-emerald-600 text-white text-sm font-medium px-3 py-1 rounded-full">
            {product.price}
          </span>
        </div>
        <div className="mt-auto">
          <Link
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md text-center transition duration-300 ease-in-out"
          >
            Order on WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 