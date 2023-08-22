const numeroLineas = [
    'a = 1 + 2;',
    'console.log("1+2");',
    'console.log(a);',
    'b = 3 + 4;',
    'console.log("3+4");',
    'c = 5 + 6;',
    'console.log("5+6");',
    'console.log(c);',
  ];
  
  function numAleatorio() {
    const rndIndex = Math.floor(Math.random() * numeroLineas.length);
    return numeroLineas[rndIndex];
  }
  
  function crearProceso(num) {
    return {
      num: num,
      code: [],
      index: 0,
    };
  }
  
  function inicializarPrograma(numProc) {
    const procs = [];
    for (let i = 0; i < numProc; i++) {
      const proc = crearProceso(i + 1);
      procs.push(proc);
    }
    return procs;
  }
  
  function empezarPrograma(procs) {
    let progreso = 0;
  
    while (progreso < procs.length) {
      for (const proc of procs) {
        if (proc.index < proc.code.length) {
          console.log("Proceso " + proc.num);
          console.log("Código actual: " + proc.code[proc.index]);
          proc.index++;
  
          if (proc.index >= proc.code.length) {
            progreso++;
            console.log("Proceso " + proc.num);
            console.log("Terminado");
          }
        }
      }
    }
  }
  
  const numProc = process.argv[2] ? parseInt(process.argv[2]) : 3;
  
  const procs = inicializarPrograma(numProc);
  
  for (const proc of procs) {
    for (let i = 0; i < 3; i++) {
      proc.code.push(numAleatorio());
    }
  }
  
  empezarPrograma(procs);