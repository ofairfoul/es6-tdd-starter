import _ from 'lodash';

export default () => {
  return {
    add: (inputString) => {
      if(inputString === '') {
        return 0;
      }

      const numbers = _(inputString)
        .split(',')
        .flatMap(s => _.split(s, '\n'))
        .map(n => parseInt(n));

      return numbers.sum();
    }
  };
};