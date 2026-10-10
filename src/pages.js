// Editorial content is sourced from the supplied website-copy PDF and public LinkedIn posts.
// This module is rendered at build time: pages remain readable without JavaScript.
export const site = {
  origin: 'https://innspiremedia.com',
  email: 'ops@innspiremedia.com',
  linkedin: 'https://www.linkedin.com/company/innspire-media/',
};

const eyebrow = (text) => `<div class="eyebrow eyebrow--muted"><span></span>${text}</div>`;
const link = (text, href = '/contact/') => `<a class="button button--dark" href="${href}">${text}<span aria-hidden="true">↗</span></a>`;
const closing = (headline, text, cta, href = '/contact/') => `
  <section class="page-closing section-pad section-pad--tight"><div class="container">
    ${eyebrow('Your next chapter')}<h2>${headline}</h2><p>${text}</p>${link(cta, href)}
  </div></section>`;
const hero = ({ label, title, intro, cta, href, aside }) => `
  <section class="detail-hero section-pad"><div class="container">
    <a class="breadcrumb" href="/">← Back to Innspire</a>
    <div class="detail-hero__grid"><div>${eyebrow(label)}<h1>${title}</h1><p class="detail-lede">${intro}</p>${cta ? link(cta, href) : ''}</div>
    <aside class="detail-note">${aside}</aside></div>
  </div></section>`;
