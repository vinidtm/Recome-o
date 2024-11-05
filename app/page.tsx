'use client';
import { Helmet } from 'react-helmet-async';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full mx-auto px-4 
                    pt-12 sm:pt-16 md:pt-20 lg:pt-24
                    pb-[70vh] sm:pb-40 md:pb-48 lg:pb-56
                    max-w-[95%] 
                    sm:max-w-[85%] 
                    md:max-w-[80%] 
                    lg:max-w-[1200px] 
                    xl:max-w-[1400px]">
        {/* Container do vídeo */}
        <div id="vid_67293b60959985000b14393e"></div>

        {/* Script inicial */}
        <div dangerouslySetInnerHTML={{ 
          __html: '<script type="text/javascript" id="scr_67293b60959985000b14393e"></script>' 
        }} />
        
        {/* Script principal via Helmet */}
        <Helmet>
          <script type="text/javascript">
            {`var s=document.createElement("script");
            s.src="https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/ab-test/67293b60959985000b14393e/player.js",
            s.async=!0,
            document.head.appendChild(s);`}
          </script>
          <style>
            {`
              .smartplayer-headline {
                width: 100% !important;
                text-align: center !important;
                display: flex !important;
                justify-content: center !important;
                flex-direction: column !important;
                align-items: center !important;
                margin: 0 auto 30px auto !important; /* Aumentando o espaço entre a headline e o vídeo */
                padding: 0 !important;
                font-size: 24px !important; /* Aumentando um pouco o tamanho da fonte */
              }

              .smartplayer-player {
                margin-top: 20px !important; /* Adicionando espaço acima do player */
              }

              @media (max-width: 768px) {
                .smartplayer-headline {
                  margin-bottom: 20px !important;
                  font-size: 20px !important;
                }
              }
            `}
          </style>
        </Helmet>
      </div>
      <Footer />
    </div>
  );
};

export default Home;