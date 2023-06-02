import _ from "lodash";
import { OBJECT_CLASSES,IMAGENET_CLASSES } from './object_class';
/**
 * Softmax
 */
const softmax = (arr: number[]): any => {
  const C = Math.max(...arr);
  const d = arr.map((y) => Math.exp(y - C)).reduce((a, b) => a + b);

  const ret = arr.map((value, index) => {
    return Math.exp(value - C) / d;
  });

  return ret;
}



/**
 *  This function return Classes and probabilty
 */
const getClass = (classProbabilities: any, k = 10, classNames: any[]): any[] => {
  const probs = _.isTypedArray(classProbabilities) ? Array.prototype.slice.call(classProbabilities) : classProbabilities;

  const probMap = probs.map((prob: any, index: number) => [prob, index])

  const sorted = _.sortBy(probMap, probIndex => probIndex[0])

  const reversed = _.reverse(sorted);

  const topK = _.take(reversed, k).map(probIndex => {
    const iClass = classNames[probIndex[1]];
    return {
      id: iClass[0],
      index: parseInt(probIndex[1], 10),
      name: iClass,
      probability: Number((probIndex[0] * 100).toFixed(2))
      // probability: (probIndex[0] * 100)
    };
  });
  return topK;
}

const downloadImage = (canvas: HTMLCanvasElement): void => {
  const link = document.getElementById('downloads') as HTMLAnchorElement;
  link.download = 'image_style.jpeg'
  link.href = canvas.toDataURL();
  link.click();

}

const getResult = (data: Float32Array, classes: string[], total: number = 10): [{ name: string, probability: number }] => {
  const valuesAndIndices = [];
  for (let i = 0; i < data.length; i++) {
    valuesAndIndices.push({ value: data[i], index: i });
  }
  const sort = valuesAndIndices.sort((a: any, b: any) => {
    return b.value - a.value;
  });

  const ret: [{ name: string, probability: number }] = [] as any
  for (let index = 0; index < total; index++) {
    const ind = sort[index].index;
    const value = sort[index].value;
    const element = classes[ind];
    ret.push({
      name: element,
      probability: value
    })
  }
  return ret;
}


const CarsBrands = [
  'Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'BMW', 'Bentley', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'FIAT', 'Ferrari', 'Ford', 'GMC', 'Genesis', 'Honda', 'Hyundai', 'INFINITI', 'Jaguar', 'Jeep', 'Kia', 'Lamborghini', 'Land Rover', 'Lexus', 'Lincoln', 'MINI', 'Maserati', 'Mazda', 'McLaren', 'Mercedes-Benz', 'Mitsubishi', 'Nissan', 'Porsche', 'Ram', 'Rolls-Royce', 'Subaru', 'Toyota', 'Volkswagen', 'Volvo', 'Smart'
];
const CarDirection = [
  'Back', 'Cannot be Identified', 'Diagonal', 'Front', 'Side',
];



export { softmax, getClass, CarsBrands, CarDirection, downloadImage, OBJECT_CLASSES, getResult ,IMAGENET_CLASSES}
