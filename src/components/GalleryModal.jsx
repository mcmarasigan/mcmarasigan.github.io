import { useState, useCallback } from 'react'

function GalleryModal({ project, onClose }) {
    const [index, setIndex] = useState(0)

    const change = useCallback((dir) => {
        setIndex((prev) => {
            const next = prev + dir
            if (next < 0 || next >= project.images.length) return prev
            return next
        })
    }, [project.images.length])

    return (
        <div id="galleryModal" className="modal" style={{ display: 'flex' }} onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
            <div className="gallery-overlay" onClick={onClose}></div>
            <div className="gallery-container">
                <button
                    className="gallery-nav prev"
                    onClick={() => change(-1)}
                    style={{ display: index === 0 ? 'none' : 'flex' }}
                >
                    &#10094;
                </button>
                <div className="gallery-content">
                    <img
                        id="galleryImage"
                        className="gallery-image"
                        src={project.images[index]}
                        alt="Gallery"
                    />
                    <p id="galleryDescription" className="gallery-description">
                        {project.captions[index]}
                    </p>
                </div>
                <button
                    className="gallery-nav next"
                    onClick={() => change(1)}
                    style={{ display: index === project.images.length - 1 ? 'none' : 'flex' }}
                >
                    &#10095;
                </button>
            </div>
        </div>
    )
}

export default GalleryModal
