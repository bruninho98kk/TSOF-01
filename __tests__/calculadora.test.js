import { soma, subtrai } from "../src/calculadora.js";

describe("Calculadora", () => {
    test("Deve somar dois números corretamente", () => {
       const a = 2;
       const b = 1;

       const resultado = soma(a, b);

       expect(resultado).toBe(3);
    });

    test("Deve subtrair dois números corretamente", () => {
        const a = 5;
        const b = 2;

        const resultado = subtrai(a, b);

        expect(resultado).toBe(3);
    });
})
