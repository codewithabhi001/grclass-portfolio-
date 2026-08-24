/**
 * Anti-Spam & Bot Protection Utility for GR Class
 * Multi-layer defense to block automated spam bots, web scrapers, and fake submissions.
 */

// Disposable email domains commonly used by spam bots
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "yopmail.com",
  "guerrillamail.com",
  "10minutemail.com",
  "tempmail.com",
  "trashmail.com",
  "sharklasers.com",
  "dispostable.com",
  "getairmail.com",
  "fakeinbox.com",
  "throwawaymail.com",
  "tempr.email",
  "crazymailing.com",
  "mytemp.email",
  "maildrop.cc",
  "inboxkitten.com",
  "mohmal.com",
  "burnermail.io",
  "generator.email",
]);

// Spam keyword patterns commonly seen in automated link-building & crypto bots
const SPAM_PATTERNS = [
  /\b(casino|crypto|bitcoin|forex|viagra|cialis|porn|adult|escort|hookup|dating|loans|pills|weight\s*loss)\b/i,
  /<a\s+href=/i,
  /\[url=/i,
  /https?:\/\/.*https?:\/\/.*https?:\/\//i, // 3+ URLs in a single text
  /[\u0400-\u04FF]{10,}/, // 10+ consecutive Cyrillic characters in non-Russian forms
];

export interface BotValidationResult {
  isSpam: boolean;
  reason?: string;
  silentBlock?: boolean; // When true, show fake success so bot doesn't retry
}

/**
 * Checks if email is syntactically valid and not from a known disposable provider
 */
export function isLegitimateEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;
  const trimmed = email.trim().toLowerCase();
  
  // Basic RFC 5322 regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmed)) return false;

  const parts = trimmed.split("@");
  if (parts.length !== 2) return false;
  
  const domain = parts[1];
  if (DISPOSABLE_DOMAINS.has(domain)) return false;

  // Check for repetitive keyboard smash like "asdfghjkl" before @
  if (/^([a-z])\1{5,}@/i.test(trimmed)) return false;

  return true;
}

/**
 * Validates a form submission against multiple anti-bot heuristics
 */
export function validateFormSubmission({
  honeypotValue,
  renderedAt,
  message,
  email,
  formKey = "default",
  minDurationSeconds = 2.0,
  cooldownSeconds = 30,
}: {
  honeypotValue?: string;
  renderedAt?: number;
  message?: string;
  email?: string;
  formKey?: string;
  minDurationSeconds?: number;
  cooldownSeconds?: number;
}): BotValidationResult {
  // 1. Honeypot check: If the hidden field has ANY value, it was filled by a bot
  if (honeypotValue && honeypotValue.trim().length > 0) {
    return {
      isSpam: true,
      reason: "Honeypot triggered",
      silentBlock: true, // Fake success to mislead bot
    };
  }

  // 2. Time-to-submit check: Humans take at least 2-3 seconds to fill a form
  if (renderedAt) {
    const elapsedSeconds = (Date.now() - renderedAt) / 1000;
    if (elapsedSeconds < minDurationSeconds) {
      return {
        isSpam: true,
        reason: "Superhuman submission speed",
        silentBlock: true,
      };
    }
  }

  // 3. Email validation
  if (email && !isLegitimateEmail(email)) {
    return {
      isSpam: true,
      reason: "Invalid or temporary email address",
      silentBlock: false,
    };
  }

  // 4. Content spam pattern check
  if (message) {
    for (const pattern of SPAM_PATTERNS) {
      if (pattern.test(message)) {
        return {
          isSpam: true,
          reason: "Spam content detected",
          silentBlock: true,
        };
      }
    }
  }

  // 5. Client-side Rate Limiting (Cooldown)
  if (typeof window !== "undefined") {
    try {
      const storageKey = `gr_rate_limit_${formKey}`;
      const lastSubmission = localStorage.getItem(storageKey);
      if (lastSubmission) {
        const lastTime = parseInt(lastSubmission, 10);
        const diffSeconds = (Date.now() - lastTime) / 1000;
        if (diffSeconds < cooldownSeconds) {
          return {
            isSpam: true,
            reason: `Please wait ${Math.ceil(cooldownSeconds - diffSeconds)} seconds before submitting again.`,
            silentBlock: false,
          };
        }
      }
    } catch {
      // Storage unavailable / private mode
    }
  }

  return { isSpam: false };
}

/**
 * Records a successful submission timestamp to enforce cooldown
 */
export function recordSubmissionTimestamp(formKey = "default") {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(`gr_rate_limit_${formKey}`, Date.now().toString());
    } catch {
      // Ignore
    }
  }
}
