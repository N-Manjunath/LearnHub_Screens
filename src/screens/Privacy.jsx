import React from 'react';
import logo from '../assets/logo.png';

export default function App() {
    return (
        <div style={styles.pageWrapper}>
            {/* Header */}
            <header style={styles.header}>
                <div style={styles.headerContainer}>
                    <div style={styles.logo}>
                        <div style={styles.logoIcon}>
                            <img
                                src={logo}
                                alt="Errand Learn Hub Logo"
                                className="w-auto h-auto object-contain scale-150"
                            />
                        </div>
                        <div style={styles.logoText}>
                            <span style={styles.logoTitle}>Errand Learn Hub</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main style={styles.mainContent}>
                <div style={styles.contentContainer}>
                    {/* Title */}
                    <h1 style={styles.pageTitle}>Privacy Policies</h1>
                    <p style={styles.subtitle}>Welcome to Errand Learn Hub (OPC private limited Company</p>

                    {/* Introduction */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>Introduction</h2>
                        <p style={styles.paragraph}>
                            Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your
                            use of our own pages, Errand Learn Hub (OPC private limited Company.
                        </p>
                    </section>

                    {/* Collection of Personal Information */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>Collection of Personal Information</h2>
                        <p style={styles.paragraph}>
                            Errand Learn Hub is committed to protecting your privacy. When you use our Service, we may collect certain personal information from you. This
                            information may include but is not limited to your name, contact details, phone, payment information, and other relevant data.
                        </p>
                    </section>

                    {/* Data Retention Policy */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>Data Retention Policy</h2>
                        <p style={styles.paragraph}>
                            We take the security of your data seriously. We implement reasonable measures to protect your personal information from unauthorized access,
                            disclosure, alteration, and destruction. However, please note that no method of transmission over the Internet or electronic storage is completely
                            secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    {/* Purpose of Data Collection */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>Purpose of Data Collection</h2>
                        <p style={styles.paragraph}>The information we collect is used for the following purposes:</p>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>Enabling course enrollment and delivery;</li>
                            <li style={styles.listItem}>Enhancing user experience with personalized recommendations;</li>
                            <li style={styles.listItem}>Improving course updates and responding to queries;</li>
                            <li style={styles.listItem}>Processing payments and managing billing.</li>
                        </ul>
                    </section>

                    {/* Data Sharing */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>Data Sharing</h2>
                        <p style={styles.paragraph}>
                            We use the collected information for various purposes, including processing purchases, providing customer support, improving our services, and
                            ensuring smooth We run the collected information for various purposes, including processing purchases, providing customer support, improving our
                            services, and enabling renewal.
                        </p>
                    </section>

                    {/* Data Sharing */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>Data Sharing</h2>
                        <p style={styles.paragraph}>We respect your privacy and share data only when necessary:</p>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>Service Providers: Payment processors, analytics services, or email providers.</li>
                            <li style={styles.listItem}>Legal Compliance: To comply with legal requirements or respond to lawful requests.</li>
                        </ul>
                    </section>

                    {/* User Rights */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>User Rights</h2>
                        <p style={styles.paragraph}>You have control over your data regarding your data:</p>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>Access and Rectification: View and update your personal data through your account.</li>
                            <li style={styles.listItem}>Deletion Request: Data deletion, subject to legal or contractual obligations.</li>
                            <li style={styles.listItem}>Opt-Out Data: Unsubscribe from marketing communications at any time.</li>
                        </ul>
                    </section>

                    {/* Data Security */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>Data Security</h2>
                        <p style={styles.paragraph}>We safeguard your data using industry-standard measures:</p>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>Encryption: Secure transfer data, such as payment details, during transmission.</li>
                            <li style={styles.listItem}>Access Controls: Restricted team access to authorized personnel only.</li>
                            <li style={styles.listItem}>Regular Audits: Conduct routine checks to ensure compliance with security standards.</li>
                        </ul>
                    </section>

                    {/* Cookies and Tracking Technologies */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>Cookies and Tracking Technologies</h2>
                        <p style={styles.paragraph}>Our Platform uses cookies to:</p>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>Save user preferences for improved navigation.</li>
                            <li style={styles.listItem}>Analyze website traffic (via Google Analytics and Platform partners).</li>
                        </ul>
                    </section>

                    {/* View Retention */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>View Retention</h2>
                        <p style={styles.paragraph}>
                            We retain data as long as necessary to fulfill the purposes outlined in this Privacy Policy. Academic records may be stored for ten-year post-enrollment,
                            Itown may request anti-deletion, subject to legal or contractual obligations.
                        </p>
                    </section>

                    {/* Changes to This Policy */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>Changes to this Policy</h2>
                        <p style={styles.paragraph}>
                            We reserve the right to update or change our Privacy Policy at any time. Any changes will be effective immediately upon posting on this page. It is your
                            responsibility to review this Privacy Policy periodically for updates.
                        </p>
                        <p style={styles.paragraph}>
                            By using Errand Learn Hub, you consent to the collection and use of your information as described in this Policy. If you do not use the Service, we'll please let us know by sending an email to
                            town to use it to refund access to. These Terms apply to all visitors, users and others who wish to access or use the site.
                        </p>
                    </section>

                    {/* Contact */}
                    <section style={styles.section}>
                        <p style={styles.paragraph}>If you have any questions about this policy, please contact us.</p>
                        <p style={styles.paragraph}>Email: team@errandlearn.com</p>
                        <p style={styles.paragraph}>Phone: +91-8886568849</p>
                        <p style={styles.paragraph}>Address: Real Infrastaten, Gandhli Nagar, Vijayawada, India- 520012</p>
                    </section>

                    {/* Footer */}
                    <footer style={styles.footer}>
                        <p style={styles.footerText}>@2025 ERRAND LEARN HUB. All Rights Reserved.</p>
                    </footer>
                </div>
            </main>
        </div>
    );
}

const styles = {
    pageWrapper: {
        minHeight: '100vh',
        width: '100vw',
        backgroundColor: '#ffffff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },

    // Header Styles
    header: {
        backgroundColor: 'white',
        // borderBottom: '3px solid #dc2626',
        padding: '12px 0px',
        paddingBottom: '0px'
    },
    headerContainer: {
        maxWidth: '1200px',
        // margin: '0 ',
        padding: '0 330px',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    logoIcon: {
        width: '30px',
        height: '30px',
    },
    logoText: {
        display: 'flex',
        flexDirection: 'column',
    },
    logoTitle: {
        fontSize: '16px',
        fontWeight: '600',
        fontStyle: 'italic',
        color: '#1a1a1a',
        lineHeight: '1.2',
    },

    // Main Content
    mainContent: {
        padding: '10px 24px',
        backgroundColor: '#ffffff',
    },
    contentContainer: {
        maxWidth: '800px',
        margin: '0 auto',
    },

    // Page Title
    pageTitle: {
        fontSize: '32px',
        fontWeight: '600',
        color: '#0891b2',
        marginBottom: '8px',
        lineHeight: '1.3',
    },
    subtitle: {
        fontSize: '14px',
        color: '#6b7280',
        marginBottom: '30px',
        lineHeight: '1.5',
    },

    // Sections
    section: {
        marginBottom: '32px',
    },
    sectionHeading: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#0891b2',
        marginBottom: '12px',
        lineHeight: '1.4',
    },
    paragraph: {
        fontSize: '13px',
        color: '#374151',
        lineHeight: '1.7',
        marginBottom: '12px',
        textAlign: 'justify',
    },

    // Lists
    list: {
        paddingLeft: '20px',
        marginTop: '8px',
        marginBottom: '12px',
    },
    listItem: {
        fontSize: '13px',
        color: '#374151',
        lineHeight: '1.7',
        marginBottom: '6px',
    },

    // Footer
    footer: {
        marginTop: '50px',
        paddingTop: '20px',
        borderTop: '1px solid #e5e7eb',
        textAlign: 'center',
    },
    footerText: {
        fontSize: '12px',
        color: '#0891b2',
        fontWeight: '500',
    },
};