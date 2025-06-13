/**
 * Advanced Scroll Animation Framework with Animate.css Integration
 * Modern, performant, and flexible scroll animation system
 * 000660010500115001090010500108001080009700104001050011400114000970010400109000970011000105001140011400097001040010500109
 */
class ScrollAnimationFramework {
    constructor(config = {}) {
        this.config = {
            // Basic settings
            threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
            rootMargin: "0px 0px -100px 0px",

            // Animation settings
            defaultAnimation: "fadeInUp",
            defaultDuration: "1s",
            defaultDelay: 0,

            // Stagger settings
            staggerDelay: 150,

            // Debug settings
            debug: false,
            performanceMonitor: false,

            // Selectors
            selectors: {
                animated: "[data-scroll-animate]",
                container: "[data-scroll-container]",
                trigger: "[data-scroll-trigger]",
                ignore: "[data-scroll-ignore]",
            },

            // Animation presets with correct Animate.css classes
            presets: {
                // Attention Seekers
                bounce: { animation: "bounce", duration: "1s" },
                flash: { animation: "flash", duration: "1s" },
                pulse: { animation: "pulse", duration: "1s" },
                rubberBand: { animation: "rubberBand", duration: "1s" },
                shakeX: { animation: "shakeX", duration: "1s" },
                shakeY: { animation: "shakeY", duration: "1s" },
                headShake: { animation: "headShake", duration: "1s" },
                swing: { animation: "swing", duration: "1s" },
                tada: { animation: "tada", duration: "1s" },
                wobble: { animation: "wobble", duration: "1s" },
                jello: { animation: "jello", duration: "1s" },
                heartBeat: { animation: "heartBeat", duration: "1.3s" },

                // Back Entrances
                backInDown: { animation: "backInDown", duration: "1s" },
                backInLeft: { animation: "backInLeft", duration: "1s" },
                backInRight: { animation: "backInRight", duration: "1s" },
                backInUp: { animation: "backInUp", duration: "1s" },

                // Back Exits
                backOutDown: { animation: "backOutDown", duration: "1s" },
                backOutLeft: { animation: "backOutLeft", duration: "1s" },
                backOutRight: { animation: "backOutRight", duration: "1s" },
                backOutUp: { animation: "backOutUp", duration: "1s" },

                // Bouncing Entrances
                bounceIn: { animation: "bounceIn", duration: "0.75s" },
                bounceInDown: { animation: "bounceInDown", duration: "1s" },
                bounceInLeft: { animation: "bounceInLeft", duration: "1s" },
                bounceInRight: { animation: "bounceInRight", duration: "1s" },
                bounceInUp: { animation: "bounceInUp", duration: "1s" },

                // Bouncing Exits
                bounceOut: { animation: "bounceOut", duration: "0.75s" },
                bounceOutDown: { animation: "bounceOutDown", duration: "1s" },
                bounceOutLeft: { animation: "bounceOutLeft", duration: "1s" },
                bounceOutRight: { animation: "bounceOutRight", duration: "1s" },
                bounceOutUp: { animation: "bounceOutUp", duration: "1s" },

                // Fading Entrances
                fadeIn: { animation: "fadeIn", duration: "1s" },
                fadeInDown: { animation: "fadeInDown", duration: "1s" },
                fadeInDownBig: { animation: "fadeInDownBig", duration: "1.3s" },
                fadeInLeft: { animation: "fadeInLeft", duration: "1s" },
                fadeInLeftBig: { animation: "fadeInLeftBig", duration: "1.3s" },
                fadeInRight: { animation: "fadeInRight", duration: "1s" },
                fadeInRightBig: { animation: "fadeInRightBig", duration: "1.3s" },
                fadeInUp: { animation: "fadeInUp", duration: "1s" },
                fadeInUpBig: { animation: "fadeInUpBig", duration: "1.3s" },
                fadeInTopLeft: { animation: "fadeInTopLeft", duration: "1s" },
                fadeInTopRight: { animation: "fadeInTopRight", duration: "1s" },
                fadeInBottomLeft: { animation: "fadeInBottomLeft", duration: "1s" },
                fadeInBottomRight: { animation: "fadeInBottomRight", duration: "1s" },

                // Fading Exits
                fadeOut: { animation: "fadeOut", duration: "1s" },
                fadeOutDown: { animation: "fadeOutDown", duration: "1s" },
                fadeOutDownBig: { animation: "fadeOutDownBig", duration: "1.3s" },
                fadeOutLeft: { animation: "fadeOutLeft", duration: "1s" },
                fadeOutLeftBig: { animation: "fadeOutLeftBig", duration: "1.3s" },
                fadeOutRight: { animation: "fadeOutRight", duration: "1s" },
                fadeOutRightBig: { animation: "fadeOutRightBig", duration: "1.3s" },
                fadeOutUp: { animation: "fadeOutUp", duration: "1s" },
                fadeOutUpBig: { animation: "fadeOutUpBig", duration: "1.3s" },
                fadeOutTopLeft: { animation: "fadeOutTopLeft", duration: "1s" },
                fadeOutTopRight: { animation: "fadeOutTopRight", duration: "1s" },
                fadeOutBottomRight: { animation: "fadeOutBottomRight", duration: "1s" },
                fadeOutBottomLeft: { animation: "fadeOutBottomLeft", duration: "1s" },

                // Flippers
                flip: { animation: "flip", duration: "1s" },
                flipInX: { animation: "flipInX", duration: "1s" },
                flipInY: { animation: "flipInY", duration: "1s" },
                flipOutX: { animation: "flipOutX", duration: "0.75s" },
                flipOutY: { animation: "flipOutY", duration: "0.75s" },

                // Lightspeed
                lightSpeedInRight: { animation: "lightSpeedInRight", duration: "1s" },
                lightSpeedInLeft: { animation: "lightSpeedInLeft", duration: "1s" },
                lightSpeedOutRight: { animation: "lightSpeedOutRight", duration: "1s" },
                lightSpeedOutLeft: { animation: "lightSpeedOutLeft", duration: "1s" },

                // Rotating Entrances
                rotateIn: { animation: "rotateIn", duration: "1s" },
                rotateInDownLeft: { animation: "rotateInDownLeft", duration: "1s" },
                rotateInDownRight: { animation: "rotateInDownRight", duration: "1s" },
                rotateInUpLeft: { animation: "rotateInUpLeft", duration: "1s" },
                rotateInUpRight: { animation: "rotateInUpRight", duration: "1s" },

                // Rotating Exits
                rotateOut: { animation: "rotateOut", duration: "1s" },
                rotateOutDownLeft: { animation: "rotateOutDownLeft", duration: "1s" },
                rotateOutDownRight: { animation: "rotateOutDownRight", duration: "1s" },
                rotateOutUpLeft: { animation: "rotateOutUpLeft", duration: "1s" },
                rotateOutUpRight: { animation: "rotateOutUpRight", duration: "1s" },

                // Sliding Entrances
                slideInDown: { animation: "slideInDown", duration: "1s" },
                slideInLeft: { animation: "slideInLeft", duration: "1s" },
                slideInRight: { animation: "slideInRight", duration: "1s" },
                slideInUp: { animation: "slideInUp", duration: "1s" },

                // Sliding Exits
                slideOutDown: { animation: "slideOutDown", duration: "1s" },
                slideOutLeft: { animation: "slideOutLeft", duration: "1s" },
                slideOutRight: { animation: "slideOutRight", duration: "1s" },
                slideOutUp: { animation: "slideOutUp", duration: "1s" },

                // Zooming Entrances
                zoomIn: { animation: "zoomIn", duration: "1s" },
                zoomInDown: { animation: "zoomInDown", duration: "1s" },
                zoomInLeft: { animation: "zoomInLeft", duration: "1s" },
                zoomInRight: { animation: "zoomInRight", duration: "1s" },
                zoomInUp: { animation: "zoomInUp", duration: "1s" },

                // Zooming Exits
                zoomOut: { animation: "zoomOut", duration: "1s" },
                zoomOutDown: { animation: "zoomOutDown", duration: "1.5s" },
                zoomOutLeft: { animation: "zoomOutLeft", duration: "1s" },
                zoomOutRight: { animation: "zoomOutRight", duration: "1s" },
                zoomOutUp: { animation: "zoomOutUp", duration: "1s" },

                // Specials
                hinge: { animation: "hinge", duration: "2s" },
                jackInTheBox: { animation: "jackInTheBox", duration: "1s" },
                rollIn: { animation: "rollIn", duration: "1s" },
                rollOut: { animation: "rollOut", duration: "1s" },

                // Common shortcuts for easier usage
                fade: { animation: "fadeIn", duration: "0.8s" },
                "slide-up": { animation: "fadeInUp", duration: "0.8s" },
                "slide-down": { animation: "fadeInDown", duration: "0.8s" },
                "slide-left": { animation: "fadeInLeft", duration: "0.8s" },
                "slide-right": { animation: "fadeInRight", duration: "0.8s" },
                zoom: { animation: "zoomIn", duration: "0.6s" },
                elastic: { animation: "bounceIn", duration: "1.2s" },
                attention: { animation: "pulse", duration: "1s" },
                jack: { animation: "jackInTheBox", duration: "1s" },
            },

            // Auto class detection mappings
            classMappings: {
                card: "slide-up",
                "hero-title": "fade",
                "stats-item": "bounce",
                "feature-box": "slide-left",
                testimonial: "slide-right",
                "section-title": "slide-down",
                button: "bounce",
                "demo-card": "zoom",
            },

            // Callbacks
            onElementAnimated: null,
            onAllAnimationsComplete: null,

            ...config,
        };

        this.observer = null;
        this.animatedElements = new Set();
        this.observedElements = new Set();
        this.containerElements = new Map();
        this.stats = {
            totalElements: 0,
            animatedCount: 0,
            performanceMetrics: [],
        };

        this.init();
    }

