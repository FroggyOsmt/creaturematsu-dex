const DEFAULT_SIZE = "65 cm (≈ 25.6 in)";
const matsuNames = ["oso", "kara", "choro", "ichi", "jyushi", "todo"];

const sextuplets = matsuNames.map((matsu, i) => {
  const id = (i + 1).toString().padStart(3, "0");
  
  let drDescription = "";
  let func = "";
  let generalOrigin = "";

// ✅🔴 OSO
  if (matsu === "oso") {
    drDescription = "He is the first Matsu boy. He suddenly becomes the leader of all the Matsu, but he is also the most charismatic among his five brothers.";
    generalOrigin =   `
• Based on [Osomatsu Matsuno](https://osomatsu.fandom.com/wiki/Osomatsu_Matsuno) from the anime *Osomatsu-san*.
• This form preserves the recognizable face and playful attitude of the eldest brother, adapted into the simplified cartoon anatomy of the CreatureMatsu universe.
`;
  }

// ✅🔵 KARA
  if (matsu === "kara") {
    drDescription = "He is the second Matsu. He sees himself as a \"cool guy\", often wears sunglasses, and loves playing a small guitar.";
    generalOrigin =   `
• Based on [Karamatsu Matsuno](https://osomatsu.fandom.com/wiki/Karamatsu_Matsuno) from the anime *Osomatsu-san*.
• This base form keeps his "cool guy" persona and confident style, translated into the CreatureMatsu cartoon body while retaining his original anime face.
`;
  }

// ✅🟢 CHORO
  if (matsu === "choro") {
    drDescription = "He is the third Matsu, an intelligent and decent boy. He likes being formal and polite, and he also enjoys reading.";
    generalOrigin =   `
• Based on [Choromatsu Matsuno](https://osomatsu.fandom.com/wiki/Choromatsu_Matsuno) from the anime *Osomatsu-san*.
• The design reflects his responsible and slightly anxious personality, adapted into the simplified CreatureMatsu body while keeping the recognizable anime head.
`;
  }

// ✅🟣 ICHI
  if (matsu === "ichi") {
    drDescription = "He is the fourth Matsu. Even so, he remains self-confident and low-profile. He loves cats.";
    generalOrigin =   `
• Based on [Ichimatsu Matsuno](https://osomatsu.fandom.com/wiki/Ichimatsu_Matsuno) from the anime *Osomatsu-san*.
• His quiet and introspective nature is preserved in this base form, with the original anime face placed on a simplified CreatureMatsu body.
`;
  }

// ✅🟡 JYUSHI
  if (matsu === "jyushi") {
    drDescription = "He is the fifth Matsu. Very energetic with a cheerful face. He loves playing baseball and often activates powerful moves.";
    generalOrigin =   `
• Based on [Jyushimatsu Matsuno](https://osomatsu.fandom.com/wiki/Jyushimatsu_Matsuno) from the anime *Osomatsu-san*.
• This form captures his energetic and unpredictable personality, adapted into the cartoon anatomy used throughout the CreatureMatsu universe.
`;
  }

// ✅🩷 TODO
  if (matsu === "todo") {
    drDescription = "He is the sixth Matsu. He has a cute face, but his personality can be 'monster dry'. He often ends up being responsible for his older brothers.";
    generalOrigin =   `
• Based on [Todomatsu Matsuno](https://osomatsu.fandom.com/wiki/Todomatsu_Matsuno) from the anime *Osomatsu-san*.
• The design keeps his cute and socially aware character while adapting his appearance to the CreatureMatsu base body.
`;
  }

  return {
    id: id,
    name: matsu.toUpperCase(),
    matsu: matsu,
    category: "SEXTUPLETS",
    pillar: "none",
    size: DEFAULT_SIZE,
	
	  drDescription: drDescription,

    generalOrigin: generalOrigin,
	
    image: "c" + id + ".png",
    icon: "icon_" + id + ".png"
  };
});

// OSO'S VARIATIONS 3