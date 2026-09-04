# Media Verification Notes

The unlocked anniversary preview rendered successfully in the browser after the user entered the private passcode.

The page exposes the expected gallery controls for `HERO_IMAGE`, `lami-01.jpg`, `us-01.jpg`, `video-01.mp4`, `memory-01.jpg`, `lami-02.jpg`, and `memory-02.jpg`. The browser-extracted page content confirmed the connected image URLs for all six supplied photos, while the video card is present and ready to open. The final page also rendered the Timi/Lami story, letter, and anniversary ending without console errors reported during the prior check.

The user entered the private passcode and the browser now shows the unlocked full experience. The page includes all seven gallery cards: the favourite picture, My Sugar, Just us, the moving memory, Still beautiful, Look at my girl, and A day to keep. The browser markdown confirms the six connected photo storage URLs and the video card, and the Memories anchor successfully brought the viewport into the story/gallery flow.

The browser-level lightbox check succeeded: opening the `HERO_IMAGE` card displayed the uploaded favourite-picture image, and pressing ArrowRight advanced to the uploaded `lami-01.jpg` / “My Sugar” image. The lightbox exposed Close, Previous memory, and Next memory controls while the gallery remained visible behind the modal.

Pressing ArrowRight again successfully advanced the lightbox to the `us-01.jpg` / “Just us” image. The keyboard navigation and image rendering are working as expected.

After the user signed in again, the preview reopened successfully. Returning to Memories confirmed the final gallery card set and the hero/favourite-picture card visibly rendered the supplied Timi-and-Lami photograph.

The completed gallery is visibly rendered in the browser with all six supplied photographs. Opening the moving-memory card successfully displayed the supplied MP4 in the lightbox, including native video controls and the “A little moving memory” caption. The browser-level gallery/lightbox check is complete.
