---
prev:
  text: 'Using Inflect'
  link: '/using-inflect'
next: false
---

# Future Work
## Audit logging
Because pipeline authoring in Inflect is UI-based rather than code-based, actions performed in the UI might bypass CI/CD or version control pipelines that users of Inflect make use of in their system. To mitigate the risks of this lack of automated governance, it would be valuable for users to have access to comprehensive audit logs of all the actions performed and changes made in the Inflect UI, so as to enable easier diagnosis when unexpected problems do occur.
## Schema evolution and versioning
Production EDAs often employ schema evolution and message transformation side-by-side for the purposes of decoupling microservices. There are great schema evolution and versioning tools out there already, but integrating schema evolution and versioning features into Inflect could help to bridge these two approaches. 
## Support for more languages
Providing support for Javascript already increases the accessibility of Inflect compared to JVM-based stream processing solutions, but to reduce the barrier to entry posed by language constraints even further, it would be beneficial for Inflect to support authoring in other languages commonly used in microservices, such as Python, Go, and Rust.