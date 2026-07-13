const MICROMIXER_SITE = "./micromixer";

window.CUTE_LAB_CONTENT = {
  navigation: {
    home: "#home",
  },
  teams: [
    // EV TEAM STUDENTS EDIT BELOW THIS LINE
    {
      id: "ev",
      name: "EV Team",
      label: "Electric Vehicles",
      href: "#ev-team",
      visualKey: "ev-art",
      summary:
        "Developing electric-vehicle systems through hardware testing, design iteration, and performance-driven engineering analysis.",
      buttonText: "Explore EV Team",
      sections: [
        { label: "The Team", href: "#ev-team" },
        { label: "Device Design", href: "#ev-design" },
        { label: "Computational Modeling", href: "#ev-modeling" },
        { label: "Physical Testing", href: "#ev-testing" },
      ],
    },
    // EV TEAM STUDENTS EDIT ABOVE THIS LINE

    // MICROMIXER TEAM STUDENTS EDIT BELOW THIS LINE
    {
      id: "micromixer",
      name: "Micromixer Team",
      label: "Microfluidics",
      href: `${MICROMIXER_SITE}/#home`,
      visualKey: "micromixer-art",
      summary:
        "Designing a two-layer cross-channel micromixer (TLCCM) that mixes hydrogel precursors and uses flow focusing to generate controlled droplets.",
      buttonText: "Open Micromixer Site",
      sections: [
        { label: "The Team", href: `${MICROMIXER_SITE}/#team` },
        { label: "Device Design", href: `${MICROMIXER_SITE}/#design` },
        { label: "Computational Modeling", href: `${MICROMIXER_SITE}/#modeling` },
        { label: "Physical Testing", href: `${MICROMIXER_SITE}/#testing` },
      ],
    },
    // MICROMIXER TEAM STUDENTS EDIT ABOVE THIS LINE

    // BIOPRINTER TEAM STUDENTS EDIT BELOW THIS LINE
    {
      id: "bioprinter",
      name: "Bioprinter Team",
      label: "Biofabrication",
      href: "#bioprinter-team",
      visualKey: "bioprinter-art",
      summary:
        "Exploring bioprinting workflows that connect material preparation, controlled deposition, and testing for future tissue-engineering applications.",
      buttonText: "Explore Bioprinter Team",
      sections: [
        { label: "The Team", href: "#bioprinter-team" },
        { label: "Device Design", href: "#bioprinter-design" },
        { label: "Computational Modeling", href: "#bioprinter-modeling" },
        { label: "Physical Testing", href: "#bioprinter-testing" },
      ],
    },
    // BIOPRINTER TEAM STUDENTS EDIT ABOVE THIS LINE
  ],
};
