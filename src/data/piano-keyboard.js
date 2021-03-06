/**
 * This data represents the standard 88-key piano supported by the lite-piano component. 
 * Each key is an object in keyboard array: 
 *  step is the name of the key, 
 *  octave represents the first octave, 
 *  and alter = 1 to indicate the piano's black key. 0 is white key.
 * 
 * You can get all the piano keys according to the keyboard array,
 * and call the oneShot(step, octave, alter) to play the specified sound.
 */
export default {
  keyborad: [
    {step: 'A', octave: 0, alter: 0},
    {step: 'A', octave: 0, alter: 1},
    {step: 'B', octave: 0, alter: 0},
    {step: 'C', octave: 1, alter: 0},
    {step: 'C', octave: 1, alter: 1},
    {step: 'D', octave: 1, alter: 0},
    {step: 'D', octave: 1, alter: 1},
    {step: 'E', octave: 1, alter: 0},
    {step: 'F', octave: 1, alter: 0},
    {step: 'F', octave: 1, alter: 1},
    {step: 'G', octave: 1, alter: 0},
    {step: 'G', octave: 1, alter: 1},
    {step: 'A', octave: 1, alter: 0},
    {step: 'A', octave: 1, alter: 1},
    {step: 'B', octave: 1, alter: 0},
    {step: 'C', octave: 2, alter: 0},
    {step: 'C', octave: 2, alter: 1},
    {step: 'D', octave: 2, alter: 0},
    {step: 'D', octave: 2, alter: 1},
    {step: 'E', octave: 2, alter: 0},
    {step: 'F', octave: 2, alter: 0},
    {step: 'F', octave: 2, alter: 1},
    {step: 'G', octave: 2, alter: 0},
    {step: 'G', octave: 2, alter: 1},
    {step: 'A', octave: 2, alter: 0},
    {step: 'A', octave: 2, alter: 1},
    {step: 'B', octave: 2, alter: 0},
    {step: 'C', octave: 3, alter: 0},
    {step: 'C', octave: 3, alter: 1},
    {step: 'D', octave: 3, alter: 0},
    {step: 'D', octave: 3, alter: 1},
    {step: 'E', octave: 3, alter: 0},
    {step: 'F', octave: 3, alter: 0},
    {step: 'F', octave: 3, alter: 1},
    {step: 'G', octave: 3, alter: 0},
    {step: 'G', octave: 3, alter: 1},
    {step: 'A', octave: 3, alter: 0},
    {step: 'A', octave: 3, alter: 1},
    {step: 'B', octave: 3, alter: 0},
    {step: 'C', octave: 4, alter: 0},
    {step: 'C', octave: 4, alter: 1},
    {step: 'D', octave: 4, alter: 0},
    {step: 'D', octave: 4, alter: 1},
    {step: 'E', octave: 4, alter: 0},
    {step: 'F', octave: 4, alter: 0},
    {step: 'F', octave: 4, alter: 1},
    {step: 'G', octave: 4, alter: 0},
    {step: 'G', octave: 4, alter: 1},
    {step: 'A', octave: 4, alter: 0},
    {step: 'A', octave: 4, alter: 1},
    {step: 'B', octave: 4, alter: 0},
    {step: 'C', octave: 5, alter: 0},
    {step: 'C', octave: 5, alter: 1},
    {step: 'D', octave: 5, alter: 0},
    {step: 'D', octave: 5, alter: 1},
    {step: 'E', octave: 5, alter: 0},
    {step: 'F', octave: 5, alter: 0},
    {step: 'F', octave: 5, alter: 1},
    {step: 'G', octave: 5, alter: 0},
    {step: 'G', octave: 5, alter: 1},
    {step: 'A', octave: 5, alter: 0},
    {step: 'A', octave: 5, alter: 1},
    {step: 'B', octave: 5, alter: 0},
    {step: 'C', octave: 6, alter: 0},
    {step: 'C', octave: 6, alter: 1},
    {step: 'D', octave: 6, alter: 0},
    {step: 'D', octave: 6, alter: 1},
    {step: 'E', octave: 6, alter: 0},
    {step: 'F', octave: 6, alter: 0},
    {step: 'F', octave: 6, alter: 1},
    {step: 'G', octave: 6, alter: 0},
    {step: 'G', octave: 6, alter: 1},
    {step: 'A', octave: 6, alter: 0},
    {step: 'A', octave: 6, alter: 1},
    {step: 'B', octave: 6, alter: 0},
    {step: 'C', octave: 7, alter: 0},
    {step: 'C', octave: 7, alter: 1},
    {step: 'D', octave: 7, alter: 0},
    {step: 'D', octave: 7, alter: 1},
    {step: 'E', octave: 7, alter: 0},
    {step: 'F', octave: 7, alter: 0},
    {step: 'F', octave: 7, alter: 1},
    {step: 'G', octave: 7, alter: 0},
    {step: 'G', octave: 7, alter: 1},
    {step: 'A', octave: 7, alter: 0},
    {step: 'A', octave: 7, alter: 1},
    {step: 'B', octave: 7, alter: 0},
    {step: 'C', octave: 8, alter: 0},
  ]
}