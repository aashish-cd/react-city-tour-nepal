const tourData = [
  {
    id: 1,
    city: "kathmandu",
    img: "./img/kathmandu.jpg",
    name: "kathmandu valley view with Mountain",
    info:
      "Kathmandu (/ˌkætmænˈduː/; Nepali: काठमाडौँ, Nepali pronunciation: [ˈkaʈʰmaɳɖu]) is the capital and largest city of Nepal, with a population of around 1 million. Also known as the city of temples. The city stands at an elevation of approximately 1,400 metres (4,600 feet) above sea level in the bowl-shaped Kathmandu Valley in central Nepal. The valley was historically called the Nepal Mandala and has been the home of the Newar people, a cosmopolitan urban civilization in the Himalayan foothills. The city was the royal capital of the Kingdom of Nepal and hosts palaces, mansions and gardens of the Nepalese aristocracy. It has been home to the headquarters of the South Asian Association for Regional Cooperation (SAARC) since 1985. Today, it is the seat of government of the Nepalese republic, established in 2008, and is part of the Bagmati Province."
  },
  {
    id: 2,
    city: "Pokhara",
    img: "./img/pokhara.png",
    name: "Pokhara city views",
    info:
      "Pokhara (Nepali: पोखरा, Nepali pronunciation: [ˈpokʰʌɾa]) is a metropolitan city in Nepal, which serves as the capital of Gandaki Province. It is the country's largest metropolitan city in terms of area and second-largest in terms of population. The city also serves as the headquarters of Kaski District. Pokhara is located 200 kilometres (120 miles) west of the capital, Kathmandu. The city is on the shore of Phewa Lake, and sits at an elevation of approximately 822m. The Annapurna Range, with three out of the ten highest peaks in the world—Dhaulagiri, Annapurna I and Manaslu—is within 15–35 mi (24–56 km) of the valley."
  },
  {
    id: 3,
    city: "Dharan",
    img: "./img/dharan.jpg",
    name: "Night view of dharan / bhedetar",
    info:
      "Dharan (Devanāgarī: धरान) is a sub-metropolitan city in Sunsari District of Province No. 1, Nepal, which was established as a fourth municipality in the Kingdom in 1958. It is situated on the foothills of the Mahabharat Range in the north with its southern tip touching the edge of the Terai region at an altitude of 1148 ft (349m). The Koshi highway runs through the heart of the city thus connecting it with the provincial capital of Biratnagar as well as the Itahari junction of the east–west Mahendra highway (lying 41 km and 17 km south, respectively), and the Nepal-China border of Kimathanka (lying 115 km north)."
  },
  {
    id: 4,
    city: "Dhangadhi",
    img: "./img/dhangadhi.jpg",
    name: "Dhangadhi city at glance",
    info:
      "Dhangadhi (Nepali: धनगढी) is a sub-metropolitan city and the district headquarters of Kailali District in Sudurpashchim Province of Nepal. It shares a border with Uttar Pradesh, India in the south, Godawari and Gauriganga Municipality in the North, Kailari Rural Municipality in the east and Kanchanpur District in the west. Dhangadhi is a sub-metropolis divided into 19 wards. It has a population of about 147,181 and thus is the 10th biggest city of Nepal. It has an area of 261.75 km2 (101.06 sq mi). It is one of the major cities of Far - West Province of Nepal along with Bhimdatta."
  },
  {
    id: 5,
    city: "Biratnagar",
    img: "./img/biratnagar.png",
    name: "Biratnagar bazar drone view",
    info:
      "Biratnagar (Nepali: विराटनगर) is a metropolitan city in Nepal, which serves as the capital of Province No. 1. With a population of 242,548 as per the 2011 census, it is the largest city in the province and also the headquarters of Morang district. Biratnagar is located 399 km (248 mi) east of the capital, Kathmandu, and 6 km (3.7 mi) north of the bordering town of Jogbani in the Indian state of Bihar. The highest peak in the world, Mount Everest, is situated 174 km (108 mi) north of the city."
  },
  {
    id: 6,
    city: "Birgunj",
    img: "./img/birgunj.jpg",
    name: "Birgunj area",
    info:
      "Birgunj; Nepali: बीरगञ्ज) is a metropolitan city in Parsa District in Province No. 2 of southern Nepal. It lies 135 km (84 mi) south of the capital Kathmandu, attached in the north to Raxaul in the border of the Indian state of Bihar. As an entry point to Nepal from Patna and Kolkata, Birgunj is known as the Gateway to Nepal. It is also called Commercial capital of Nepal. The town has significant economic importance for Nepal as most of the trade with India is via Birgunj and the Indian town of Raxaul. Tribhuvan Highway links Birgunj to Nepal's capital, Kathmandu. Birgunj was one of the first three municipalities formed during the rule of Prime Minister Mohan Shumsher Jang Bahadur Rana. It was declared a Metropolitan City on 22 May 2017 along with Biratnagar and Pokhara. Birgunj is one of the largest city in Nepal and largest in Province no. 2. Birgunj is the sixth most populated metropolis of the nation."
  },
  {
    id: 7,
    city: "Bharatpur",
    img: "./img/bharatpur.jpg",
    name: "Bharatpur at a glance",
    info:
      "Bharatpur (/bəˈrɑːtpər/, Nepali: भरतपुर, pronounced [ˈbʱʌɾʌt̪pur] (About this soundlisten)) is a city in southern central Nepal with a population of 280,502. It is the second largest metropolitan city in Nepal and the district headquarters of the Chitwan District, as well as a separate metropolitan authority. Bharatpur is one of the fastest- growing cities in Nepal. It lies on the western bank of the Narayani River and serves as a commercial center of the Chitwan district and the central region of Nepal.Most of the shopping area lies in the area of Narayangadh, while government offices, hospitals and colleges are situated in other parts of the city, including Nepal's premier cancer hospital, B.P Koirala Memorial Cancer Hospital."
  },
  {
    id: 8,
    city: "Janakpur",
    img: "./img/janakpur.jpg",
    name: "Janaki Mandir | Janakpur",
    info:
      "Janakpurdham or Janakpur (Nepali: जनकपुर, Nepali pronunciation: [d͡zʌnʌkpur]) is a sub-metropolitan city in Dhanusa District, Province No. 2, Nepal. The city is a hub for religious and cultural tourism. It has been declared as the temporary capital for Province No. 2 until the Province Assembly votes for a permanent capital. Sunset over railway track near Janakpur The city was founded in the early 18th century.According to tradition, storytelling indicates an earlier city known as Janakpurdham existed in the area, which was supposedly the capital of the Videha dynasty that ruled the Mithila region in ancient times."
  },
   {
    id: 9,
    city: "Bhaktapur",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Early_morning_view_of_Bhaktapur_Durbar_Square.jpg",
    name: "Janaki Mandir | Janakpur",
    info: "Bhaktapur (Nepali: भक्तपुर, pronounced [ˈbʱʌkt̪ʌpur] (About this soundlisten); lit. City of Devotees), also known as Khwopa (Newar: ख्वप Khwopa), is a city in the east corner of the Kathmandu Valley in Nepal about 13 kilometres (8.1 mi) from the capital city, Kathmandu. It is located in and serves as the headquarters of Bhaktapur District in Bagmati Pradesh of Nepal. It is administratively divided into 10 wards. Khwopa was the largest of the three Newa kingdoms of the Kathmandu Valley and was the capital of Nepal during the great Malla Kingdom until the second half of the 15th century. It has a population of more than 81,728, of which the vast majority are still Newa Nepa mi. Historically more isolated than the other two kingdoms, Kathmandu and Patan, Bhaktapur has a distinctly different form of Nepal Bhasa language. Bhaktapur has the best-preserved palace courtyards and old city centre in Nepal and is listed as a World Heritage Site by UNESCO for its rich culture, temples, and wood, metal and stone artworks. This is supported by the restoration and preservation efforts of the German-funded Bhaktapur Development Project (BDP). The city is famous for a special type of dahi (yoghurt) called Ju Ju Dhau",
  },
];

export default tourData
