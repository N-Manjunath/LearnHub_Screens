import React from 'react';

export default function App() {
    return (
        <div style={styles.pageWrapper}>
            {/* Header */}
            <header style={styles.header}>
                <div style={styles.headerContainer}>
                    <div style={styles.logo}>
                        <div style={styles.logoIcon}>
                            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="18" stroke="#060606ff" strokeWidth="2" fill="white" />
                                <path d="M15 18 L18 21 L25 14" stroke="#050505ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                <circle cx="20" cy="12" r="1.5" fill="#080808ff" />
                                <circle cx="13" cy="27" r="1.5" fill="#0d0d0eff" />
                                <circle cx="27" cy="27" r="1.5" fill="#060606ff" />
                            </svg>
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
                    <h1 style={styles.pageTitle}>Refund Policies</h1>
                    <p style={styles.subtitle}>Welcome to Errand Learn Hub (OPC private limited Company</p>

                    {/* Payment Limitation */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>General Information</h2>
                        <p style={styles.paragraph}>
                            Refunds for any eligible transactions may take 7-10 working days to reflect in your account. This timeframe is dependent on the processing times
                            of our third-party payment gateways. We recommend customers and stakeholders are aware beforehand to reduce uncertainty and process with
                            certain cases, delays may occur due to processing times by banks, and we actively work to resolve them by maintaining constant communication
                            with the payment platforms.
                        </p>
                    </section>

                    {/* Disclaimer of Warranties */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading1}>Disclaimer of Warranties</h2>
                        <p style={styles.paragraph}>
                            THESE SERVICES ARE PROVIDED BY COMPANY ON AN "AS IS" AND "AS AVAILABLE" BASIS. COMPANY MAKES NO REPRESENTATIONS OR
                            WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATIONS OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR
                            MATERIALS INCLUDING THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR
                            ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.
                        </p>
                        <p style={styles.paragraph}>
                            NEITHER THE COMPANY NOR ANY OF ITS MANAGERS, OFFICERS, EMPLOYEES, AFFILIATES, AGENTS, CONTRACTORS, OR LICENSORS MAKE ANY
                            REPRESENTATION REGARDING RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING,
                            NEITHER COMPANY NOR ANYONE ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY
                            SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS
                            WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL
                            COMPONENTS, OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR
                            NEEDS OR EXPECTATIONS.
                        </p>
                        <p style={styles.paragraph}>
                            COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING
                            BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                        </p>
                        <p style={styles.paragraph}>
                            THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
                        </p>
                        <p style={styles.paragraph}>
                            MOREOVER, THE USE OF THE SERVICE MAY NOT SOLELY FULFILL YOUR PRECISE NEEDS. HOWEVER, WE WORK ON YOUR EXPECTATIONS AT THE USER
                            EXPERIENCE SO WISH USERS OR UPSIDE.
                        </p>
                    </section>

                    {/* Revert of Fraudulent Activities */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading1}>Beware of Fraudulent Activities</h2>
                    </section>

                    {/* Official Communication Channels */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>Official Communication Channels</h2>
                        <p style={styles.paragraph}>
                            ERRAND LEARN HUB (OPC PRIVATE LIMITED) communicates exclusively through the official email address errandlearnchat.com. Any
                            correspondence received from other email addresses should be deemed fraudulent.
                        </p>
                    </section>

                    {/* No Request for Sensitive Information */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>No Request for Sensitive Information</h2>
                        <p style={styles.paragraph}>
                            The Company's support team will never request One-Time Passwords (OTPs), passwords, or any sensitive personal information
                            through emails or calls.
                        </p>
                    </section>

                    {/* Authorized Support Contact */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>Authorized Support Contact</h2>
                        <p style={styles.paragraph}>
                            For email-related queries, the Company operates only one official Support Number: +91-8886568849.
                        </p>
                    </section>

                    {/* Official Reimbursements */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>Official Reimbursements</h2>
                        <p style={styles.paragraph}>
                            All refunds and cancellations are made exclusively through the Company's verified social media accounts (accessible via the dashboard),
                            the official website errandlearnhub.com, or phone contact.
                        </p>
                    </section>

                    {/* Monetary Transactions */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>Monetary Transactions</h2>
                        <p style={styles.paragraph}>
                            ERRAND LEARN HUB does not request payment or fees for municipal procedures but purposes from affiliate or customers prior enrollment.
                            Any claims requesting such payment should be reported immediately.
                        </p>
                        <p style={styles.paragraph}>
                            Affiliates are prohibited from accepting registration fees or payments into their personal accounts; all transactions must be made through the Company's
                            legally designated payment channels.
                        </p>
                    </section>

                    {/* Liquidity Disclaimer */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>Liquidity Disclaimer</h2>
                        <p style={styles.paragraph}>
                            The Company shall not be held responsible for any monetary transactions conducted through unauthorized individual accounts or channels that are
                            not listed by the official forms, account information, OR THROUGH THE OFFICIAL SUPPORT NUMBER.
                        </p>
                    </section>

                    {/* Affiliate Guidelines */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading1}>Affiliate Guidelines</h2>
                    </section>

                    {/* Disclaimer */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>Disclaimer</h2>
                        <p style={styles.paragraph}>
                            @ ERRAND LEARN HUB (OPC)PRIVATE LIMITED, are endeavors to replenish our products and services accurately, including third-parties generating
                            all user content which is submitted to the Platform update, news, feeds, or through its collaborating services or online partners under their operating
                            conditions. The Company disclaims liability for any warnings or business outcomes arising from the use of its products, services, or affiliate program.
                            Stakeholders and recognized institutes or individual representatives should verify the reliability or accuracy of such information and confirm that the
                            content they access pertains to their respective nation or institutional or past use of our Services.
                        </p>
                    </section>

                    {/* Changes in Service */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>Changes in Service</h2>
                        <p style={styles.paragraph}>
                            We reserve the right to modify prices or other aspects can be suspended at any time. If you continue using the Service, in our sole discretion without notice. We
                            will not be liable if for any reason all or any part of Service is unavailable at any time or for any period. From time to time, we may restrict access to
                            some parts of Service, or the entire Service, to users, including registered users.
                        </p>
                    </section>

                    {/* Amendments to Terms */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>Amendments to Terms</h2>
                        <p style={styles.paragraph}>
                            We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.
                        </p>
                        <p style={styles.paragraph}>
                            Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to
                            check this page frequently so you are aware of any changes, as they are binding on you.
                        </p>
                        <p style={styles.paragraph}>
                            By continuing to use or access our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to
                            the new terms, you are no longer authorized to use Service.
                        </p>
                    </section>

                    {/* Acknowledgement */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionHeading}>Acknowledgement</h2>
                        <p style={styles.paragraph}>
                            BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND
                            AGREE TO BE BOUND BY THEM.
                        </p>
                        <p style={styles.paragraph}>
                            ONLY Indian citizens may join as "Affiliate Marketer" with valid documents, for e.g. Aadhar card, Pan card & Indian bank account.
                        </p>
                    </section>

                    {/* Footer */}
                    <footer style={styles.footer}>
                        <p style={styles.footerText}>@2025 ERRANDLEARNHUB. All Rights Reserved.</p>
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
        padding: '12px 0',
    },
    headerContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 340px',
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
        fontWeight: '500',
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
        marginBottom: '28px',
    },
    sectionHeading: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#0891b2',
        marginBottom: '12px',
        lineHeight: '1.4',

    },
    sectionHeading1: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#0891b2',
        marginBottom: '12px',
        lineHeight: '1.4',
        textAlign: 'center'
    },
    paragraph: {
        fontSize: '13px',
        color: '#374151',
        lineHeight: '1.7',
        marginBottom: '12px',
        textAlign: 'justify',
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