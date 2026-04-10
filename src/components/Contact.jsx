import { useState, useRef } from 'react';
import { Mail, MapPin } from 'lucide-react';

const WEB3FORMS_ACCESS_KEY = '952e821e-0c6c-4163-8b35-72cd3532641d';

const validators = {
  firstName: (v) => !v.trim() ? 'First name is required.' : v.trim().length < 2 ? 'Must be at least 2 characters.' : '',
  lastName: (v) => !v.trim() ? 'Last name is required.' : '',
  email: (v) => !v.trim() ? 'Email is required.' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Enter a valid email address.' : '',
  subject: (v) => !v ? 'Please select a subject.' : '',
  message: (v) => !v.trim() ? 'Message is required.' : v.trim().length < 10 ? 'Message must be at least 10 characters.' : '',
};

export default function Contact() {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateField = (name, value) => {
    const error = validators[name]?.(value) || '';
    setErrors((prev) => ({ ...prev, [name]: error }));
    return !error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (touched[name]) validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const data = new FormData(form);

    const allValid = Object.keys(validators).every((key) =>
      validateField(key, data.get(key) || '')
    );
    setTouched(Object.keys(validators).reduce((acc, k) => ({ ...acc, [k]: true }), {}));
    if (!allValid) return;

    setSubmitting(true);
    data.append('access_key', WEB3FORMS_ACCESS_KEY);
    data.append('name', `${(data.get('firstName') || '').trim()} ${(data.get('lastName') || '').trim()}`);

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message);
      form.reset();
      setSuccess(true);
      setTouched({});
      setErrors({});
    } catch {
      alert('Failed to send message. Please email us directly at support@credzoapp.com');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact Us</span>
          <h2 className="section-title">We'd love to hear from you</h2>
          <p className="section-subtitle">
            Questions, early access, or partnerships — drop us a message and we'll reply within 24 hours.
          </p>
        </div>

        <div className="contact-card">
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="cform-row cform-row--3">
              <div className="cform-group">
                <label htmlFor="firstName">First Name <span className="required">*</span></label>
                <input type="text" id="firstName" name="firstName" placeholder="Jane" required
                  className={errors.firstName ? 'error' : ''} onBlur={handleBlur} onInput={handleInput} />
                <span className="field-error">{errors.firstName || ''}</span>
              </div>
              <div className="cform-group">
                <label htmlFor="lastName">Last Name <span className="required">*</span></label>
                <input type="text" id="lastName" name="lastName" placeholder="Doe" required
                  className={errors.lastName ? 'error' : ''} onBlur={handleBlur} onInput={handleInput} />
                <span className="field-error">{errors.lastName || ''}</span>
              </div>
              <div className="cform-group">
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input type="email" id="email" name="email" placeholder="jane@example.com" required
                  className={errors.email ? 'error' : ''} onBlur={handleBlur} onInput={handleInput} />
                <span className="field-error">{errors.email || ''}</span>
              </div>
            </div>
            <div className="cform-row cform-row--2">
              <div className="cform-group">
                <label htmlFor="subject">Subject <span className="required">*</span></label>
                <select id="subject" name="subject" required
                  className={errors.subject ? 'error' : ''} onBlur={handleBlur} onChange={handleInput}>
                  <option value="" disabled>Select a subject</option>
                  <option value="early-access">Request Early Access</option>
                  <option value="pro-upgrade">Pro Plan Inquiry</option>
                  <option value="elite-waitlist">Elite Waitlist</option>
                  <option value="feature-request">Feature Request</option>
                  <option value="bug-report">Bug Report</option>
                  <option value="partnership">Partnership / Business</option>
                  <option value="other">Other</option>
                </select>
                <span className="field-error">{errors.subject || ''}</span>
              </div>
              <div className="cform-group">
                <label htmlFor="phone">Phone <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(optional)</span></label>
                <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" />
              </div>
            </div>
            <div className="cform-group">
              <label htmlFor="message">Message <span className="required">*</span></label>
              <textarea id="message" name="message" rows="3" placeholder="Tell us how we can help..." required
                className={errors.message ? 'error' : ''} onBlur={handleBlur} onInput={handleInput}></textarea>
              <span className="field-error">{errors.message || ''}</span>
            </div>
            <div className="contact-bottom">
              <div className="contact-meta">
                <a href="mailto:support@credzoapp.com" className="contact-chip">
                  <Mail size={14} strokeWidth={2} /> support@credzoapp.com
                </a>
                <span className="contact-chip">
                  <MapPin size={14} strokeWidth={2} /> India
                </span>
              </div>
              <button
                type="submit"
                className={`btn btn-primary btn-submit${success ? ' btn-success' : ''}`}
                disabled={submitting || success}
              >
                {submitting ? 'Sending…' : success ? '✓ Sent' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
