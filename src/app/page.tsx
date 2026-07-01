import { Hero } from "@/components/home/hero";
import { ProductPreview } from "@/components/home/product-preview";


export default function Home() {
  return (
    <>
      
      <div className="flex flex-col items-center justify-center gap-6 py-8">
        <Hero />
        <ProductPreview />
      </div>
    </>
  );
}
