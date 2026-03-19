export interface SocialLinks {
    facebook?: string;
    whatsapp?: string;
}

export interface Student {
    id: string;
    name: string;
    studentId: string;
    hometown: string;
    highSchool: string;
    college: string;
    avatarUrl: string;
    socials: SocialLinks;
    isRep?: boolean;
}

export const students: Student[] = [
    {
        "id": "1",
        "studentId": "2400002",
        "name": "Mst. Jannatul Mauya",
        "hometown": "Rajshahi",
        "highSchool": "Durgapur Girls' High School",
        "college": "Rajshahi Govt. City College",
        "avatarUrl": "/students/Photos/2400002.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/jan.mauya",
            "whatsapp": "https://wa.me/+8801733793249"
        }
    },
    {
        "id": "2",
        "studentId": "2400003",
        "name": "Shah Kudrot-E- Alam Kabbo",
        "hometown": "Gaibandha",
        "highSchool": "Ideal School & College",
        "college": "Notre Dame College",
        "avatarUrl": "/students/Photos/2400003.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/17c9hdPcKB/",
            "whatsapp": "https://wa.me/+8801824383707"
        }
    },
    {
        "id": "3",
        "studentId": "2400005",
        "name": "Nazat Al Mahmud",
        "hometown": "Chapainawabganj",
        "highSchool": "Rajshahi Collegiate School",
        "college": "New Govt Degree College",
        "avatarUrl": "/students/Photos/2400005.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/189HtFgzis/",
            "whatsapp": "https://wa.me/+8801713783569"
        },
        "isRep": true
    },
    {
        "id": "4",
        "studentId": "2400006",
        "name": "Shadman Hossen",
        "hometown": "Savar, Dhaka",
        "highSchool": "Sena Public School & College",
        "college": "Savar Cantonment Public",
        "avatarUrl": "/students/Photos/2400006.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/14ZAU9nHZWr/",
            "whatsapp": "https://wa.me/+8801779444659"
        }
    },
    {
        "id": "5",
        "studentId": "2400007",
        "name": "Md. Jahid Hasan",
        "hometown": "Panchagarh",
        "highSchool": "Bishnu Prashad Govt High School",
        "college": "Rangpur Govt. College",
        "avatarUrl": "/students/Photos/2400007.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1BLr74A8Fq/",
            "whatsapp": "https://wa.me/+8801518906931"
        }
    },
    {
        "id": "6",
        "studentId": "2400008",
        "name": "Tasfia Tasnim",
        "hometown": "Dhaka",
        "highSchool": "Rajuk Uttara Model College",
        "college": "Rajuk Uttara Model College",
        "avatarUrl": "/students/Photos/2400008.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1CNYsDGze3/",
            "whatsapp": "https://wa.me/+8801303404386"
        }
    },
    {
        "id": "7",
        "studentId": "2400009",
        "name": "Nayem Ahmed",
        "hometown": "Dhaka",
        "highSchool": "Collectorate Public School",
        "college": "BAF Shaheen College Dhaka",
        "avatarUrl": "/students/Photos/2400009.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/iyowosadat",
            "whatsapp": "https://wa.me/+8801842021677"
        }
    },
    {
        "id": "8",
        "studentId": "2400010",
        "name": "Salman Ahmed Nasim",
        "hometown": "Kishoreganj",
        "highSchool": "Alhaz Wazedul Islam High",
        "college": "Gurudoyal Govt. College",
        "avatarUrl": "/students/Photos/2400010.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/avenue.rtc",
            "whatsapp": "https://wa.me/+8801917261207"
        }
    },
    {
        "id": "9",
        "studentId": "2400011",
        "name": "Maliha Enteha",
        "hometown": "Khulna",
        "highSchool": "Govt. Laboratory High School",
        "college": "Govt. M.M. City College",
        "avatarUrl": "/students/default-avatar.svg",
        "socials": {
            "facebook": "https://www.facebook.com/share/17obqDxSLQ/"
        }
    },
    {
        "id": "10",
        "studentId": "2400012",
        "name": "Rezuana Karim",
        "hometown": "Rajshahi",
        "highSchool": "Govt PN Girl's High",
        "college": "Rajshahi College",
        "avatarUrl": "/students/Photos/2400012.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1CABBPZmVr/",
            "whatsapp": "https://wa.me/+8801798009676"
        }
    },
    {
        "id": "11",
        "studentId": "2400013",
        "name": "Sawon Kumar Ghosh",
        "hometown": "Rajshahi",
        "highSchool": "Rajshahi Collegiate School",
        "college": "Rajshahi Govt City College",
        "avatarUrl": "/students/Photos/2400013.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/17vsAyMRd8/",
            "whatsapp": "https://wa.me/+8801609563324"
        }
    },
    {
        "id": "12",
        "studentId": "2400014",
        "name": "Md Ahchanul Hoque Milon",
        "hometown": "Birol, Dinajpur",
        "highSchool": "Birol Residential Public School",
        "college": "Dinajpur Govt City College",
        "avatarUrl": "/students/Photos/2400014.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1CDrCp7W5z/",
            "whatsapp": "https://wa.me/+8801731454408"
        }
    },
    {
        "id": "13",
        "studentId": "2400015",
        "name": "Tahlil Islam Rafi",
        "hometown": "Tangail",
        "highSchool": "Bindubasini Govt Boys High",
        "college": "Notre Dame College",
        "avatarUrl": "/students/Photos/2400015.png",
        "socials": {
            "whatsapp": "https://wa.me/+8801741553760"
        }
    },
    {
        "id": "14",
        "studentId": "2400016",
        "name": "Avik Paul",
        "hometown": "Narail",
        "highSchool": "Mohajon Ghoshibaria High",
        "college": "Munshi Manik Mia Degree College",
        "avatarUrl": "/students/Photos/2400016.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/174Dh2E9u8/"
        }
    },
    {
        "id": "15",
        "studentId": "2400017",
        "name": "Ragib Nur Zaman",
        "hometown": "Kushtia",
        "highSchool": "Baragangdia Secondary School",
        "college": "Dhaka College",
        "avatarUrl": "/students/Photos/2400017.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1C3D3MY796/",
            "whatsapp": "https://wa.me/+8801608512988"
        }
    },
    {
        "id": "16",
        "studentId": "2400018",
        "name": "Saad Jawher",
        "hometown": "Chattogram",
        "highSchool": "Chattogram Govt. High",
        "college": "Bakalia Govt. College",
        "avatarUrl": "/students/Photos/2400018.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/jawad.sharaf.725390",
            "whatsapp": "https://wa.me/qr/KP5DNHHFOFKQJ1"
        }
    },
    {
        "id": "17",
        "studentId": "2400019",
        "name": "Sajjadur Rahman",
        "hometown": "Maijdee, Noakhali",
        "highSchool": "Harinarayonpur Union High",
        "college": "Noakhali Govt College",
        "avatarUrl": "/students/Photos/2400019.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/18ASDoMhzS/",
            "whatsapp": "https://wa.me/qr/EHKOFFHR47IYK1"
        }
    },
    {
        "id": "18",
        "studentId": "2400020",
        "name": "Md. Ruhul Amin Rasel",
        "hometown": "Pirganj, Thakurgaon",
        "highSchool": "North Point School",
        "college": "Pirganj Govt College",
        "avatarUrl": "/students/default-avatar.svg",
        "socials": {
            "facebook": "https://www.facebook.com/mdruhulaminrasel122"
        }
    },
    {
        "id": "19",
        "studentId": "2400021",
        "name": "Hassan Mahmud Emon",
        "hometown": "Pabna",
        "highSchool": "Qadirabad Cant. Public",
        "college": "Dhaka Residential Model",
        "avatarUrl": "/students/Photos/2400021.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1FZ92sTaFc/",
            "whatsapp": "https://wa.me/+8801792675402"
        }
    },
    {
        "id": "20",
        "studentId": "2400022",
        "name": "Md. Mahmudul Amin Limon",
        "hometown": "Saidpur, Nilphamari",
        "highSchool": "Saidpur Govt Science College",
        "college": "Saidpur Govt Science College",
        "avatarUrl": "/students/Photos/2400022.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/14WrPZYwPFY/",
            "whatsapp": "https://wa.me/+8801865503412"
        }
    },
    {
        "id": "21",
        "studentId": "2400023",
        "name": "Ashfi Ul Haque Aronno",
        "hometown": "Chuadanga",
        "highSchool": "Bright Model School",
        "college": "Kushtia Govt College",
        "avatarUrl": "/students/Photos/2400023.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1DezTEZGoe/",
            "whatsapp": "https://wa.me/+8801760000970"
        }
    },
    {
        "id": "22",
        "studentId": "2400024",
        "name": "Al Mahamud Nobin",
        "hometown": "Gaibandha",
        "highSchool": "Kazi Azhar Ali Govt. High",
        "college": "Notre Dame College",
        "avatarUrl": "/students/Photos/2400024.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/al.mahamud.nobin",
            "whatsapp": "https://wa.me/+8801892510933"
        }
    },
    {
        "id": "23",
        "studentId": "2400026",
        "name": "Nabidul Hasan Pranto",
        "hometown": "Bogura",
        "highSchool": "A.P.B.N School & College",
        "college": "Govt. Azizul Haque College",
        "avatarUrl": "/students/Photos/2400026.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/pranto7m",
            "whatsapp": "https://wa.me/+8801764604553"
        }
    },
    {
        "id": "24",
        "studentId": "2400027",
        "name": "MD. Akib Rahman",
        "hometown": "Kushtia",
        "highSchool": "Gangni Pilot High School",
        "college": "Kushtia Govt College",
        "avatarUrl": "/students/Photos/2400027.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1G42UJKhfZ/",
            "whatsapp": "https://wa.me/qr/LQLHG4XLAVAEA1"
        }
    },
    {
        "id": "25",
        "studentId": "2400028",
        "name": "Md. Abdul Hasib",
        "hometown": "Chapainawabganj",
        "highSchool": "Palsha High School",
        "college": "Nawabganj Govt. College",
        "avatarUrl": "/students/Photos/2400028.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1a45jr8ifn/",
            "whatsapp": "https://wa.me/+8801774778312"
        }
    },
    {
        "id": "26",
        "studentId": "2400029",
        "name": "Mahdi Hasan",
        "hometown": "Mymensingh",
        "highSchool": "Mymensingh Zilla School",
        "college": "Anandamohan College",
        "avatarUrl": "/students/Photos/2400029.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/18CtfB7LWh/",
            "whatsapp": "https://wa.me/+8801926628961"
        }
    },
    {
        "id": "27",
        "studentId": "2400030",
        "name": "S.M. Wahidur Rahman",
        "hometown": "Kushtia",
        "highSchool": "Monipur High School",
        "college": "Mirpur Cant. Public",
        "avatarUrl": "/students/Photos/2400030.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1B7x5CCGoP/",
            "whatsapp": "https://wa.me/+8801736156343"
        }
    },
    {
        "id": "28",
        "studentId": "2400031",
        "name": "Fahim Hasan Fahad",
        "hometown": "Tangail",
        "highSchool": "Police Lines Adarsha High",
        "college": "Major Gen. M. Hasan College",
        "avatarUrl": "/students/Photos/2400031.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1AxKDNFhuh/",
            "whatsapp": "https://wa.me/+8801331501055"
        }
    },
    {
        "id": "29",
        "studentId": "2400032",
        "name": "Shoyeb Nafseen Priang",
        "hometown": "Tangail",
        "highSchool": "Cambrian School",
        "college": "Cambrian College",
        "avatarUrl": "/students/Photos/2400032.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/16n8JUADwp/",
            "whatsapp": "https://wa.me/+8801752633428"
        }
    },
    {
        "id": "30",
        "studentId": "2400033",
        "name": "Jewel Rana",
        "hometown": "Natore",
        "highSchool": "Saint Louis High School",
        "college": "Baraigram Govt. College",
        "avatarUrl": "/students/Photos/2400033.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1GwroBwpnK/",
            "whatsapp": "https://wa.me/qr/RREQBLQSUBHRA1"
        }
    },
    {
        "id": "31",
        "studentId": "2400036",
        "name": "md.Jayed Hasan",
        "hometown": "Barishal",
        "highSchool": "Ratnopur Secondary school",
        "college": "Notre Dame College",
        "avatarUrl": "/students/Photos/2400036.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1C1SQM9uAb/",
            "whatsapp": "https://wa.me/+8801776248949"
        }
    },
    {
        "id": "32",
        "studentId": "2400037",
        "name": "Nazia Afrida Pollobe",
        "hometown": "Rajshahi",
        "highSchool": "Masjid Mission Academy",
        "college": "Rajshahi Govt City College",
        "avatarUrl": "/students/Photos/2400037.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1bgeS7tmR1/",
            "whatsapp": "https://wa.me/+8801341814153"
        }
    },
    {
        "id": "33",
        "studentId": "2400038",
        "name": "Md Ariful Islam",
        "hometown": "Pabna",
        "highSchool": "Banwarinagar Govt. Pilot High",
        "college": "Padda Government College",
        "avatarUrl": "/students/Photos/2400038.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/abedin.arifin.5",
            "whatsapp": "https://wa.me/+8801621908125"
        }
    },
    {
        "id": "34",
        "studentId": "2400039",
        "name": "Md Adil",
        "hometown": "Sirajganj",
        "highSchool": "Ideal School & College",
        "college": "Adamjee Cantonment College",
        "avatarUrl": "/students/Photos/2400039.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1E3KpfT6V8/",
            "whatsapp": "https://wa.me/+8801752406634"
        }
    },
    {
        "id": "35",
        "studentId": "2400040",
        "name": "Md. Ibrahim Hosen",
        "hometown": "Cumilla",
        "highSchool": "Saicha Para High School",
        "college": "Paruara Abdul Matin College",
        "avatarUrl": "/students/Photos/2400040.png",
        "socials": {
            "facebook": "https://www.facebook.com/share/17PwfXBkyR/",
            "whatsapp": "https://wa.me/+8801728760650"
        }
    },
    {
        "id": "36",
        "studentId": "2400042",
        "name": "Rauf Hossain Roddro",
        "hometown": "Gaibandha",
        "highSchool": "Ideal School and College",
        "college": "St. Joseph Higher Secondary",
        "avatarUrl": "/students/Photos/2400042.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1C86u3iAta/",
            "whatsapp": "https://wa.me/+8801998630526"
        }
    },
    {
        "id": "37",
        "studentId": "2400043",
        "name": "Sanzida Rafat Lam-yea",
        "hometown": "Pabna",
        "highSchool": "Viqarunnisa Noon School",
        "college": "Viqarunnisa Noon College",
        "avatarUrl": "/students/Photos/2400043.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1C2gLJj5EV/",
            "whatsapp": "https://wa.me/+8801728771200"
        }
    },
    {
        "id": "38",
        "studentId": "2400044",
        "name": "Zihad Joy",
        "hometown": "Barishal",
        "highSchool": "Dhanmondi Govt. Boys' High",
        "college": "Govt. Science College, Dhaka",
        "avatarUrl": "/students/Photos/2400044.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/sm.joy.official",
            "whatsapp": "https://wa.me/+8801963834823"
        }
    },
    {
        "id": "39",
        "studentId": "2400045",
        "name": "Md. Abdul Kader (Wachi)",
        "hometown": "Bogura",
        "highSchool": "Durgahata High School",
        "college": "Govt. Shah Sultan College",
        "avatarUrl": "/students/Photos/2400045.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/mabdulkader339",
            "whatsapp": "https://wa.me/+8801787199778"
        }
    },
    {
        "id": "40",
        "studentId": "2400046",
        "name": "Md. Musabbir Hossain Munna",
        "hometown": "Dinajpur",
        "highSchool": "Dinajpur Zilla School",
        "college": "Saidpur Govt. Science College",
        "avatarUrl": "/students/Photos/2400046.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/musabbirhossain06",
            "whatsapp": "https://wa.me/+8801336155081"
        }
    },
    {
        "id": "41",
        "studentId": "2400047",
        "name": "Borkat Ullah ( Bihon )",
        "hometown": "Narsingdi",
        "highSchool": "Paratali K.U. High School",
        "college": "Narsingdi Govt. College",
        "avatarUrl": "/students/Photos/2400047.png",
        "socials": {
            "facebook": "https://www.facebook.com/share/1HKaFuSp2K/"
        }
    },
    {
        "id": "42",
        "studentId": "2400048",
        "name": "Md. Shakib Uzzaman Siam",
        "hometown": "Naogaon",
        "highSchool": "Naogaon K.D Govt High",
        "college": "Rajshahi Govt City College",
        "avatarUrl": "/students/Photos/2400048.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/ShakibSiam6345",
            "whatsapp": "https://wa.me/+8801763456814"
        },
        "isRep": true
    },
    {
        "id": "43",
        "studentId": "2400049",
        "name": "Md Mahadi Fayaz Bhuiyan",
        "hometown": "Cumilla",
        "highSchool": "Rani Bilashmoni Govt Boys'",
        "college": "Notre Dame College",
        "avatarUrl": "/students/default-avatar.svg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1CZqt34V82/"
        }
    },
    {
        "id": "44",
        "studentId": "2400050",
        "name": "Aminul Alam Ifaz",
        "hometown": "Barishal",
        "highSchool": "Barishal Zilla School",
        "college": "Govt. Syed Hatem Ali College",
        "avatarUrl": "/students/Photos/2400050.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1AcBJ79Sd8/",
            "whatsapp": "https://wa.me/+8801318372213"
        }
    },
    {
        "id": "45",
        "studentId": "2400051",
        "name": "Jarin Shubha Zaman",
        "hometown": "Rajshahi",
        "highSchool": "Agrani School & College",
        "college": "New Govt Degree College",
        "avatarUrl": "/students/Photos/2400051.png",
        "socials": {
            "facebook": "https://www.facebook.com/share/1E8Y5WmDWe/",
            "whatsapp": "https://wa.me/+8801726618550"
        }
    },
    {
        "id": "46",
        "studentId": "2400052",
        "name": "Md. Ariyan",
        "hometown": "Dhaka",
        "highSchool": "Motijheel Model School",
        "college": "Govt. Science College, Dhaka",
        "avatarUrl": "/students/Photos/2400052.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1JCT6axvgM/",
            "whatsapp": "https://wa.me/8801642972428"
        }
    },
    {
        "id": "47",
        "studentId": "2400053",
        "name": "Shahriar Alom Rifat",
        "hometown": "Rajshahi",
        "highSchool": "MRK High School",
        "college": "New Govt. Degree College",
        "avatarUrl": "/students/Photos/2400053.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1FPjT4ZT6x/",
            "whatsapp": "https://wa.me/+8801718512067"
        }
    },
    {
        "id": "48",
        "studentId": "2400054",
        "name": "Md. Abdullah Al Rafi",
        "hometown": "Nilphamari",
        "highSchool": "Lion's School & College",
        "college": "Cantonment Public School",
        "avatarUrl": "/students/Photos/2400054.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1AekxXVoaF/",
            "whatsapp": "https://wa.me/+8801768876336"
        }
    },
    {
        "id": "49",
        "studentId": "2400055",
        "name": "Sanzid Suchok",
        "hometown": "Pabna",
        "highSchool": "Alhera Academy",
        "college": "Govt. Edward College",
        "avatarUrl": "/students/Photos/2400055.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1DxxpyhWGC/",
            "whatsapp": "https://wa.me/+8801318843058"
        }
    },
    {
        "id": "50",
        "studentId": "2400056",
        "name": "Meherin Momta BornoMala",
        "hometown": "Pabna",
        "highSchool": "Pabna Govt. Girls High",
        "college": "Pabna Govt. Women College",
        "avatarUrl": "/students/Photos/2400056.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/14ViHC8xwhN/",
            "whatsapp": "https://wa.me/+8801973423552"
        }
    },
    {
        "id": "51",
        "studentId": "2400057",
        "name": "Sanjida Amin Preety",
        "hometown": "Sylhet",
        "highSchool": "Govt. Agragami Girl's High",
        "college": "Sylhet Govt. Women's College",
        "avatarUrl": "/students/Photos/2400057.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/share/1CNR94rfty/",
            "whatsapp": "https://wa.me/+8801774842333"
        }
    },
    {
        "id": "52",
        "studentId": "2400059",
        "name": "Iftekhar Hussen Saikat",
        "hometown": "Moulvibazar",
        "highSchool": "Moulvibazar Govt High",
        "college": "BNMPC, Dhaka",
        "avatarUrl": "/students/default-avatar.svg",
        "socials": {
            "facebook": "https://www.facebook.com/share/18JdZwBNq2/",
            "whatsapp": "https://wa.me/qr/C4XXQRGUUKWNO1"
        }
    },
    {
        "id": "53",
        "studentId": "2400060",
        "name": "Md. Rakibul Hasan Rabbi",
        "hometown": "Pabna",
        "highSchool": "Pabna Zilla School",
        "college": "Rajshahi College",
        "avatarUrl": "/students/Photos/2400060.jpg",
        "socials": {
            "facebook": "https://www.facebook.com/rakibulhasan.rabby.3154",
            "whatsapp": "https://wa.me/+8801819796606"
        }
    }
];
