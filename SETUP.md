# Anniversary Experience Setup

The site is ready for Timi and Lami’s private first-anniversary experience. The entrance passcode is checked server-side through the `LAMI_SECRET_PASSWORD` environment variable, so the real code is not placed in the browser bundle. To change it later, update that project secret in the project’s Secrets settings rather than editing the frontend.

The hero and gallery currently use intentional media placeholders. Replace them with the supplied files using the suggested names `hero.jpg`, `lami-01.jpg`, `lami-02.jpg`, `us-01.jpg`, `us-02.jpg`, `memory-01.jpg`, and `video-01.mp4`. The current UI keeps the filenames visible so it is clear which placeholder each file replaces. The Google Drive folder was not represented as accessed; media should be added only when the actual files are available.

The music player is intentionally safe without an audio file. If appropriate rights and a local audio file are available, add it at `/media/iyawo-mi.mp3` and connect it to the player. The experience does not autoplay audio before a user interaction.

The page is mobile-first and includes semantic sections, visible keyboard focus, accessible button labels, a dialog-style gallery viewer with Escape and arrow-key navigation, and a reduced-motion preference override. No wedding proposal or invented relationship event has been added.

## Uploaded Lammy archive

The recoverable media from `Lammy.rar` is now connected. `hero_image.jpeg` powers the hero and favourite-picture card, `My sugar.jpeg` powers `lami-01.jpg`, `Just us.jpeg` powers `us-01.jpg`, the WhatsApp image powers a new `memory-02.jpg` card, and `a little loving memory.MP4` powers the video card and viewer.

The original archive extractor reported read errors for `look at my girl.jpeg`, `our favourite picture.jpeg`, and `still beautiful.jpeg`. Clean copies of all three have since been supplied individually and connected to their matching gallery cards.

The clean `ourfavouritepicture.jpeg` upload is connected to the `HERO_IMAGE` / “Our favourite picture” gallery card, and the clean `stillbeautiful.jpeg` upload is connected to the `memory-01.jpg` / “Still beautiful” card. All original photo placeholders now use supplied images.
