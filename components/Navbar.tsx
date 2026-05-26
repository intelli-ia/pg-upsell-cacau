export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <span className="font-serif font-black italic text-accent text-xl tracking-wide leading-none">
              C.O.R.C.
            </span>
            <p className="text-secondary/50 text-[9px] font-light tracking-[0.18em] uppercase leading-none mt-0.5">
              Curso Online de Raciocínio Clínico
            </p>
          </div>
        </div>
        <a
          href="#matricule-se"
          className="hidden sm:inline-block bg-accent text-primary font-bold text-xs tracking-[0.15em] uppercase px-6 py-2.5 hover:bg-accent/90 transition-colors"
        >
          Matricule-se
        </a>
      </div>
    </nav>
  );
}
