import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  layoutMode: 'grid' | 'carousel';
}

const ProductList: React.FC<ProductListProps> = ({ products, layoutMode }) => {
  if (!products || products.length === 0) {
    return <p className="text-center text-gray-500 py-10">No products available at the moment.</p>;
  }

  const gridClasses = "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6";
  const carouselClasses = "flex overflow-x-auto space-x-4 py-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200";
  // Note: For Tailwind scrollbar styling, you might need a plugin like `tailwind-scrollbar`
  // or define custom scrollbar utilities in your global.css if the default browser scrollbar isn't sufficient.

  const containerClasses = layoutMode === 'carousel' ? carouselClasses : gridClasses;

  return (
    <section id="products" aria-labelledby="products-heading" className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 id="products-heading" className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
          Our Collection
        </h2>
        <div className={containerClasses}>
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={layoutMode === 'carousel' ? 'snap-center min-w-[280px] sm:min-w-[300px] md:min-w-[320px]' : ''}
            >
              <ProductCard product={product} priorityImage={index < 2} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList; 