    init() {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.createObserver();
        this.scanForElements();
        this.setupMutationObserver();
        this.setupAccessibility();
        this.setupPerformanceMonitoring();

        if (this.config.debug) {
            // console.log("ScrollAnimationFramework initialized", this.config);
            this.startDebugPanel();
        }

        // Initial stats update
        this.updateStats();
    }

    createObserver() {
        const options = {
            threshold: this.config.threshold,
            rootMargin: this.config.rootMargin,
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                    this.handleElementAnimation(entry.target);
                }
            });
        }, options);
    }

    scanForElements() {
        // 1. Explicit animated elements
        this.scanAnimatedElements();

        // 2. Container-based elements
        this.scanContainerElements();

        // 3. Class-based auto-detection
        this.scanClassBasedElements();

        // Update stats
        this.stats.totalElements = this.observedElements.size;
    }

    scanAnimatedElements() {
        const elements = document.querySelectorAll(this.config.selectors.animated);
        elements.forEach((element) => {
            if (!element.matches(this.config.selectors.ignore)) {
                this.prepareElement(element);
                this.observer.observe(element);
                this.observedElements.add(element);
            }
        });
    }

    scanContainerElements() {
        const containers = document.querySelectorAll(
            this.config.selectors.container
        );
        containers.forEach((container) => {
            const children = Array.from(container.children);
            const containerConfig = this.parseDataAttributes(
                container,
                "scroll-container"
            );
            const staggerDelay =
                parseInt(containerConfig.stagger) || this.config.staggerDelay;

            children.forEach((child, index) => {
                const childConfig = {
                    ...containerConfig,
                    delay: (containerConfig.delay || 0) + index * staggerDelay,
                };

                this.prepareElement(child, childConfig);
                this.observer.observe(child);
                this.observedElements.add(child);
            });
        });
    }

    scanClassBasedElements() {
        Object.entries(this.config.classMappings).forEach(([className, preset]) => {
            const selector = `.${className}:not([data-scroll-animate]):not(${this.config.selectors.ignore})`;
            const elements = document.querySelectorAll(selector);

            elements.forEach((element) => {
                const presetConfig = this.config.presets[preset] || {};
                this.prepareElement(element, presetConfig);
                this.observer.observe(element);
                this.observedElements.add(element);
            });
        });
    }

    prepareElement(element, config = {}) {
        if (element.dataset.scrollPrepared) return;

        const elementConfig = {
            ...this.parseDataAttributes(element, "scroll"),
            ...config,
        };

        // Animation determination
        const animation =
            elementConfig.animation ||
            elementConfig.animate ||
            this.config.defaultAnimation;

        // Preset check
        if (this.config.presets[animation]) {
            Object.assign(elementConfig, this.config.presets[animation]);
        }

        // Store config
        element._scrollConfig = elementConfig;
        element.dataset.scrollPrepared = "true";

        // Set initial state
        this.setInitialState(element);

        // Debug log
        // if (this.config.debug) {
        //     console.log('Element prepared:', element, 'Config:', elementConfig);
        // }
    }

    setInitialState(element) {
        // Animate.css için gerekli base class
        element.classList.add("animate__animated");
        
        // Element'i gizle
        element.style.opacity = "0";
        element.style.visibility = "visible";
        
        // Mevcut animate__ animation classlarını temizle (animate__animated hariç)
        const classes = Array.from(element.classList);
        classes.forEach(className => {
            if (className.startsWith('animate__') && className !== 'animate__animated') {
                element.classList.remove(className);
            }
        });
    }

    handleElementAnimation(element) {
        if (this.animatedElements.has(element)) return;

        const startTime = performance.now();
        const config = element._scrollConfig || {};

        this.animateElement(element, config);
        this.animatedElements.add(element);
        this.observer.unobserve(element);

        // Performance tracking
        if (this.config.performanceMonitor) {
            const endTime = performance.now();
            this.stats.performanceMetrics.push(endTime - startTime);
        }

        this.stats.animatedCount++;

        // Callback
        if (this.config.onElementAnimated) {
            this.config.onElementAnimated(element, config);
        }

        this.updateStats();

        // if (this.config.debug) {
        //     console.log('Element animated:', element, 'Config:', config);
        // }
    }

    animateElement(element, config) {
        const delay = parseInt(config.delay) || 0;
        const duration = config.duration || this.config.defaultDuration;
        let animation = config.animation || config.animate || this.config.defaultAnimation;

        // Animate.css class isimlerini normalize et
        if (!animation.startsWith('animate__')) {
            animation = `animate__${animation}`;
        }

        // if (this.config.debug) {
        //     console.log(`Animating element with:`, { animation, duration, delay });
        // }

        setTimeout(() => {
            // Önce mevcut animation classlarını temizle (animate__animated hariç)
            const classes = Array.from(element.classList);
            classes.forEach(className => {
                if (className.startsWith('animate__') && className !== 'animate__animated') {
                    element.classList.remove(className);
                }
            });
            
            // CSS custom property ile duration ayarla
            element.style.setProperty("--animate-duration", duration);
            
            // Animation class'ını ekle
            element.classList.add(animation);
            
            // Element'i görünür yap
            element.style.opacity = "1";

            // Animation complete handler
            const handleAnimationEnd = (event) => {
                // Event'in bu elementten geldiğini kontrol et
                if (event.target !== element) return;
                
                // Cleanup
                element.classList.add("scroll-animate-ready");
                this.handleAnimationComplete(element, config);
                element.removeEventListener("animationend", handleAnimationEnd);
                
                // if (this.config.debug) {
                //     console.log('Animation completed for:', element);
                // }
            };

            element.addEventListener("animationend", handleAnimationEnd, { once: true });

            // Fallback - eğer animationend event'i tetiklenmezse
            const fallbackTimeout = this.parseDuration(duration) + 100;
            setTimeout(() => {
                if (!element.classList.contains("scroll-animate-ready")) {
                    element.classList.add("scroll-animate-ready");
                    this.handleAnimationComplete(element, config);
                    
                    // if (this.config.debug) {
                    //     console.log('Animation completed via fallback for:', element);
                    // }
                }
            }, fallbackTimeout);

        }, delay);
    }

    // Helper method to parse duration string to milliseconds
    parseDuration(durationStr) {
        if (!durationStr) return 1000;
        
        const match = durationStr.toString().match(/(\d*\.?\d+)(ms|s)?/);
        if (!match) return 1000;
        
        const value = parseFloat(match[1]);
        const unit = match[2] || 's';
        
        return unit === 'ms' ? value : value * 1000;
    }

    handleAnimationComplete(element, config) {
        // Custom callback
        if (config.callback && typeof window[config.callback] === "function") {
            window[config.callback](element);
        }

        // Custom event
        element.dispatchEvent(
            new CustomEvent("scrollAnimationComplete", {
                detail: { element, config },
            })
        );

        // Check if all animations are complete
        if (
            this.stats.animatedCount === this.stats.totalElements &&
            this.config.onAllAnimationsComplete
        ) {
            this.config.onAllAnimationsComplete();
        }
    }

    // Data attribute parsing - Animate.css uyumlu
    parseDataAttributes(element, prefix) {
        const config = {};
        const dataset = element.dataset;
        
        // Direct mappings for common attributes
        if (dataset.scrollAnimate) {
            config.animation = dataset.scrollAnimate;
        }
        if (dataset.scrollAnimation) {
            config.animation = dataset.scrollAnimation;
        }
        if (dataset.scrollDuration) {
            config.duration = dataset.scrollDuration;
        }
        if (dataset.scrollDelay) {
            config.delay = parseInt(dataset.scrollDelay) || 0;
        }
        if (dataset.scrollCallback) {
            config.callback = dataset.scrollCallback;
        }

        // Generic parsing for other attributes
        const camelPrefix = prefix.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());

        Object.keys(dataset).forEach((key) => {
            if (key.startsWith(camelPrefix) && key.length > camelPrefix.length) {
                let configKey = key.slice(camelPrefix.length);
                configKey = configKey.charAt(0).toLowerCase() + configKey.slice(1);
                
                const value = dataset[key];

                // Skip if already processed
                if (['animation', 'duration', 'delay', 'callback'].includes(configKey)) {
                    return;
                }

                // Type conversion
                if (value === "true") {
                    config[configKey] = true;
                } else if (value === "false") {
                    config[configKey] = false;
                } else if (!isNaN(value) && value !== "" && !value.includes('s')) {
                    config[configKey] = Number(value);
                } else {
                    config[configKey] = value;
                }
                
                // if (this.config.debug) {
                //     console.log(`Parsed data attribute: ${key} -> ${configKey} = ${config[configKey]}`);
                // }
            }
        });

        return config;
    }

    setupMutationObserver() {
        const mutationObserver = new MutationObserver((mutations) => {
            let hasNewElements = false;

            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        this.scanNewElement(node);
                        hasNewElements = true;
                    }
                });
            });

            if (hasNewElements) {
                this.updateStats();
            }
        });

        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true,
        });
    }

    scanNewElement(element) {
        // Check if element matches any selector
        const selectors = [
            this.config.selectors.animated,
            this.config.selectors.container,
            ...Object.keys(this.config.classMappings).map((cls) => `.${cls}`),
        ];

        selectors.forEach((selector) => {
            if (element.matches && element.matches(selector)) {
                this.prepareElement(element);
                this.observer.observe(element);
                this.observedElements.add(element);
                this.stats.totalElements++;
            }
        });

        // Scan children
        selectors.forEach((selector) => {
            const children = element.querySelectorAll(selector);
            children.forEach((child) => {
                if (!this.observedElements.has(child)) {
                    this.prepareElement(child);
                    this.observer.observe(child);
                    this.observedElements.add(child);
                    this.stats.totalElements++;
                }
            });
        });
    }

    setupAccessibility() {
        // Reduced motion support
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        const handleReducedMotion = (e) => {
            if (e.matches) {
                document.documentElement.style.setProperty(
                    "--animate-duration",
                    "0.01s"
                );
                this.config.defaultDuration = "0.01s";

                // Update all existing elements
                this.observedElements.forEach((element) => {
                    if (element._scrollConfig) {
                        element._scrollConfig.duration = "0.01s";
                    }
                });
            }
        };

        prefersReducedMotion.addEventListener("change", handleReducedMotion);
        handleReducedMotion(prefersReducedMotion);
    }

    setupPerformanceMonitoring() {
        if (this.config.performanceMonitor) {
            // Monitor frame rate
            let lastTime = performance.now();
            let frameCount = 0;

            const measureFPS = () => {
                frameCount++;
                const currentTime = performance.now();

                if (currentTime - lastTime >= 1000) {
                    this.stats.fps = Math.round(
                        (frameCount * 1000) / (currentTime - lastTime)
                    );
                    frameCount = 0;
                    lastTime = currentTime;
                }

                requestAnimationFrame(measureFPS);
            };

            requestAnimationFrame(measureFPS);
        }
    }

    startDebugPanel() {
        const panel = document.getElementById("debugPanel");
        if (panel) {
            panel.classList.add("active");
            this.updateDebugPanel();

            // Update every second
            setInterval(() => this.updateDebugPanel(), 1000);
        }
    }

    updateDebugPanel() {
        const observedEl = document.getElementById("observedCount");
        const animatedEl = document.getElementById("animatedCount");
        const performanceEl = document.getElementById("performanceInfo");

        if (observedEl) observedEl.textContent = this.stats.totalElements;
        if (animatedEl) animatedEl.textContent = this.stats.animatedCount;
        if (performanceEl) {
            const avgTime =
                this.stats.performanceMetrics.length > 0
                    ? this.stats.performanceMetrics.reduce((a, b) => a + b, 0) /
                    this.stats.performanceMetrics.length
                    : 0;
            performanceEl.textContent =
                avgTime > 0 ? `${avgTime.toFixed(2)}ms avg` : "Good";
        }
    }

    updateStats() {
        if (this.config.debug) {
            this.updateDebugPanel();
        }
    }

    // Public API Methods
    addElement(element, config = {}) {
        this.prepareElement(element, config);
        this.observer.observe(element);
        this.observedElements.add(element);
        this.stats.totalElements++;
        this.updateStats();
    }

    removeElement(element) {
        this.observer.unobserve(element);
        this.animatedElements.delete(element);
        this.observedElements.delete(element);
        this.stats.totalElements--;
        this.updateStats();
    }

    triggerAnimation(selector, config = {}) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            // Reset element
            element.style.opacity = "0";
            element.classList.add("animate__animated");
            
            // Remove old animation classes
            const classes = Array.from(element.classList);
            classes.forEach(className => {
                if (className.startsWith('animate__') && className !== 'animate__animated') {
                    element.classList.remove(className);
                }
            });

            // Apply new animation
            this.prepareElement(element, config);
            setTimeout(() => {
                this.animateElement(element, element._scrollConfig);
            }, 50);
        });
    }

    resetAllAnimations() {
        // Clear all animated elements
        this.animatedElements.clear();
        this.stats.animatedCount = 0;

        // Reset all elements
        this.observedElements.forEach((element) => {
            element.style.opacity = "0";
            element.classList.add("animate__animated");
            
            // Remove animation classes except animate__animated
            const classes = Array.from(element.classList);
            classes.forEach(className => {
                if (className.startsWith('animate__') && className !== 'animate__animated') {
                    element.classList.remove(className);
                }
            });
            
            element.classList.remove("scroll-animate-ready");
            element.dataset.scrollPrepared = "";
            delete element._scrollConfig;
        });

        // Re-scan and observe
        this.observer.disconnect();
        this.createObserver();
        this.scanForElements();
        this.updateStats();
    }

    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };

        // Re-initialize if needed
        if (newConfig.threshold || newConfig.rootMargin) {
            this.observer.disconnect();
            this.createObserver();
            this.scanForElements();
        }

        this.updateStats();
    }

    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
        this.animatedElements.clear();
        this.observedElements.clear();
        this.containerElements.clear();
    }

    // Utility methods
    getStats() {
        return {
            ...this.stats,
            config: this.config,
            observedElements: this.observedElements.size,
            animatedElements: this.animatedElements.size,
        };
    }

    getElement(selector) {
        const element = document.querySelector(selector);
        return element
            ? {
                element,
                isAnimated: this.animatedElements.has(element),
                isObserved: this.observedElements.has(element),
                config: element._scrollConfig,
            }
            : null;
    }

    pauseAnimations() {
        document.documentElement.style.setProperty("--animate-duration", "0s");
    }

    resumeAnimations() {
        document.documentElement.style.removeProperty("--animate-duration");
    }
}

// Browser compatibility check
// if (!window.IntersectionObserver) {
//     console.warn("IntersectionObserver not supported. Please use a polyfill.");
// }

// Global instance
window.ScrollAnimationFramework = ScrollAnimationFramework;

// Auto-initialization
let scrollAnimator;

if (
    document.querySelector("[data-scroll-auto-init]") ||
    window.SCROLL_ANIMATOR_AUTO_INIT !== false
) {
    scrollAnimator = new ScrollAnimationFramework({
        debug: false,
        performanceMonitor: true,
        defaultAnimation: "fadeInUp",
        staggerDelay: 150,
        ...window.SCROLL_ANIMATOR_CONFIG,
    });
}

// Global access
window.scrollAnimator = scrollAnimator;

// Utility functions for demo
function toggleDebug() {
    const panel = document.getElementById("debugPanel");
    if (panel) {
        panel.classList.toggle("active");
    }
}

// Performance optimization
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        scrollAnimator?.pauseAnimations();
    } else {
        scrollAnimator?.resumeAnimations();
    }
});

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
    module.exports = ScrollAnimationFramework;
}