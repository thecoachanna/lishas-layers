import Image from "next/image";


export default function Home() {
  return (
    <main>
    
       
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
              
              <p className="py-6">
                I have been baking and decorating cakes for over a year and have experience in working in the bakeries of:</p>
              <ul>
                <li>Meijer</li>
                <li>Meijer</li>
                <li>Meijer</li>
              </ul>
              </p>
              <button className="btn btn-primary">Custom Cake Inquiries</button>
            </div>
          </div>
        </div>
     
    </main>
  );
}
