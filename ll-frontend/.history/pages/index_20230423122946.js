import Image from "next/image";
import { Inter } from "next/font/google";


export default function Home() {
  return (
    <main>
    
       
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
              src="/images/lisha-headshot.png"
              alt="Picture of the author"
              width={400}
              height={400}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Hi, I'm Lisha!</h1>
              <p className="py-6">
                I'm a colorful, creative, fun spirit who loves to make people's
                special moments come to life through my cake art.
              </p>
              <button className="btn btn-primary">Cake Inquiries</button>
            </div>
          </div>
        </div>
     
    </main>
  );
}
