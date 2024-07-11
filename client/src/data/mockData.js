//return import.meta.env.DEV ? `/public/assets/images/${imageName}`  : `/assets/images/${imageName}`;

export const mockEvents = [
  {
    eventId: 1,
    name: "Rockiest Fest 2024",
    startDate: "2024-06-14T11:00:00-3:00",
    endDate: "2024-06-15T20:00:00-3:00",
    location: "Western Financial Place",
    price: 99.95,
    img: "/assets/images/logo.jpg",
  },
  {
    eventId: 2,
    name: "Rockiest Fest 2024",
    startDate: "2024-06-14T11:00:00-3:00",
    endDate: "2024-06-15T20:00:00-3:00",
    location: "Western Financial Place",
    price: 99.95,
    img: "/assets/images/logo.jpg",
  },
  {
    eventId: 3,
    name: "Rockiest Fest 2024",
    startDate: "2024-06-14T11:00:00-3:00",
    endDate: "2024-06-15T20:00:00-3:00",
    location: "Western Financial Place",
    price: 99.95,
    img: "/assets/images/logo.jpg",
  },
  {
    eventId: 4,
    name: "Rockiest Fest 2024",
    startDate: "2024-06-14T11:00:00-3:00",
    endDate: "2024-06-15T20:00:00-3:00",
    location: "Western Financial Place",
    price: 99.95,
    img: "/assets/images/logo.jpg",
  },
];

export const mockGroups = [
  {
    groupId: 1,
    name: "Juniors",
    minAge: 6,
    maxAge: 8,
    decription: "This group has schedule 2 times a week. for 2 hours.",
    img: "/assets/images/logo.jpg",
    startDate: "2024-06-25",
    endDate: "2024-09-05",
    schedule: [
      {
        weekday: "Tuesday",
        startTime: "17:00:00",
        endTime: "18:00:00",
      },
      {
        weekday: "Saturday",
        startTime: "10:00:00",
        endTime: "11:00:00",
      },
    ],
  },
  {
    groupId: 2,
    name: "Jaguars",
    minAge: 6,
    maxAge: 8,
    decription: "This group has schedule 2 times a week. for 2 hours.",
    img: "/assets/images/logo.jpg",
    startDate: "2024-06-25",
    endDate: "2024-09-05",
    schedule: [
      {
        weekday: "Wednesday",
        startTime: "17:00:00",
        endTime: "18:00:00",
      },
      {
        weekday: "Saturday",
        startTime: "10:00:00",
        endTime: "11:00:00",
      },
    ],
  },
  {
    groupId: 3,
    name: "Lions",
    minAge: 10,
    maxAge: 12,
    decription: "This group has schedule 3 times a week. for 2 hours.",
    img: "/assets/images/logo.jpg",
    startDate: "2024-06-25",
    endDate: "2024-09-05",
    schedule: [
      {
        weekday: "Monday",
        startTime: "17:00:00",
        endTime: "18:00:00",
      },
      {
        weekday: "Thursday",
        startTime: "17:00:00",
        endTime: "18:00:00",
      },
      {
        weekday: "Saturday",
        startTime: "10:00:00",
        endTime: "11:00:00",
      },
    ],
  },
  {
    groupId: 4,
    name: "Teens",
    minAge: 12,
    maxAge: 14,
    decription: "This group has schedule 3 times a week. for 2 hours.",
    img: "/assets/images/logo.jpg",
    startDate: "2024-06-25",
    endDate: "2024-09-05",
    schedule: [
      {
        weekday: "Tuesday",
        startTime: "17:00:00",
        endTime: "18:00:00",
      },
      {
        weekday: "Thursday",
        startTime: "17:00:00",
        endTime: "18:00:00",
      },
      {
        weekday: "Saturday",
        startTime: "10:00:00",
        endTime: "11:00:00",
      },
    ],
  },
];

export const mockGames = [
  {
    gameId: 1,
    team1: "Team A",
    team2: "Team B",
    team1Logo: "/assets/images/logo.jpg",
    team2Logo: "/assets/images/logo.jpg",
    datetime: "2024-04-10T15:00:00-03:00",
  },
  {
    gameId: 2,
    team1: "Team C",
    team2: "Team D",
    team1Logo: "/assets/images/logo.jpg",
    team2Logo: "/assets/images/logo.jpg",
    datetime: "2024-07-15T18:30:00-03:00",
  },
  {
    gameId: 3,
    team1: "Team C",
    team2: "Team A",
    team1Logo: "/assets/images/logo.jpg",
    team2Logo: "/assets/images/logo.jpg",
    datetime: "2024-07-07T09:30:00-03:00",
  },
  {
    gameId: 4,
    team1: "Team D",
    team2: "Team A",
    team1Logo: "/assets/images/logo.jpg",
    team2Logo: "/assets/images/logo.jpg",
    datetime: "2023-12-10T11:30:00-04:00",
  },
  {
    gameId: 5,
    team1: "Boston",
    team2: "Los Angeles",
    team1Logo: "/assets/images/logo.jpg",
    team2Logo: "/assets/images/logo.jpg",
    datetime: "2024-10-02T19:00:00-03:00",
  },
  {
    gameId: 6,
    team1: "Boston",
    team2: "Los Angeles",
    team1Logo: "/assets/images/logo.jpg",
    team2Logo: "/assets/images/logo.jpg",
    datetime: "2024-10-10T11:00:00-03:00",
  },
  {
    gameId: 7,
    team1: "Boston",
    team2: "Los Angeles",
    team1Logo: "/assets/images/logo.jpg",
    team2Logo: "/assets/images/logo.jpg",
    datetime: "2024-10-15T13:00:00-03:00",
  },
  {
    gameId: 8,
    team1: "Boston",
    team2: "Los Angeles",
    team1Logo: "/assets/images/logo.jpg",
    team2Logo: "/assets/images/logo.jpg",
    datetime: "2024-10-24T19:00:00-03:00",
  },
  {
    gameId: 9,
    team1: "Boston",
    team2: "Los Angeles",
    team1Logo: "/assets/images/logo.jpg",
    team2Logo: "/assets/images/logo.jpg",
    datetime: "2024-10-29T17:00:00-03:00",
  },
];

