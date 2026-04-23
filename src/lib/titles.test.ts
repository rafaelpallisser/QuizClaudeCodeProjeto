import { describe, it, expect } from 'vitest'
import { getTitle } from './titles'

describe('getTitle', () => {
  it('retorna Visitante para 0%', () => expect(getTitle(0)).toBe('Visitante'))
  it('retorna Visitante para 19%', () => expect(getTitle(19)).toBe('Visitante'))
  it('retorna Explorador para 20%', () => expect(getTitle(20)).toBe('Explorador'))
  it('retorna Explorador para 39%', () => expect(getTitle(39)).toBe('Explorador'))
  it('retorna Operador para 40%', () => expect(getTitle(40)).toBe('Operador'))
  it('retorna Operador para 59%', () => expect(getTitle(59)).toBe('Operador'))
  it('retorna Hacker para 60%', () => expect(getTitle(60)).toBe('Hacker'))
  it('retorna Hacker para 79%', () => expect(getTitle(79)).toBe('Hacker'))
  it('retorna Ninja para 80%', () => expect(getTitle(80)).toBe('Ninja'))
  it('retorna Ninja para 94%', () => expect(getTitle(94)).toBe('Ninja'))
  it('retorna Lenda para 95%', () => expect(getTitle(95)).toBe('Lenda'))
  it('retorna Lenda para 100%', () => expect(getTitle(100)).toBe('Lenda'))
})
