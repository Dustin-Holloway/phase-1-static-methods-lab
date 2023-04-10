class Formatter {
  static capitalize(str) {
    let variable = str.charAt(0).toUpperCase();
    return variable + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-z0-9'-\s]/gi, "");
  }

  static titleize(str) {
    const lowercaseWords = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    const words = str.split(" ");
    const titleizedWords = [
      words[0].charAt(0).toUpperCase() + words[0].slice(1),
    ];

    for (let i = 1; i < words.length; i++) {
      if (lowercaseWords.includes(words[i].toLowerCase())) {
        titleizedWords.push(words[i].toLowerCase());
      } else {
        titleizedWords.push(
          words[i].charAt(0).toUpperCase() + words[i].slice(1)
        );
      }
    }

    return titleizedWords.join(" ");
  }
}