export const mockNews = [
  {
    _id: "668ac04c7c530c1138b05e1f",
    date: "2024-06-01T00:00:00.000Z",
    title: "2024 BCHL Annual General Meeting Recap",
    content:
      "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game&#x27;s first star, as",
    images: ["/assets/images/news_1.jpg"],
    createdAt: "2024-07-07T16:20:28.623Z",
    updatedAt: "2024-07-07T16:20:28.623Z",
    newsId: 1,
    __v: 0,
  },
  {
    _id: "668ac0bd7c530c1138b05e22",
    date: "2024-05-25T00:00:00.000Z",
    title: "Brooks Bandits win 2024 Rocky Mountain Challenge",
    content:
      "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game’s first star, as ...",
    images: ["/assets/images/news_2.jpg"],
    createdAt: "2024-07-07T16:22:21.158Z",
    updatedAt: "2024-07-07T16:22:21.158Z",
    newsId: 2,
    __v: 0,
  },
  {
    _id: "668ac1607c530c1138b05e28",
    date: "2024-04-08T00:00:00.000Z",
    title: "2023 BCHL Annual General Meeting Recap",
    content:
      "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game’s first star, as ...",
    images: ["/assets/images/news_3.jpg"],
    createdAt: "2024-07-07T16:25:04.134Z",
    updatedAt: "2024-07-07T16:25:04.134Z",
    newsId: 4,
    __v: 0,
  },
  {
    _id: "668ac1ad7c530c1138b05e2e",
    date: "2024-06-01T00:00:00.000Z",
    title: "Brooks Bandits win 2023 Rocky Mountain Challenge",
    content:
      "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game’s first star, as ...",
    images: ["/assets/images/news_4.jpg"],
    createdAt: "2024-07-07T16:26:21.920Z",
    updatedAt: "2024-07-07T16:26:21.920Z",
    newsId: 6,
    __v: 0,
  },
  {
    _id: "668ac1fe7c530c1138b05e34",
    date: "2024-05-25T00:00:00.000Z",
    title: "Brooks Bandits win 2022 Rocky Mountain Challenge",
    content:
      "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game’s first star, as ...",
    images: ["/assets/images/news_5.jpg"],
    createdAt: "2024-07-07T16:27:42.546Z",
    updatedAt: "2024-07-07T16:27:42.546Z",
    newsId: 8,
    __v: 0,
  },
  {
    _id: "668ac290e54fcbf864f5b122",
    date: "2021-04-08T00:00:00.000Z",
    title: "Brooks Bandits win 2021 Rocky Mountain Challenge",
    content:
      "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game’s first star, as ...",
    images: ["/assets/images/news_6.jpg"],
    createdAt: "2024-07-07T16:30:08.038Z",
    updatedAt: "2024-07-07T16:30:08.038Z",
    newsId: 9,
    __v: 0,
  },
];

export const mockLatestNews = [
  {
    _id: "668ac1ad7c530c1138b05e2e",
    date: "2024-06-01T00:00:00.000Z",
    title: "Brooks Bandits win 2023 Rocky Mountain Challenge",
    content:
      "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game’s first star, as ...",
    images: ["/assets/images/news_4.jpg"],
    createdAt: "2024-07-07T16:26:21.920Z",
    updatedAt: "2024-07-07T16:26:21.920Z",
    newsId: 6,
    __v: 0,
  },
  {
    _id: "668ac04c7c530c1138b05e1f",
    date: "2024-06-01T00:00:00.000Z",
    title: "2024 BCHL Annual General Meeting Recap",
    content:
      "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game&#x27;s first star, as",
    images: ["/assets/images/news_1.jpg"],
    createdAt: "2024-07-07T16:20:28.623Z",
    updatedAt: "2024-07-07T16:20:28.623Z",
    newsId: 1,
    __v: 0,
  },
  {
    _id: "668ac1fe7c530c1138b05e34",
    date: "2024-05-25T00:00:00.000Z",
    title: "Brooks Bandits win 2022 Rocky Mountain Challenge",
    content:
      "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game’s first star, as ...",
    images: ["/assets/images/news_5.jpg"],
    createdAt: "2024-07-07T16:27:42.546Z",
    updatedAt: "2024-07-07T16:27:42.546Z",
    newsId: 8,
    __v: 0,
  },
];

