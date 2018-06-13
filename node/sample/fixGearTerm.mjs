const badGear = [
  // multi-words
  [/^co2.?chambers?$/i, 'CO2 chamber'],
  [/^mik.?1500.?[μµ]m$/ui, 'MIK-net 1500 µm'],
  [/^wp3.?1000/ui, 'WP3 1000 µm'],
  [/^wp2.?64/ui, 'WP2 64 µm'],
  [/^multinet.?200.?[μµ]m$/ui, 'Multinet 200 µm'],
  [/^multinet.?64.?[μµ]m$/ui, 'Multinet 64 µm'],
  [/^handnet.?20.?[μµ]m$/ui, 'Handnet 20 µm'], // μ !== µ
  [/^ice corer?.?9.?cm/i, 'Ice corer 9 cm'],
  [/^swim.?net.?200/ui, 'Swim-net 200 µm'],
  [/^wp2.200/ui, 'WP2 200 µm'],
  [/^van veen grab$/i, 'Van Veen grab'],
  [/^no.?gear$/i, 'GEAR-MISSING'],

  // single word
  [/^multinet$/i, 'Multinet 200 µm'],
  [/^divers?/i, 'Diver'],
  [/^niskin$/i, 'Niskin bottle'],
  [/^limnos$/i, 'Limnos water sampler'],
  [/^ctd$/i, 'Ship CTD'],
  [/^mik$/i, 'MIK-net 1500 µm'],
  [/^hand$/i, 'Handnet 20 µm'],
  [/^[\s]?$/, 'GEAR-MISSING']
];

export function fixGearTerm(gear) {
  gear = gear.trim();
  const m = badGear.find(([re]) => re.test(gear));
  if (m && m[1]) {
    gear = m[1];
  }
  return gear;
}
