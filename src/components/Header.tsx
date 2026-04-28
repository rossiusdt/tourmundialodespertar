export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/Imagem1-removebg-preview.png" alt="Bilheteria Digital" className="h-10" />
          </div>
          <div className="text-sm text-gray-500">
            Produzido por <span className="font-semibold text-gray-800">CORDEVITA</span>
          </div>
        </div>
      </div>
    </header>
  );
}
