import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Hamrick Fence Co. Brand Palette
				'fence-yellow': '#FFD100',
				'fence-yellow-dark': '#F4C430',
				'fence-black': '#1A1A1A',
				'fence-cream': '#F5F0E6',
				'fence-red': '#B8321A',
				'fence-brown': '#8B5E3C',
				'fence-green': '#6B8E5A',
				'fence-green-dark': '#4A6B3A',
				'fence-white': '#FAFAF8',
				'fence-gray': '#6B7280',

				// Legacy luxury tokens (kept for shadcn compatibility)
				'luxury-bg': '#1A1A1A',
				'luxury-surface': '#2A2A2A',
				'luxury-royal-blue': '#FFD100',
				'luxury-purple': '#B8321A',
				'luxury-lime': '#FFD100',
				'luxury-text-primary': '#F5F0E6',
				'luxury-text-secondary': '#8B7355',
				'luxury-footer': '#111111',

				// Existing shadcn colors (keeping for compatibility)
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				'trophy-gold': 'hsl(var(--trophy-gold))'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-subtle': 'var(--gradient-subtle)',
				'gradient-trophy-gold': 'var(--gradient-trophy-gold)',
				'gradient-bronze': 'var(--gradient-bronze)',
				'gradient-platinum': 'var(--gradient-platinum)',
			},
			boxShadow: {
				'brand': 'var(--shadow-brand)',
				'glow': 'var(--shadow-glow)',
				'card': 'var(--shadow-card)',
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)',
			},
			fontFamily: {
				// Hamrick Fence Typography
				'headline': ['Oswald', 'Arial Black', 'sans-serif'],
				'body': ['Open Sans', 'system-ui', 'sans-serif'],
				'serif': ['Merriweather', 'Georgia', 'serif'],
				// Legacy font names for compatibility
				display: ['Oswald', 'Arial Black', 'sans-serif'],
				section: ['Oswald', 'sans-serif'],
				sans: ['Open Sans', 'system-ui', 'sans-serif'],
				accent: ['Merriweather', 'Georgia', 'serif'],
				poofy: ['Oswald', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% center'
					},
					'100%': {
						backgroundPosition: '200% center'
					}
				},
				'text-shine': {
					'0%': {
						backgroundPosition: '0% center'
					},
					'100%': {
						backgroundPosition: '200% center'
					}
				},
				'gradient-spin': {
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					},
					'100%': {
						backgroundPosition: '0% 50%'
					}
				},
				'bounce-slow': {
					'0%, 100%': {
						transform: 'translateY(0) scale(1)'
					},
					'50%': {
						transform: 'translateY(-10px) scale(1.05)'
					}
				},
				'gentle-sway': {
					'0%, 100%': {
						transform: 'rotate(-0.3deg) translateY(0px)'
					},
					'25%': {
						transform: 'rotate(0.2deg) translateY(1px)'
					},
					'50%': {
						transform: 'rotate(0.3deg) translateY(0px)'
					},
					'75%': {
						transform: 'rotate(-0.2deg) translateY(-1px)'
					}
				},
				// Ultra-Premium animations
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'cursor-trail': {
					'0%': {
						transform: 'scale(1)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'scale(0)',
						opacity: '0'
					}
				},
				'psychedelic': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
				'flash-red': {
					'0%, 100%': { color: 'inherit' },
					'50%': { color: '#ff0000' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'shimmer': 'shimmer 3s ease-in-out infinite',
				'text-shine': 'text-shine 3s linear infinite',
				'gradient-spin': 'gradient-spin 4s linear infinite',
				'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
				'gentle-sway': 'gentle-sway 4s ease-in-out infinite',
				// Ultra-Premium animations
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'cursor-trail': 'cursor-trail 0.5s ease-out',
				'psychedelic': 'psychedelic 5s linear infinite',
				'psychedelic-slow': 'psychedelic 15s linear infinite',
				'flash-red': 'flash-red 1s step-end infinite',
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
