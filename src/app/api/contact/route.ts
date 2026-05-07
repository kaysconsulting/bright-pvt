import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = 'https://ash-be-z3x4.onrender.com/api/tickets/send-form-submission';
const RECIPIENTS = ['admin@kays-consulting.com.au', 'info@kays-consulting.com.au'];

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const results = await Promise.allSettled(
      RECIPIENTS.map((email) =>
        fetch(BACKEND_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formData: {
              websiteName: 'Bright PVT',
              formName: 'Contact Form',
              customerName: data.customerName,
              customerEmail: data.customerEmail,
              subject: data.subject || 'Contact Form Inquiry',
              message: data.message,
              phone: data.phone,
              location: data.location,
            },
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
        message: 'Form submitted successfully',
        ticketId: successes[0].value?.ticketId,
      });
    }

    return NextResponse.json(
      { success: false, message: 'Failed to send form to any recipients' },
      { status: 500 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
