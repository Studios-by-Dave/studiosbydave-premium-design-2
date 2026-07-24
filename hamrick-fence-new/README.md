# Hamrick Fence Co. starter project

This folder is a standalone, local-folder-first website build for **Hamrick Fence Co.** It is intentionally separate from the existing `Studios-by-Dave/studiosbydave-premium-design-2` app so you can copy it directly into a dedicated client folder such as:

`downloads/websites/clients/hamrick-fence-new`

## What's included

- `index.html` — full one-page marketing website
- `styles.css` — responsive styling and accessibility-friendly visual system
- `main.js` — mobile navigation, gallery filters, rotating testimonials, footer year
- `success.html` — thank-you page for form submissions
- `assets/hamrick-fence-sign.svg` — sign-inspired starter logo/favicon asset

## How to run it locally

Because this is plain HTML/CSS/JS, no build step is required.

### Option 1: open directly

Open `index.html` in a browser.

### Option 2: serve it locally

From inside your local Hamrick folder, run one of these commands:

```bash
python3 -m http.server 4173
```

Then open:

`http://localhost:4173`

## Recommended local-folder workflow

1. Copy the contents of this folder into `downloads/websites/clients/hamrick-fence-new` (or keep the original `hamrick fence-new` folder name if you prefer and quote the path when using terminal commands)
2. Replace the placeholder/demo photos with real Hamrick Fence Co. photos
3. Update the JSON-LD `url` fields in `index.html` to the real production domain
4. Connect the estimate form if you are not deploying on Netlify
5. Add the real Google Business Profile URL and Facebook URL once the client provides them
6. Launch the site from the local folder or move it into a new dedicated repository

## Folder setup note

This starter already uses the recommended hyphenated folder name: `hamrick-fence-new`. The only space-containing path mentioned in this README is the original user-provided local folder name, `downloads/websites/clients/hamrick fence-new`. The files will still work there, but the hyphenated version is the better long-term path for terminal commands and version control.

## Form handling

The form is set up with **Netlify form attributes** so it can work on Netlify without adding backend code.

If you deploy anywhere else, either:

- change the form to your preferred provider (Formspree, Basin, etc.), or
- wire it into a custom backend/API route

## Assumptions made

- The current repository is **not** the long-term home for the Hamrick Fence project
- Real business photos, the final roadside-sign logo photo reference, and review copy still need to be provided
- No confirmed production domain, Google Business Profile URL, Facebook URL, or email address was available in the prompt
- The two street addresses in the starter came directly from the provided project brief and should be confirmed against the final business listings before launch

## Best next actions

- Create a **new repo** for Hamrick Fence Co. if you want source control around the separate client build
- Replace placeholder images before launch
- Confirm whether the final deployment target is Netlify, Vercel, shared hosting, or WordPress
- Decide whether this static starter should remain static or be ported into WordPress for easier client updates
