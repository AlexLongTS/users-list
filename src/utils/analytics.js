export const browser = typeof window !== 'undefined'

export function relocate(url) {
  if (!browser) return new Promise(r => {})
  window.location.href = url
}

if (browser) {
  window.dataLayer = window.dataLayer || []
}

export function gtag() {
  if (browser) {
  window.dataLayer.push(arguments)
  }
}
import { analytics_id } from '/config.json'
export function sendHit(path) {
  gtag('config', analytics_id, {
    page_path: path,
  })
}

export function fireEvent(event, category, label) {
  gtag('event', event, {
    event_category: category || 'general',
    event_label: label || undefined
  });
}