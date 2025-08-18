// src/sections/ContactSection.jsx

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiSend } from 'react-icons/fi';

function ContactSection() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');

  // Asegúrate de que esta URL sea la de tu último despliegue de Apps Script.
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxmvylKTV2OA1osfnauXG5zwvGT-buTZi3TYMAg2WaTWgg0CbJKQdc9DHvs9Je-I83Z/exec';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    try {
      // Solución definitiva para CORS con Google Apps Script usando 'no-cors'
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      // Si fetch no lanza un error de red, asumimos que fue exitoso.
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');

    } catch (error) {
      console.error('Error de red al enviar el formulario:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-8">
          {t('contact.p1')}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          {t('contact.p2')}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t('contact.p3')}</label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder={t('contact.p3')}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t('contact.p4')}</label>
            <input
              type="email" // Corregido: el 'type' debe ser un valor HTML estándar
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder={t('contact.p11')}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t('contact.p5')}</label>
            <textarea
              id="message"
              rows="4"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder={t('contact.p10')}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="text-white bg-primary hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-2 transition-colors disabled:bg-gray-400"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? t('contact.p7') : t('contact.p6')}
              <FiSend />
            </button>
          </div>
        </form>

        {status === 'success' && <p className="text-center text-green-500 mt-4">{t('contact.p8')}</p>}
        {status === 'error' && <p className="text-center text-red-500 mt-4">{t('contact.p9')}</p>}
      </div>
    </section>
  );
}

export default ContactSection;