export const mockProducts = [
  {
    productId: 1,
    name: "Pro Crested Jersey",
    category: "Adults",
    type: "Jersey",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [],
    variants: [
      {
        color: "Green",
        size: "Small",
        price: 190,
        stockQuantity: 3,
      },
      {
        color: "Green",
        size: "Large",
        price: 185,
        stockQuantity: 2,
      },
      {
        color: "Blue",
        size: "Small",
        price: 195,
        stockQuantity: 2,
      },
      {
        color: "Blue",
        size: "X-Large",
        price: 200,
        stockQuantity: 4,
      },
      {
        color: "Red",
        size: "X-Large",
        price: 185,
        stockQuantity: 1,
      },
      {
        color: "Red",
        size: "Medium",
        price: 195,
        stockQuantity: 5,
      },
      {
        color: "White",
        size: "Large",
        price: 195,
        stockQuantity: 4,
      },
      {
        color: "White",
        size: "Medium",
        price: 190,
        stockQuantity: 6,
      },
    ],
  },
  {
    productId: 2,
    name: "Pro Crested Hoodie",
    category: "Adults",
    type: "Hoodie",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
    ],
    variants: [
      {
        color: "Black",
        size: "Small",
        price: 220,
        stockQuantity: 4,
      },
      {
        color: "Black",
        size: "Large",
        price: 200,
        stockQuantity: 1,
      },
      {
        color: "Black",
        size: "XX-Large",
        price: 220,
        stockQuantity: 2,
      },
      {
        color: "Black",
        size: "X-Large",
        price: 230,
        stockQuantity: 5,
      },
      {
        color: "Red",
        size: "Large",
        price: 215,
        stockQuantity: 1,
      },
      {
        color: "Red",
        size: "Small",
        price: 210,
        stockQuantity: 2,
      },
      {
        color: "White",
        size: "Large",
        price: 215,
        stockQuantity: 2,
      },
      {
        color: "White",
        size: "Medium",
        price: 220,
        stockQuantity: 6,
      },
    ],
  },
  {
    productId: 3,
    name: "Pro Crested Hoodie",
    category: "Kids",
    type: "Hoodie",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
    ],
    variants: [
      {
        color: "Black",
        size: "Small",
        price: 180,
        stockQuantity: 2,
      },
      {
        color: "Black",
        size: "Large",
        price: 170,
        stockQuantity: 3,
      },
      {
        color: "Black",
        size: "Medium",
        price: 175,
        stockQuantity: 3,
      },
      {
        color: "Black",
        size: "X-Large",
        price: 185,
        stockQuantity: 3,
      },
      {
        color: "Red",
        size: "Large",
        price: 215,
        stockQuantity: 1,
      },
      {
        color: "Red",
        size: "Small",
        price: 210,
        stockQuantity: 2,
      },
      {
        color: "Green",
        size: "Large",
        price: 180,
        stockQuantity: 1,
      },
      {
        color: "Green",
        size: "Medium",
        price: 175,
        stockQuantity: 5,
      },
    ],
  },
  {
    productId: 4,
    name: "Pro Crested T-Shirt",
    category: "Women",
    type: "T-Shirt",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
    ],
    variants: [
      {
        color: "Green",
        size: "Small",
        price: 30,
        stockQuantity: 5,
      },
      {
        color: "Green",
        size: "Medium",
        price: 30,
        stockQuantity: 4,
      },
      {
        color: "Green",
        size: "Large",
        price: 30,
        stockQuantity: 5,
      },
      {
        color: "Red",
        size: "X-Large",
        price: 35,
        stockQuantity: 6,
      },
      {
        color: "Red",
        size: "Medium",
        price: 30,
        stockQuantity: 5,
      },
      {
        color: "Red",
        size: "Large",
        price: 30,
        stockQuantity: 4,
      },
      {
        color: "White",
        size: "Large",
        price: 30,
        stockQuantity: 4,
      },
      {
        color: "White",
        size: "X-Large",
        price: 35,
        stockQuantity: 0,
      },
      {
        color: "White",
        size: "Medium",
        price: 30,
        stockQuantity: 3,
      },
      {
        color: "White",
        size: "Small",
        price: 30,
        stockQuantity: 6,
      },
    ],
  },
  {
    productId: 5,
    name: "Pro Crested T-Shirt",
    category: "Boys",
    type: "T-Shirt",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
    ],
    variants: [
      {
        color: "Black",
        size: "Small",
        price: 25,
        stockQuantity: 6,
      },
      {
        color: "Black",
        size: "Medium",
        price: 30,
        stockQuantity: 0,
      },
      {
        color: "Black",
        size: "Large",
        price: 30,
        stockQuantity: 2,
      },
      {
        color: "Black",
        size: "X-Large",
        price: 35,
        stockQuantity: 4,
      },
      {
        color: "Red",
        size: "X-Large",
        price: 35,
        stockQuantity: 4,
      },
      {
        color: "Red",
        size: "Medium",
        price: 30,
        stockQuantity: 1,
      },
      {
        color: "Red",
        size: "Large",
        price: 30,
        stockQuantity: 2,
      },
      {
        color: "Green",
        size: "Large",
        price: 30,
        stockQuantity: 4,
      },
      {
        color: "Green",
        size: "X-Large",
        price: 35,
        stockQuantity: 0,
      },
      {
        color: "Green",
        size: "Medium",
        price: 30,
        stockQuantity: 3,
      },
      {
        color: "Green",
        size: "Small",
        price: 25,
        stockQuantity: 1,
      },
    ],
  },
  {
    productId: 6,
    name: "Pro Crested T-Shirt",
    category: "Girls",
    type: "T-Shirt",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
    ],
    variants: [
      {
        color: "Blue",
        size: "Small",
        price: 25,
        stockQuantity: 0,
      },
      {
        color: "Blue",
        size: "Medium",
        price: 30,
        stockQuantity: 0,
      },
      {
        color: "Blue",
        size: "Large",
        price: 30,
        stockQuantity: 2,
      },
      {
        color: "Blue",
        size: "X-Large",
        price: 30,
        stockQuantity: 4,
      },
      {
        color: "Red",
        size: "X-Large",
        price: 30,
        stockQuantity: 5,
      },
      {
        color: "Red",
        size: "Medium",
        price: 30,
        stockQuantity: 2,
      },
      {
        color: "Red",
        size: "Large",
        price: 30,
        stockQuantity: 3,
      },
      {
        color: "Green",
        size: "Large",
        price: 30,
        stockQuantity: 0,
      },
      {
        color: "Green",
        size: "X-Large",
        price: 35,
        stockQuantity: 0,
      },
      {
        color: "Green",
        size: "Medium",
        price: 30,
        stockQuantity: 3,
      },
      {
        color: "Green",
        size: "Small",
        price: 25,
        stockQuantity: 4,
      },
      {
        color: "White",
        size: "Large",
        price: 30,
        stockQuantity: 3,
      },
      {
        color: "White",
        size: "X-Large",
        price: 35,
        stockQuantity: 4,
      },
      {
        color: "White",
        size: "Medium",
        price: 30,
        stockQuantity: 1,
      },
      {
        color: "White",
        size: "Small",
        price: 25,
        stockQuantity: 3,
      },
    ],
  },
  {
    productId: 7,
    name: "Pro Crested Hat",
    category: "Kids",
    type: "Hat",
    description:
      "This graphic hat which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
    ],
    variants: [
      {
        color: "Blue",
        size: "One Size",
        price: 25,
        stockQuantity: 0,
      },
      {
        color: "Red",
        size: "One Size",
        price: 30,
        stockQuantity: 5,
      },
      {
        color: "Green",
        size: "One Size",
        price: 30,
        stockQuantity: 6,
      },
      {
        color: "White",
        size: "Large",
        price: 25,
        stockQuantity: 7,
      },
    ],
  },
  {
    productId: 8,
    name: "Pro Crested Hat",
    category: "Adults",
    type: "Hat",
    description:
      "This graphic hat which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
    ],
    variants: [
      {
        color: "Blue",
        size: "One Size",
        price: 25,
        stockQuantity: 0,
      },
      {
        color: "Brown",
        size: "One Size",
        price: 25,
        stockQuantity: 3,
      },
      {
        color: "Red",
        size: "One Size",
        price: 30,
        stockQuantity: 5,
      },
      {
        color: "Green",
        size: "One Size",
        price: 30,
        stockQuantity: 1,
      },
    ],
  },
  {
    productId: 9,
    name: "Pro Crested T-Shirt",
    category: "Men",
    type: "T-Shirt",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
    ],
    variants: [
      {
        color: "Black",
        size: "Small",
        price: 30,
        stockQuantity: 5,
      },
      {
        color: "Black",
        size: "Medium",
        price: 30,
        stockQuantity: 4,
      },
      {
        color: "Black",
        size: "Large",
        price: 30,
        stockQuantity: 0,
      },
      {
        color: "Black",
        size: "X-Large",
        price: 35,
        stockQuantity: 5,
      },
      {
        color: "Red",
        size: "X-Large",
        price: 35,
        stockQuantity: 6,
      },
      {
        color: "Red",
        size: "Medium",
        price: 30,
        stockQuantity: 5,
      },
      {
        color: "Red",
        size: "Large",
        price: 30,
        stockQuantity: 4,
      },
      {
        color: "Blue",
        size: "Large",
        price: 30,
        stockQuantity: 4,
      },
      {
        color: "Blue",
        size: "X-Large",
        price: 35,
        stockQuantity: 3,
      },
      {
        color: "Blue",
        size: "Medium",
        price: 30,
        stockQuantity: 0,
      },
      {
        color: "Blue",
        size: "Small",
        price: 25,
        stockQuantity: 2,
      },
    ],
  },
  {
    productId: 10,
    name: "Junior Rangers Hockey Jersey",
    category: "Youth",
    type: "Jersey",
    description:
      "Show your support for the Junior Rangers with this official youth hockey jersey. Made from breathable, durable fabric, it's perfect for young fans both on and off the ice. Features the team logo and colors.",
    images: [
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
    ],
    variants: [
      {
        color: "Blue",
        size: "Small",
        price: 49.99,
        stockQuantity: 15,
      },
      {
        color: "Blue",
        size: "Medium",
        price: 49.99,
        stockQuantity: 20,
      },
      {
        color: "Blue",
        size: "Large",
        price: 54.99,
        stockQuantity: 18,
      },
      {
        color: "White",
        size: "Small",
        price: 49.99,
        stockQuantity: 12,
      },
      {
        color: "White",
        size: "Medium",
        price: 49.99,
        stockQuantity: 16,
      },
      {
        color: "White",
        size: "Large",
        price: 54.99,
        stockQuantity: 14,
      },
    ],
  },
];

