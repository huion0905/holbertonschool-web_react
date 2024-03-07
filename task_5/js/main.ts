// Interface para MajorCredits
interface MajorCredits {
    credits: number;
    _majorBrand: void; // Marca de propiedad para MajorCredits, no se usa en runtime
  }
  
  // Interface para MinorCredits
  interface MinorCredits {
    credits: number;
    _minorBrand: void; // Marca de propiedad para MinorCredits, no se usa en runtime
  }
  
  // Función para sumar MajorCredits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    // Utilizamos un objeto con la marca para asegurar el retorno de MajorCredits
    return { credits: subject1.credits + subject2.credits, _majorBrand: undefined };
  }
  
  // Función para sumar MinorCredits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    // Utilizamos un objeto con la marca para asegurar el retorno de MinorCredits
    return { credits: subject1.credits + subject2.credits, _minorBrand: undefined };
  }
  
  // Ejemplo de cómo se usarían las funciones:
  const majorSubject1: MajorCredits = { credits: 3, _majorBrand: undefined };
  const majorSubject2: MajorCredits = { credits: 4, _majorBrand: undefined };
  const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
  
  const minorSubject1: MinorCredits = { credits: 1, _minorBrand: undefined };
  const minorSubject2: MinorCredits = { credits: 2, _minorBrand: undefined };
  const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);