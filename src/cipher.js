
window.cipher = {
  encode: (text, shifts) => {
  
    let cipEncode = ""; // Aquí se almacenan las letras reemplazadas, va a ser el nuevo mensaje.
    for (let i = 0; i < text.length; i++) {
      // La función va recorriendo cada letra del string hasta llegar a la última.
      let txt = text.charCodeAt(i); // Aquí se traducen de letras a unicodes.
      if (65 <= txt && txt <= 90) {
        // Poniendo rangos de los unicode para poder definir si son mayúsculas, minúsculas o todo lo demás. En éste caso son las mayúsculas.
        cipEncode += String.fromCharCode(
          ((txt - 65 + parseInt(shifts)) % 26) + 65
        ); // Aquí se aplica la fórmula para obtener el nuevo número, y traspasarlo a la letra correspondiente en mayúscula.
      } else if (97 <= txt && txt <= 122) {
        // En éste caso son las minúsculas.
        cipEncode += String.fromCharCode(
          ((txt - 97 + parseInt(shifts)) % 26) + 97
        ); // Aquí se aplica la fórmula para obtener el nuevo número, y traspasarlo a la letra correspondiente en minúscula.
      } else {
        cipEncode += text.charAt(i);
      } // Aquí se aplica el caso en que no sean letras. Se copia directamente el carácter.
    }
    return cipEncode; // Retorna el nuevo mensaje codificado.
  },

  decode: (text, shifts) => {
    /* Acá va tu código */
    let cipDecode = ""; // Aquí se almacenan las letras reemplazadas, va a ser el nuevo mensaje.
    for (let i = 0; i < text.length; i++) {
      // La función va recorriendo cada letra del string hasta llegar a la última.
      let txt = text.charCodeAt(i); // Aquí se traducen de letras a unicodes.
      if (65 <= txt && txt <= 90) {
        // Aquí se indica el caso de una letra.
        cipDecode += String.fromCharCode(
          ((txt + 65 - parseInt(shifts)) % 26) + 65
        ); // Aquí se aplica la fórmula para obtener el nuevo número, y traducir la letra del mensaje. Por el momento sólo puedo traducir con mayúsculas porque las minúsculas me están dando problemas.
      } else if (97 <= txt && txt <= 122) {
        // En éste caso son las minúsculas.
        cipDecode += String.fromCharCode(
          ((txt - 97 - parseInt(shifts) + 52) % 26) + 97
        ); // Aquí se aplica la fórmula para obtener el nuevo número, y traspasarlo a la letra correspondiente en minúscula.
      } else {
        cipDecode += text.charAt(i);
      } // Aquí se aplica el caso en que no sean letras. Se copia directamente el carácter.
    }
    return cipDecode; // Retorna el nuevo mensaje decodificado.
  }
};