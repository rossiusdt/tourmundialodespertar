import { Share2, MapPin, Calendar } from 'lucide-react';

export default function EventHero() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              CORDE VITA
            </h1>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="w-5 h-5 text-red-400 shrink-0" />
                <span className="text-base font-medium">14 de junho de 2026</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-red-400 shrink-0" />
                <span className="text-base font-medium">Auditório Araújo Vianna — Porto Alegre/RS</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/WhatsApp_Image_2026-04-28_at_18.01.33.jpeg"
                alt="CORDE VITA"
                className="w-full h-full object-cover"
              />
            </div>

            <button className="absolute top-4 right-4 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-gray-50 transition-colors">
              <Share2 className="w-4 h-4" />
              COMPARTILHAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
