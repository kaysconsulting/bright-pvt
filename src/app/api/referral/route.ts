import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = 'https://ash-be-z3x4.onrender.com/api/tickets/send-form-submission';
const RECIPIENTS = ['admin@kays-consulting.com.au', 'info@kays-consulting.com.au'];

type Urgency = 'routine' | 'soon' | 'urgent';

export interface ReferralRequestBody {
  referrerName: string;
  referrerEmail: string;
  referrerPhone?: string;
  referrerRole: string;
  organisationName?: string;
  clientFullName: string;
  clientPhone?: string;
  clientOkCall: boolean;
  clientOkSms: boolean;
  clientLocation: string;
  clientDobOrAge?: string;
  ndisNumber?: string;
  preferredLanguage?: string;
  servicesSought: string[];
  reasonForReferral: string;
  urgency: Urgency;
  accessNotes?: string;
  gpDetails?: string;
  caseManagerDetails?: string;
  clinicalContext?: string;
  accuracyConfirmed: boolean;
  authorityConfirmed: boolean;
}

function isUrgency(v: unknown): v is Urgency {
  return v === 'routine' || v === 'soon' || v === 'urgent';
}

function lines(label: string, value: string | undefined): string[] {
  if (!value?.trim()) return [];
  return [`${label}: ${value.trim()}`];
}

function composeReferralMessage(body: ReferralRequestBody): string {
  const svc =
    body.servicesSought?.length > 0
      ? body.servicesSought.join(', ')
      : 'Not specified';

  const sections: string[] = [];

  sections.push('REFERRAL SUBMISSION');
  sections.push('');
  sections.push('--- Person making this referral ---');
  sections.push(`Name: ${body.referrerName}`);
  sections.push(`Email: ${body.referrerEmail}`);
  sections.push(...lines('Phone', body.referrerPhone));
  sections.push(`Role / relationship: ${body.referrerRole}`);
  sections.push(...lines('Organisation / practice', body.organisationName));

  sections.push('');
  sections.push('--- Person being referred (client) ---');
  sections.push(`Full name: ${body.clientFullName}`);
  sections.push(...lines('Preferred contact number', body.clientPhone));
  sections.push(
    `OK to call: ${body.clientOkCall ? 'Yes' : 'No'} | OK to SMS: ${body.clientOkSms ? 'Yes' : 'No'}`
  );
  sections.push(`Location (suburb / area): ${body.clientLocation}`);
  sections.push(...lines('Date of birth or age bracket', body.clientDobOrAge));
  sections.push(...lines('NDIS participant number', body.ndisNumber));
  sections.push(...lines('Preferred language / interpreter needs', body.preferredLanguage));

  sections.push('');
  sections.push('--- Referral details ---');
  sections.push(`Service(s) sought: ${svc}`);
  sections.push(`Urgency: ${body.urgency}`);
  sections.push('');
  sections.push('Reason for referral / current situation:');
  sections.push(body.reasonForReferral.trim());

  if (body.accessNotes?.trim()) {
    sections.push('');
    sections.push(
      'Access notes (risks, stairs, pets, isolation hours, etc.):'
    );
    sections.push(body.accessNotes.trim());
  }

  sections.push('');
  sections.push('--- Clinical / coordination (optional) ---');
  sections.push(...lines('Treating GP / usual doctor', body.gpDetails));
  sections.push(...lines('Case manager / plan manager', body.caseManagerDetails));
  if (body.clinicalContext?.trim()) {
    sections.push('');
    sections.push('Diagnoses / care goals (as shared by referrer):');
    sections.push(body.clinicalContext.trim());
  }

  sections.push('');
  sections.push('--- Declarations ---');
  sections.push(`Accuracy confirmed: ${body.accuracyConfirmed ? 'Yes' : 'No'}`);
  sections.push(`Authority to refer / consent for Bright Pvt to contact client: ${body.authorityConfirmed ? 'Yes' : 'No'}`);

  return sections.filter(Boolean).join('\n');
}

function subjectFromServices(services: string[]): string {
  if (!services?.length) return 'Referral — General';
  const primary = services[0];
  if (services.length === 1) return `Referral — ${primary}`;
  return `Referral — ${primary} (+${services.length - 1} more)`;
}

