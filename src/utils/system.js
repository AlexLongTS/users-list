import {base_title} from '/config.json'

export function title(page) {
  return base_title.replace('%T', page)
}