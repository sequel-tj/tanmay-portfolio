// source -> https://github.com/kaizhelam/Hacking-Matrix-Rain-Effect

const canvas = document.getElementById('matrixcanvas');
const context = canvas.getContext('2d');
let W = window.innerWidth;
let H = window.innerHeight;

canvas.width = W;
canvas.height = H;

const fontSize = 12;
let columns = Math.floor(W / fontSize);
let drops = Array.from({length: columns}, () => Math.floor(Math.random() * -100));

// Tech stack
const techStack = [
    "Ruby", "Rails", "gRPC", "Kafka", 
    "PostgreSQL", "AWS", "Java", "Spring",
    "Boot", "Temporal", "Docker", "Microservices"
];

let techIndex = 0;
let charIndex = 0;
let currentTech = techStack[0];

// Colors
const normalColor = "#00cc3350"; // Green with 50% opacity
const hoverColor = "#00cc33";    // Solid green

// Hover effect
let mouseX = -1000, mouseY = -1000;
let hoverIntensity = 0; // 0 to 1 for smooth transition
let hoverRadius = 80;
let animationId;

// Mouse tracking
let isMouseOverCanvas = false;

function draw() {
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, W, H);
    context.font = `700 ${fontSize}px monospace`;
    
    // Smoothly adjust hover intensity
    hoverIntensity += (isMouseOverCanvas ? 0.1 : -0.05);
    hoverIntensity = Math.max(0, Math.min(1, hoverIntensity));
    
    for(let i = 0; i < columns; i++) {
        const char = currentTech[charIndex] || " ";
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        const columnX = x + fontSize/2;
        const distance = Math.abs(columnX - mouseX);
        
        // Calculate color based on distance and intensity
        if (hoverIntensity > 0 && distance < hoverRadius) {
            const distanceFactor = 1 - (distance / hoverRadius);
            const blendFactor = distanceFactor * hoverIntensity;
            
            // Simple: Use solid green on hover
            context.fillStyle = hoverColor;
            
            // Optional: Add glow for closest columns
            if (blendFactor > 0.8) {
                context.shadowBlur = 0.2 * blendFactor;
                context.shadowColor = hoverColor;
            }
            
            // Slow down in hover area
            const speed = 0.3 + (0.7 * (1 - blendFactor));
            drops[i] += speed;
            
        } else {
            // Normal drawing
            context.fillStyle = normalColor;
            drops[i] += 1;
        }
        
        // Draw the character
        context.fillText(char, x, y);
        
        // Reset shadow
        context.shadowBlur = 0;
        
        // Reset if bottom reached
        if(y >= H && Math.random() > 0.99) {
            drops[i] = Math.floor(Math.random() * -100);
        }
    }
    
    charIndex = (charIndex + 1) % currentTech.length;
    if(charIndex === 0) {
        techIndex = (techIndex + 1) % techStack.length;
        currentTech = techStack[techIndex];
    }
    
    animationId = requestAnimationFrame(draw);
}

// Mouse handlers
canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    
    if (!isMouseOverCanvas) {
        isMouseOverCanvas = true;
    }
});

canvas.addEventListener('mouseleave', () => {
    isMouseOverCanvas = false;
    mouseX = -1000;
    mouseY = -1000;
});

// Handle window resize
window.addEventListener('resize', () => {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    columns = Math.floor(W / fontSize);
    drops = Array.from({length: columns}, () => Math.floor(Math.random() * -100));
});

// Start animation
draw();