export async function POST(req: NextRequest) {
  try {
    const raw = await req.json();

    const referrerName = typeof raw.referrerName === 'string' ? raw.referrerName.trim() : '';
    const referrerEmail = typeof raw.referrerEmail === 'string' ? raw.referrerEmail.trim() : '';
    const referrerRole = typeof raw.referrerRole === 'string' ? raw.referrerRole.trim() : '';
    const clientFullName = typeof raw.clientFullName === 'string' ? raw.clientFullName.trim() : '';
    const clientLocation = typeof raw.clientLocation === 'string' ? raw.clientLocation.trim() : '';
    const reasonForReferral =
      typeof raw.reasonForReferral === 'string' ? raw.reasonForReferral.trim() : '';
    const urgency = raw.urgency;

    const servicesSought = Array.isArray(raw.servicesSought)
      ? raw.servicesSought.filter((s: unknown): s is string => typeof s === 'string' && s.trim().length > 0)
      : [];

    const accuracyConfirmed = raw.accuracyConfirmed === true;
    const authorityConfirmed = raw.authorityConfirmed === true;

    if (
      !referrerName ||
      !referrerEmail ||
      !referrerRole ||
      !clientFullName ||
      !clientLocation ||
      !reasonForReferral ||
      !isUrgency(urgency) ||
      servicesSought.length === 0 ||
      !accuracyConfirmed ||
      !authorityConfirmed
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            'Please complete all required fields, select at least one service, and confirm both declarations.',
        },
        { status: 400 }
      );
    }

    const body: ReferralRequestBody = {
      referrerName,
      referrerEmail,
      referrerPhone:
        typeof raw.referrerPhone === 'string' ? raw.referrerPhone.trim() : undefined,
      referrerRole,
      organisationName:
        typeof raw.organisationName === 'string' ? raw.organisationName.trim() : undefined,
      clientFullName,
      clientPhone:
        typeof raw.clientPhone === 'string' ? raw.clientPhone.trim() : undefined,
      clientOkCall: raw.clientOkCall === true,
      clientOkSms: raw.clientOkSms === true,
      clientLocation,
      clientDobOrAge:
        typeof raw.clientDobOrAge === 'string' ? raw.clientDobOrAge.trim() : undefined,
      ndisNumber: typeof raw.ndisNumber === 'string' ? raw.ndisNumber.trim() : undefined,
      preferredLanguage:
        typeof raw.preferredLanguage === 'string' ? raw.preferredLanguage.trim() : undefined,
      servicesSought,
      reasonForReferral,
      urgency,
      accessNotes:
        typeof raw.accessNotes === 'string' ? raw.accessNotes.trim() : undefined,
      gpDetails: typeof raw.gpDetails === 'string' ? raw.gpDetails.trim() : undefined,
      caseManagerDetails:
        typeof raw.caseManagerDetails === 'string' ? raw.caseManagerDetails.trim() : undefined,
      clinicalContext:
        typeof raw.clinicalContext === 'string' ? raw.clinicalContext.trim() : undefined,
      accuracyConfirmed,
      authorityConfirmed,
    };

    const message = composeReferralMessage(body);
    const subject = subjectFromServices(servicesSought);

    const formData = {
      websiteName: 'Bright PVT',
      formName: 'Referral Form',
      customerName: body.referrerName,
      customerEmail: body.referrerEmail,
      subject,
      message,
      phone: body.referrerPhone,
      location: body.clientLocation,
      referrerRole: body.referrerRole,
      organisationName: body.organisationName,
      clientFullName: body.clientFullName,
      clientPhone: body.clientPhone,
      clientOkCall: body.clientOkCall,
      clientOkSms: body.clientOkSms,
      clientDobOrAge: body.clientDobOrAge,
      ndisNumber: body.ndisNumber,
      preferredLanguage: body.preferredLanguage,
      servicesSought: body.servicesSought,
      urgency: body.urgency,
      accessNotes: body.accessNotes,
      gpDetails: body.gpDetails,
      caseManagerDetails: body.caseManagerDetails,
      clinicalContext: body.clinicalContext,
      accuracyConfirmed: body.accuracyConfirmed,
      authorityConfirmed: body.authorityConfirmed,
    };

    const results = await Promise.allSettled(
      RECIPIENTS.map((email) =>
        fetch(BACKEND_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formData,
            options: {
              to: email,
              websiteName: 'Bright PVT',
            },
          }),
        }).then((r) => r.json())
      )
    );

    const successes = results.filter(
      (r): r is PromiseFulfilledResult<{ ticketId?: string }> => r.status === 'fulfilled'
    );

    if (successes.length > 0) {
      return NextResponse.json({
        success: true,
        message: 'Referral submitted successfully',
        ticketId: successes[0].value?.ticketId,
      });
    }

    return NextResponse.json(
      { success: false, message: 'Failed to send referral to any recipients' },
      { status: 500 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: 'Failed to submit referral' },
      { status: 500 }
    );
  }
}
