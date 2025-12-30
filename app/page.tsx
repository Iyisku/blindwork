"use client";

import { useEffect, useState } from "react";

type CarouselSlide = {
  src: string;
  alt: string;
  title: string;
  tag: string;
};

const carouselSlides: CarouselSlide[] = [
  {
    src: "https://images.pexels.com/photos/3373719/pexels-photo-3373719.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Pink gaming setup with neon lights",
    title: "late night grind fr",
    tag: "no heals, only vibes lol",
  },
  {
    src: "https://images.pexels.com/photos/4132363/pexels-photo-4132363.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Soft pink neon room aesthetic",
    title: "lock in bestie",
    tag: "aim diff ong xd",
  },
  {
    src: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Pink wall art and palm leaves",
    title: "touching grass arc",
    tag: "side quest energy syfm",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScrollToSection = (id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 16;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    const total = carouselSlides.length;
    const nextIndex = ((index % total) + total) % total;
    setCurrentSlide(nextIndex);
  };

  return (
    <main className="gf-main">
      <div className="ppg-layer" aria-hidden="true">
        <img
          className="ppg-img ppg-img--blossom"
          src="https://imgs.search.brave.com/_xU3hA8iSre0sJI9yUN77j-so4fu6vsDS_AMOVn8tKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcG93/ZXJwdWZmLWdpcmxz/LWJsb3Nzb20tY2hh/cmFjdGVyLWhpZjh3/YzR3ZGR3OWtweGIu/cG5n"
          alt=""
        />
        <img
          className="ppg-img ppg-img--bubbles"
          src="https://imgs.search.brave.com/QEivvr-SKVbkIckpRbybiDYQD3HnXOLavftXZBMzII8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTIvUG93/ZXJwdWZmLUdpcmxz/LUJ1dHRlcmN1cC5w/bmc"
          alt=""
        />
        <img
          className="ppg-img ppg-img--buttercup"
          src="https://imgs.search.brave.com/ZlzEojluzM79dfDyYaNGdi2kS_hl9gGqrAQjiKBe9Zk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvOC9CdWJi/bGVzLVBvd2VycHVm/Zi1HaXJscy1QTkct/Q2xpcGFydC1CYWNr/Z3JvdW5kLnBuZw"
          alt=""
        />
        <img
          className="ppg-img ppg-img--hearts"
          src="https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
      </div>
      <header className="top-bar">
        <div className="brand">
          <div className="brand-text">
            <h1>baddie gallery</h1>
            <p>pink pixels only, girl you slay</p>
          </div>
        </div>
        <nav className="nav" aria-label="Gallery sections">
          <button onClick={() => handleScrollToSection("cinematic-hover")}>
            <span className="dot" />
            hover lane
          </button>
          <button onClick={() => handleScrollToSection("carousel")}>
            <span className="dot" />
            dreamy slides
          </button>
          <button onClick={() => handleScrollToSection("grid")}>
            <span className="dot" />
            cute grid
          </button>
          <button onClick={() => handleScrollToSection("chaos")}>
            <span className="dot" />
            pretty chaos
          </button>
        </nav>
      </header>

      <section className="intro-card">
        <div className="intro-grid">
          <div className="intro-copy">
            <div className="badge-row">
              <div className="badge">
                <span className="badge-pulse" />
                soft girl energy
              </div>
              <div className="badge">made for cute pics only</div>
            </div>
            <h2>
              <span className="highlight">baddie mode</span> soft pink, hard slay.
            </h2>
            <p>
              Just a girly gallery – hover, slide, scroll and let the main character era load in.
            </p>
            <div className="section-pill-row">
              <div className="section-pill">
                <span className="num">01</span>
                hover lane
              </div>
              <div className="section-pill">
                <span className="num">02</span>
                carousel slay
              </div>
              <div className="section-pill">
                <span className="num">03</span>
                cute grid
              </div>
              <div className="section-pill">
                <span className="num">04</span>
                pretty chaos
              </div>
            </div>
          </div>
          <div className="intro-art">
            <div className="intro-art-orbit" />
            <div className="intro-art-core">
              <div className="intro-art-strip">
                <div className="intro-art-img">
                  <img
                    src="https://images.pexels.com/photos/3373719/pexels-photo-3373719.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Pink gaming PC setup"
                  />
                </div>
                <div className="intro-art-img">
                  <img
                    src="https://images.pexels.com/photos/4132363/pexels-photo-4132363.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Soft pink neon bedroom"
                  />
                </div>
                <div className="intro-art-img">
                  <img
                    src="https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Pink wall art and plants"
                  />
                </div>
              </div>
              <div className="intro-art-floating-tag">
                <span className="light" />
                hover to focus
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Cinematic hover gallery */}
      <section className="gallery-section" id="cinematic-hover">
        <div className="section-header">
          <div className="section-title">
            <div className="section-chip">1</div>
            <h3>hover lane, bestie</h3>
          </div>
          <p className="section-subtitle">
            Glide over each frame and watch the glow up, one hover at a time.
          </p>
        </div>
        <div className="hover-gallery">
          <div className="hover-gallery-item" data-label="soft setup">
            <img
              src="https://images.pexels.com/photos/7915355/pexels-photo-7915355.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Girl holding controller in pink light"
            />
          </div>
          <div className="hover-gallery-item" data-label="cozy vibes">
            <img
              src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Neon city with pink tones"
            />
          </div>
          <div className="hover-gallery-item" data-label="dream room">
            <img
              src="https://images.pexels.com/photos/4132363/pexels-photo-4132363.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Soft pink neon bedroom"
            />
          </div>
          <div className="hover-gallery-item" data-label="desk slay">
            <img
              src="https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Cute retro console setup"
            />
          </div>
        </div>
      </section>

      {/* 2. Carousel */}
      <section className="gallery-section" id="carousel">
        <div className="section-header">
          <div className="section-title">
            <div className="section-chip">2</div>
            <h3>carousel go brr</h3>
          </div>
          <p className="section-subtitle">
            Big, slow, cinematic frames. Use the arrows or let it glide automatically.
          </p>
        </div>
        <div className="carousel-wrapper">
          <div className="carousel">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselSlides.map((slide, index) => (
                <div
                  key={slide.src}
                  className={`carousel-slide ${index === currentSlide ? "is-active" : ""}`}
                >
                  <img src={slide.src} alt={slide.alt} />
                  <div className="carousel-gradient-top" />
                  <div className="carousel-gradient-bot" />
                  <div className="carousel-meta">
                    <div className="carousel-meta-title">{slide.title}</div>
                    <div className="carousel-meta-tag">{slide.tag}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-controls">
            <button
              className="carousel-arrow"
              aria-label="Previous slide"
              onClick={() => goToSlide(currentSlide - 1)}
              type="button"
            >
              &#10094;
            </button>
            <div className="carousel-dots">
              {carouselSlides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  className={`carousel-dot ${index === currentSlide ? "is-active" : ""}`}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
            <button
              className="carousel-arrow"
              aria-label="Next slide"
              onClick={() => goToSlide(currentSlide + 1)}
              type="button"
            >
              &#10095;
            </button>
          </div>
        </div>
      </section>

      {/* 3. Grid gallery */}
      <section className="gallery-section" id="grid">
        <div className="section-header">
          <div className="section-title">
            <div className="section-chip">3</div>
            <h3>cute little grid</h3>
          </div>
          <p className="section-subtitle">
            Tiny tiles for every aesthetic – soft girl desk, late night glow, all of it.
          </p>
        </div>
        <div className="grid-gallery">
          <div className="grid-item">
            <img
              src="https://images.pexels.com/photos/3373719/pexels-photo-3373719.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Pink gaming desk setup"
            />
            <div className="grid-item-label">
              <span>soft girl</span>
              <span>desk slay</span>
            </div>
          </div>
          <div className="grid-item">
            <img
              src="https://images.pexels.com/photos/4132363/pexels-photo-4132363.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Pink neon room"
            />
            <div className="grid-item-label">
              <span>night glow</span>
              <span>you ate</span>
            </div>
          </div>
          <div className="grid-item">
            <img
              src="https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Pink art wall"
            />
            <div className="grid-item-label">
              <span>wall art</span>
              <span>main char</span>
            </div>
          </div>
          <div className="grid-item">
            <img
              src="https://images.pexels.com/photos/907173/pexels-photo-907173.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Console on pink-ish desk"
            />
            <div className="grid-item-label">
              <span>brb glam</span>
              <span>queue later</span>
            </div>
          </div>
          <div className="grid-item">
            <img
              src="https://images.pexels.com/photos/3945665/pexels-photo-3945665.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Forest path with soft light"
            />
            <div className="grid-item-label">
              <span>side quest</span>
              <span>cute walk</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Chaos wall */}
      <section className="gallery-section" id="chaos">
        <div className="section-header">
          <div className="section-title">
            <div className="section-chip">4</div>
            <h3>pretty chaos wall</h3>
          </div>
          <p className="section-subtitle">
            Polaroid energy – cute pics tossed everywhere but somehow still a serve.
          </p>
        </div>
        <div className="chaos-wall">
          <div className="chaos-label">
            <span className="line" />
            girly scrapbook chaos
          </div>
          <div className="chaos-img">
            <img
              src="https://images.pexels.com/photos/4132363/pexels-photo-4132363.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Pink neon bedroom"
            />
          </div>
          <div className="chaos-img">
            <img
              src="https://images.pexels.com/photos/3373719/pexels-photo-3373719.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Pink gaming desk"
            />
          </div>
          <div className="chaos-img">
            <img
              src="https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Pink wall art"
            />
          </div>
          <div className="chaos-img">
            <img
              src="https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Cute retro console"
            />
          </div>
          <div className="chaos-img">
            <img
              src="https://images.pexels.com/photos/907173/pexels-photo-907173.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Console on cozy desk"
            />
          </div>
          <div className="chaos-img">
            <img
              src="https://images.pexels.com/photos/3945673/pexels-photo-3945673.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Soft valley scene"
            />
          </div>
          <div className="chaos-note">drag later bestie — right now it&#39;s giving scrapbook slay</div>
        </div>
      </section>
    </main>
  );
}
