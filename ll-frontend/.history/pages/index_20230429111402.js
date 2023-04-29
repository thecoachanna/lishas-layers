import Image from "next/image";
import Link from "next/link"
import NavBar from "../components/NavBar"
import Gallery from "./gallery";


export default function Home() {
  return (
    <main>
    <NavBar />
       
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
              src="/images/lisha-headshot.png"
              alt="Picture of Lisha Nettles"
              width={400}
              height={400}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Hi, I'm Lisha!</h1>
              <p className="py-6 text-2xl">
                I'm a colorful, creative, fun spirit who loves to make people's
              special moments come to life through my cake art.
              </p>
              <p className="py-6 text-2xl">
                I am a current student in Oakland Community College Culinary Arts</> program and have been gaining industry experience over the past year working in the bakeries of:</p>
              <ul className="py-6 text-2xl">
                <li className="text-1xl italic">Meijer - Cake Decorator</li>
                <li className="text-1xl italic">Nino Salvaggio's Bakery - Pastry Associate</li>
                <li className="text-1xl italic">Orchard Lake Country Club - Pastry Assistant</li>
              </ul>
          
            <Link href={'/contact'}>
              <button className="btn btn-primary">Custom Cake Inquiries</button>
            </Link>
            </div>
        </div>
        </div>
        <Gallery />
    </main>
  );
}
