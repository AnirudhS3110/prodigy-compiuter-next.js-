"use client";

import React, { useEffect, useRef, useCallback, useMemo } from 'react';

const SocialMedia = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Use useMemo to prevent the array from changing on every render
  const instagramPosts = useMemo(() => [
    "https://www.instagram.com/reel/CxYFp5nyNYr/",
    "https://www.instagram.com/reel/CuBa8lVMM7_/",
    "https://www.instagram.com/reel/Cs78ja2PV3L/",
    "https://www.instagram.com/p/CRotbxsIuPR/",
    "https://www.instagram.com/p/CR7szGTpRep/",
    "https://www.instagram.com/p/CR0BCploOCF/",
    "https://www.instagram.com/p/CRnpVaGgwNm/",
    "https://www.instagram.com/p/CR71p_fpwJr/",
    "https://www.instagram.com/reel/CkUqyiBpZtL/",
    "https://www.instagram.com/p/COx4Nr7gdYC/",
    "https://www.instagram.com/p/CPVlbrig9cC/"
  ], []);

  // Function to create Instagram post embed element
  const createInstagramEmbed = (url: string, index: number) => {
    const postContainer = document.createElement('div');
    postContainer.className = 'group relative overflow-hidden rounded-lg shadow-md aspect-square w-[300px] instagram-post-container';
    postContainer.setAttribute('data-post-index', index.toString());

    const loadingPlaceholder = document.createElement('div');
    loadingPlaceholder.className = 'w-full h-full bg-gray-200 flex items-center justify-center';
    loadingPlaceholder.innerHTML = '<i class="fab fa-instagram text-gray-400 text-3xl"></i>';

    postContainer.appendChild(loadingPlaceholder);

    const embedContainer = document.createElement('div');
    embedContainer.className = 'instagram-embed-container w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-500';
    embedContainer.setAttribute('data-url', url);
    embedContainer.innerHTML = `
      <blockquote 
        class="instagram-media" 
        data-instgrm-captioned 
        data-instgrm-permalink="${url}?utm_source=ig_embed&utm_campaign=loading" 
        data-instgrm-version="14"
        style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 0; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
      </blockquote>
    `;

    postContainer.appendChild(embedContainer);

    if (containerRef.current) {
      containerRef.current.appendChild(postContainer);
    }

    return { postContainer, loadingPlaceholder, embedContainer };
  };

  // Function to initialize the first set of posts - wrapped in useCallback
  const initializeInstagramFeed = useCallback(() => {
    if (!containerRef.current) return [];

    // Clear container first
    containerRef.current.innerHTML = '';

    const initialPostsCount = 4;
    const elements: Array<{
      postContainer: HTMLDivElement;
      loadingPlaceholder: HTMLDivElement;
      embedContainer: HTMLDivElement;
    }> = [];

    // First show initial set of posts
    for (let i = 0; i < initialPostsCount && i < instagramPosts.length; i++) {
      elements.push(createInstagramEmbed(instagramPosts[i], i));
    }

    // Start cloning for infinite scroll effect
    for (let i = 0; i < initialPostsCount && i < instagramPosts.length; i++) {
      elements.push(createInstagramEmbed(instagramPosts[i], i + initialPostsCount));
    }

    return elements;
  }, [instagramPosts]);

  // Function to process embeds with retry capability - wrapped in useCallback
  const processEmbeds = useCallback((elements: Array<{
    postContainer: HTMLDivElement;
    loadingPlaceholder: HTMLDivElement;
    embedContainer: HTMLDivElement;
  }>, attemptCount = 0) => {
    if (window.instgrm?.Embeds?.process) {
      console.log('Processing Instagram embeds');
      window.instgrm.Embeds.process();

      setTimeout(() => {
        elements.forEach(({ loadingPlaceholder, embedContainer }) => {
          loadingPlaceholder.style.display = 'none';
          embedContainer.style.opacity = '1';
        });
      }, 500);

      return true;
    } else {
      const maxAttempts = 5;
      if (attemptCount < maxAttempts) {
        const backoffTime = Math.min(100 * Math.pow(1.5, attemptCount), 2000);
        console.log(`Instagram script not ready, retrying in ${backoffTime}ms (attempt ${attemptCount + 1}/${maxAttempts})`);

        setTimeout(() => {
          processEmbeds(elements, attemptCount + 1);
        }, backoffTime);
      } else {
        console.warn('Failed to load Instagram embeds after maximum retry attempts');

        elements.forEach(({ loadingPlaceholder }) => {
          loadingPlaceholder.innerHTML = '<i class="fas fa-exclamation-circle text-orange-500 text-3xl"></i>';
        });

        const retryOnInteraction = () => {
          if (window.instgrm?.Embeds) {
            processEmbeds(elements, 0);
            document.removeEventListener('click', retryOnInteraction);
          }
        };

        document.addEventListener('click', retryOnInteraction);
      }
      return false;
    }
  }, []);

  useEffect(() => {
    // Initialize Instagram script
    const loadInstagramScript = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
        return;
      }

      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = 'https://www.instagram.com/embed.js';
      script.onload = () => {
        window.__instagramScriptLoaded = true;
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    };

    // Create a reference to containerRef.current that can be used in cleanup function
    const containerRefCurrent = containerRef.current;

    // Initialize the feed
    const elements = initializeInstagramFeed();
    
    // Try to process embeds immediately
    const immediateSuccess = processEmbeds(elements);

    if (!immediateSuccess) {
      // Set up event handler for when the Instagram script loads
      window.addEventListener('load', () => {
        setTimeout(() => {
          processEmbeds(elements);
        }, 1000);
      });

      // Also set an event watcher for the script loaded flag
      const checkInterval = setInterval(() => {
        if (window.__instagramScriptLoaded && window.instgrm) {
          processEmbeds(elements);
          clearInterval(checkInterval);
        }
      }, 500);

      // Final fallback
      setTimeout(() => {
        processEmbeds(elements);
      }, 3000);
    }

    // Load Instagram script
    loadInstagramScript();

    // Cache Instagram posts data
    try {
      localStorage.setItem('instagramPosts', JSON.stringify(instagramPosts));
    } catch (e) {
      console.warn('Failed to cache Instagram data:', e);
    }

    // Cleanup
    return () => {
      const script = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
      if (script) {
        script.remove();
      }
      if (containerRefCurrent) {
        containerRefCurrent.innerHTML = '';
      }
    };
  }, [initializeInstagramFeed, instagramPosts, processEmbeds]);

  return (
    <section className="py-20 bg-[#FFFAEB]">
      <div className="container mx-auto max-w-[1280px] px-6">
        <div className="text-center mb-12">
          <div className="text-primary section-tag text-sm mb-3">SOCIAL MEDIA</div>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-[#152a43] mb-4 tracking-tight">
            FOLLOW OUR <span className="text-primary">JOURNEY</span>
          </h2>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto">
            Check out our latest content on social media and subscribe to stay updated with our newest builds and tech tips.
          </p>
        </div>

        {/* Instagram Feed */}
        <div className="social-content active">
          <div className="social-media-wrapper">
            <div ref={containerRef} className="social-media-track">
              {/* Posts will be inserted here by JavaScript */}
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/prodigyhyderabad/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-heading font-semibold text-base bg-gradient-primary text-white shadow-primary-custom hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(74,144,226,0.3)] transition-all duration-300"
            >
              <i className="fab fa-instagram mr-2"></i> Follow us on Instagram
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .social-media-track {
          display: flex;
          gap: 1rem;
          animation: social-media-scroll 30s linear infinite;
          padding: 0.5rem 0;
          width: fit-content;
        }
        
        .social-media-track:hover {
          animation-play-state: paused;
        }
        
        @keyframes social-media-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-300px * 4 - 1rem * 4)); }
        }
        
        .social-media-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
          padding: 0.5rem 0;
        }
        
        .social-media-wrapper::before,
        .social-media-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          width: 100px;
          height: 100%;
          z-index: 2;
        }
        
        .social-media-wrapper::before {
          left: 0;
          background: linear-gradient(to right, rgba(255, 250, 235, 1), rgba(255, 250, 235, 0));
        }
        
        .social-media-wrapper::after {
          right: 0;
          background: linear-gradient(to left, rgba(255, 250, 235, 1), rgba(255, 250, 235, 0));
        }
      `}</style>
    </section>
  );
};

// Type definition for window
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
    __instagramScriptLoaded?: boolean;
  }
}

export default SocialMedia;