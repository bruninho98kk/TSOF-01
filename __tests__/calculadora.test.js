import { soma } from "../src/calculadora.js";

describe("Calculadora", () => {
    test("Deve somar dois números corretamente", () => {
       const a = 2;
       const b = 1;

       const resultado = soma(a, b);

       expect(resultado).toBe(3);
    });
})