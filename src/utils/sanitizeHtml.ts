/**
 * Sanitizes HTML content to prevent XSS attacks
 * Only allows safe HTML tags: strong, em, b, i, u, br, span, p
 * Strips out all other tags and dangerous attributes
 */
export function sanitizeHtml(html: string): string {
  if (typeof document === 'undefined') {
    // Server-side rendering fallback: simple regex-based sanitization
    return html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/on\w+="[^"]*"/gi, '')
      .replace(/on\w+='[^']*'/gi, '')
      .replace(/javascript:/gi, '')
  }
  
  // Client-side: Use DOMParser for better sanitization
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  
  // List of allowed tags (only safe formatting tags)
  const allowedTags = ['strong', 'em', 'b', 'i', 'u', 'br', 'span', 'p']
  
  // Recursively sanitize nodes
  const sanitizeNode = (node: Node): string => {
    if (node.nodeType === Node.TEXT_NODE) {
      return (node.textContent || '').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    }
    
    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element
      const tagName = element.tagName.toLowerCase()
      
      // Only allow safe tags
      if (!allowedTags.includes(tagName)) {
        // Return only text content for disallowed tags
        return Array.from(node.childNodes)
          .map(child => sanitizeNode(child))
          .join('')
      }
      
      // Build the sanitized tag (no attributes allowed for security)
      let sanitized = `<${tagName}>`
      
      // Recursively sanitize children
      Array.from(node.childNodes).forEach(child => {
        sanitized += sanitizeNode(child)
      })
      
      sanitized += `</${tagName}>`
      return sanitized
    }
    
    return ''
  }
  
  // Sanitize the body content
  const body = doc.body
  const sanitized = Array.from(body.childNodes)
    .map(node => sanitizeNode(node))
    .join('')
  
  return sanitized || html // Fallback to original if sanitization fails
}
