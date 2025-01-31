import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { MdCloseFullscreen } from "react-icons/md";

const ImageWithWatermark = ({ imageSrc }) => {
  const canvasRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageDataUrl, setImageDataUrl] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isExpanded]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = imageSrc;

    const watermark = new Image();
    watermark.src = "/img/totalgen-logo.png";

    const drawImage = () => {
      const canvasWidth = image.width;
      const canvasHeight = image.height;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight);

      const watermarkScale = 0.5;
      const watermarkWidth = watermark.width * watermarkScale;
      const watermarkHeight = watermark.height * watermarkScale;

      const x = canvasWidth - watermarkWidth - 10;
      const y = canvasHeight - watermarkHeight - 10;

      ctx.drawImage(watermark, x, y, watermarkWidth, watermarkHeight);

      // Atualiza a URL da imagem sempre que o canvas é redesenhado
      setImageDataUrl(canvas.toDataURL());
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

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsExpanded(false);
  };

  return (
    <>
      <div className="container mb-3">
        <div className="row justify-content-center">
          <div
            className="col-12 col-md-8 position-relative"
            onClick={handleToggleExpand}
            style={{ cursor: "pointer" }}
            role="button"
            aria-label="Expand image"
          >
            <canvas
              className={clsx("img-fluid", styles.heroBanner)}
              ref={canvasRef}
              style={{ display: "block", width: "100%" }}
            />
            <div className="position-absolute top-0 end-0 p-2 bg-dark text-white opacity-75">
              <i className="bi bi-zoom-in"></i>
            </div>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div
          className="fixed-top vh-100 vw-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 1050,
            cursor: "zoom-out",
          }}
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
        >
          <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center">
            <img
              src={imageDataUrl}
              className="img-fluid"
              style={{
                maxHeight: "90vh",
                maxWidth: "90vw",
                objectFit: "contain",
              }}
              alt="Expanded image"
            />

            <button
              onClick={handleClose}
              className="position-absolute end-0 top-0 me-3 mt-3 z-3"
              aria-label="Close"
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              <MdCloseFullscreen />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageWithWatermark;