export const mockProduct = {
  _id: "66835bfec6ea5908733b4e83",
  productId: 1,
  name: "Pro Crested Jersey",
  category: "Adults",
  type: "Jersey",
  description:
    "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  images: [
    "/assets/images/logo.jpg",
    "/assets/images/logo.jpg",
    "/assets/images/logo.jpg",
    "/assets/images/logo.jpg",
    "/assets/images/logo.jpg",
  ],
  variants: [
    {
      color: "Green",
      size: "Small",
      price: 190,
      stockQuantity: 3,
      _id: "66835bfec6ea5908733b4e84",
    },
    {
      color: "Green",
      size: "Large",
      price: 185,
      stockQuantity: 2,
      _id: "66835bfec6ea5908733b4e85",
    },
    {
      color: "Blue",
      size: "Small",
      price: 195,
      stockQuantity: 2,
      _id: "66835bfec6ea5908733b4e86",
    },
    {
      color: "Blue",
      size: "X-Large",
      price: 200,
      stockQuantity: 4,
      _id: "66835bfec6ea5908733b4e87",
    },
    {
      color: "Red",
      size: "X-Large",
      price: 185,
      stockQuantity: 1,
      _id: "66835bfec6ea5908733b4e88",
    },
    {
      color: "Red",
      size: "Medium",
      price: 195,
      stockQuantity: 5,
      _id: "66835bfec6ea5908733b4e89",
    },
    {
      color: "White",
      size: "Large",
      price: 195,
      stockQuantity: 4,
      _id: "66835bfec6ea5908733b4e8a",
    },
    {
      color: "White",
      size: "Medium",
      price: 190,
      stockQuantity: 6,
      _id: "66835bfec6ea5908733b4e8b",
    },
  ],
  createdAt: "2024-07-02T01:46:38.598Z",
  updatedAt: "2024-07-02T01:46:38.598Z",
  __v: 0,
};

