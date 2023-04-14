import {month} from "./index.js";

describe('months according to numbers', () => {

   it ('a month should correspond the number', ()=> {
      expect(month(7)).toBe('июль');
   }),
   it ('a month should correspond to the number', ()=> {
      expect(month(2)).toBe('февраль');
   }),
   it ('a month should not correspond to the invalid number', ()=> {
      expect(month(99)).toBe('неизвестно');
   });

   });