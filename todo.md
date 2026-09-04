# Project TODO

- [x] Review and preserve the supplied Timi/Lami relationship copy and chronology
- [x] Build a private entrance screen with configurable passcode handling via `LAMI_SECRET_PASSWORD`
- [x] Add accessible wrong-passcode and successful unlock states
- [x] Add cinematic opening sequence with user-triggered heart interaction and music placeholder
- [x] Implement responsive romantic visual system with burgundy, blush, gold, charcoal, and ivory palette
- [x] Add scroll-led hero section for Timi and Lami’s first anniversary
- [x] Add relationship timeline for 2021, 2023, September 6 2025, and September 7 2025
- [x] Add interactive “Who made the first move?” moment with Timi as the reveal answer
- [x] Add media-ready memory gallery with photo/video placeholders, captions, and full-screen viewer
- [x] Add “Things I Love About You” progressive reveal cards
- [x] Add final heartfelt love-letter and anniversary reveal section
- [x] Add keyboard accessibility, focus states, semantic labels, and reduced-motion support
- [x] Add unit tests for passcode logic and core interactive behavior
- [x] Verify desktop and mobile layouts with visual screenshots
- [x] Run typecheck and test suite
- [x] Save final checkpoint and provide setup notes for replacing media and configuring the passcode

## Notes

- Hero media now uses the supplied `hero_image.jpeg` photograph.
- Gallery media now uses the supplied photographs and MP4; no external Google Drive media was represented as accessed.
- The site will not autoplay music before a user gesture.
- No fabricated testimonials, reviews, or ratings are used.

## Change history

- Initial anniversary website scope recorded from the supplied brief.
- Added final love-letter and anniversary reveal requirement from the latest user request.
- Added explicit accessibility and reduced-motion verification requirements.
- [x] Restore the full brief-specific Future With You and final reveal wording
- [x] Add a distinct successful unlock welcome state with lock-opening transition
- [x] Add Escape and arrow-key support plus initial focus handling for the gallery lightbox
- [x] Add UI interaction tests for unlock states and gallery behavior
- [x] Capture and review a mobile screenshot
- [x] Add setup notes for changing the passcode and replacing media placeholders
- [x] Restore Future With You lines individually, including choosing each other even then and separate hopes
- [x] Add a visible lock-opening animation between successful verification and welcome state
- [x] Add frontend interaction logic tests for gallery navigation and unlock progression
- [x] Implement a verifiable closed-to-open lock icon transition in the successful welcome state
- [x] Verify the user-applied removal of the passcode privacy note and save a refreshed checkpoint
- [x] Remove the now-empty privacy-note paragraph node from the entrance markup
- [x] Save a new checkpoint after the user-applied copy edit
- [x] Verify and complete the requested intro sign-off copy edit, then save a refreshed checkpoint
- [x] Inspect `Lammy.rar` and confirm the uploaded files match the site placeholders
- [x] Extract and upload the matching anniversary images to project-managed storage
- [x] Replace gallery and hero placeholders with the uploaded image URLs
- [x] Verify image rendering on desktop and mobile
- [x] Save a new checkpoint containing the uploaded media integration
- [x] Request clean copies of `look at my girl.jpeg`, `our favourite picture.jpeg`, and `still beautiful.jpeg`
- [x] Replace the remaining gallery placeholders after the clean copies arrive
- [x] Capture a desktop entrance smoke screenshot after all recovered media is connected
- [x] Save the media-integration checkpoint after the remaining verification is complete
- [x] Upload `lookatmygirl.jpeg` and replace the `lami-02.jpg` gallery placeholder
- [x] Re-run media verification after adding the newly supplied image
- [x] Upload `ourfavouritepicture.jpeg` and replace the `HERO_IMAGE` gallery card image
- [x] Re-run media verification after adding the newly supplied favourite picture
- [x] Upload `stillbeautiful.jpeg` and replace the `memory-01.jpg` gallery placeholder
- [x] Run complete media and responsive verification after the final image is connected
- [x] Save a new checkpoint containing the complete uploaded media set
- [x] Capture a fresh desktop screenshot after the final connected media set is in place
- [x] Capture a final mobile screenshot after the last media update
- [x] Complete a browser-level gallery and lightbox verification, then save the final media checkpoint
- [ ] Clearly confirm the video memory opens in the lightbox after the final media update
- [ ] Save a new checkpoint after the completed media verification
- [ ] Fix the moving-memory card so the video is clearly discoverable and visibly labeled
- [ ] Add restrained cinematic entrance, scroll-reveal, floating-text, and ambient motion effects
- [ ] Preserve keyboard accessibility and reduced-motion behavior for every new animation
- [ ] Add or update tests for the video-card and motion-related interaction state
- [ ] Verify the fixed video and animations on desktop and mobile
- [ ] Save a new checkpoint after the fixes
