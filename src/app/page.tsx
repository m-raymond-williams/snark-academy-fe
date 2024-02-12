import { revalidateTag } from "next/cache";
import Image from "next/image";
import Link from "next/link";



export default async function Home() {
  const url = 'http://localhost:3001/api/home';

  const content = await fetch(url,
    { 
      headers: new Headers({
        
      }),
      cache: 'no-store',      
    });
    const data = await content.json();
  console.log(JSON.stringify(data, null, 2));

  return (
    <>
      <header className="flex items-center font-mono justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">mrw.snark.academy</h1>
        <nav className="flex gap-4">
          <Link className="hover:underline" href="/blog">
            Blog
          </Link>
          <Link className="hover:underline" href="/about">
            About
          </Link>
        </nav>
      </header>
    <main className="flex flex-row">
      {process.env.PAYLOAD_URL}<br/>{JSON.stringify(data, null, 2)}
    </main>
    </>
  );
}
