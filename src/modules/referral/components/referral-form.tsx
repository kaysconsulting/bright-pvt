"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FormService,
  type ReferralFormPayload,
} from "@/modules/shared/services/form-service";

const SERVICE_OPTIONS = [
  "Clinical Capability",
  "Community Nursing",
  "Domestic Assistance",
  "Transport",
  "NDIS Registration Help",
] as const;

const REFERRER_ROLES = [
  "Family / friend / carer",
  "NDIS participant (self-referral)",
  "GP / medical practice",
  "Allied health professional",
  "NDIS coordinator / LAC",
  "Plan manager",
  "Aged care / residential facility",
  "Other organisation",
] as const;

interface Fields {
  referrerName: string;
  referrerEmail: string;
  referrerPhone: string;
  referrerRole: string;
  organisationName: string;
  clientFullName: string;
  clientPhone: string;
  clientOkCall: boolean;
  clientOkSms: boolean;
  clientLocation: string;
  clientDobOrAge: string;
  ndisNumber: string;
  preferredLanguage: string;
  servicesSought: string[];
  reasonForReferral: string;
  urgency: ReferralFormPayload["urgency"];
  accessNotes: string;
  gpDetails: string;
  caseManagerDetails: string;
  clinicalContext: string;
  accuracyConfirmed: boolean;
  authorityConfirmed: boolean;
}

const empty: Fields = {
  referrerName: "",
  referrerEmail: "",
  referrerPhone: "",
  referrerRole: "",
  organisationName: "",
  clientFullName: "",
  clientPhone: "",
  clientOkCall: true,
  clientOkSms: true,
  clientLocation: "",
  clientDobOrAge: "",
  ndisNumber: "",
  preferredLanguage: "",
  servicesSought: [],
  reasonForReferral: "",
  urgency: "routine",
  accessNotes: "",
  gpDetails: "",
  caseManagerDetails: "",
  clinicalContext: "",
  accuracyConfirmed: false,
  authorityConfirmed: false,
};

type Status = "idle" | "loading" | "success" | "error";

