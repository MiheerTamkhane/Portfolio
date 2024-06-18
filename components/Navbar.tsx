"use client";

export default function NavBar() {
  return (
    <nav className="text-base flex justify-center items-center md:px-0 px-4 py-6 sticky top-0 z-20 shadow-lg backdrop-blur-md rounded-b-md rounded-bl-md">
      <div className="w-full flex items-center justify-between max-w-3xl px-4">
        <div className="w-full font-brand text-2xl tracking-wide">
          {/* <Link href="/"> */}
          <a>Miheer</a>
          {/* </Link> */}
        </div>
        <ul className="w-full flex gap-2 items-center justify-end font-mono">
          <li>About</li>
          <li>Projects</li>
          <li>Blogs</li>
        </ul>
      </div>
    </nav>
  );
}
