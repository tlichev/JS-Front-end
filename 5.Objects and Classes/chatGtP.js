function dnaHelix(length) {
  let sequence = 'ATCGTTAGGG';
  let index = 0;
  let helix = '';

  for (let i = 0; i < length; i++) {
    if (i % 4 === 0) {
      helix += `**${sequence[index % sequence.length]}${sequence[(index + 1) % sequence.length]}**\n`;
    } else if (i % 4 === 1 || i % 4 === 3) {
      helix += `*${sequence[index % sequence.length]}--${sequence[(index + 1) % sequence.length]}*\n`;
    } else {
      helix += `${sequence[index % sequence.length]}----${sequence[(index + 1) % sequence.length]}\n`;
    }
    index += 2;
  }
  return helix;
}

console.log(dnaHelix(10));