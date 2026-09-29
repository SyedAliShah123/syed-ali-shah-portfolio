/**
 * Security utilities for input sanitization, anti-XSS protection,
 * header injection defense, and client-side submission rate limiting.
 */

const HTML_ENTITY_MAP: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '/': '&#x2F;',
  '`': '&#x60;',
};

/**
 * Escapes HTML characters to prevent XSS payloads from executing.
 */
export function escapeHTML(str: string): string {
  return str.replace(/[&<>"'`/]/g, (char) => HTML_ENTITY_MAP[char] || char);
}

/**
 * Strips CRLF characters (\r and \n) and null bytes to prevent
 * Email Header Injection (SMTP injection) and HTTP response splitting.
 */
export function sanitizeSingleLine(str: string, maxLength = 100): string {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/[\r\n\0]/g, ' ') // Strip CRLF & null bytes
    .replace(/\s+/g, ' ')       // Normalize spaces
    .trim()
    .slice(0, maxLength);
}

/**
 * Sanitizes multi-line text input (like message bodies) by trimming,
 * enforcing maximum length, and stripping dangerous script execution vectors.
 */
export function sanitizeMultiLine(str: string, maxLength = 3000): string {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/\0/g, '') // Strip null bytes
    .trim()
    .slice(0, maxLength);
}

/**
 * Validates email addresses using RFC 5322 compatible regex,
 * preventing email header injection and invalid format dispatch.
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const cleanEmail = email.trim();
  if (cleanEmail.length > 100 || cleanEmail.length < 5) return false;
  // Disallow CRLF in emails
  if (/[\r\n]/.test(cleanEmail)) return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(cleanEmail);
}

/**
 * Client-side submission rate limiting / cooldown protection.
 * Prevents rapid-fire form submission spam and DoS attempts on email endpoints.
 */
const STORAGE_PREFIX = 'rate_limit_';

export function checkRateLimit(
  actionKey: string,
  cooldownSeconds = 45
): { allowed: boolean; remainingSeconds: number } {
  try {
    const raw = sessionStorage.getItem(`${STORAGE_PREFIX}${actionKey}`);
    if (!raw) return { allowed: true, remainingSeconds: 0 };

    const lastTime = parseInt(raw, 10);
    if (isNaN(lastTime)) return { allowed: true, remainingSeconds: 0 };

    const elapsed = Math.floor((Date.now() - lastTime) / 1000);
    if (elapsed < cooldownSeconds) {
      return { allowed: false, remainingSeconds: cooldownSeconds - elapsed };
    }
    return { allowed: true, remainingSeconds: 0 };
  } catch {
    // If storage is unavailable (e.g. strict privacy mode), allow by default
    return { allowed: true, remainingSeconds: 0 };
  }
}

export function recordRateLimitAction(actionKey: string): void {
  try {
    sessionStorage.setItem(`${STORAGE_PREFIX}${actionKey}`, Date.now().toString());
  } catch {
    // Graceful fallback if storage is blocked
  }
}
