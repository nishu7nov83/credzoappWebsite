import { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../styles/account-deletion.css';

const API_BASE = 'https://api.credzoapp.com/api';

export default function AccountDeletion() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [otpError, setOtpError] = useState('');
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const otpRefs = useRef([]);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const startCountdown = useCallback(() => {
    setCountdown(60);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) { clearInterval(timerRef.current); return 0; }
        return prev - 1;
      });
    }, 1000);
  }, []);

  const getOtp = () => otpRefs.current.map((el) => el?.value || '').join('');

  const handleOtpInput = (e, i) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    e.target.value = val;
    if (val && i < 5) otpRefs.current[i + 1]?.focus();
  };

  const handleOtpKeyDown = (e, i) => {
    if (e.key === 'Backspace' && !e.target.value && i > 0) {
      otpRefs.current[i - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = (e.clipboardData.getData('text') || '').replace(/[^0-9]/g, '').slice(0, 6);
    pasted.split('').forEach((ch, idx) => {
      if (otpRefs.current[idx]) otpRefs.current[idx].value = ch;
    });
    const focusIdx = Math.min(pasted.length, 5);
    otpRefs.current[focusIdx]?.focus();
  };

  const sendOtp = async () => {
    const trimmed = email.trim().toLowerCase();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/auth/account-deletion/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = await res.json();
      if (!res.ok) { setEmailError(data.message || 'Something went wrong.'); return; }
      setStep(2);
      startCountdown();
      setTimeout(() => otpRefs.current[0]?.focus(), 100);
    } catch {
      setEmailError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const confirmDeletion = async () => {
    const otp = getOtp();
    if (otp.length !== 6) { setOtpError('Please enter the complete 6-digit code.'); return; }
    setOtpError('');
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/auth/account-deletion/confirm`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase(), otp }),
      });
      const data = await res.json();
      if (!res.ok) { setOtpError(data.message || 'Verification failed.'); return; }
      setStep(3);
    } catch {
      setOtpError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLastOtpInput = (e, i) => {
    handleOtpInput(e, i);
    setTimeout(() => { if (getOtp().length === 6) confirmDeletion(); }, 50);
  };

  return (
    <>
      <Helmet>
        <title>Account Deletion — Credzo</title>
        <meta name="description" content="Request deletion of your Credzo account and all associated data." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://credzoapp.com/account-deletion" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://credzoapp.com/account-deletion" />
        <meta property="og:title" content="Account Deletion — Credzo" />
        <meta property="og:description" content="Request deletion of your Credzo account and all associated data." />
        <meta property="og:image" content="https://credzoapp.com/CredzoLogo1.png" />
        <meta property="og:site_name" content="Credzo" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Account Deletion — Credzo" />
        <meta name="twitter:description" content="Request deletion of your Credzo account and all associated data." />
        <meta name="twitter:image" content="https://credzoapp.com/CredzoLogo1.png" />
      </Helmet>

      <section className="deletion-hero">
        <div className="container">
          <h1>Account Deletion</h1>
          <p>
            Request permanent deletion of your Credzo account and all associated data.
            This action cannot be undone.
          </p>
        </div>
      </section>

      <div className="deletion-body">
        <div className="deletion-warning">
          <p>
            Once your account is deleted, all your data — expenses, credit cards,
            budget limits, membership history, and preferences — will be permanently
            removed from our systems within 7 business days.
          </p>
        </div>

        <div className="deletion-card">
          {/* Step indicators */}
          <div className="step-indicator">
            <div className={`step-dot${step === 1 ? ' active' : step > 1 ? ' done' : ''}`}></div>
            <div className="step-connector-line"></div>
            <div className={`step-dot${step === 2 ? ' active' : step > 2 ? ' done' : ''}`}></div>
            <div className="step-connector-line"></div>
            <div className={`step-dot${step === 3 ? ' active' : ''}`}></div>
          </div>

          {/* Step 1: Enter email */}
          {step === 1 && (
            <div>
              <h3 className="step-title">Enter Your Email</h3>
              <p className="step-subtitle">
                Enter the email address associated with your Credzo account.
                We'll send a verification code to confirm your identity.
              </p>
              <div className="form-group">
                <label htmlFor="emailInput">Email Address</label>
                <input
                  type="email" id="emailInput" placeholder="you@example.com" autoComplete="email"
                  className={emailError ? 'error' : ''}
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendOtp()}
                />
              </div>
              <div className="error-msg">{emailError}</div>
              <button
                className={`btn btn-primary btn-full${loading ? ' btn-loading-state' : ''}`}
                onClick={sendOtp} disabled={loading}
              >
                {loading ? 'Please wait...' : 'Send Verification Code'}
              </button>
            </div>
          )}

          {/* Step 2: Enter OTP */}
          {step === 2 && (
            <div>
              <h3 className="step-title">Verify Your Identity</h3>
              <p className="step-subtitle">
                Enter the 6-digit code sent to <strong>{email.trim().toLowerCase()}</strong>
              </p>
              <div className="otp-inputs">
                {Array.from({ length: 6 }).map((_, i) => (
                  <input
                    key={i}
                    ref={(el) => (otpRefs.current[i] = el)}
                    type="text" className="otp-input" maxLength="1"
                    inputMode="numeric" pattern="[0-9]"
                    onInput={i === 5 ? (e) => handleLastOtpInput(e, i) : (e) => handleOtpInput(e, i)}
                    onKeyDown={(e) => handleOtpKeyDown(e, i)}
                    onPaste={handleOtpPaste}
                  />
                ))}
              </div>
              <div className="resend-row">
                <button
                  className="resend-btn" disabled={countdown > 0}
                  onClick={() => { sendOtp(); startCountdown(); }}
                >
                  {countdown > 0 ? `Resend code in ${countdown}s` : 'Resend Code'}
                </button>
              </div>
              <div className="error-msg">{otpError}</div>
              <button
                className={`btn btn-danger btn-full${loading ? ' btn-loading-state' : ''}`}
                onClick={confirmDeletion} disabled={loading}
              >
                {loading ? 'Please wait...' : 'Delete My Account'}
              </button>
            </div>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <div>
              <div className="success-icon-large">&#10003;</div>
              <h3 className="success-title">Request Submitted</h3>
              <p className="success-text">
                Your account deletion request has been received. We'll process it
                within <strong>7 business days</strong> and send a confirmation email
                once completed.
              </p>
              <div className="info-list">
                <h4>What happens next?</h4>
                <ul>
                  <li>All your expenses, credit cards, and budget data will be permanently deleted</li>
                  <li>Your membership and payment history will be removed</li>
                  <li>You will receive a confirmation email once the deletion is complete</li>
                  <li>If you change your mind, contact <a href="mailto:support@credzoapp.com" style={{ color: 'var(--blue)' }}>support@credzoapp.com</a> before the request is processed</li>
                </ul>
              </div>
              <Link to="/" className="btn btn-primary btn-full">Back to Home</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
