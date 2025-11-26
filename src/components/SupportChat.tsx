import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '+79991416580';
  const whatsappLink = `https://wa.me/79991416580?text=${encodeURIComponent('Здравствуйте! Интересует геосинтетика.')}`;
  const telegramLink = 'https://t.me/+79991416580';

  return (
    <>
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Icon name="Headphones" size={20} className="text-blue-600" />
              </div>
              <div className="text-white">
                <h3 className="font-semibold text-sm">Поддержка</h3>
                <p className="text-xs opacity-90">Онлайн</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          <div className="p-4 space-y-3">
            <p className="text-sm text-gray-600">
              Здравствуйте! Чем можем помочь? Выберите удобный способ связи:
            </p>

            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors border border-green-200 group"
            >
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Phone" size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-600 font-medium">Позвонить</p>
                <p className="text-sm font-semibold text-gray-800">+7 (999) 141-65-80</p>
              </div>
            </a>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-200 group"
            >
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="MessageCircle" size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-600 font-medium">WhatsApp</p>
                <p className="text-sm font-semibold text-gray-800">Написать в чат</p>
              </div>
            </a>

            <a 
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200 group"
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Send" size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-600 font-medium">Telegram</p>
                <p className="text-sm font-semibold text-gray-800">Написать в Telegram</p>
              </div>
            </a>

            <div className="pt-2 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Работаем: Пн-Пт 9:00-18:00
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <Icon name="MessageCircle" size={24} className="group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
      </button>
    </>
  );
}
