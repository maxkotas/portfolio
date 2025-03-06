import React, { useEffect, useRef } from "react";
import "../style.css";

function GridBackground() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false });
    
    // For high DPI displays
    const dpr = window.devicePixelRatio || 1;
    
    function setupCanvas() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    }
    
    setupCanvas();
    
    // Colors from your theme with higher opacity for better visibility on white
    const colors = [
      'rgba(255, 107, 107, 0.12)',  // Red accent
      'rgba(0, 184, 148, 0.12)',    // Green accent
      'rgba(0, 206, 201, 0.12)'     // Teal accent
    ];
    
    // Generate horizontal squiggly lines
    class SquigglyLine {
      constructor(y, color, index) {
        this.y = y;
        this.color = color;
        this.lineWidth = 0.7; // Thinner lines for finer appearance
        this.amplitude = 12 + (index % 3) * 4; // Fixed amplitude regardless of screen size
        this.frequency = 0.008 + (index % 5) * 0.002; // Consistent frequency
        this.speed = 0.2 + (index % 4) * 0.05; // Consistent speed
        this.offset = index * 200; // Different starting points
        this.resolution = 1; // High resolution
      }
      
      update() {
        this.offset += this.speed;
      }
      
      draw() {
        const displayWidth = canvas.width / dpr;
        
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        
        // Draw with higher precision for larger screens
        const step = Math.max(0.5, this.resolution);
        
        for (let x = 0; x <= displayWidth; x += step) {
          // Calculate y with sine wave - amplitude stays constant
          const waveY = this.y + Math.sin((x + this.offset) * this.frequency) * this.amplitude;
          
          if (x === 0) {
            ctx.moveTo(x, waveY);
          } else {
            ctx.lineTo(x, waveY);
          }
        }
        
        ctx.stroke();
      }
    }
    
    // Fixed spacing between lines - never changes
    const spacing = 40;
    let lines = [];
    
    // Create lines based on current height with fixed spacing
    function createLines() {
      lines = [];
      const displayHeight = canvas.height / dpr;
      // Calculate exact number of lines needed
      const lineCount = Math.ceil(displayHeight / spacing) + 1;
      
      for (let i = 0; i < lineCount; i++) {
        const y = i * spacing;
        const colorIndex = i % colors.length;
        lines.push(new SquigglyLine(y, colors[colorIndex], i));
      }
    }
    
    // Initial line creation
    createLines();
    
    // Animation loop
    function animate() {
      // Clear canvas with white
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      
      // Update and draw lines
      lines.forEach(line => {
        line.update();
        line.draw();
      });
      
      requestAnimationFrame(animate);
    }
    
    // Handle resize properly
    function handleResize() {
      setupCanvas();
      createLines();
    }
    
    window.addEventListener('resize', handleResize);
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="flowing-background-container">
      <canvas ref={canvasRef} className="flowing-canvas"></canvas>
    </div>
  );
}

export default GridBackground; 