export const mockCoaches = [
  {
    id: 1,
    firstName: "Ryan",
    lastName: "Donald",
    position: "Head Coach and General Manager",
    bio:
      "Ryan is the club’s first-ever head coach and general manager for the team’s " +
      "inaugural season of 2020-2021. Donald spent 5 seasons at Yale University as an " +
      "Assistant Coach before joining the Bucks in 2020. Donald also has had coaching stints " +
      "in both Trail and Woodstock.  Ryan played 2 years of junior A hockey himself and then " +
      "went on to play for Yale University for 4 years, winning an ECAC championship along the " +
      "way.",
  },
  {
    id: 2,
    firstName: "Jack",
    lastName: "Watson",
    position: "Assistant Coach",
    bio: "Ryan is the club’s first-ever head coach and general manager for the team’s inaugural season of 2020-2021. Donald spent 5 seasons at Yale University as an Assistant Coach before joining the Bucks in 2020. Donald also has had coaching stints in both Trail and Woodstock.  Ryan played 2 years of junior A hockey himself and then went on to play for Yale University for 4 years, winning an ECAC championship along the way. ",
  },
  {
    id: 3,
    firstName: "Daniel",
    lastName: "McLean",
    position: "Assistant Coach",
    bio: "Ryan is the club’s first-ever head coach and general manager for the team’s inaugural season of 2020-2021. Donald spent 5 seasons at Yale University as an Assistant Coach before joining the Bucks in 2020. Donald also has had coaching stints in both Trail and Woodstock.  Ryan played 2 years of junior A hockey himself and then went on to play for Yale University for 4 years, winning an ECAC championship along the way. ",
  },
];

