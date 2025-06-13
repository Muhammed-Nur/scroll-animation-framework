# Scroll Animation Framework

A modern, performance-focused, and flexible JavaScript framework for implementing scroll-based animations in web pages with seamless integration with the popular Animate.css library.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![Size](https://img.shields.io/badge/size-~15KB-orange.svg)

## ✨ Features

- 🎨 **Animate.css Integration**: Full compatibility with the popular Animate.css library
- 🧩 **Intersection Observer API**: Modern and performant scroll detection
- 🎪 **Automatic Element Detection**: Smart element detection based on CSS classes
- 💫 **Stagger Animations**: Sequential animations for elements within containers
- ♿ **Accessibility Support**: Automatic adaptation to reduced motion preferences
- 🚀 **Performance Monitoring**: Real-time performance metrics
- 📊 **Debug Mode**: Detailed logging to facilitate development process (CTRL + D)

## 🚀 Quick Start

### 1. Include Dependencies

```html
<!-- Animate.css -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">

<!-- Local Animate.css -->
<link rel= "stylesheet" href= "../dist/animate-css/animate.min.css" >

<!-- Scroll Animation Framework -->
<script src="../dist/js/scroll-animation-framework.min.js"></script>
```

### 2. Basic Usage

```html
<!-- Simple fade in animation -->
<div data-scroll-animate="fadeIn">
  <h1>Hello World!</h1>
</div>

<!-- Custom animation with delay -->
<div data-scroll-animate="bounceIn" data-scroll-delay="300">
  <p>This appears with a bounce effect after 300ms</p>
</div>

<!-- Container with staggered children -->
<div data-scroll-container data-scroll-animation="slideInUp" data-scroll-stagger="100">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```

### 3. Auto-Detection

Elements are automatically detected based on common CSS classes:

```html
<!-- These will animate automatically -->
<div class="card">Auto-animated card</div>
<h1 class="hero-title">Auto-animated title</h1>
<div class="feature-box">Auto-animated feature</div>
```

## 📚 Documentation

### Data Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `data-scroll-animate` | Animation name | `fadeIn`, `bounceIn`, `slideInUp` |
| `data-scroll-duration` | Animation duration | `1s`, `500ms`, `2s` |
| `data-scroll-delay` | Animation delay | `300`, `500` (in ms) |
| `data-scroll-callback` | Callback function name | `myCallback` |

### Container Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `data-scroll-container` | Marks container for staggered animations | - |
| `data-scroll-animation` | Animation for all children | `fadeInUp` |
| `data-scroll-stagger` | Delay between child animations | `150` (in ms) |

### Available Animations

The framework includes all Animate.css animations organized by category:

#### Attention Seekers
`bounce`, `flash`, `pulse`, `rubberBand`, `shakeX`, `shakeY`, `headShake`, `swing`, `tada`, `wobble`, `jello`, `heartBeat`

#### Fading Entrances
`fadeIn`, `fadeInDown`, `fadeInLeft`, `fadeInRight`, `fadeInUp`, `fadeInTopLeft`, `fadeInTopRight`, `fadeInBottomLeft`, `fadeInBottomRight`

#### Bouncing Entrances
`bounceIn`, `bounceInDown`, `bounceInLeft`, `bounceInRight`, `bounceInUp`

#### Sliding Entrances
`slideInDown`, `slideInLeft`, `slideInRight`, `slideInUp`

#### Zooming Entrances
`zoomIn`, `zoomInDown`, `zoomInLeft`, `zoomInRight`, `zoomInUp`

#### Rotating Entrances
`rotateIn`, `rotateInDownLeft`, `rotateInDownRight`, `rotateInUpLeft`, `rotateInUpRight`

#### Flippers
`flip`, `flipInX`, `flipInY`

#### Specials
`hinge`, `jackInTheBox`, `rollIn`

#### Shortcuts
`fade`, `slide-up`, `slide-down`, `slide-left`, `slide-right`, `zoom`, `elastic`, `attention`

## ⚙️ Configuration

### Global Configuration

```javascript
// Auto-initialization with custom config
window.SCROLL_ANIMATOR_CONFIG = {
  defaultAnimation: 'fadeInUp',
  defaultDuration: '0.8s',
  staggerDelay: 200,
  debug: true,
  performanceMonitor: true,
  threshold: [0, 0.25, 0.5, 0.75, 1.0],
  rootMargin: '0px 0px -50px 0px'
};
```

### Manual Initialization

```javascript
const animator = new ScrollAnimationFramework({
  debug: true,
  defaultAnimation: 'bounceIn',
  staggerDelay: 300,
  onElementAnimated: (element, config) => {
    console.log('Element animated:', element);
  },
  onAllAnimationsComplete: () => {
    console.log('All animations completed!');
  }
});
```

## 🎮 API Reference

### Methods

```javascript
// Add element dynamically
scrollAnimator.addElement(element, {
  animation: 'bounceIn',
  duration: '1s',
  delay: 200
});

// Remove element from observation
scrollAnimator.removeElement(element);

// Trigger animation manually
scrollAnimator.triggerAnimation('.my-selector', {
  animation: 'zoomIn',
  duration: '0.5s'
});

// Reset all animations
scrollAnimator.resetAllAnimations();

// Update configuration
scrollAnimator.updateConfig({
  defaultAnimation: 'slideInLeft',
  staggerDelay: 100
});

// Get statistics
const stats = scrollAnimator.getStats();
console.log(stats);

// Pause/Resume animations
scrollAnimator.pauseAnimations();
scrollAnimator.resumeAnimations();

// Destroy instance
scrollAnimator.destroy();
```

### Events

```javascript
// Listen for animation completion
document.addEventListener('scrollAnimationComplete', (event) => {
  const { element, config } = event.detail;
  console.log('Animation completed:', element, config);
});
```

## 🎯 Advanced Usage

### Custom Class Mappings

```javascript
const animator = new ScrollAnimationFramework({
  classMappings: {
    'my-card': 'bounceIn',
    'my-title': 'slideInDown',
    'my-button': 'pulse'
  }
});
```

### Performance Monitoring

```javascript
const animator = new ScrollAnimationFramework({
  performanceMonitor: true,
  debug: true
});

// Get performance metrics
const stats = animator.getStats();
console.log('Average animation time:', stats.performanceMetrics);
```

### Accessibility

The framework automatically respects user preferences:

- Honors `prefers-reduced-motion: reduce`
- Provides semantic animations
- Maintains focus management

## 🐛 Debug Mode

Enable debug mode to monitor performance:

```html
<!-- Add debug panel to your page -->
<div id="debugPanel" class="debug-panel">
  <h3>Animation Debug</h3>
  <div>Observed: <span id="observedCount">0</span></div>
  <div>Animated: <span id="animatedCount">0</span></div>
  <div>Performance: <span id="performanceInfo">Good</span></div>
</div>
```

```javascript
const animator = new ScrollAnimationFramework({
  debug: true,
  performanceMonitor: true
});
```

## 🌐 Browser Support

- Chrome 58+
- Firefox 55+
- Safari 12.1+
- Edge 16+

## 📦 Installation

### Download

Download the latest release from the [releases page](https://github.com/Muhammed-Nur/scroll-animation-framework/releases/).

## 🎨 Examples

### Basic Card Animation

```html
<div class="card" data-scroll-animate="slideInUp" data-scroll-delay="200">
  <h3>Card Title</h3>
  <p>Card content with smooth animation</p>
</div>
```

### Staggered List

```html
<ul data-scroll-container data-scroll-animation="fadeInLeft" data-scroll-stagger="100">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
```

### Hero Section

```html
<section class="hero">
  <h1 data-scroll-animate="fadeInDown" data-scroll-duration="1.2s">
    Welcome to Our Site
  </h1>
  <p data-scroll-animate="fadeInUp" data-scroll-delay="300">
    Beautiful animations made easy
  </p>
  <button data-scroll-animate="bounceIn" data-scroll-delay="600">
    Get Started
  </button>
</section>
```

## 🔧 Customization

### Custom Animation Presets

```javascript
const animator = new ScrollAnimationFramework({
  presets: {
    'my-custom-animation': {
      animation: 'fadeIn',
      duration: '2s',
      delay: 500
    }
  }
});
```

### CSS Custom Properties

```css
:root {
  --animate-duration: 1s;
  --animate-delay: 0.5s;
}

.custom-animation {
  animation-duration: var(--animate-duration);
  animation-delay: var(--animate-delay);
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Animate.css](https://animate.style/) for the amazing animation library
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) for efficient scroll detection

---

Made with ❤️ by [Muhammed Nur Taşova](https://github.com/Muhammed-Nur)
