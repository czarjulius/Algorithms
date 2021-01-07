//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DNA = {
G :'C',
C : 'G',
T :'A',
A: 'U'
}

export const toRna = (dna) => {
    let RNA = ''
    for(var char of dna){
      RNA += DNA[char];
    }
    return RNA
};
