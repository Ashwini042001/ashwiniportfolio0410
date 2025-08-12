import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const FORM_ENDPOINT = ""; // Add your Formspree endpoint like: https://formspree.io/f/xxxxxxx

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form) as any);

    if (!FORM_ENDPOINT) {
      toast.info("Form endpoint not configured. Sending via mail.");
      window.location.href = `mailto:ashwinideshpande2001@gmail.com?subject=Portfolio%20Contact&body=${encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
      )}`;
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success("Message sent. Thank you!");
        form.reset();
      } else {
        toast.error("Failed to send. Please try again.");
      }
    } catch (err) {
      toast.error("Network error. Please try again later.");
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
              <label className="block text-sm mb-1" htmlFor="name">Name</label>
              <input id="name" name="name" required className="w-full rounded-md border bg-background px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="email">Email</label>
              <input id="email" type="email" name="email" required className="w-full rounded-md border bg-background px-3 py-2" />
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
