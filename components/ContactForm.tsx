import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Validation Requirements
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Пожалуйста, введите корректный Email (должен содержать @).");
      return;
    }

    // Simulation of sending
    console.log("Form submitted:", formData);
    setSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Auto hide success message
    setTimeout(() => setSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Связаться со мной
            </h2>
            <p className="mt-2 text-gray-500">
              Оставьте заявку, и я перезвоню вам в течение 15 минут
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Ваше имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 px-4 py-3 focus:border-primary focus:ring-primary focus:outline-none focus:ring-2 sm:text-sm border transition-colors"
                placeholder="Иван Иванов"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="text" // Using text to demonstrate manual validation as per requirements, though 'email' type helps too
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 px-4 py-3 focus:border-primary focus:ring-primary focus:outline-none focus:ring-2 sm:text-sm border transition-colors"
                placeholder="ivan@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Сообщение (Описание проблемы)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 px-4 py-3 focus:border-primary focus:ring-primary focus:outline-none focus:ring-2 sm:text-sm border transition-colors"
                placeholder="У меня сломался..."
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 p-4 text-red-700 bg-red-100 rounded-md">
                <AlertCircle size={20} />
                <span className="text-sm font-medium">{error}</span>
              </div>
            )}

            {success && (
              <div className="flex items-center gap-2 p-4 text-green-700 bg-green-100 rounded-md">
                <CheckCircle size={20} />
                <span className="text-sm font-medium">Сообщение успешно отправлено!</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              Отправить <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;