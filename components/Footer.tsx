import Image from "next/image";

export default function Footer() {
  return (
    <footer className="section-dark border-t border-secondary/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Image
          src="/logo.svg"
          alt="C.O.R.C. — Curso Online de Raciocínio Clínico"
          width={320}
          height={62}
          className="w-52 opacity-70"
        />

        <p className="font-serif font-light text-secondary/30 text-xs text-center sm:text-right">
          © {new Date().getFullYear()} C.O.R.C. — Dr. Carlos Antônio Moura (Cacau).
          <br className="sm:hidden" />{" "}
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
