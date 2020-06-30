import Sample from './_modules/Sample';
import GlobalMenu from './_modules/GlobalMenu';

const sample = new Sample();
sample.output();

// function getNumber(num: number): Promise<number> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(num);
//     }, 1000);
//   });
// }
// async function main(): Promise<string> {
//   for (let i = 0; i < 5; i++) {
//     const n = await getNumber(i);
//     console.log(n);
//   }
//   return 'おわりー';
// }
// main().then((w): void => {
//   console.log('END: ' + w);
// });

window.addEventListener('load', () => {
  new GlobalMenu(
    'js-global-menu-btn',
    'js-global-menu-body',
    'js-global-menu-bg'
  );
});
