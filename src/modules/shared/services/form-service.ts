export interface FormData {
    websiteName: string
    formName: string
    customerName: string
    customerEmail: string
    subject: string
    message: string
    phone?: string
    location?: string
    [key: string]: unknown // Allow additional fields
}

export interface FormOptions {
    to: string
    websiteName: string
}

export interface FormSubmissionRequest {
    formData: FormData
    options: FormOptions
}

export interface FormSubmissionResponse {
    success: boolean
    message: string
    ticketId?: string
}

const BASE_URL = 'https://ash-be-z3x4.onrender.com'
const FORM_ENDPOINT = '/api/tickets/send-form-submission'
const SUBSCRIPTIONS_ENDPOINT = '/api/subscriptions'

export type SubscriptionResult =
    | { status: 'success'; message: string }
    | { status: 'duplicate'; message: string }
    | { status: 'error'; message: string; statusCode?: number }

export class FormService {
    static async sendFormSubmission(
        formData: FormData,
        options?: Partial<FormOptions>
    ): Promise<FormSubmissionResponse> {
        try {
            const defaultOptions: FormOptions = {
                to: 'admin@kays-consulting.com.au',
                websiteName: 'Kays Consulting Services',
                ...options
            }

            const requestBody: FormSubmissionRequest = {
                formData,
                options: defaultOptions
            }

            const response = await fetch(`${BASE_URL}${FORM_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const result = await response.json()

            return {
                success: true,
                message: result.message || 'Form submitted successfully',
                ticketId: result.ticketId
            }
        } catch (error) {
            console.error('Error sending form submission:', error)
            return {
                success: false,
                message: error instanceof Error ? error.message : 'Failed to submit form'
            }
        }
    }

    // Helper method for contact form submissions — routes through Next.js API proxy to avoid CORS in production
    static async sendContactForm(data: {
        customerName: string
        customerEmail: string
        phone?: string
        location?: string
        message: string
        subject?: string
    }): Promise<FormSubmissionResponse> {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const result = await response.json()

            return {
                success: result.success ?? true,
                message: result.message || 'Form submitted successfully',
                ticketId: result.ticketId,
            }
        } catch (error) {
            console.error('Error sending contact form:', error)
            return {
                success: false,
                message: error instanceof Error ? error.message : 'Failed to submit form',
            }
        }
    }

    /** Subscribe to newsletter. Uses same backend; handles 201, 409, and errors with server message when available. */
    static async subscribeNewsletter(data: {
        name: string
        email: string
        source?: string
    }): Promise<SubscriptionResult> {
        try {
            const name = (data.name ?? '').trim()
            const email = (data.email ?? '').trim().toLowerCase()
            if (!email) {
                return { status: 'error', message: 'Please enter your email address.' }
            }
            if (!name) {
                return { status: 'error', message: 'Please enter your name.' }
            }

            const controller = new AbortController()
            const timeoutId = setTimeout(() => controller.abort(), 30000) // 30s for Render cold start
            
            // Backend expects: { name: string, email: string, source: string }
            const response = await fetch(`${BASE_URL}${SUBSCRIPTIONS_ENDPOINT}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    source: data.source || 'fgh', // Use provided source, default to 'fgh'
                }),
                signal: controller.signal,
            })
            clearTimeout(timeoutId)

            if (response.status === 201) {
                return {
                    status: 'success',
                    message: 'Thank you! Check your inbox for program updates and exclusive gut health insights.',
                }
            }
            if (response.status === 409) {
                return {
                    status: 'duplicate',
                    message: "You're already subscribed! We'll keep you updated on the 14-Week Reset program.",
                }
            }

            let message = 'Something went wrong. Please try again.'
            try {
                const body = await response.json()
                console.error('Subscription API error:', { status: response.status, body })
                const serverMsg =
                    (typeof body?.message === 'string' && body.message) ||
                    (typeof body?.error === 'string' && body.error) ||
                    (Array.isArray(body?.errors) && body.errors[0] != null
                        ? typeof body.errors[0] === 'string'
                            ? body.errors[0]
                            : (body.errors[0]?.message ?? body.errors[0]?.msg)
                        : undefined) ||
                    (typeof body?.details === 'string' && body.details)
                if (serverMsg) message = serverMsg
            } catch {
                if (response.status === 502 || response.status === 503) {
                    message = 'Service is starting up. Please wait a moment and try again.'
                } else if (response.status >= 500) {
                    message = 'Server error. Please try again in a few minutes.'
                } else if (response.status === 400) {
                    message = 'Invalid email or name. Please check and try again.'
                }
            }
            return { status: 'error', message, statusCode: response.status }
        } catch (error) {
            if (error instanceof Error) {
                if (error.name === 'AbortError') {
                    return { status: 'error', message: 'Request timed out. Please try again.' }
                }
                return {
                    status: 'error',
                    message: /fetch|network/i.test(error.message)
                        ? 'Unable to connect. Please check your connection and try again.'
                        : 'Unable to subscribe. Please try again later.',
                }
            }
            return { status: 'error', message: 'Unable to subscribe. Please try again later.' }
        }
    }
}
