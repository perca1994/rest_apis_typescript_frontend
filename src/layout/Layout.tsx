import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <header className="bg-slate-800">
        <div className="mx-auto p-10  max-w-6xl">
          <h1 className="text-4xl font-extrabold text-white">
            Administrador de Productos
          </h1>
        </div>
      </header>
    
      <main className="mt-10 mx-auto max-w-6xl bg-white p-10 shadow">
        <Outlet />
      </main>
    </>
  );
}
