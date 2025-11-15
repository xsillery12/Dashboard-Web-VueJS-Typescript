export const login = (email: string, password: string) => {
  if (email === 'admin@example.com' && password === 'admin123') {
    localStorage.setItem('token', 'dummy_token_123')
    return true
  }
  return false
}

export const logout = () => {
  localStorage.removeItem('token')
}
