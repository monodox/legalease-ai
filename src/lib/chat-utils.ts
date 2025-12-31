export function generateChatSlug(message: string): string {
  // Take first few words and create a slug
  const words = message
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(' ')
    .filter(word => word.length > 0)
    .slice(0, 4)
    .join('-')
  
  // Add timestamp for uniqueness
  const timestamp = Date.now().toString(36)
  
  return `${words}-${timestamp}`
}

export function generateChatTitle(message: string): string {
  // Take first 50 characters and add ellipsis if needed
  return message.length > 50 ? message.substring(0, 50) + '...' : message
}