const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item) => revealObserver.observe(item));

document.querySelectorAll('.faq-item button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const wasOpen = item.classList.contains('is-open');

    document.querySelectorAll('.faq-item').forEach((faqItem) => {
      faqItem.classList.remove('is-open');
      faqItem.querySelector('button').setAttribute('aria-expanded', 'false');
      faqItem.querySelector('.faq-toggle').textContent = '+';
    });

    if (!wasOpen) {
      item.classList.add('is-open');
      button.setAttribute('aria-expanded', 'true');
      button.querySelector('.faq-toggle').textContent = '−';
    }
  });
});

const leadForm = document.querySelector('#lead-form');
const enquiryResult = document.querySelector('.enquiry-result');
const formSuccess = document.querySelector('.form-success');
const emailDraft = document.querySelector('#email-draft');
const enquiryPreview = document.querySelector('.enquiry-preview');
const copyEnquiry = document.querySelector('.copy-enquiry');

const buildEnquiry = (formData) => {
  const business = formData.get('business') || 'new enquiry';
  const message = [
    `Name: ${formData.get('name') || ''}`,
    `Business: ${business}`,
    `Business type: ${formData.get('industry') || ''}`,
    `WhatsApp: ${formData.get('whatsapp') || ''}`,
    `Monthly marketing budget: ${formData.get('budget') || ''}`,
    '',
    'What they want to fix first:',
    formData.get('help') || 'Not provided',
  ].join('\n');
  const subject = `Growth audit enquiry — ${business}`;
  return { message, subject, href: `mailto:ops@innspiremedia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}` };
};

leadForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(leadForm);
  const submitButton = leadForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.innerHTML = 'Sending your note <span aria-hidden="true">…</span>';

  window.setTimeout(() => {
    const enquiry = buildEnquiry(formData);
    submitButton.disabled = false;
    submitButton.innerHTML = 'Prepare my audit enquiry <span aria-hidden="true">↗</span>';
    if (formSuccess) {
      formSuccess.textContent = 'Your enquiry is ready. Choose “Open email draft” to send it, or copy it below.';
    }
    if (emailDraft) emailDraft.href = enquiry.href;
    if (enquiryPreview) enquiryPreview.value = enquiry.message;
    enquiryResult?.removeAttribute('hidden');
    formSuccess?.classList.add('is-visible');
  }, 700);
});

copyEnquiry?.addEventListener('click', async () => {
  if (!enquiryPreview?.value) return;
  try {
    await navigator.clipboard.writeText(enquiryPreview.value);
    copyEnquiry.textContent = 'Copied';
    window.setTimeout(() => { copyEnquiry.textContent = 'Copy enquiry'; }, 1800);
  } catch {
    enquiryPreview.focus();
    enquiryPreview.select();
  }
});
