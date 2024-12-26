import React, { useRef, useEffect } from 'react';
import './css/hackertext.css';

const TextScramble = ({ phrases }) => {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    const chars = "!<>-_\\/[]{}—=+*^?#________";

    class TextScramble {
      constructor(el) {
        this.el = el;
        this.chars = chars;
        this.update = this.update.bind(this);
      }
      setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => (this.resolve = resolve));
        this.queue = [];
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || '';
          const to = newText[i] || '';
          const start = Math.floor(Math.random() * 40);
          const end = start + Math.floor(Math.random() * 40);
          this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }
      update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];
          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
            output += `<span class="dud">${char}</span>`;
          } else {
            output += from;
          }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
          this.resolve();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }
      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }

    const fx = new TextScramble(el);

    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 800);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();

    // Cleanup function
    return () => {
      cancelAnimationFrame(fx.frameRequest);
    };
  }, [phrases]);

  return <div ref={elRef} className="text" />;
};

const HackerText = () => {
  const phrases = [
    'Hello World!',
    'I am SHRI VIGNESH',
    'An Aspiring Full Stack Developer',
    'I love to code',
    'I love to learn new things',
  ];

  return <TextScramble phrases={phrases} />;
};

export default HackerText;
