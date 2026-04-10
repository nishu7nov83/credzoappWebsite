import { Helmet } from 'react-helmet-async';
import '../styles/privacy-policy.css';

const sections = [
  { id: 's1', title: 'Information We Collect' },
  { id: 's2', title: 'How We Use Your Information' },
  { id: 's3', title: 'SMS & Transaction Data' },
  { id: 's4', title: 'Data Storage & Security' },
  { id: 's5', title: 'Data Sharing & Third Parties' },
  { id: 's6', title: 'Data Retention' },
  { id: 's7', title: 'Your Rights & Choices' },
  { id: 's8', title: "Children's Privacy" },
  { id: 's9', title: 'Changes to This Policy' },
  { id: 's10', title: 'Contact Us' },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — Credzo</title>
        <meta name="description" content="Credzo Privacy Policy — how we collect, use, and protect your data." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://credzoapp.com/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://credzoapp.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy — Credzo" />
        <meta property="og:description" content="Credzo Privacy Policy — how we collect, use, and protect your data." />
        <meta property="og:image" content="https://credzoapp.com/CredzoLogo1.png" />
        <meta property="og:site_name" content="Credzo" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy — Credzo" />
        <meta name="twitter:description" content="Credzo Privacy Policy — how we collect, use, and protect your data." />
        <meta name="twitter:image" content="https://credzoapp.com/CredzoLogo1.png" />
      </Helmet>

      <section className="policy-hero">
        <div className="container">
          <span className="last-updated">Last updated: March 30, 2026</span>
          <h1>Privacy Policy</h1>
          <p>
            We take your privacy seriously. This policy explains exactly what data
            Credzo collects, how it is used, and the choices you have.
          </p>
        </div>
      </section>

      <div className="policy-body">
        <div className="policy-toc">
          <h3>Contents</h3>
          <ol>
            {sections.map((s) => (
              <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>
            ))}
          </ol>
        </div>

        <div className="highlight-box">
          <p>
            🔒 <strong>Short version:</strong> Credzo stores your expense data securely on our servers.
            We never sell your data to third parties. SMS messages are read locally on your device
            to detect transactions — the raw SMS text is never uploaded to our servers.
          </p>
        </div>

        {/* Section 1 */}
        <div className="policy-section" id="s1">
          <h2><span className="section-num">1</span> Information We Collect</h2>
          <p>We collect the following categories of information when you use Credzo:</p>
          <p><strong>Account Information</strong></p>
          <ul>
            <li>Name and email address (provided during registration)</li>
            <li>Mobile number (optional, used for account identification)</li>
            <li>Password (stored as a one-way BCrypt hash — never in plain text)</li>
            <li>Profile photo (stored locally on your device only)</li>
            <li>Preferred currency and language settings</li>
          </ul>
          <p><strong>Expense &amp; Financial Data</strong></p>
          <ul>
            <li>Expenses you manually enter: amount, category, description, date</li>
            <li>Credit card details: card holder name, last four digits, card type, bank name, billing date, expiry month/year</li>
            <li>Monthly budget limits (per category, per card, per billing period)</li>
            <li>Fixed recurring expenses you set up</li>
          </ul>
          <p><strong>Usage &amp; Technical Data</strong></p>
          <ul>
            <li>Membership plan and upgrade request history</li>
            <li>Notification preference settings</li>
            <li>App version and build number (for support purposes)</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="policy-section" id="s2">
          <h2><span className="section-num">2</span> How We Use Your Information</h2>
          <p>We use the information we collect exclusively to provide and improve the Credzo service:</p>
          <ul>
            <li><strong>Deliver core features</strong> — expense tracking, budget limits, reports, and analytics</li>
            <li><strong>Authenticate your account</strong> — JWT-based sessions to keep your data private</li>
            <li><strong>Send notifications</strong> — spending alerts and reminders at your chosen frequency</li>
            <li><strong>Process membership upgrades</strong> — managing Pro and Elite plan access</li>
            <li><strong>Provide customer support</strong> — responding to your enquiries via email</li>
            <li><strong>Improve the app</strong> — understanding how features are used in aggregate, anonymised form</li>
          </ul>
          <p>We do <strong>not</strong> use your data for advertising, profiling for third parties, or any purpose beyond delivering the service described above.</p>
        </div>

        {/* Section 3 */}
        <div className="policy-section" id="s3">
          <h2><span className="section-num">3</span> SMS &amp; Transaction Data</h2>
          <div className="warning-box">
            <p>⚠️ The SMS auto-import feature is available on Android only and requires explicit permission from you before it is activated.</p>
          </div>
          <p>
            When you grant SMS read permission, Credzo scans incoming SMS messages on your device
            to detect bank transaction notifications. This process happens <strong>entirely on your device</strong>.
          </p>
          <ul>
            <li>Raw SMS message text is <strong>never</strong> uploaded to Credzo servers</li>
            <li>Only the parsed transaction details (amount, merchant hint, date) are used to pre-fill an expense entry</li>
            <li>You review and confirm each detected transaction before it is saved</li>
            <li>Credzo stores a list of SMS IDs (numeric identifiers) locally on your device to avoid importing the same message twice — these IDs contain no personal content</li>
            <li>You can revoke SMS permission at any time from your Android system settings</li>
          </ul>
          <p>
            Credzo does not access SMS messages unrelated to bank transactions, and does not
            read OTPs, personal conversations, or any non-financial messages.
          </p>
        </div>

        {/* Section 4 */}
        <div className="policy-section" id="s4">
          <h2><span className="section-num">4</span> Data Storage &amp; Security</h2>
          <p>Your data is stored on secure servers. We implement the following technical safeguards:</p>
          <ul>
            <li><strong>Authentication</strong> — JSON Web Tokens (JWT) with 24-hour expiry for all API access</li>
            <li><strong>Password hashing</strong> — BCrypt with a strong work factor; plain-text passwords are never stored or transmitted</li>
            <li><strong>Transport security</strong> — All communication between the app and our servers uses HTTPS/TLS encryption</li>
            <li><strong>Access control</strong> — Each user can only access their own data; all API endpoints are authenticated</li>
            <li><strong>Stateless sessions</strong> — No server-side session state; tokens are validated on every request</li>
          </ul>
          <p>
            While we take commercially reasonable measures to protect your data, no method of
            electronic storage or transmission is 100% secure. We encourage you to use a strong,
            unique password for your Credzo account.
          </p>
        </div>

        {/* Section 5 */}
        <div className="policy-section" id="s5">
          <h2><span className="section-num">5</span> Data Sharing &amp; Third Parties</h2>
          <p><strong>We do not sell your personal data.</strong> We do not share your data with advertisers, data brokers, or marketing companies.</p>
          <p>We may share data only in the following limited circumstances:</p>
          <ul>
            <li><strong>Service providers</strong> — Infrastructure and hosting providers that process data on our behalf under strict confidentiality agreements</li>
            <li><strong>Legal requirements</strong> — If required by law, court order, or to protect the rights and safety of Credzo users</li>
            <li><strong>Business transfer</strong> — In the event of a merger, acquisition, or sale of assets, user data may be transferred; we will notify you before this occurs</li>
          </ul>
          <p>
            The AI-powered Planner feature (Elite plan) may transmit your anonymised spending
            patterns to an AI inference service for generating personalised recommendations.
            No personally identifiable information (name, email, card details) is included in
            these requests.
          </p>
        </div>

        {/* Section 6 */}
        <div className="policy-section" id="s6">
          <h2><span className="section-num">6</span> Data Retention</h2>
          <p>
            We retain your account and expense data for as long as your account is active.
            If you delete your account, all associated data — expenses, credit cards, budget
            limits, membership history, and notification preferences — is <strong>permanently deleted</strong> from our systems within 30 days of account deletion.
          </p>
          <p>
            Aggregated, anonymised usage statistics that cannot identify you may be retained
            indefinitely for product improvement purposes.
          </p>
        </div>

        {/* Section 7 */}
        <div className="policy-section" id="s7">
          <h2><span className="section-num">7</span> Your Rights &amp; Choices</h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul>
            <li><strong>Access</strong> — View all your stored data directly within the Credzo app (Profile, Expenses, Reports)</li>
            <li><strong>Correction</strong> — Update your expenses, card details, and budget limits at any time within the app</li>
            <li><strong>Deletion</strong> — Delete your account and all associated data from Profile → Delete Account. This action is immediate and irreversible</li>
            <li><strong>Data portability</strong> — Contact us at <a href="mailto:support@credzoapp.com">support@credzoapp.com</a> to request an export of your data in a machine-readable format</li>
            <li><strong>SMS permission</strong> — Revoke Credzo's SMS access at any time via Android system settings (Settings → Apps → Credzo → Permissions)</li>
            <li><strong>Notification opt-out</strong> — Disable all notifications via Profile → Notification Preferences within the app</li>
          </ul>
        </div>

        {/* Section 8 */}
        <div className="policy-section" id="s8">
          <h2><span className="section-num">8</span> Children's Privacy</h2>
          <p>
            Credzo is not directed at children under the age of 13. We do not knowingly collect
            personal information from children under 13. If you believe a child has provided us
            with personal data, please contact us at <a href="mailto:support@credzoapp.com" style={{ color: 'var(--blue)' }}>support@credzoapp.com</a> and we will promptly delete it.
          </p>
        </div>

        {/* Section 9 */}
        <div className="policy-section" id="s9">
          <h2><span className="section-num">9</span> Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we make material changes,
            we will update the "Last updated" date at the top of this page and, where appropriate,
            notify you via in-app notification or email.
          </p>
          <p>
            Your continued use of Credzo after changes are posted constitutes your acceptance
            of the revised policy. We encourage you to review this page periodically.
          </p>
        </div>

        {/* Section 10 */}
        <div className="policy-section" id="s10">
          <h2><span className="section-num">10</span> Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy
            or the handling of your personal data, please reach out to us:
          </p>
          <div className="contact-box">
            <h3>Credzo Privacy Team</h3>
            <p style={{ marginBottom: 8 }}>📧 Email: <a href="mailto:support@credzoapp.com">support@credzoapp.com</a></p>
            <p style={{ marginBottom: 8 }}>📍 Location: India</p>
            <p style={{ marginBottom: 0, color: 'var(--text-muted)', fontSize: 14 }}>We aim to respond to all privacy-related enquiries within 48 hours.</p>
          </div>
        </div>
      </div>
    </>
  );
}