const cards = (items) => `<div class="detail-cards">${items.map(([title, text], index) => `
  <article class="detail-card"><span class="detail-number">${String(index + 1).padStart(2, '0')}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div>`;

const industryData = {
  airbnb: {
    title: 'Airbnb & Homestay Marketing — Direct Bookings | Innspire Media',
    description: 'Direct-booking campaigns, content and AI guest messaging for Airbnbs and homestays. Built by hospitality operators in Uttarakhand.',
    label: 'Airbnbs & homestays',
    headline: 'More direct bookings.<br /><em>Less middleman.</em>',
    intro: 'Your property has a story worth travelling for. We connect content, ads and guest messaging so more guests find it — and book directly with you.',
    cta: 'Get a direct-booking audit',
    audience: 'Independent homestays, villas, Airbnbs and retreats.',
    outcome: 'A clearer path from discovery to a direct booking.',
    problems: ['Booking-platform commissions take a bite out of each stay.', 'Guest enquiries arrive at midnight and wait until morning.', 'A beautiful property is let down by an inconsistent online presence.'],
    services: [
      ['Direct-booking funnel', 'Instagram and Meta campaigns connect guests to your WhatsApp or booking page, with a clear next step at every touchpoint.'],
      ['AI guest concierge', 'An assistant answers questions about your property, policies and local area. Availability and pricing follow the data you provide or connect.'],
      ['Content that sells the stay', 'Golden-hour shoots, reels and story sequences bring your property’s atmosphere and best moments to life.'],
      ['Bring guests back', 'Post-stay review requests, repeat-guest offers and seasonal campaigns help the relationship continue after check-out.'],
    ],
    note: 'We run our own homestays in Dehradun and Haridwar. Our approach is informed by the same booking and guest-service challenges you face.',
  },
  resorts: {
    title: 'Boutique Resort Marketing & Wedding Leads | Innspire Media',
    description: 'Fill rooms, weddings and offsites with hospitality content, lead generation and an AI enquiry desk built around your boutique resort.',
    label: 'Boutique resorts & experiences',
    headline: 'Fill rooms, weddings<br />and <em>weekends.</em>',
    intro: 'A resort is more than its room inventory. We build marketing and enquiry systems around the stays, celebrations and experiences that make your property worth choosing.',
    cta: 'Plan my next season',
    audience: 'Boutique resorts, destination venues and experience-led properties.',
    outcome: 'More routes to revenue, with a more responsive enquiry desk.',
    problems: ['Weekdays and off-season dates are hard to fill.', 'Wedding and event enquiries wait days for a quote.', 'Your distinctive experience looks like every other resort online.'],
    services: [
      ['Multi-revenue campaigns', 'Separate funnels for room nights, destination weddings, corporate offsites and dining — each with its own audience and offer.'],
      ['AI enquiry desk', 'An agent shares your approved packages and policies, collects dates and requirements, and passes serious enquiries to your sales team.'],
      ['Weddings & offsites', 'Campaigns reach people planning destination events, including audiences in Delhi NCR. Your team receives context before the first conversation.'],
      ['Premium brand content', 'Cinematic reels, drone shoots and property storytelling communicate why the experience deserves a place on the guest’s shortlist.'],
    ],
    note: 'Rooms, weddings and corporate offsites have different buying journeys. We plan and report on them separately, so you can see what is working.',
  },
  b2b: {
    title: 'B2B Lead Generation for Startups & Manufacturers | Innspire Media',
    description: 'AI-powered outbound, LinkedIn campaigns and lead qualification for B2B startups, manufacturers and exporters. Build a more organised pipeline.',
    label: 'B2B, startups, manufacturers & exporters',
    headline: 'You build the product.<br />We build <em>the pipeline.</em>',
    intro: 'Connect the right buyers to the right conversation. We combine researched outreach, paid lead generation and follow-up systems around your sales process.',
    cta: 'Get a pipeline audit',
    audience: 'Tech startups, manufacturers, wholesale brands and exporters.',
    outcome: 'Qualified enquiries, clearer handoffs and a pipeline you can track.',
    problems: ['Founder-led selling becomes a bottleneck.', 'Outbound goes unanswered and paid ads attract the wrong leads.', 'Without a consistent next step, warm conversations go cold.'],
    services: [
      ['AI-assisted outbound', 'Prospect research and personalised first-touch messaging across email and LinkedIn, aligned to your ideal buyer.'],
      ['Buyer-focused campaigns', 'Meta and LinkedIn lead generation targeted by relevant roles, sectors and company profiles.'],
      ['Qualification & CRM', 'Capture the need, budget and timing behind an enquiry. Route qualified leads and make the next action visible in your CRM.'],
      ['Founder-led content', 'LinkedIn content, case studies and sales collateral build familiarity before a prospect joins the first call.'],
    ],
    note: 'From electronics and textiles to food exports and industrial goods, the buyer’s context shapes the campaign. For consumer startups, we also build launch content and lead funnels.',
  },
  clinics: {
    title: 'Clinic Marketing & Appointment Automation | Innspire Media',
    description: 'Patient lead generation, appointment assistance and reminders for clinics, aesthetic centres, pet clinics and wellness studios.',
    label: 'Clinics, healthcare & wellness',
    headline: 'From an enquiry to<br /><em>an appointment.</em>',
    intro: 'Give your front desk a little breathing room. We connect lead generation with practical appointment assistance, reminders and trust-building content.',
    cta: 'Review my appointment journey',
    audience: 'Aesthetic and dental clinics, pet clinics, wellness and pilates studios.',
    outcome: 'A more organised booking journey for your team and your patients.',
    problems: ['Leads from ads do not get a timely call back.', 'The front desk answers the same questions all day.', 'Missed confirmations and no-shows waste appointment time.'],
    services: [
      ['Patient lead generation', 'Meta and Google campaigns focus on the treatments and services your practice wants to grow.'],
      ['Appointment assistant', 'An AI assistant answers approved general questions, shares opening times and helps visitors request an appointment.'],
      ['Reminders & follow-up', 'Confirmation messages, appointment reminders and post-visit review requests reduce repetitive front-desk work.'],
      ['Trust-building content', 'Doctor-led videos and educational content help people understand your practice before they book.'],
    ],
    note: 'AI handles bookings and general questions. Medical advice always comes from your clinical team. We define access, data handling and human handoffs before launch.',
  },
};

function industryPage(data) {
  return hero({
    label: data.label, title: data.headline, intro: data.intro, cta: data.cta,
    aside: `<span class="detail-note__label">Made for</span><h2>${data.audience}</h2><div class="note-divider"></div><span class="detail-note__label">The focus</span><p>${data.outcome}</p>`,
  }) + `
    <section class="detail-problems section-pad section-pad--tight"><div class="container detail-split">
      <div>${eyebrow('Sound familiar?')}<h2>Good intentions.<br /><em>Missed opportunities.</em></h2></div>
      <ol class="detail-problem-list">${data.problems.map((problem) => `<li>${problem}</li>`).join('')}</ol>
    </div></section>
    <section class="section-pad" id="events"><div class="container"><div class="detail-section-heading">${eyebrow('What we build')}<h2>A system around<br /><em>your business.</em></h2></div>${cards(data.services)}<p class="editorial-note">${data.note}</p></div></section>
  ` + closing('Let’s find <em>your next move.</em>', 'Start with a free 30-minute audit of your current lead and follow-up journey.', data.cta);
}

export const pages = Object.fromEntries(Object.entries(industryData).map(([slug, data]) => [slug, {
  title: data.title, description: data.description, content: () => industryPage(data),
}]));

pages['ai-automations'] = {
  title: 'AI Lead Automation & WhatsApp Agents | Innspire Media',
  description: 'AI agents built on Claude to respond, qualify and follow up across WhatsApp, Instagram and your website. Connected to your real business workflow.',
  content: () => hero({
    label: 'AI automations & lead generation',
    title: 'Every lead deserves<br /><em>a next step.</em>',
    intro: 'Your marketing starts the conversation. Your systems should keep it going. We build AI agents that respond, qualify and follow up across the channels your customers already use.',
    cta: 'Discuss an automation demo',
    aside: '<span class="detail-note__label">Built on Claude by Anthropic</span><h2>Business context.<br />Human handoffs.</h2><p>Your agent uses your pricing, policies and tone. English and Hinglish, with an escalation path to your team.</p>',
  }) + `
    <section class="automation-path section-pad section-pad--tight"><div class="container">${eyebrow('The connected journey')}<h2>Beyond the <em>first reply.</em></h2>
    <ol class="automation-flow">${[
      ['Attract', 'Campaigns bring in the right audience.'],
      ['Respond', 'An agent answers with your business context.'],
      ['Qualify', 'Collect dates, budget, location or needs.'],
      ['Convert', 'Route the lead to a booking or a person.'],
      ['Nurture', 'Keep the next follow-up on track.'],
    ].map(([title, text], i) => `<li><span>0${i + 1}</span><h3>${title}</h3><p>${text}</p></li>`).join('')}</ol></div></section>
    <section class="section-pad"><div class="container">${eyebrow('What we automate')}<h2 class="standalone-heading">Less busywork.<br /><em>Better conversations.</em></h2>${cards([
      ['Guest concierge', 'Property FAQs, check-in information, local tips and enquiries on WhatsApp and Instagram.'],
      ['Lead qualification', 'Ask the questions that matter, capture the answers and route enquiries to the right team member.'],
      ['Appointments & reminders', 'Help visitors find the next step, confirm bookings and remind them before their appointment.'],
      ['CRM & reporting', 'Keep lead records connected to the conversation, with reporting that supports practical decisions.'],
      ['Personalised outbound', 'Research prospects and draft context-aware outreach for B2B sales teams.'],
      ['Follow-up journeys', 'Give promising enquiries a consistent next step instead of leaving the conversation in an inbox.'],
    ])}<p class="editorial-note">We scope the channels, integrations, source of truth for availability, and human handoffs during the audit. Your team stays in control of what the agent can do.</p></div></section>
  ` + closing('See what AI could <em>take off your plate.</em>', 'We’ll start with the repetitive work and the places your leads currently get stuck.', 'Request an automation conversation', '/contact/?interest=automation'),
};

pages['land-desk'] = {
  title: 'Land Desk — AI Land Inventory for Brokers | Innspire Media',
  description: 'Land Desk turns WhatsApp deal messages and plot photos into structured inventory. An in-house Claude-powered product for land brokers and advisory teams.',
  content: () => hero({
    label: 'Our in-house product / Land Desk',
    title: 'Your land deals.<br /><em>Finally searchable.</em>',
    intro: 'WhatsApp messages, forwarded plot photos and memory can only take an inventory so far. Land Desk brings the details into one structured place you can search in plain English.',
    cta: 'Request early access', href: '/contact/?interest=land-desk',
    aside: '<span class="detail-note__label">An example of what you can ask</span><blockquote>“5 bigha+ near Mussoorie road under ₹2 Cr”</blockquote><p>Natural-language inventory search, powered by Claude.</p><span class="product-status">Built for our own land advisory team</span>',
  }) + `
    <section class="section-pad detail-problems"><div class="container">${eyebrow('From scattered messages to useful records')}<h2 class="standalone-heading">Keep the deal.<br /><em>Lose the digging.</em></h2>${cards([
      ['Drop in the details', 'Paste deal messages and upload plot sketches or listing photos, including messy Hinglish conversations.'],
      ['Structure the information', 'Extract location, area, rate, road access, title details and contact information into searchable records.'],
      ['Find the right match', 'Search your inventory in plain language, flag possible duplicates and refer back to the original source message.'],
    ])}</div></section>
    <section class="section-pad"><div class="container detail-split"><div>${eyebrow('Who it is for')}<h2>Built close to<br /><em>the ground.</em></h2></div><div class="prose"><p>Land brokers, land bankers, investors and developers dealing with bulk parcels in Uttarakhand, Himachal and Delhi NCR.</p><p>Land Desk is used by our own land advisory team. Early access is open for brokers who want to explore the workflow with us.</p><p>Request a walkthrough to see the actual product and discuss your inventory process.</p></div></div></section>
  ` + closing('Less searching.<br /><em>More useful matches.</em>', 'Tell us how you manage deals today. We’ll discuss whether Land Desk is a fit.', 'Request early access', '/contact/?interest=land-desk'),
};

pages.about = {
  title: 'About Innspire Media — Operators Who Build',
  description: 'Meet Innspire Media: an operator-led hospitality brand accelerator founded by Parinay Panwar, building AI and marketing systems from real operating experience.',
  content: () => hero({
    label: 'Our story',
    title: 'Operators who build.<br /><em>Not just advertise.</em>',
    intro: 'Innspire Media started in real estate and hospitality marketing in Delhi NCR. Running our own businesses taught us where growth really gets stuck: slow replies, missed follow-ups and scattered information.',
    cta: 'Start a conversation',
    aside: '<span class="detail-note__label">Our roots</span><h2>Delhi NCR.<br />Uttarakhand.</h2><p>Our own homestays in Dehradun and Haridwar, alongside a land advisory practice, keep the work grounded in real operations.</p>',
  }) + `
    <section class="section-pad detail-problems"><div class="container detail-split"><div>${eyebrow('Why we build')}<h2>We felt the gaps.<br /><em>Then fixed them.</em></h2></div><div class="prose"><p>A marketing campaign can create interest. But when the message lands in an unattended inbox, the opportunity is still lost.</p><p>We started building AI tools and connected workflows for our own operations. Now we bring that thinking to hospitality brands, B2B startups and clinics.</p><p>Creative work gives people a reason to choose you. Good systems make it easier for them to follow through.</p></div></div></section>
    <section class="section-pad"><div class="container founder-section"><div class="founder-monogram" aria-hidden="true">PP<span>STRATEGY + AI PRODUCT</span></div><div>${eyebrow('Meet the founder')}<h2>Parinay <em>Panwar.</em></h2><p class="detail-lede">Founder, Innspire Media</p><p>A B.Tech graduate in Computer Science, Parinay leads strategy and AI product at Innspire. He built Land Desk, our AI inventory tool for land deals, from the day-to-day needs of the advisory business.</p><a class="text-link" href="${site.linkedin}" target="_blank" rel="noreferrer">Find Innspire on LinkedIn ↗</a></div></div></section>
    <section class="section-pad section-pad--tight detail-problems"><div class="container">${eyebrow('How we work')}<h2 class="standalone-heading">Three things<br /><em>we come back to.</em></h2>${cards([
      ['Speed', 'Every lead deserves a timely reply. We design workflows that help your team respond while the interest is still there.'],
      ['Proof', 'We look at leads, conversion and revenue alongside the creative work, so decisions have something solid behind them.'],
      ['Ownership', 'We test ideas in our own businesses and bring those learnings to the work we do with you.'],
    ])}</div></section>
  ` + closing('Build with people who<br /><em>understand the desk.</em>', 'Tell us where your business is today and where you want it to go.', 'Book a growth audit'),
};

pages.work = {
  title: 'Our Thinking & Approach | Innspire Media',
  description: 'Read Innspire Media’s published thinking on connected marketing, performance campaigns and hands-on hospitality operations.',
  content: () => hero({
    label: 'Field notes / From our public feed',
    title: 'The thinking<br /><em>behind the work.</em>',
    intro: 'A good campaign is part of a bigger picture. Here is how we think about connected marketing, practical lead generation and the hospitality operations behind it all.',
    cta: 'Discuss your brief',
    aside: '<span class="detail-note__label">Our point of view</span><blockquote>“Growth isn’t about doing more. It’s about building systems that compound results.”</blockquote><a class="text-link" href="https://www.linkedin.com/posts/innspire-media_digitalmarketing-leadgeneration-performancemarketing-activity-7455285650959814656-cSYY" target="_blank" rel="noreferrer">Read the original post ↗</a>',
  }) + `
    <section class="section-pad detail-problems"><div class="container">${eyebrow('Published by Innspire')}<h2 class="standalone-heading">From the <em>working desk.</em></h2><div class="journal-grid">
      <article class="journal-card"><span class="detail-number">01 / STRATEGY</span><h3>Marketing needs to work together.</h3><p>Performance ads, SEO, social, websites and funnels should support the same journey from attention to enquiry.</p><a class="text-link" href="https://www.linkedin.com/posts/innspire-media_digitalmarketing-leadgeneration-performancemarketing-activity-7455285650959814656-cSYY" target="_blank" rel="noreferrer">Read on LinkedIn ↗</a></article>
      <article class="journal-card"><span class="detail-number">02 / PERFORMANCE</span><h3>Look beyond the click.</h3><p>Our public perspective on qualified leads, acquisition costs and Meta campaigns measured against business outcomes.</p><a class="text-link" href="https://www.linkedin.com/posts/innspire-media_metaads-performancemarketing-leadgeneration-activity-7453777555146330113-1tFq" target="_blank" rel="noreferrer">Read on LinkedIn ↗</a></article>
      <article class="journal-card"><span class="detail-number">03 / OPERATIONS</span><h3>Hospitality happens on the ground.</h3><p>Our Dehradun homestay team works on guest enquiries, bookings and the handoff between sales and operations.</p><a class="text-link" href="https://www.linkedin.com/posts/innspire-media_were-hiring-on-site-sales-executive-homestay-activity-7429835760159141888-XiWp" target="_blank" rel="noreferrer">Read on LinkedIn ↗</a></article>
    </div></div></section>
  ` + closing('Put this thinking<br /><em>to work for you.</em>', 'Let’s talk through your property, your current marketing and the enquiry journey you want to improve.', 'Start with a growth audit'),
};

pages.contact = {
  title: 'Book a Free Growth Audit | Innspire Media',
  description: 'Tell Innspire Media about your business. Prepare an enquiry for a free 30-minute growth audit or get in touch with the operations team.',
  content: (template) => {
    const section = template.match(/<section class="contact section-pad" id="contact">[\s\S]*?<\/section>/)?.[0];
    if (!section) throw new Error('Shared contact form could not be found in index.html');
    return section.replace('<h2>', '<h1>').replace('</h2>', '</h1>');
  },
};

export const notFound = {
  title: 'Page Not Found | Innspire Media',
  description: 'Find your way back to Innspire Media.',
  content: () => hero({
    label: '404 / A small detour', title: 'This page has<br /><em>checked out.</em>',
    intro: 'The address may have changed. Let’s get you back to the right place.',
    cta: 'Return to the homepage', href: '/',
    aside: '<span class="detail-note__label">Looking for something?</span><h2>Let’s help you find it.</h2><a class="text-link" href="/contact/">Speak to Innspire ↗</a>',
  }),
};

const escapeAttribute = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

export function renderPage(template, slug) {
  const page = pages[slug] || notFound;
  const title = escapeAttribute(page.title);
  const description = escapeAttribute(page.description);
  const canonical = `${site.origin}/${pages[slug] ? `${slug}/` : '404.html'}`;
  let html = template
    .replace(/<main[^>]*>[\s\S]*?<\/main>/, `<main id="main-content" class="detail-page" tabindex="-1">${page.content(template)}</main>`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*"/, `$1${description}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${title}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${description}"`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${canonical}"`);
  if (!pages[slug]) html = html.replace('</head>', '<meta name="robots" content="noindex" /></head>');
  return html;
}
