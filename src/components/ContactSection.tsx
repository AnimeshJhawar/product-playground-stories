
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Linkedin, Mail, MessageCircle, Coffee } from 'lucide-react';

const ContactSection = () => {
  const [selectedUseCase, setSelectedUseCase] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const useCases = [
    { id: 'collaborate', label: 'Collaborate on a project' },
    { id: 'coffee', label: 'Grab coffee & chat PM' },
    { id: 'feedback', label: 'Get product feedback' },
    { id: 'hiring', label: 'Discuss opportunities' },
    { id: 'just-hi', label: 'Just saying hi!' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Check if all required fields are filled
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    if (!selectedUseCase || !name || !email || !message) {
      alert('Please fill in all required fields');
      return;
    }
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-pink-600 dark:from-slate-100 dark:to-pink-400 bg-clip-text text-transparent">
            Say Hi
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Let's connect! Whether it's product strategy, user research insights, or just a good conversation over coffee ☕
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                What's your use case?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Help me understand how I can help you best
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Use Case Selection */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Select your use case
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {useCases.map((useCase) => (
                    <motion.label
                      key={useCase.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                        selectedUseCase === useCase.id
                          ? 'bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border-2 border-blue-300 dark:border-blue-600'
                          : 'bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600'
                      }`}
                    >
                      <input
                        type="radio"
                        name="useCase"
                        value={useCase.id}
                        checked={selectedUseCase === useCase.id}
                        onChange={(e) => setSelectedUseCase(e.target.value)}
                        className="sr-only"
                      />
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {useCase.label}
                      </span>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Name and Email */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Tell me more
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Share your thoughts, ideas, or just say hello..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <MessageCircle className="w-5 h-5" />
                    Message sent! I'll get back to you soon 🚀
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Connect */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
                <Coffee className="w-6 h-6 text-orange-500" />
                Quick Connect
              </h3>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:javaranimesh12@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-600 transition-all duration-300"
                >
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <Mail className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">Email</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">javaranimesh12@gmail.com</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/animesh-jhawar"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-600 transition-all duration-300"
                >
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">LinkedIn</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Connect professionally</div>
                  </div>
                </motion.a>

                <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">Location</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Gurugram, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-green-200/50 dark:border-green-700/50">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                ⚡ Quick Response Promise
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                I typically respond within 24 hours. For urgent product discussions or collaboration opportunities, 
                expect a faster turnaround!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
