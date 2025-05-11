import { jest, describe, it, expect, beforeEach } from '@jest/globals';
import { validateNumberInput } from '../logic.js';

global.fetch = jest.fn();

describe('validateNumberInput', () => {
  beforeEach(() => {
    fetch.mockReset();
  });

  it('debe retornar true si el backend responde que es válido', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ valid: true })
    });

    const result = await validateNumberInput('123');
    expect(result).toBe(true);
  });

  it('debe lanzar error si el backend responde error', async () => {
    fetch.mockResolvedValue({
      ok: false,
      json: async () => ({ error: 'Número inválido' })
    });

    await expect(validateNumberInput('abc')).rejects.toThrow('Número inválido');
  });
});
