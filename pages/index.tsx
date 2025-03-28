import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MotivationalPage = () => {
  const [showSecret, setShowSecret] = useState(false);

  const phrases = [
    "Confía en ti, porque yo confío en ti con los ojos cerrados.",
    "Hoy es solo un paso más hacia todo lo que vas a lograr.",
    "Eres capaz de esto y de muchísimo más.",
    "Tienes una mente brillante y un corazón valiente.",
    "Este examen no es rival para ti. ¡Arrasa!",
    "Te amo y estoy orgulloso de ti siempre, no importa el resultado. 💖",
    "Eres el amor de mi vida, luchamos de la mano para un futuro juntos 💫"
  ];

  const images = [
    "IMG_0306.jpeg", "IMG_0353.jpeg", "IMG_0558.jpeg", "IMG_0710.jpeg",
    "IMG_1070.jpeg", "6CFFC6B3-9F32-49E0-B129-B06C5C91E9D4.jpeg",
    "4f4e3411-4afe-411d-a23e-b47a012d6d5a.JPG",
    "47948A7E-0C6A-4953-8C8A-4F12C132E4A6.jpeg", "B243A038-06AA-49CD-BA34-C55E0934EB9E.jpeg",
    "IMG_0051.jpeg", "IMG_1266.jpeg", "IMG_1445.jpeg", "IMG_1484.jpeg",
    "IMG_1794.jpeg", "IMG_1859.jpeg", "IMG_2307.jpeg", "IMG_2461.jpg"
  ];

  const videos = [
    "/videos/IMG_4324.MOV",
    "/videos/IMG_5701.MOV"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-200 p-6 overflow-x-hidden">
      <motion.h1 
        className="text-4xl font-bold text-center text-pink-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🌟 ¡Muchísima suerte, Sara! 🌟
      </motion.h1>
      <motion.p 
        className="text-center text-lg text-pink-700 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Jairo cree en ti con todo su corazón 💘
      </motion.p>

      <motion.div 
        className="flex justify-center mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <Button 
          onClick={() => setShowSecret(!showSecret)} 
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full text-lg"
        >
          🎁 Sorpresa para ti
        </Button>
      </motion.div>

      <AnimatePresence>
        {showSecret && (
          <motion.div 
            className="text-center text-pink-800 text-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            Te voy a dar tantos besos como leyes haya en España 😚📚
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {phrases.map((text, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="bg-white/80 backdrop-blur-md shadow-md rounded-2xl p-4">
              <CardContent className="text-center text-lg text-pink-700">
                {text}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-10 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Button className="text-white bg-pink-600 hover:bg-pink-700 text-lg px-6 py-3 rounded-full">
          Te amo 💘
        </Button>
      </motion.div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 + i * 0.1 }}>
            <Image 
              src={`/images/${src}`} 
              alt={`Foto ${i + 1}`} 
              width={300} 
              height={300} 
              className="rounded-xl object-cover w-full h-64 shadow-lg" 
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-12 space-y-8">
        {videos.map((src, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 + i * 0.2 }}>
            <video controls className="rounded-xl w-full max-w-2xl mx-auto shadow-xl">
              <source src={src} type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MotivationalPage;
