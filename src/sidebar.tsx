import { Link } from "react-router-dom";

export function SideBar() {
  return (
    <nav className="flex h-screen w-44 flex-col bg-indigo-950 px-4 py-3 text-white">
      <Link to="/" className="mb-8 border-b py-2 text-base text-white font-semibold uppercase">Frontend UI</Link>
      <ul className="flex-grow space-y-6 px-2 text-neutral-100">
        <Link to="/button">Button</Link>
        <li>Badge</li>
        <li>Input</li>
      </ul>
      <div className="flex flex-col justify-center gap-3 text-sm text-neutral-400">
        <div className="text-center">
          Built by {''}
          <a
            href="https://www.greatfrontend.com/u/your_username"
            target="_blank"
          >
            Justin
          </a>
        </div>
      </div>
    </nav>
  );
}
