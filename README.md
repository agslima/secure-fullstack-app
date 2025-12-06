# Secure Full-Stack App: Vulnerability Remediation Project

[![Node.js](https://img.shields.io/badge/Backend-Node.js-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/Frontend-React-blue.svg)](https://reactjs.org/)
[![Security: Snyk](https://img.shields.io/badge/Security-Snyk-4C4A73.svg)](https://snyk.io/)
[![OWASP](https://img.shields.io/badge/Compliance-OWASP%20Top%2010-red.svg)](https://owasp.org/)

## 🛡️ Project Overview

This repository documents the security audit and remediation of a Full-Stack Web Application (Node.js + React) as the final capstone for the **[Application Security for Developers and DevOps Professionals](https://www.coursera.org/learn/application-security-for-developers-devops)** certification.

The primary objective was to take an intentionally vulnerable application, perform a comprehensive security scan using **Snyk**, and apply **Security by Design** principles to fix high-severity issues, reducing the overall risk exposure.

## 🎯 Key Objectives Achieved

* **Vulnerability Scanning:** Automated detection of vulnerabilities in open-source dependencies (SCA) and code logic (SAST) using Snyk.
* **Risk Assessment:** Prioritized fixes based on CVSS scores (Critical/High severity first).
* **Remediation:** Upgraded vulnerable packages, patched code, and implemented defensive coding practices.
* **Defensive Coding:** Applied fixes following **OWASP Top 10** principles (e.g., sanitizing inputs, securing headers).

---

## 🛠️ Tech Stack & Tools

* **Frontend:** React.js
* **Backend:** Node.js / Express
* **Security Analysis:** [Snyk](https://snyk.io) (Software Composition Analysis & SAST)
* **Container Security:** Docker Scan
* **Monitoring (Concept):** Prometheus & Grafana methodologies

---

## 🔒 Security Analysis & Remediation Report

### 1. Initial Assessment (The Problem)

Before remediation, the application was scanned using the Snyk CLI. The initial report revealed critical vulnerabilities in the dependency tree.

**Common Vulnerabilities Detected:**

* **Cross-Site Scripting (XSS):** Detected in older frontend libraries.
* **Prototype Pollution:** Found in backend utility packages.
* **Arbitrary Code Execution:** Critical flaw in a deep dependency.

### 2. Remediation Process (The Fix)

I adopted a systematic approach to fix these issues:

1. **Direct Upgrades:** Updated `package.json` to move packages to safe versions suggested by Snyk.
2. **Patches:** Used `snyk wizard` to apply patches where upgrades were not immediately possible.
3. **Code Refactoring:** Modified backend logic to validate user input and prevent injection attacks.

### 3. Final Status (The Result)

After applying the fixes and re-running the CI/CD pipeline checks:

| Severity | Initial Count | Current Count | Status |
| :--- | :---: | :---: | :--- |
| **Critical** | 5 | 0 | ✅ Fixed |
| **High** | 8 | 0 | ✅ Fixed |
| **Medium** | 12 | 2 | ⚠️ Accepted Risk (Documented) |
| **Low** | 15 | 5 | ℹ️ Backlog |

---

## 🚀 How to Reproduce the Audit

To verify the current security status of the application, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/secure-app-analysis.gitq
cd secure-app-analysis
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Security Scan (Snyk)

You need a Snyk account and CLI installed.
Bash

```bash
# Authenticate
snyk auth

# Run the test
snyk test
```

Note: The current build should pass with no Critical or High vulnerabilities.

## 📚 Course Concepts Applied

* Security by Design: Shifting security left in the SDLC.

* Defensive Coding: Writing code that anticipates attacks.

* Monitoring: Understanding the importance of "Golden Signals" (Latency, Traffic, Errors, Saturation) for detecting anomalies that might indicate a breach.

## 📜 License

This project is for educational purposes as part of the Coursera/IBM curriculum.