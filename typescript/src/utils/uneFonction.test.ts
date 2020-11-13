import uneFonction from './uneFonction';

describe('uneFonction', () => {
    test('Retourne null si on passe rien', () => {
        const result = uneFonction();
        expect(result).toBe(null);
    });

    test('Retourne le nom passé en argument', () => {
        const result = uneFonction('Polo');
        expect(result).toBe('Polo');
    });
});
