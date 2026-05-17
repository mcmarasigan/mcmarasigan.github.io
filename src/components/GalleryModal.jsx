import { useState, useCallback, useEffect } from 'react'

function GalleryModal({ project, onClose }) {
    const [index, setIndex] = useState(0)

    const change = useCallback((dir) => {
        setIndex((prev) => {
            const next = prev + dir
            if (next < 0 || next >= project.images.length) return prev
            return next
        })
    }, [project.images.length])

    // Keyboard Navigation support
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                change(-1)
            } else if (e.key === 'ArrowRight') {
                change(1)
            } else if (e.key === 'Escape') {
                onClose()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [change, onClose])

    return (
        <div 
            id="galleryModal" 
            className="modal" 
            style={{ display: 'flex' }} 
            onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
            <style>{`
                .gallery-modal-wrapper {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    width: 90%;
                    max-width: 1050px;
                    height: 85vh;
                    background: rgba(15, 15, 15, 0.85);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
                    overflow: hidden;
                    z-index: 10000;
                    font-family: 'Poppins', sans-serif;
                    animation: modalEntry 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                @keyframes modalEntry {
                    from {
                        opacity: 0;
                        transform: scale(0.95) translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }

                .gallery-modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 16px 24px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                    background: rgba(10, 10, 10, 0.5);
                }

                .gallery-modal-title-group {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .gallery-modal-title {
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: #ffffff;
                    margin: 0;
                    letter-spacing: 0.03em;
                }

                .gallery-modal-counter {
                    font-size: 0.78rem;
                    color: #bb86fc;
                    background: rgba(187, 134, 252, 0.1);
                    padding: 4px 12px;
                    border-radius: 20px;
                    border: 1px solid rgba(187, 134, 252, 0.15);
                    font-weight: 500;
                }

                .gallery-modal-close {
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    color: rgba(255, 255, 255, 0.7);
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .gallery-modal-close:hover {
                    color: #ff5555;
                    background: rgba(255, 85, 85, 0.1);
                    border-color: rgba(255, 85, 85, 0.2);
                    transform: scale(1.05);
                }

                .gallery-modal-main {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    position: relative;
                    padding: 10px 24px;
                    overflow: hidden;
                    background: radial-gradient(circle at center, rgba(30, 30, 30, 0.3) 0%, rgba(10, 10, 10, 0.5) 100%);
                }

                .gallery-viewport {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    max-height: 52vh;
                }

                .gallery-active-image {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    border-radius: 12px;
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    animation: imageFadeIn 0.3s ease;
                }

                @keyframes imageFadeIn {
                    from {
                        opacity: 0.6;
                        transform: scale(0.98);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .gallery-caption-card {
                    margin-top: 16px;
                    background: rgba(20, 20, 20, 0.8);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    padding: 10px 24px;
                    border-radius: 10px;
                    max-width: 85%;
                    text-align: center;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
                }

                .gallery-caption-text {
                    margin: 0;
                    font-size: 0.88rem;
                    color: #e0e0e0;
                    line-height: 1.5;
                    font-weight: 400;
                }

                .gallery-arrow-btn {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    color: rgba(255, 255, 255, 0.75);
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.1rem;
                    cursor: pointer;
                    backdrop-filter: blur(5px);
                    transition: all 0.2s ease;
                    z-index: 10;
                    outline: none;
                }

                .gallery-arrow-btn:hover {
                    background: rgba(187, 134, 252, 0.15);
                    border-color: rgba(187, 134, 252, 0.3);
                    color: #bb86fc;
                    box-shadow: 0 0 15px rgba(187, 134, 252, 0.25);
                    transform: scale(1.08);
                }

                .gallery-arrow-btn.disabled {
                    opacity: 0.15;
                    pointer-events: none;
                    cursor: not-allowed;
                }

                .gallery-modal-footer {
                    padding: 16px 24px;
                    background: rgba(10, 10, 10, 0.6);
                    border-top: 1px solid rgba(255, 255, 255, 0.06);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .gallery-thumb-strip {
                    display: flex;
                    gap: 12px;
                    max-width: 100%;
                    overflow-x: auto;
                    padding: 4px 8px;
                    scrollbar-width: thin;
                    scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
                }

                .gallery-thumb-strip::-webkit-scrollbar {
                    height: 6px;
                }

                .gallery-thumb-strip::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                }

                .gallery-thumbnail-item {
                    width: 76px;
                    height: 46px;
                    object-fit: cover;
                    border-radius: 6px;
                    cursor: pointer;
                    opacity: 0.35;
                    border: 2px solid transparent;
                    transition: all 0.2s ease;
                    flex-shrink: 0;
                }

                .gallery-thumbnail-item:hover {
                    opacity: 0.8;
                    transform: translateY(-2px);
                }

                .gallery-thumbnail-item.active {
                    opacity: 1;
                    border-color: #bb86fc;
                    box-shadow: 0 0 10px rgba(187, 134, 252, 0.4);
                    transform: translateY(-2px) scale(1.04);
                }

                /* ==========================================================================
                   LIGHT MODE OVERRIDES 
                   ========================================================================== */
                body.light-mode .gallery-modal-wrapper {
                    background: rgba(255, 255, 255, 0.85);
                    border: 1px solid rgba(123, 44, 191, 0.15);
                    box-shadow: 0 25px 60px rgba(123, 44, 191, 0.1);
                }

                body.light-mode .gallery-modal-header {
                    background: rgba(248, 244, 252, 0.6);
                    border-bottom: 1px solid rgba(123, 44, 191, 0.1);
                }

                body.light-mode .gallery-modal-title {
                    color: #2c2c2c;
                }

                body.light-mode .gallery-modal-counter {
                    color: #7b2cbf;
                    background: rgba(123, 44, 191, 0.08);
                    border: 1px solid rgba(123, 44, 191, 0.12);
                }

                body.light-mode .gallery-modal-close {
                    background: rgba(0, 0, 0, 0.04);
                    border: 1px solid rgba(0, 0, 0, 0.08);
                    color: rgba(0, 0, 0, 0.6);
                }

                body.light-mode .gallery-modal-close:hover {
                    color: #ff5555;
                    background: rgba(255, 85, 85, 0.1);
                    border-color: rgba(255, 85, 85, 0.2);
                }

                body.light-mode .gallery-modal-main {
                    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(248, 244, 252, 0.6) 100%);
                }

                body.light-mode .gallery-active-image {
                    box-shadow: 0 15px 40px rgba(123, 44, 191, 0.12);
                    border: 1px solid rgba(123, 44, 191, 0.08);
                }

                body.light-mode .gallery-caption-card {
                    background: rgba(255, 255, 255, 0.9);
                    border: 1px solid rgba(123, 44, 191, 0.12);
                    box-shadow: 0 8px 24px rgba(123, 44, 191, 0.05);
                }

                body.light-mode .gallery-caption-text {
                    color: #3c3c3c;
                }

                body.light-mode .gallery-arrow-btn {
                    background: rgba(0, 0, 0, 0.03);
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    color: rgba(0, 0, 0, 0.7);
                }

                body.light-mode .gallery-arrow-btn:hover {
                    background: rgba(123, 44, 191, 0.12);
                    border-color: rgba(123, 44, 191, 0.25);
                    color: #7b2cbf;
                    box-shadow: 0 0 15px rgba(123, 44, 191, 0.2);
                }

                body.light-mode .gallery-modal-footer {
                    background: rgba(248, 244, 252, 0.7);
                    border-top: 1px solid rgba(123, 44, 191, 0.1);
                }

                body.light-mode .gallery-thumb-strip::-webkit-scrollbar-thumb {
                    background: rgba(123, 44, 191, 0.25);
                }

                body.light-mode .gallery-thumbnail-item.active {
                    border-color: #7b2cbf;
                    box-shadow: 0 0 10px rgba(123, 44, 191, 0.3);
                }
            `}</style>
            <div className="gallery-overlay" onClick={onClose}></div>
            <div className="gallery-modal-wrapper">
                {/* Header */}
                <div className="gallery-modal-header">
                    <div className="gallery-modal-title-group">
                        <h4 className="gallery-modal-title">{project.title}</h4>
                        <span className="gallery-modal-counter">
                            {index + 1} / {project.images.length}
                        </span>
                    </div>
                    <button className="gallery-modal-close" onClick={onClose} aria-label="Close Gallery">
                        &times;
                    </button>
                </div>

                {/* Main Content Area */}
                <div className="gallery-modal-main">
                    <button
                        className={`gallery-arrow-btn ${index === 0 ? 'disabled' : ''}`}
                        onClick={() => change(-1)}
                        aria-label="Previous image"
                    >
                        &#10094;
                    </button>

                    <div className="gallery-viewport">
                        <img
                            key={index} // Force remount on index change to trigger smooth transition animation
                            className="gallery-active-image"
                            src={project.images[index]}
                            alt={`${project.title} Screenshot ${index + 1}`}
                        />
                        <div className="gallery-caption-card">
                            <p className="gallery-caption-text">
                                {project.captions[index]}
                            </p>
                        </div>
                    </div>

                    <button
                        className={`gallery-arrow-btn ${index === project.images.length - 1 ? 'disabled' : ''}`}
                        onClick={() => change(1)}
                        aria-label="Next image"
                    >
                        &#10095;
                    </button>
                </div>

                {/* Footer Thumbnail Strip */}
                <div className="gallery-modal-footer">
                    <div className="gallery-thumb-strip">
                        {project.images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`Page ${i + 1}`}
                                className={`gallery-thumbnail-item ${i === index ? 'active' : ''}`}
                                onClick={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryModal
