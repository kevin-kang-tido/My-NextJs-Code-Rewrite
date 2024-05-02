// import CardProdcuts from "@/components/card/ListCardComponent";
import CardProducts from './../components/card/ListCardComponent';
import "./globals.css";


export default function Home() {
  return (
    <main className='container w-auto mx-[260px]'>
      <h1 className='text-center items-center font-bold text-3xl my-4'>Top Prodcuts</h1>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg-grid-cols-4'>
      <CardProducts/>
      <CardProducts/>
      <CardProducts/>
      <CardProducts/>
      <CardProducts/>
      <CardProducts/>
      <CardProducts/>
      <CardProducts/>
    </div>
   </main>
  );
}
