import { motion } from "framer-motion";
//data
import { contactData } from "../pages/Contact/ContactData";
const ContactInfoSection = () => {
  return (
    <>
      {/* Contact Info */}
      <motion.div
        className="space-y-12"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {contactData.contactInfo.map((item, index) => {
          if (item.email) {
            return (
              <div key={index}>
                <h3 className="text-caption text-accent mb-4">
                  {item.emailTitle}
                </h3>
                <a
                  href={`mailto:${item.email}`}
                  className="text-2xl md:text-3xl font-display hover:text-accent transition-colors"
                >
                  {item.email}
                </a>
              </div>
            );
          }

          if (item.phone) {
            return (
              <div key={index}>
                <h3 className="text-caption text-accent mb-4">
                  {item.phoneTitle}
                </h3>
                <a
                  href={`tel:${item.phone.replace(/\s+/g, "")}`}
                  className="text-2xl md:text-3xl font-display hover:text-accent transition-colors"
                >
                  {item.phone}
                </a>
              </div>
            );
          }

          if (item.address) {
            return (
              <div key={index}>
                <h3 className="text-caption text-accent mb-4">
                  {item.addressTitle}
                </h3>
                <address className="text-2xl md:text-3xl font-display not-italic whitespace-pre-line">
                  {item.address}
                  <br />
                  <span className="text-xl text-muted-foreground">
                    {item.addressSubtitle}
                  </span>
                </address>
              </div>
            );
          }

          if (item.socials) {
            return (
              <div key={index}>
                <h3 className="text-caption text-accent mb-4">
                  Социални мрежи
                </h3>
                <div className="flex gap-6">
                  {item.socials.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-accent transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      {social.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            );
          }

          return null;
        })}

        {/* Google Map */}
        <div>
          <h3 className="text-caption text-accent mb-4">Намерете ни</h3>
          <div className="w-full aspect-video rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.456844!2d27.9167!3d43.2167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4538bfb9e7a7f%3A0x5a5b8e8e8e8e8e8e!2z0LbQui4g0JLQqtCX0KDQkNCW0JTQkNCd0JUgMzcsINCS0LDRgNC90LAg0JHRitC70LPQsNGA0LjRjw!5e0!3m2!1sbg!2sbg!4v1700000000000!5m2!1sbg!2sbg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Graphyra офис локация"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default ContactInfoSection;
