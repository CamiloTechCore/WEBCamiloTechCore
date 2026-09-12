// src/sections/ContactSection.jsx

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

function ContactSection() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const scriptUrl = import.meta.env.VITE_GOOGLE_SHEETS_SCRIPT_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      if (!scriptUrl) {
        throw new Error('Falta VITE_GOOGLE_SHEETS_SCRIPT_URL en el archivo .env');
      }

      if (scriptUrl.includes('docs.google.com/spreadsheets')) {
        throw new Error('La variable VITE_GOOGLE_SHEETS_SCRIPT_URL no debe ser la URL de Google Sheets, sino la URL del Web App desplegado en Apps Script (terminada en /exec).');
      }

      // Enviamos como text/plain para evitar el preflight CORS de OPTIONS
      // y garantizar que Google Apps Script reciba e.postData.contents
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          date: new Date().toISOString(),
        }),
      });

      setStatus('success');
      setErrorMessage('');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Error al enviar el formulario';
      console.error('Error al enviar el formulario:', error);
      setErrorMessage(msg);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-8 md:py-12 min-h-[calc(100vh-5rem)] flex flex-col justify-center bg-transparent relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 max-w-xl relative z-10">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">
            {t('contact.p1')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-3 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
            {t('contact.p2')}
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300">
                {t('contact.p3')}
              </label>
              <input
                type="text"
                id="name"
                className="bg-white/70 border border-gray-200/80 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 sm:p-3 dark:bg-gray-800/60 dark:border-gray-700/60 dark:placeholder-gray-400 dark:text-white transition-all backdrop-blur-sm"
                placeholder={t('contact.p3')}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300">
                {t('contact.p4')}
              </label>
              <input
                type="email"
                id="email"
                className="bg-white/70 border border-gray-200/80 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 sm:p-3 dark:bg-gray-800/60 dark:border-gray-700/60 dark:placeholder-gray-400 dark:text-white transition-all backdrop-blur-sm"
                placeholder={t('contact.p11')}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300">
                {t('contact.p5')}
              </label>
              <textarea
                id="message"
                rows="3"
                className="bg-white/70 border border-gray-200/80 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 sm:p-3 dark:bg-gray-800/60 dark:border-gray-700/60 dark:placeholder-gray-400 dark:text-white transition-all backdrop-blur-sm"
                placeholder={t('contact.p10')}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            
            <div className="text-center pt-1">
              <button
                type="submit"
                className="w-full sm:w-auto text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 font-semibold rounded-xl text-sm px-7 py-3 text-center inline-flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-xl hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                disabled={status === 'sending'}
              >
                <span>{status === 'sending' ? t('contact.p7') : t('contact.p6')}</span>
                <FiSend className={status === 'sending' ? 'animate-pulse' : ''} />
              </button>
            </div>
          </form>

          {status === 'success' && (
            <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center gap-2 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium backdrop-blur-md">
              <FiCheckCircle size={18} />
              <span>{t('contact.p8')}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 p-3 rounded-xl bg-rose-500/10 dark:bg-rose-500/10 border border-rose-500/30 flex items-center justify-center gap-2 text-rose-700 dark:text-rose-300 text-xs sm:text-sm font-medium backdrop-blur-md">
              <FiAlertCircle size={18} />
              <span>{errorMessage || t('contact.p9')}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;