////////////////////////////////////////
// {
//   "name": "Pro Crested Jersey",
//   "category": "Adults",
//   "type": "Jersey",
//   "description": "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
//   "images": ["/assets/images/logo.jpg"],
//   "variants": [
//     {
//       "color": "Green",
//       "size": "Small",
//       "price": 190,
//       "stockQuantity": 3
//     },
//     {
//       "color": "Green",
//       "size": "Large",
//       "price": 185,
//       "stockQuantity": 2
//     },
//     {
//       "color": "Blue",
//       "size": "Small",
//       "price": 195,
//       "stockQuantity": 2
//     },
//     {
//       "color": "Blue",
//       "size": "X-Large",
//       "price": 200,
//       "stockQuantity": 4
//     },
//     {
//       "color": "Red",
//       "size": "X-Large",
//       "price": 185,
//       "stockQuantity": 1
//     },
//     {
//       "color": "Red",
//       "size": "Medium",
//       "price": 195,
//       "stockQuantity": 5
//     },
//     {
//       "color": "White",
//       "size": "Large",
//       "price": 195,
//       "stockQuantity": 4
//     },
//     {
//       "color": "White",
//       "size": "Medium",
//       "price": 190,
//       "stockQuantity": 6
//     }
//   ]
// }
///////////////////////////////////////////
// {
//   "name": "Pro Crested Hoodie",
//   "category": "Adults",
//   "type": "Hoodie",
//   "description": "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
//   "images": [
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg"
//   ],
//   "variants": [
//     {
//       "color": "Black",
//       "size": "Small",
//       "price": 220,
//       "stockQuantity": 4
//     },
//     {
//       "color": "Black",
//       "size": "Large",
//       "price": 200,
//       "stockQuantity": 1
//     },
//     {
//       "color": "Black",
//       "size": "XX-Large",
//       "price": 220,
//       "stockQuantity": 2
//     },
//     {
//       "color": "Black",
//       "size": "X-Large",
//       "price": 230,
//       "stockQuantity": 5
//     },
//     {
//       "color": "Red",
//       "size": "Large",
//       "price": 215,
//       "stockQuantity": 1
//     },
//     {
//       "color": "Red",
//       "size": "Small",
//       "price": 210,
//       "stockQuantity": 2
//     },
//     {
//       "color": "White",
//       "size": "Large",
//       "price": 215,
//       "stockQuantity": 2
//     },
//     {
//       "color": "White",
//       "size": "Medium",
//       "price": 220,
//       "stockQuantity": 6
//     }
//   ]
// }
////////////////////////////////////////////////
// {
//   "name": "Pro Crested Hoodie",
//   "category": "Kids",
//   "type": "Hoodie",
//   "description": "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
//   "images": [
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg"
//   ],
//   "variants": [
//     {
//       "color": "Black",
//       "size": "Small",
//       "price": 180,
//       "stockQuantity": 2
//     },
//     {
//       "color": "Black",
//       "size": "Large",
//       "price": 170,
//       "stockQuantity": 3
//     },
//     {
//       "color": "Black",
//       "size": "Medium",
//       "price": 175,
//       "stockQuantity": 3
//     },
//     {
//       "color": "Black",
//       "size": "X-Large",
//       "price": 185,
//       "stockQuantity": 3
//     },
//     {
//       "color": "Red",
//       "size": "Large",
//       "price": 215,
//       "stockQuantity": 1
//     },
//     {
//       "color": "Red",
//       "size": "Small",
//       "price": 210,
//       "stockQuantity": 2
//     },
//     {
//       "color": "Green",
//       "size": "Large",
//       "price": 180,
//       "stockQuantity": 1
//     },
//     {
//       "color": "Green",
//       "size": "Medium",
//       "price": 175,
//       "stockQuantity": 5
//     }
//   ]
// }
//////////////////////////////////////////////
// {
//   "name": "Pro Crested T-Shirt",
//   "category": "Women",
//   "type": "T-Shirt",
//   "description": "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
//   "images": [
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg"
//   ],
//   "variants": [
//     {
//       "color": "Green",
//       "size": "Small",
//       "price": 30,
//       "stockQuantity": 5
//     },
//     {
//       "color": "Green",
//       "size": "Medium",
//       "price": 30,
//       "stockQuantity": 4
//     },
//     {
//       "color": "Green",
//       "size": "Large",
//       "price": 30,
//       "stockQuantity": 5
//     },
//     {
//       "color": "Red",
//       "size": "X-Large",
//       "price": 35,
//       "stockQuantity": 6
//     },
//     {
//       "color": "Red",
//       "size": "Medium",
//       "price": 30,
//       "stockQuantity": 5
//     },
//     {
//       "color": "Red",
//       "size": "Large",
//       "price": 30,
//       "stockQuantity": 4
//     },
//     {
//       "color": "White",
//       "size": "Large",
//       "price": 30,
//       "stockQuantity": 4
//     },
//     {
//       "color": "White",
//       "size": "X-Large",
//       "price": 35,
//       "stockQuantity": 0
//     },
//     {
//       "color": "White",
//       "size": "Medium",
//       "price": 30,
//       "stockQuantity": 3
//     },
//     {
//       "color": "White",
//       "size": "Small",
//       "price": 30,
//       "stockQuantity": 6
//     }
//   ]
// }
//////////////////////////////////////////////
// {
//   "name": "Pro Crested T-Shirt",
//   "category": "Boys",
//   "type": "T-Shirt",
//   "description": "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
//   "images": [
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg"
//   ],
//   "variants": [
//     {
//       "color": "Black",
//       "size": "Small",
//       "price": 25,
//       "stockQuantity": 6
//     },
//     {
//       "color": "Black",
//       "size": "Medium",
//       "price": 30,
//       "stockQuantity": 0
//     },
//     {
//       "color": "Black",
//       "size": "Large",
//       "price": 30,
//       "stockQuantity": 2
//     },
//     {
//       "color": "Black",
//       "size": "X-Large",
//       "price": 35,
//       "stockQuantity": 4
//     },
//     {
//       "color": "Red",
//       "size": "X-Large",
//       "price": 35,
//       "stockQuantity": 4
//     },
//     {
//       "color": "Red",
//       "size": "Medium",
//       "price": 30,
//       "stockQuantity": 1
//     },
//     {
//       "color": "Red",
//       "size": "Large",
//       "price": 30,
//       "stockQuantity": 2
//     },
//     {
//       "color": "Green",
//       "size": "Large",
//       "price": 30,
//       "stockQuantity": 4
//     },
//     {
//       "color": "Green",
//       "size": "X-Large",
//       "price": 35,
//       "stockQuantity": 0
//     },
//     {
//       "color": "Green",
//       "size": "Medium",
//       "price": 30,
//       "stockQuantity": 3
//     },
//     {
//       "color": "Green",
//       "size": "Small",
//       "price": 25,
//       "stockQuantity": 1
//     }
//   ]
// }
////////////////////////////////////////////////
// {
//   "name": "Pro Crested T-Shirt",
//   "category": "Girls",
//   "type": "T-Shirt",
//   "description": "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
//   "images": [
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg"
//   ],
//   "variants": [
//     {
//       "color": "Blue",
//       "size": "Small",
//       "price": 25,
//       "stockQuantity": 0
//     },
//     {
//       "color": "Blue",
//       "size": "Medium",
//       "price": 30,
//       "stockQuantity": 0
//     },
//     {
//       "color": "Blue",
//       "size": "Large",
//       "price": 30,
//       "stockQuantity": 2
//     },
//     {
//       "color": "Blue",
//       "size": "X-Large",
//       "price": 30,
//       "stockQuantity": 4
//     },
//     {
//       "color": "Red",
//       "size": "X-Large",
//       "price": 30,
//       "stockQuantity": 5
//     },
//     {
//       "color": "Red",
//       "size": "Medium",
//       "price": 30,
//       "stockQuantity": 2
//     },
//     {
//       "color": "Red",
//       "size": "Large",
//       "price": 30,
//       "stockQuantity": 3
//     },
//     {
//       "color": "Green",
//       "size": "Large",
//       "price": 30,
//       "stockQuantity": 0
//     },
//     {
//       "color": "Green",
//       "size": "X-Large",
//       "price": 35,
//       "stockQuantity": 0
//     },
//     {
//       "color": "Green",
//       "size": "Medium",
//       "price": 30,
//       "stockQuantity": 3
//     },
//     {
//       "color": "Green",
//       "size": "Small",
//       "price": 25,
//       "stockQuantity": 4
//     },
//     {
//       "color": "White",
//       "size": "Large",
//       "price": 30,
//       "stockQuantity": 3
//     },
//     {
//       "color": "White",
//       "size": "X-Large",
//       "price": 35,
//       "stockQuantity": 4
//     },
//     {
//       "color": "White",
//       "size": "Medium",
//       "price": 30,
//       "stockQuantity": 1
//     },
//     {
//       "color": "White",
//       "size": "Small",
//       "price": 25,
//       "stockQuantity": 3
//     }
//   ]
// }
////////////////////////////////////////////////
// {
//   "name": "Pro Crested Hat",
//   "category": "Kids",
//   "type": "Hat",
//   "description": "This graphic hat which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
//   "images": [
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg"
//   ],
//   "variants": [
//     {
//       "color": "Blue",
//       "size": "One Size",
//       "price": 25,
//       "stockQuantity": 0
//     },
//     {
//       "color": "Red",
//       "size": "One Size",
//       "price": 30,
//       "stockQuantity": 5
//     },
//     {
//       "color": "Green",
//       "size": "One Size",
//       "price": 30,
//       "stockQuantity": 6
//     },
//     {
//       "color": "White",
//       "size": "Large",
//       "price": 25,
//       "stockQuantity": 7
//     }
//   ]
// }
////////////////////////////////////////////////
// {
//   "name": "Pro Crested Hat",
//   "category": "Adults",
//   "type": "Hat",
//   "description": "This graphic hat which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
//   "images": [
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg"
//   ],
//   "variants": [
//     {
//       "color": "Blue",
//       "size": "One Size",
//       "price": 25,
//       "stockQuantity": 0
//     },
//     {
//       "color": "Brown",
//       "size": "One Size",
//       "price": 25,
//       "stockQuantity": 3
//     },
//     {
//       "color": "Red",
//       "size": "One Size",
//       "price": 30,
//       "stockQuantity": 5
//     },
//     {
//       "color": "Green",
//       "size": "One Size",
//       "price": 30,
//       "stockQuantity": 1
//     }
//   ]
// }
///////////////////////////////////////////////
// {
//   "name": "Pro Crested T-Shirt",
//   "category": "Men",
//   "type": "T-Shirt",
//   "description": "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
//   "images": [
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg"
//   ],
//   "variants": [
//     {
//       "color": "Black",
//       "size": "Small",
//       "price": 30,
//       "stockQuantity": 5
//     },
//     {
//       "color": "Black",
//       "size": "Medium",
//       "price": 30,
//       "stockQuantity": 4
//     },
//     {
//       "color": "Black",
//       "size": "Large",
//       "price": 30,
//       "stockQuantity": 0
//     },
//     {
//       "color": "Black",
//       "size": "X-Large",
//       "price": 35,
//       "stockQuantity": 5
//     },
//     {
//       "color": "Red",
//       "size": "X-Large",
//       "price": 35,
//       "stockQuantity": 6
//     },
//     {
//       "color": "Red",
//       "size": "Medium",
//       "price": 30,
//       "stockQuantity": 5
//     },
//     {
//       "color": "Red",
//       "size": "Large",
//       "price": 30,
//       "stockQuantity": 4
//     },
//     {
//       "color": "Blue",
//       "size": "Large",
//       "price": 30,
//       "stockQuantity": 4
//     },
//     {
//       "color": "Blue",
//       "size": "X-Large",
//       "price": 35,
//       "stockQuantity": 3
//     },
//     {
//       "color": "Blue",
//       "size": "Medium",
//       "price": 30,
//       "stockQuantity": 0
//     },
//     {
//       "color": "Blue",
//       "size": "Small",
//       "price": 25,
//       "stockQuantity": 2
//     }
//   ]
// }
///////////////////////////////////////////////
// {
//   "name": "Junior Rangers Hockey Jersey",
//   "category": "Youth",
//   "type": "Jersey",
//   "description": "Show your support for the Junior Rangers with this official youth hockey jersey. Made from breathable, durable fabric, it's perfect for young fans both on and off the ice. Features the team logo and colors.",
//   "images": [
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg",
//     "/assets/images/logo.jpg"
//   ],
//   "variants": [
//     {
//       "color": "Blue",
//       "size": "Small",
//       "price": 49.99,
//       "stockQuantity": 15
//     },
//     {
//       "color": "Blue",
//       "size": "Medium",
//       "price": 49.99,
//       "stockQuantity": 20
//     },
//     {
//       "color": "Blue",
//       "size": "Large",
//       "price": 54.99,
//       "stockQuantity": 18
//     },
//     {
//       "color": "White",
//       "size": "Small",
//       "price": 49.99,
//       "stockQuantity": 12
//     },
//     {
//       "color": "White",
//       "size": "Medium",
//       "price": 49.99,
//       "stockQuantity": 16
//     },
//     {
//       "color": "White",
//       "size": "Large",
//       "price": 54.99,
//       "stockQuantity": 14
//     }
//   ]
// }
////////////////NEWS JSON/////////////////////////////
// {
//   "date": "2024-06-01T00:00:00Z",
//   "images": ["/assets/images/news_1.jpg"],
//   "title": "2024 BCHL Annual General Meeting Recap",
//   "content": "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game's first star, as"
// }
////////////////////////////////////////////////////
// {
//   "date": "2024-05-25T00:00:00Z",
//   "images": ["/assets/images/news_2.jpg"],
//   "title": "Brooks Bandits win 2024 Rocky Mountain Challenge",
//   "content": "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game’s first star, as ..."
// }
////////////////////////////////////////////////////////////////
// {
//   "date": "2024-04-08T00:00:00Z",
//   "images": ["/assets/images/news_3.jpg"],
//   "title": "2023 BCHL Annual General Meeting Recap",
//   "content":
//       "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game’s first star, as ..."
// }
///////////////////////////////////////////////////////////////////
// {
//   "date": "2024-06-01T00:00:00Z",
//   "images": ["/assets/images/news_4.jpg"],
//   "title": "Brooks Bandits win 2023 Rocky Mountain Challenge",
//   "content": "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game’s first star, as ..."
// }
////////////////////////////////////////////////////////////////////////
// {
//   "date": "2024-05-25T00:00:00Z",
//   "images": ["/assets/images/news_5.jpg"],
//   "title": "Brooks Bandits win 2022 Rocky Mountain Challenge",
//   "content":       "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game’s first star, as ..."
// }
////////////////////////////////////////////////////////
// {
//   "date": "2021-04-08T00:00:00Z",
//   "images": ["/assets/images/news_6.jpg"],
//   "title": "Brooks Bandits win 2021 Rocky Mountain Challenge",
//   "content": "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game’s first star, as ..."
// }
