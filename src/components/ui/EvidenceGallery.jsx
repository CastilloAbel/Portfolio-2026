import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLang } from '../../context/LangContext';
import publicAsset from '../../utils/publicAsset';

function EvidenceImage({ image, expanded = false }) {
  if (image.type === 'phone') {
    return (
      <div
        className={`relative mx-auto box-border aspect-[9/19.5] shrink-0 rounded-[2.6rem] border border-slate-400/80 bg-gradient-to-br from-slate-400 via-slate-700 to-slate-500 p-[0.3rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.65)] ${expanded ? 'h-[min(72vh,48rem)]' : 'h-[min(23rem,88vw)]'}`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] border-[5px] border-[#111318] bg-black">
          <img
            src={publicAsset(image.src)}
            alt={image.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-[2.3%] left-1/2 flex h-[2.8%] w-[34%] -translate-x-1/2 items-center justify-end rounded-full bg-black px-[2%] shadow-sm ring-1 ring-black/80"
          >
            <span className="h-[55%] aspect-square rounded-full bg-[#101c2c] ring-1 ring-slate-700/80" />
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-xl border border-surface-200 bg-surface-100 dark:border-surface-700 dark:bg-surface-900 ${expanded ? 'max-h-[78vh] min-h-32 p-2' : 'h-full w-full p-2'}`}
    >
      <img
        src={publicAsset(image.src)}
        alt={image.alt}
        className={`h-auto w-auto object-contain ${expanded ? 'max-h-[74vh] max-w-full' : 'max-h-full max-w-full'}`}
      />
    </div>
  );
}

export default function EvidenceGallery({ images, label }) {
  const { t } = useLang();
  const [activeIndex, setActiveIndex] = useState(null);
  const dialogRef = useRef(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !isOpen) return;

    dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
    };
  }, [isOpen]);

  if (!images?.length) return null;

  const move = (offset) => {
    setActiveIndex((index) => (index + offset + images.length) % images.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      move(1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      move(-1);
    }
  };

  const activeImage = activeIndex === null ? null : images[activeIndex];
  const activeCaption = activeImage?.caption || activeImage?.alt;

  return (
    <>
      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-surface-400">
            {label || t('projects.evidence')}
          </p>
          <span className="text-xs text-surface-400">
            {images.length} {t('projects.images')}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setActiveIndex(0)}
          aria-label={`${label || t('projects.evidence')}: ${images[0].caption || images[0].alt}`}
          className="group block w-full overflow-hidden rounded-xl border border-surface-200 bg-surface-100 p-3 text-left transition-colors hover:border-primary-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:border-surface-700 dark:bg-surface-900/70 dark:hover:border-primary-700"
        >
          <div
            className={`flex items-center justify-center overflow-hidden rounded-lg bg-surface-200/70 p-2 dark:bg-surface-800 ${images[0].type === 'phone' ? 'h-[min(25rem,92vw)]' : 'aspect-video'}`}
          >
            <EvidenceImage image={images[0]} />
          </div>
          <span className="mt-3 flex items-center justify-between gap-3 text-xs font-medium text-primary-700 dark:text-primary-300">
            <span>{label || t('projects.evidence')}</span>
            <span aria-hidden="true">{t('projects.openGallery')} →</span>
          </span>
        </button>
      </div>

      <dialog
        ref={dialogRef}
        onCancel={(event) => {
          event.preventDefault();
          setActiveIndex(null);
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) setActiveIndex(null);
        }}
        onKeyDown={handleKeyDown}
        aria-label={label || t('projects.evidence')}
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-black/80 p-4 text-surface-100 backdrop:bg-black/80 sm:p-8"
      >
        {activeImage && (
          <div className="mx-auto flex min-h-full max-w-6xl flex-col items-center justify-center gap-4">
            <div className="flex w-full items-center justify-between gap-4">
              <p className="text-sm text-surface-200" aria-live="polite">
                {t('projects.image')} {activeIndex + 1} {t('projects.of')} {images.length}
              </p>
              <button
                type="button"
                autoFocus
                onClick={() => setActiveIndex(null)}
                aria-label={t('projects.close')}
                className="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex w-full items-center justify-center gap-2 sm:gap-6">
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label={t('projects.previous')}
                  className="shrink-0 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 sm:p-3"
                >
                  <ChevronLeft size={24} />
                </button>
              )}
              <div className="min-w-0 flex-1">
                <EvidenceImage image={activeImage} expanded />
              </div>
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={() => move(1)}
                  aria-label={t('projects.next')}
                  className="shrink-0 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 sm:p-3"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>
            <p className="max-w-3xl text-center text-sm leading-relaxed text-surface-200" aria-live="polite">
              {activeCaption}
            </p>
          </div>
        )}
      </dialog>
    </>
  );
}