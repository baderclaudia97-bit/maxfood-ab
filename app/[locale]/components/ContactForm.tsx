"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      // Simulate form submission
      // TODO: Replace with actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      }).catch(() => {
        // Fallback for development
        return { ok: true };
      });

      if (response.ok) {
        setSuccess(true);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(t("contact.form_error"));
      }
    } catch (err) {
      setError(t("contact.form_error"));
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          {t("contact.form_name")}
        </label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
          placeholder={t("contact.form_name")}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          {t("contact.form_email")}
        </label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
          placeholder="your@email.com"
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
          placeholder="Message subject"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          {t("contact.form_message")}
        </label>
        <textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition resize-none"
          placeholder={t("contact.form_message")}
        />
      </div>

      {/* Success Message */}
      {success && (
        <div className="p-4 bg-green-500/20 border border-green-500 rounded text-green-300 text-sm">
          ✓ {t("contact.form_success")}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-500/20 border border-red-500 rounded text-red-300 text-sm">
          ✗ {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full px-8 py-4 bg-white text-black font-semibold rounded hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : t("contact.form_send")}
      </button>
    </form>
  );
}
