# Lofi Portfolio

An interactive portfolio site built as an explorable lofi room. Project posters sit on the wall like album cover posters I own myself! Click each one to zoom in and read the tracklist :D

[Live site](https://www.kdsingh.dev)

## Why this exists

A majority of the aesthetic was inspired by Lofi Girl, not only the setting resemblance but the similarities to my own taste. A portfolio is a representation of an engineer's projects that incorporates a creative, personal touch. I thought there no better way to do so, then to have my site embody the very aesthetic I live in! I wanted the site to feel like a sanctuary, with a convenient, cool, and interactive experience for users like myself, and a unique, refreshing way for professional viewing of projects. 

## What it does

The site is a single screen showing a lofi hand-drawn bedroom. On the wall, a neon "PROJECTS" sign sits above a 2x2 grid of project posters styled after minimalist album covers. Clicking a poster opens a modal with the full poster format — cover art, tracklist, tech stack as a color palette, release metadata, and links to the GitHub repo.

A small contact menu in the bottom corner gives access to my resume, GitHub, LinkedIn, and email (which copies to clipboard rather than opening a mailto).

## Tech stack

- **Next.js 16** with App Router and the React Compiler
- **TypeScript** throughout
- **Tailwind CSS** styling
- **Framer Motion** poster-to-modal zoom and ambient animations
- **Vercel** deployment
- **Gemini** room background and poster cover art

## Approach

The build prioritized shipping over perfecting. I gave myself one week to get a deployable V1 and treated everything else as V2. The decisions throughout the current versoin reflect that constraint.

The room background is AI-generated rather than being hand-illustrated or manually designed. The same approach applied to the four project poster covers — generated as original images per project, not recreations of existing albums. The interactive layer is hand-built: poster positioning, the modal 
system, the neon sign, the contact menu, and the audio control are all implemented directly.

Layout positioning was done manually rather than through any 3D system. The room scene is a flat 2D image, but the wall has perspective in the illustration. To make the posters and the neon sign feel mounted on that wall rather than floating in front of it (aesthetically awkward), I had to position each element with CSS transforms (`skewX` and `rotate`) that match the implied perspective of the illustrated wall. This was done purely out of intuition and iteration. I'd nudge the skew angle by one degree evaluate, repeat. Same for the percentage-based positioning of where the elements sit on the wall.

The poster format follows a standard minimalist album-cover layout (cover art, tracklist, color palette, artist line, metadata band, action buttons) that resembles the posters hanging in my actual bedroom. The tech stack functions as both the album's "color palette" — small swatches in each tool's brand color — and as the album's "label/credits" line at the bottom, with each tech name rendered in its own color. The poster design I am most proud of being able to keep in V1. It treats the Pinterest-style album poster as a metaphor with real semantic mapping rather than just visual costume, and adds a sneak-peek onto what direction I'll go in for V2.

## Challenges

**Asset hunting.** In trying to expedite V1, I tried to build the room scene in Spline and itch.io, but gave up on premade assets as I was unable to capture my design and vision and didn't have the time to build it from scratch yet. The eventual solution — generating the background with Gemini — only came after exhausting the more "authentic" options. A static AI-generated background paired with hand-coded interactivity does the job better than a complex 3D scene I'd never finish.

**Wall perspective.** Getting elements to sit on a 2D wall and read as *mounted* rather than *floating* also took real iteration. CSS supports 3D transforms, but the room's perspective is artistic rather than mathematically correct, so I couldn't compute the right angle from the image. I had to eyeball it, adjust skew and rotation in dev tools, copy the values back into code, and repeat. The neon sign alone went through probably 30 iterations before it looked right. The poster wall went through many more.

**Prompt engineering for cover art.** Gemini's first generations almost never landed. The Word Radeye cover took multiple rounds before I got something that read as both an eye and as text being read. The Stock Predictor cover initially came out as a moody, dark, "Titanic-receding-into-fog" vibe that felt completely wrong for my scene. I had to rewrite the prompt with explicit anti-direction ("bright and inviting, not moody or dark") to push the output toward the warm, soft, hand-drawn style of the room. Each cover went through 4–8 iterations with prompt adjustments before I had something usable. The final four posters work as a series because the prompt structure stayed consistent — only the subject and accent palette changed across projects.

**The Spline detour.** I genuinely tried to build this with a 3D scene first. I spent over an hour just trying to rotate the camera in Spline before giving up. Worth flagging because it taught me to set tighter time budgets on unfamiliar tools — if I can't get a usable result in 30 minutes, the learning curve is just too high currently and I must change my angle of approach. 

**Scope discipline.** Still, the hardest skill in this project wasn't even technical, it was deciding what to cut for V1. The original concept included Spotify integration, clickable cat (resembling my own!) that meows, rain toggle, multiple ambient sound layers with an interactive player, mood switching, and a "relax mode" with dimmed lighting and rotating album posters on the wall. The relax mode containing real functionality and being more aesthetically pleasing, while recruiter mode would be tailored to professional viewing of projects and fewer visual distractions Shipping V1 in two weeks meant accepting that none of those would make the first cut. The working version of "fun creative project" is one that's actually deployed. However, I will hold onto my excitement of deploying the finished, fully personalized hub of a site that will be continually adapted for many different scenarios!

## Coming in V2

The interactive room concept has a lot more to give. Things planned for the
next iteration:

- **Relax mode toggle.** Lights dim, project posters on the wall swap to real album covers from artists I listen to. The site has two distinct identities: professional portfolio and personal relaxing space.
- **Spotify integration.** A small "now playing" element somewhere in the room that pulls live data from my Spotify and shows what I'm actually listening to. 
- **Desk hotspots.** Click the cat to make it meow. Click the window to toggle rain. Click the lamp to dim the lighting. Click the monitor to see recent GitHub activity. Building these as a system rather than piecemeal.
- **Per-project bullet expansion.** Inside each project modal, clicking a tracklist bullet expands it into a brief technical writeup. Three levels of zoom: wall → poster → bullet detail.
- **Mobile redesign.** V1 is desktop-only by design. V2 needs a real mobile experience, likely as a vertical-scroll narrative rather than a recreation of the room layout. It would have more emphasis on th professional mode though, as the app is meant to be a desktop application.
- **Signature and barcode/QR.** Small details to round out the album-cover homage. Signature written on iPad, exported as a transparent PNG. QR codes on each poster that open the GitHub repo when scanned by phone camera.
- **Audio system.** Currently one looping track with a play/pause toggle. V2 has a small playlist, fade transitions between tracks, and ambient sound layers (rain, coffee shop, etc.) that combine with the music.

## Local development

```bash
git clone https://github.com/Karandeep-Singhhh/LofiRoom.git
cd LofiRoom
npm install
npm run dev
```

Open `http://localhost:3000`

## Credits

- Background and poster cover art generated with Google Gemini
- Bungee font from Google Fonts
- Built with Next.js, deployed on Vercel
- General Claude assistance throughout building, automating, and debugging
