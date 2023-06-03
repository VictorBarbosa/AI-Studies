import _ from "lodash";

export interface Probability {
  name: string,
  probability: number,
  index: number,
}
export class ClasseAndProbability {

  constructor(private classNames: string[]) { }


  /**
   *
    Get predicted class
   */
  public getPredictedClass(res: Float32Array): Probability[] {
    if (!res || res.length === 0) {
      const empty = [];
      for (let i = 0; i < 5; i++) {
        empty.push({ name: "-", probability: 0, index: 0 });
      }
      return empty;
    }
    const arr = Array.prototype.slice.call(res);

    const output = this.softmax(arr);
    return this.getClass(output, 5);
  }

  /**
   * Softmax
   */
  private softmax(arr: number[]): any {
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
  private getClass(classProbabilities: any, k = 10) {
    const probs = _.isTypedArray(classProbabilities) ? Array.prototype.slice.call(classProbabilities) : classProbabilities;

    const probMap = probs.map((prob: any, index: number) => [prob, index])

    const sorted = _.sortBy(probMap, probIndex => probIndex[0])

    const reversed = _.reverse(sorted);

    const topK = _.take(reversed, k).map(probIndex => {
      const iClass = this.classNames[probIndex[1]];

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
}


