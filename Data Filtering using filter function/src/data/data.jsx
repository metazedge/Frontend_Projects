const data = [
  {
    id: 1,
    title: "card_1",
    category: "Mountains",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    image: "./img1.jpg",
    link: "card_1_link",
  },
  {
    id: 2,
    title: "card_2",
    category: "Mountains",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image: "./img2.jpg",
    link: "card_2_link",
  },
  {
    id: 3,
    title: "card_3",
    category: "Mountains",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    image: "./img3.jpg",
    link: "card_3_link",
  },
  {
    id: 4,
    title: "card_4",
    category: "Mountains",
    description:
      "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. ",
    image: "./img4.jpg",
    link: "card_4_link",
  },
  {
    id: 5,
    title: "card_5",
    category: "Mountains",
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    image: "./img5.jpg",
    link: "card_5_link",
  },
  {
    id: 6,
    title: "card_6",
    category: "Nature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et leo massa. Nam maximus, ligula eget posuere rutrum, leo erat",
    image: "./img6.jpg",
    link: "card_6_link",
  },
  {
    id: 7,
    title: "card_7",
    category: "Mountains",
    description:
      "Duis sit amet blandit ante. Etiam bibendum ante et fringilla mollis. Praesent commodo bibendum diam quis lobortis. Aenean justo nunc, luctus quis elit nec, ",
    image: "./img7.jpg",
    link: "card_7_link",
  },
  {
    id: 8,
    title: "card_8",
    category: "Mountains",
    description:
      "Ut sed dolor vitae libero fermentum venenatis eu vel urna. Nullam sed condimentum turpis. Vivamus lorem ante, aliquet et dui ac, malesuada suscipit odio..",
    image: "./img8.jpg",
    link: "card_8_link",
  },
  {
    id: 9,
    title: "card_9",
    category: "Mountains",
    description:
      "Phasellus et nunc id metus iaculis eleifend. Integer volutpat porttitor maximus. Vestibulum fringilla neque eget mi varius, a malesuada velit pretium. ",
    image: "./img9.jpg",
    link: "card_9_link",
  },
  {
    id: 10,
    title: "card_10",
    category: "Mountains",
    description:
      "Duis imperdiet, turpis nec lobortis mattis, dolor neque fermentum felis, sit amet tristique ante eros vitae lectus. volutpat. ",
    image: "./img10.jpg",
    link: "card_10_link",
  },
  {
    id: 11,
    title: "card_11",
    category: "Mountains",
    description:
      "Nulla volutpat tristique aliquet. Quisque fringilla elit ex, et porta dolor elementum nec.",
    image: "./img11.jpg",
    link: "card_11_link",
  },
  {
    id: 12,
    title: "card_12",
    category: "Mountains",
    description:
      "Aliquam erat volutpat. Aenean nisl lorem, interdum vel nisi quis, laoreet lobortis odio. Sed eu placerat erat,tristique.",
    image: "./img12.jpg",
    link: "card_12_link",
  },
  {
    id: 13,
    title: "card_13",
    category: "Waterfall",
    description:
      " Morbi nec elit lacus. Vivamus accumsan odio sit amet euismod tincidunt. Nulla vitae ex ut tortor semper porttitor. ",
    image: "./img13.jpg",
    link: "card_13_link",
  },
  {
    id: 14,
    title: "card_14",
    category: "Forest",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et leo massa. Nam maximus, ligula eget posuere rutrum, leo erat finibus urna, at finibus dolor nunc eget tellus.",
    image: "./img14.jpg",
    link: "card_14_link",
  },
  {
    id: 15,
    title: "card_15",
    category: "Waterfall",
    description:
      "Curabitur vitae molestie sapien. Ut est lacus, interdum nec arcu id, rutrum porttitor dui. Proin ullamcorper vel mi sit amet euismod. Curabitur vitae elit vitae dui commodo gravida. Nunc eu tincidunt turpis. Phasellus condimentum et erat a posuere.",
    image: "./img15.jpg",
    link: "card_15_link",
  },
  {
    id: 16,
    title: "card_16",
    category: "Forest",
    description:
      " Curabitur non bibendum metus. Fusce euismod purus risus, quis interdum tellus euismod fringilla. Nulla congue rutrum leo non ornare. Nunc porta magna nunc, sit amet tempus purus scelerisque nec. Mauris ut mattis lorem.",
    image: "./img16.jpg",
    link: "card_16_link",
  },
  {
    id: 17,
    title: "card_17",
    category: "Forest",
    description:
      "Duis sit amet blandit ante. Etiam bibendum ante et fringilla mollis. Praesent commodo bibendum diam quis lobortis. Aenean justo nunc, luctus quis elit nec, rhoncus ornare dolor.",
    image: "./img17.jpg",
    link: "card_17_link",
  },
  {
    id: 18,
    title: "card_18",
    category: "Forest",
    description:
      "Sed vulputate a lorem sed mollis. Sed finibus bibendum maximus. Morbi elementum cursus justo nec facilisis.",
    image: "./img18.jpg",
    link: "card_18_link",
  },
  {
    id: 19,
    title: "card_19",
    category: "Forest",
    description:
      "Ut sed dolor vitae libero fermentum venenatis eu vel urna. Nullam sed condimentum turpis. Vivamus lorem ante, aliquet et dui ac, malesuada suscipit odio",
    image: "./img19.jpg",
    link: "card_19_link",
  },
  {
    id: 20,
    title: "card_20",
    category: "Waterfall",
    description:
      "Maecenas vestibulum placerat mauris in pharetra. Sed eget ante velit. Curabitur id felis odio. Quisque placerat, ex sed feugiat mattis, sapien lorem sagittis tellus, sed blandit risus ante quis dui.",
    image: "./img20.jpg",
    link: "card_20_link",
  },
  {
    id: 21,
    title: "card_21",
    category: "Waterfall",
    description:
      "Maecenas vestibulum placerat mauris in pharetra. Sed eget ante velit. Curabitur id felis odio. Quisque placerat, ex sed feugiat mattis, sapien lorem sagittis tellus, sed blandit risus ante quis dui.",
    image: "./img21.jpg",
    link: "card_21_link",
  },
  {
    id: 22,
    title: "card_22",
    category: "Mountains",
    description:
      "Maecenas vestibulum placerat mauris in pharetra. Sed eget ante velit. Curabitur id felis odio. Quisque placerat, ex sed feugiat mattis, sapien lorem sagittis tellus, sed blandit risus ante quis dui.",
    image: "./img22.jpg",
    link: "card_22_link",
  },
  {
    id: 23,
    title: "card_23",
    category: "Nature",
    description:
      "Maecenas vestibulum placerat mauris in pharetra. Sed eget ante velit. Curabitur id felis odio. Quisque placerat, ex sed feugiat mattis, sapien lorem sagittis tellus, sed blandit risus ante quis dui.",
    image: "./img23.jpg",
    link: "card_23_link",
  },
  {
    id: 24,
    title: "card_24",
    category: "Nature",
    description:
      "Maecenas vestibulum placerat mauris in pharetra. Sed eget ante velit. Curabitur id felis odio. Quisque placerat, ex sed feugiat mattis, sapien lorem sagittis tellus, sed blandit risus ante quis dui.",
    image: "./img24.jpg",
    link: "card_24_link",
  },
  {
    id: 25,
    title: "card_25",
    category: "Nature",
    description:
      "Maecenas vestibulum placerat mauris in pharetra. Sed eget ante velit. Curabitur id felis odio. Quisque placerat, ex sed feugiat mattis, sapien lorem sagittis tellus, sed blandit risus ante quis dui.",
    image: "./img25.jpg",
    link: "card_25_link",
  },
  {
    id: 26,
    title: "card_26",
    category: "Nature",
    description:
      "Maecenas vestibulum placerat mauris in pharetra. Sed eget ante velit. Curabitur id felis odio. Quisque placerat, ex sed feugiat mattis, sapien lorem sagittis tellus, sed blandit risus ante quis dui.",
    image: "./img26.jpg",
    link: "card_26_link",
  },
];

export default data;
