console.log("************** DELIVERABLE 02 *********************");

const concat = <T>(...rest: T[]): T[] => {
    let result: T[] = [];
 
    for (const item of rest) {
      result = [...result, ...item as T[]];
    }
  
    return result;
  };
  
  console.log(concat([0, 1], [2, 3]));
  