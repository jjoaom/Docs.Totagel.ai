import React, { useRef, useEffect } from "react";
import clsx from "clsx";
import styles from "./styles.module.css"; // Arquivo de estilos onde a borda é definida

const ImageWithWatermark = ({ imageSrc }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = imageSrc;

    const watermark = new Image();
    watermark.src = "/img/totalgen-logo.png"; // URL da marca d'água

    const drawImage = () => {
      // Define o tamanho do canvas igual ao tamanho da imagem
      const canvasWidth = image.width;
      const canvasHeight = image.height;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      // Desenha a imagem no canvas
      ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight);

      // Desenha a marca d'água
      const watermarkScale = 0.5; // Escala da marca d'água
      const watermarkWidth = watermark.width * watermarkScale;
      const watermarkHeight = watermark.height * watermarkScale;

      // Posição da marca d'água (canto inferior direito)
      const x = canvasWidth - watermarkWidth - 10;
      const y = canvasHeight - watermarkHeight - 10;

      ctx.drawImage(watermark, x, y, watermarkWidth, watermarkHeight);
    };

    image.onload = () => {
      drawImage();
    };

    watermark.onload = () => {
      drawImage();
    };

    window.addEventListener("resize", drawImage);

    return () => {
      window.removeEventListener("resize", drawImage);
    };
  }, [imageSrc]);

  return (
    <div className="container" style={{ marginBottom: '30px' }}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <canvas className={clsx("img-fluid", styles.heroBanner)} ref={canvasRef} style={{ display: 'block', width: '100%' }}></canvas>
        </div>
      </div>
    </div>
  );
};

export default ImageWithWatermark;
