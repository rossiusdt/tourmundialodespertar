export default function SectorInfo() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Setores</h2>

      <div className="space-y-6">
        {/* SETOR A */}
        <div className="border-2 border-blue-500 rounded-lg p-6 bg-gradient-to-br from-blue-50 to-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">SETOR A – EXPERIÊNCIA MAIS PRÓXIMA</h3>
          <p className="text-gray-700 leading-relaxed">
            O setor mais próximo do altar, ideal para quem deseja viver cada momento com intensidade e proximidade.
            Acompanhe de perto tudo o que acontece e conecte-se profundamente com a atmosfera do culto.
          </p>
        </div>

        {/* SETOR B */}
        <div className="border-2 border-blue-600 rounded-lg p-6 bg-gradient-to-br from-blue-100 to-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">SETOR B – VISÃO PRIVILEGIADA</h3>
          <p className="text-gray-700 leading-relaxed">
            Localizado em uma posição estratégica, o Setor B oferece o equilíbrio entre proximidade e conforto.
            Um espaço ideal para participar do culto com ótima visibilidade e envolvimento.
          </p>
        </div>

        {/* SETOR C */}
        <div className="border-2 border-blue-900 rounded-lg p-6 bg-gradient-to-br from-blue-200 to-blue-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">SETOR C – PARTICIPAÇÃO E COMUNHÃO</h3>
          <p className="text-gray-700 leading-relaxed">
            Mais afastado do altar, mas ainda imerso na presença e na energia do ambiente. O Setor C é perfeito
            para quem deseja vivenciar o culto com uma visão mais ampla e em comunhão com todos ao redor.
          </p>
        </div>
      </div>
    </div>
  );
}