export function ReferralForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  function toggleService(name: string) {
    setFields((f) => ({
      ...f,
      servicesSought: f.servicesSought.includes(name)
        ? f.servicesSought.filter((s) => s !== name)
        : [...f.servicesSought, name],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    if (fields.servicesSought.length === 0) {
      setStatus("error");
      setErrorMsg("Please select at least one service.");
      return;
    }

    setStatus("loading");

    const payload: ReferralFormPayload = {
      referrerName: fields.referrerName.trim(),
      referrerEmail: fields.referrerEmail.trim(),
      referrerPhone: fields.referrerPhone.trim() || undefined,
      referrerRole: fields.referrerRole.trim(),
      organisationName: fields.organisationName.trim() || undefined,
      clientFullName: fields.clientFullName.trim(),
      clientPhone: fields.clientPhone.trim() || undefined,
      clientOkCall: fields.clientOkCall,
      clientOkSms: fields.clientOkSms,
      clientLocation: fields.clientLocation.trim(),
      clientDobOrAge: fields.clientDobOrAge.trim() || undefined,
      ndisNumber: fields.ndisNumber.trim() || undefined,
      preferredLanguage: fields.preferredLanguage.trim() || undefined,
      servicesSought: fields.servicesSought,
      reasonForReferral: fields.reasonForReferral.trim(),
      urgency: fields.urgency,
      accessNotes: fields.accessNotes.trim() || undefined,
      gpDetails: fields.gpDetails.trim() || undefined,
      caseManagerDetails: fields.caseManagerDetails.trim() || undefined,
      clinicalContext: fields.clinicalContext.trim() || undefined,
      accuracyConfirmed: fields.accuracyConfirmed,
      authorityConfirmed: fields.authorityConfirmed,
    };

    const result = await FormService.sendReferralForm(payload);

    if (result.success) {
      setStatus("success");
      setFields(empty);
    } else {
      setStatus("error");
      setErrorMsg(result.message || "Something went wrong. Please try again.");
    }
  }

  const inputBase =
    "w-full rounded-xl border border-slate-900/10 bg-white px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 shadow-sm outline-none ring-0 transition focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20";

  const sectionTitle =
    "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[32px] border border-slate-900/8 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(88,28,135,0.15)] ring-1 ring-inset ring-white sm:p-8 md:p-10"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-purple-200 to-transparent"
      />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center py-10 text-center"
          >
            <span className="flex size-16 items-center justify-center rounded-full bg-purple-100">
              <svg
                viewBox="0 0 24 24"
                className="size-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <h3 className="mt-5 text-[22px] font-semibold text-slate-900">
              Referral received
            </h3>
            <p className="mt-2 max-w-md text-[14px] leading-relaxed text-slate-500">
              Thank you. Our team will review your referral and follow up as soon
              as we can.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-7 rounded-full border border-slate-900/10 bg-stone-50 px-5 py-2 text-[13px] font-medium text-slate-700 transition hover:bg-stone-100"
            >
              Submit another referral
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-8"
          >
            <p className="text-[13px] leading-relaxed text-slate-500">
              Share only information you are comfortable providing here. For
              urgent clinical emergencies, call triple zero (000) or your usual
              clinician.
            </p>

            <fieldset className="flex flex-col gap-5 border-0 p-0">
              <legend className={sectionTitle}>Person making this referral</legend>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="ref-name"
                    className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                  >
                    Your full name <span className="text-purple-500">*</span>
                  </label>
                  <input
                    id="ref-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={fields.referrerName}
                    onChange={(e) => set("referrerName", e.target.value)}
                    className={inputBase}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="ref-email"
                    className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                  >
                    Email <span className="text-purple-500">*</span>
                  </label>
                  <input
                    id="ref-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={fields.referrerEmail}
                    onChange={(e) => set("referrerEmail", e.target.value)}
                    className={inputBase}
                  />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="ref-phone"
                    className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                  >
                    Phone <span className="text-slate-400">(optional)</span>
                  </label>
                  <input
                    id="ref-phone"
                    type="tel"
                    autoComplete="tel"
                    value={fields.referrerPhone}
                    onChange={(e) => set("referrerPhone", e.target.value)}
                    className={inputBase}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="ref-role"
                    className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                  >
                    Your role / relationship <span className="text-purple-500">*</span>
                  </label>
                  <select
                    id="ref-role"
                    required
                    value={fields.referrerRole}
                    onChange={(e) => set("referrerRole", e.target.value)}
                    className={`${inputBase} cursor-pointer`}
                  >
                    <option value="">Select…</option>
                    {REFERRER_ROLES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="ref-org"
                  className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                >
                  Organisation / practice name{" "}
                  <span className="text-slate-400">(optional)</span>
                </label>
                <input
                  id="ref-org"
                  type="text"
                  value={fields.organisationName}
                  onChange={(e) => set("organisationName", e.target.value)}
                  className={inputBase}
                  placeholder="If applicable"
                />
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-5 border-0 border-t border-slate-900/8 pt-8 p-0">
              <legend className={sectionTitle}>Person being referred</legend>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="client-name"
                  className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                >
                  Client full name <span className="text-purple-500">*</span>
                </label>
                <input
                  id="client-name"
                  type="text"
                  required
                  value={fields.clientFullName}
                  onChange={(e) => set("clientFullName", e.target.value)}
                  className={inputBase}
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="client-phone"
                    className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                  >
                    Preferred contact number{" "}
                    <span className="text-slate-400">(optional)</span>
                  </label>
                  <input
                    id="client-phone"
                    type="tel"
                    value={fields.clientPhone}
                    onChange={(e) => set("clientPhone", e.target.value)}
                    className={inputBase}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="client-location"
                    className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                  >
                    Suburb / area <span className="text-purple-500">*</span>
                  </label>
                  <input
                    id="client-location"
                    type="text"
                    required
                    value={fields.clientLocation}
                    onChange={(e) => set("clientLocation", e.target.value)}
                    className={inputBase}
                    placeholder="e.g. Belconnen"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-6">
                <label className="flex cursor-pointer items-center gap-2.5 text-[14px] text-slate-700">
                  <input
                    type="checkbox"
                    checked={fields.clientOkCall}
                    onChange={(e) => set("clientOkCall", e.target.checked)}
                    className="size-4 rounded border-slate-300 text-purple-600 focus:ring-purple-400/30"
                  />
                  OK to phone the client
                </label>
                <label className="flex cursor-pointer items-center gap-2.5 text-[14px] text-slate-700">
                  <input
                    type="checkbox"
                    checked={fields.clientOkSms}
                    onChange={(e) => set("clientOkSms", e.target.checked)}
                    className="size-4 rounded border-slate-300 text-purple-600 focus:ring-purple-400/30"
                  />
                  OK to SMS the client
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="client-dob"
                    className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                  >
                    Date of birth or age bracket{" "}
                    <span className="text-slate-400">(optional)</span>
                  </label>
                  <input
                    id="client-dob"
                    type="text"
                    value={fields.clientDobOrAge}
                    onChange={(e) => set("clientDobOrAge", e.target.value)}
                    className={inputBase}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="ndis"
                    className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                  >
                    NDIS participant number{" "}
                    <span className="text-slate-400">(optional)</span>
                  </label>
                  <input
                    id="ndis"
                    type="text"
                    value={fields.ndisNumber}
                    onChange={(e) => set("ndisNumber", e.target.value)}
                    className={inputBase}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="language"
                  className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                >
                  Preferred language / interpreter{" "}
                  <span className="text-slate-400">(optional)</span>
                </label>
                <input
                  id="language"
                  type="text"
                  value={fields.preferredLanguage}
                  onChange={(e) => set("preferredLanguage", e.target.value)}
                  className={inputBase}
                />
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-5 border-0 border-t border-slate-900/8 pt-8 p-0">
              <legend className={sectionTitle}>Referral details</legend>
              <div className="flex flex-col gap-2">
                <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Service(s) sought <span className="text-purple-500">*</span>
                </span>
                <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                  {SERVICE_OPTIONS.map((name) => (
                    <label
                      key={name}
                      className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-900/10 bg-stone-50 px-3 py-2 text-[13px] text-slate-700 transition hover:bg-stone-100"
                    >
                      <input
                        type="checkbox"
                        checked={fields.servicesSought.includes(name)}
                        onChange={() => toggleService(name)}
                        className="size-4 rounded border-slate-300 text-purple-600 focus:ring-purple-400/30"
                      />
                      {name}
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="urgency"
                  className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                >
                  Urgency <span className="text-purple-500">*</span>
                </label>
                <select
                  id="urgency"
                  required
                  value={fields.urgency}
                  onChange={(e) =>
                    set("urgency", e.target.value as ReferralFormPayload["urgency"])
                  }
                  className={`${inputBase} cursor-pointer`}
                >
                  <option value="routine">Routine</option>
                  <option value="soon">Soon (within days)</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="reason"
                  className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                >
                  Reason for referral / current situation{" "}
                  <span className="text-purple-500">*</span>
                </label>
                <textarea
                  id="reason"
                  required
                  rows={4}
                  value={fields.reasonForReferral}
                  onChange={(e) => set("reasonForReferral", e.target.value)}
                  className={`${inputBase} resize-none`}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="access"
                  className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                >
                  Access notes (stairs, pets, isolation hours, risks){" "}
                  <span className="text-slate-400">(optional)</span>
                </label>
                <textarea
                  id="access"
                  rows={3}
                  value={fields.accessNotes}
                  onChange={(e) => set("accessNotes", e.target.value)}
                  className={`${inputBase} resize-none`}
                />
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-5 border-0 border-t border-slate-900/8 pt-8 p-0">
              <legend className={sectionTitle}>
                Clinical / coordination (optional)
              </legend>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="gp"
                  className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                >
                  Treating GP / usual doctor
                </label>
                <input
                  id="gp"
                  type="text"
                  value={fields.gpDetails}
                  onChange={(e) => set("gpDetails", e.target.value)}
                  className={inputBase}
                  placeholder="Name and practice"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="case-mgr"
                  className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                >
                  Case manager / plan manager
                </label>
                <input
                  id="case-mgr"
                  type="text"
                  value={fields.caseManagerDetails}
                  onChange={(e) => set("caseManagerDetails", e.target.value)}
                  className={inputBase}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="clinical"
                  className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                >
                  Diagnoses / care goals <span className="text-slate-400">(optional)</span>
                </label>
                <textarea
                  id="clinical"
                  rows={3}
                  value={fields.clinicalContext}
                  onChange={(e) => set("clinicalContext", e.target.value)}
                  className={`${inputBase} resize-none`}
                  placeholder="Only if appropriate to share via this form."
                />
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-4 border-0 border-t border-slate-900/8 pt-8 p-0">
              <legend className={sectionTitle}>Declarations</legend>
              <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-slate-700">
                <input
                  type="checkbox"
                  required
                  checked={fields.accuracyConfirmed}
                  onChange={(e) => set("accuracyConfirmed", e.target.checked)}
                  className="mt-1 size-4 shrink-0 rounded border-slate-300 text-purple-600 focus:ring-purple-400/30"
                />
                <span>
                  I confirm that the information provided is accurate to the best
                  of my knowledge. <span className="text-purple-500">*</span>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-slate-700">
                <input
                  type="checkbox"
                  required
                  checked={fields.authorityConfirmed}
                  onChange={(e) => set("authorityConfirmed", e.target.checked)}
                  className="mt-1 size-4 shrink-0 rounded border-slate-300 text-purple-600 focus:ring-purple-400/30"
                />
                <span>
                  I confirm I have authority to make this referral and consent to
                  Bright Pvt contacting the person named above about services,
                  subject to our privacy policy. <span className="text-purple-500">*</span>
                </span>
              </label>
            </fieldset>

            {status === "error" && (
              <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-600">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 py-3.5 text-[14px] font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-purple-600 disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <svg
                    className="size-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  Submit referral
                  <span className="flex size-7 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 transition group-hover:translate-x-0.5">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </span>
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
