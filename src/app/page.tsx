import type { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

import Hero from '@/components/Hero';
import ProductList from '@/components/ProductList';
import Footer from '@/components/Footer';
import { Product } from '@/types';

export const metadata: Metadata = {
  title: "RunnerHub - Shop 24/7 | Fast WhatsApp Orders",
  description: "Browse Sindi's latest collection and place your order quickly via WhatsApp.",
};

async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', 'products.json');
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const products = JSON.parse(data);
    return products as Product[];
  } catch (error) {
    console.error('Failed to load products:', error);
    return []; // Return an empty array or throw error as per desired error handling
  }
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const products = await getProducts();
  
  let layoutMode: 'grid' | 'carousel' = 'grid'; // Default to grid
  const layoutParam = searchParams?.layout;
  if (layoutParam === 'carousel') {
    layoutMode = 'carousel';
  }

  return (
    <main>
      <Hero />
      <ProductList products={products} layoutMode={layoutMode} />
      <Footer />
    </main>
  );
}
