// Removed unused imports: Hero, ProductList, Footer
// Removed unused type: Product
// Removed unused fs and path imports

// Keep Metadata if you plan to use it, or remove if page is truly minimal for a long time
// import type { Metadata } from 'next'; 

// export const metadata: Metadata = {
//   title: "RunnerHub - Shop 24/7 | Fast WhatsApp Orders",
//   description: "Browse Sindi's latest collection and place your order quickly via WhatsApp.",
// };

// Removed unused getProducts function

export default function HomePage() {
  return (
    <div>
      <h1>Hello RunnerHub!</h1>
      <p>If you see this, the basic Next.js server is working.</p>
    </div>
  );
}
