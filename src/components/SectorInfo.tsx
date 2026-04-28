export default function SectorInfo() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Setores</h2>

      <div className="space-y-6">
        {/* SETOR A */}
        <div className="border-2 border-blue-500 rounded-lg p-6 bg-gradient-to-br from-blue-50 to-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">SETOR A</h3>
          <p className="text-gray-700 leading-relaxed">
            A melhor localização do evento. O Setor A é para quem quer estar colado no palco, vivendo cada detalhe de perto, com visão privilegiada dos artistas e máxima imersão na experiência. Aqui, a energia é intensa e cada momento é sentido de forma única.
          </p>
        </div>

        {/* SETOR B */}
        <div className="border-2 border-blue-600 rounded-lg p-6 bg-gradient-to-br from-blue-100 to-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">SETOR B</h3>
          <p className="text-gray-700 leading-relaxed">
            O equilíbrio perfeito entre visão e conforto. No Setor B, você fica em uma posição estratégica, com ótima visibilidade do palco e espaço ideal para curtir o evento com mais liberdade, sem perder a conexão com o que está acontecendo.
          </p>
        </div>

        {/* SETOR C */}
        <div className="border-2 border-blue-900 rounded-lg p-6 bg-gradient-to-br from-blue-200 to-blue-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">SETOR C</h3>
          <p className="text-gray-700 leading-relaxed">
            Para quem quer curtir o evento com mais tranquilidade. O Setor C fica em uma área mais afastada do palco, oferecendo mais espaço e conforto para aproveitar com calma, sem abrir mão da experiência e da vibe do evento.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Mapa do Evento</h3>
        <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
          <img
            src="/mapatribo.jpg"
            alt="Mapa do Evento"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
