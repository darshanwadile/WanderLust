const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "wanderlust_DEV/qjqjlyldxwxw9qquteg0",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716987958/wanderlust_DEV/qjqjlyldxwxw9qquteg0.jpg",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Beach",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "wanderlust_DEV/namhk5ymo5bnicfmcjlk",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716991317/wanderlust_DEV/namhk5ymo5bnicfmcjlk.webp",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "Iconic-Cities",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "wanderlust_DEV/by9ikfxvff10rzennoqx",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716988379/wanderlust_DEV/by9ikfxvff10rzennoqx.jpg",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "wanderlust_DEV/bvzxglqyickrvjipdmlx",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716988478/wanderlust_DEV/bvzxglqyickrvjipdmlx.jpg",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "Historical-Homes",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "wanderlust_DEV/hutflk3nyzaupi9x0ptm",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716988577/wanderlust_DEV/hutflk3nyzaupi9x0ptm.jpg",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Campsite",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "wanderlust_DEV/wme2xvhlclk68mfp0in5",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716989163/wanderlust_DEV/wme2xvhlclk68mfp0in5.jpg",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "Beach",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "wanderlust_DEV/gfofvk7cupd3npjo8heu",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716989294/wanderlust_DEV/gfofvk7cupd3npjo8heu.jpg",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Lake",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "wanderlust_DEV/fcwnhmpnm7jqh1u43ca7",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716990160/wanderlust_DEV/fcwnhmpnm7jqh1u43ca7.webp",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "Trending",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "wanderlust_DEV/k1cmlc5qzwss3ifxhpuy",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716989774/wanderlust_DEV/k1cmlc5qzwss3ifxhpuy.jpg",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "Ski-in-out",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "wanderlust_DEV/djqdlt09pkxr2ulo3brg",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716990353/wanderlust_DEV/djqdlt09pkxr2ulo3brg.jpg",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "Woodlands",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "wanderlust_DEV/ddv5nd4vmimrm2nlhyni",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716990541/wanderlust_DEV/ddv5nd4vmimrm2nlhyni.jpg",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Historical-Homes",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "wanderlust_DEV/llidawturxcrg8qhnyys",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716990827/wanderlust_DEV/llidawturxcrg8qhnyys.jpg",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "Boat",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "wanderlust_DEV/yiymbouxckg3tg9zos1t",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716990989/wanderlust_DEV/yiymbouxckg3tg9zos1t.jpg",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Rooms",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "wanderlust_DEV/e6uxmyfmpaheyy0k75ad",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716991126/wanderlust_DEV/e6uxmyfmpaheyy0k75ad.jpg",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "Iconic-Cities",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "wanderlust_DEV/a0rvxo84act3vfznez98",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716991187/wanderlust_DEV/a0rvxo84act3vfznez98.jpg",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "Amazing-Pools",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "wanderlust_DEV/a328pyw9dmpsgnnq7x0p",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716991388/wanderlust_DEV/a328pyw9dmpsgnnq7x0p.jpg",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "Mountains",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "wanderlust_DEV/oscydu4gaq1h1lgls8gz",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716991773/wanderlust_DEV/oscydu4gaq1h1lgls8gz.jpg",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    category: "Apartment",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "wanderlust_DEV/zbvktayoqzlmha4iv8ai",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716991878/wanderlust_DEV/zbvktayoqzlmha4iv8ai.jpg",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: "Bed-and-Breakfasts",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "wanderlust_DEV/vuo9zehyodtdo6dhsqsr",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716992061/wanderlust_DEV/vuo9zehyodtdo6dhsqsr.webp",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "Castles",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "wanderlust_DEV/uxnuhzyo6ozuy6visfqj",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716992304/wanderlust_DEV/uxnuhzyo6ozuy6visfqj.jpg",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Amazing-Pools",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "wanderlust_DEV/mz8iufrrve3dxv4qsd4t",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716992388/wanderlust_DEV/mz8iufrrve3dxv4qsd4t.jpg",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    category: "Cabins",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "wanderlust_DEV/iqqmjypakdk6azfn21x1",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716992552/wanderlust_DEV/iqqmjypakdk6azfn21x1.jpg",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    category: "New",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "wanderlust_DEV/arvhjg9y8ehc8heq5dqi",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716992704/wanderlust_DEV/arvhjg9y8ehc8heq5dqi.webp",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Camping",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "wanderlust_DEV/k9qiqwbzo55fimvfay8q",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716992900/wanderlust_DEV/k9qiqwbzo55fimvfay8q.jpg",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    category: "Farm",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "wanderlust_DEV/igwuigcrdfgaisf1e4zn",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716993101/wanderlust_DEV/igwuigcrdfgaisf1e4zn.jpg",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "Trending",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "wanderlust_DEV/evpuwtpctsbdnxnqvgox",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716993292/wanderlust_DEV/evpuwtpctsbdnxnqvgox.jpg",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    category: "Countryside",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "wanderlust_DEV/m0hwiwvtmhi4kbtorztw",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716993352/wanderlust_DEV/m0hwiwvtmhi4kbtorztw.jpg",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "Amazing-Pools",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "wanderlust_DEV/ckriqwxzfzourxeyilbv",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716993504/wanderlust_DEV/ckriqwxzfzourxeyilbv.webp",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    category: "Arctic",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "wanderlust_DEV/zyqegxq7wfomfzg9pioq",
      url: "https://res.cloudinary.com/dhawrroef/image/upload/v1716993785/wanderlust_DEV/zyqegxq7wfomfzg9pioq.webp",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Beach",
  },
];

module.exports = { data: sampleListings };