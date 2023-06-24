# azure-resume
My Azure Resume

![Website Architecture](https://github.com/AidenOliver1/azure-resume/assets/94108662/e08e3f1d-6112-433d-aaae-be08b042fb29)

Release_v1.0.0:
- Configured the Storage Account (v2) to host a static website
- Created a Cosmos DB for storing ViewerCount data
- Created the Azure Function to get the ViewerCount from the Cosmos DB
- Configured the CDN to use a Custom Domain.
- Configured the DNS from the third party platform hosting my domain.
- Configured CI/CD for the Frontend via a GitHub Action.
- Configured CI/CD for the Backend via a GitHub Action.
- Created some unit tests to be ran upon GitHub Action workflow trigger

Release_v1.1.0:
- Developed many more components of the front-end.
- Configured a CAA (RFC 8659) record in the DNS.
- Set up a Mail Server to host my contact@aidenoliver.au email.
- Set up DNSSec via CloudFlare's out-of-the-box functionality.

Release_v1.2.0:
- Configured SMTP TLS Reporting via the policy TXT DNS record.
- Configured the Sender Policy Framework via the policy TXT DNS record.
- Configured Domain-based Message Authentication, Reporting, and Conformance via the policy TXT DNS record.
- Configured HSTS Preloading at the www subdomain level

Release_v2.0.0:
- Disabled TLS versions 1.0 and 1.1 by setting the minimum TLS version to 1.2.
- Set up HTTP to HTTPS redirection for both the apex domain and the www subdomain.
- Made HTTPS mandatory on connection to the domain.
- Set up the following headers inside the Azure CDN Endpoint:
  - X-Frame-Options
  - X-Content-Type-Options
  - X-XSS-Protection
