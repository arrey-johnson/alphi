# ALPHY'S SERVICES LTD – Website

Next.js website for **Alphy's Services Ltd**, professional residential and commercial cleaning services (Wolverhampton & surrounding areas).

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (brand colours: Sky Blue, Pink, Green, White)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Contact form – sending emails

The contact form posts to `/api/contact`. By default it only logs submissions to the console. To send messages to **info@alphysservicesltd.com**:

1. **Option A – Resend**  
   - Sign up at [resend.com](https://resend.com), get an API key.  
   - Install: `npm install resend`  
   - In `src/app/api/contact/route.ts`, use the Resend SDK to send an email with the form fields (name, email, phone, message) to `info@alphysservicesltd.com`.

2. **Option B – Nodemailer + SMTP**  
   - Use your hosting or email provider’s SMTP settings.  
   - Install: `npm install nodemailer`  
   - In the same route, create a Nodemailer transport and send the email.

3. **Option C – Formspree / other form backend**  
   - Point the form’s `action` to your Formspree (or similar) endpoint instead of `/api/contact`, and remove or simplify the API route.

## Domain & hosting

- **Domain:** alphysservicesltd.com (registered at GoDaddy)
- Deploy to Vercel, Netlify, or your preferred host; connect the domain in their DNS settings.

## Content you may want to update

- **Reviews:** Edit `src/data/reviews.ts` and replace with real customer names and testimonials.
- **Gallery:** The Gallery page is a “coming soon” placeholder; add your images when ready.
- **Logo:** Replace the text logo in `src/components/Header.tsx` with your logo image when you have it.

## Legal

- Privacy Policy: `/privacy-policy`
- Cookie Policy: `/cookie-policy`

Business details and contact info are already in the site; update the legal pages if your registered address or contact email changes.
