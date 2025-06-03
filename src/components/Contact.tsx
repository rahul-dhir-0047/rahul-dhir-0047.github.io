import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Initialize EmailJS with your public key
      // Note: In a production app, you would set up EmailJS properly with your service ID and template ID
      // For this example, we're using a simple template that forwards the email to your address
      const templateParams = {
        to_email: "rahul.dhir2001@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        "service_4at1jvq", // Replace with your actual service ID when setting up EmailJS
        "template_1e05gv2", // Replace with your actual template ID when setting up EmailJS
        templateParams,
        "HrsctDSc0mhHgGnJq" // Replace with your actual public key when setting up EmailJS
      );

      toast.success("Message sent successfully!");

      // Reset the form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-transparent/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll do my best to get back to you!
          </p>
        </div>

        <Card className="max-w-6xl mx-auto bg-card border border-border">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Send Me a Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="bg-background"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    required
                    className="bg-background"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  required
                  className="bg-background"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  required
                  rows={6}
                  className="bg-background"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                className="w-full md:w-auto"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
