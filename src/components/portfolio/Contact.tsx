import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_eezyshv";
const EMAILJS_TEMPLATE_ID = "template_owyodze";
const EMAILJS_PUBLIC_KEY = "EErk85e6B69SyCVNh";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form) as any);

    try {
      setLoading(true);
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      toast.success("Message sent. Thank you!");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Let's connect for opportunities and collaborations.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-glass rounded-xl p-6">
            <h3 className="font-semibold mb-3">Contact Details</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="font-medium">Email:</span>
                <a className="underline" href="mailto:ashwinideshpande2001@gmail.com">ashwinideshpande2001@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="font-medium">Phone:</span>
                <a className="underline" href="tel:+917899767017">+91 7899767017</a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="font-medium">LinkedIn:</span>
                <a className="underline" href="https://www.linkedin.com/in/ashwini-deshpande04102001/" target="_blank" rel="noreferrer">Profile</a>
              </li>
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="font-medium">GitHub:</span>
                <a className="underline" href="https://github.com/Ashwini042001" target="_blank" rel="noreferrer">@Ashwini042001</a>
              </li>
            </ul>
          </div>
          <form onSubmit={onSubmit} className="card-glass rounded-xl p-6 space-y-4">
            <div>
              <label className="block text-sm mb-1" htmlFor="from_name">Name</label>
              <input id="from_name" name="from_name" required className="w-full rounded-md border bg-background px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="from_email">Email</label>
              <input id="from_email" type="email" name="from_email" required className="w-full rounded-md border bg-background px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="subject">Subject</label>
              <input id="subject" name="subject" required className="w-full rounded-md border bg-background px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} className="w-full rounded-md border bg-background px-3 py-2" />
            </div>
            <Button type="submit" disabled={loading} variant="hero" className="rounded-full">
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

