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
        id: "1",
        studentId: "2400005",
        name: "Nazat Al Mahmud",
        highSchool: "Rajshahi Collegiate School, Rajshahi",
        college: "New Govt Degree College, Rajshahi",
        hometown: "Chapainawabganj",
        avatarUrl: "/students/Photos/2400005.jpg",
        socials: {
            facebook: "https://www.facebook.com/share/189HtFgzis/",
            whatsapp: "https://wa.me/+8801713783569"
        },
        isRep: true
    },
    {
        id: "2",
        studentId: "2400007",
        name: "Md. Jahid Hasan",
        highSchool: "Bishnu Prashad Government High School, Panchagarh",
        college: "Rangpur Govt. College, Rangpur",
        hometown: "Panchagarh",
        avatarUrl: "/students/Photos/2400007.jpg",
        socials: {
            facebook: "https://www.facebook.com/share/1BLr74A8Fq/",
            whatsapp: "https://wa.me/+8801518906931"
        }
    },
    {
        id: "3",
        studentId: "2400008",
        name: "Tasfia Tasnim",
        highSchool: "Rajuk Uttara Model College",
        college: "Rajuk Uttara Model College",
        hometown: "Dhaka",
        avatarUrl: "/students/Photos/2400008.jpg",
        socials: {
            facebook: "https://www.facebook.com/share/1CNYsDGze3/",
            whatsapp: "https://wa.me/+8801303404386"
        }
    },
    {
        id: "20",
        studentId: "2400010",
        name: "Salman Ahmed Nasim",
        highSchool: "Alhaz Wazedul Islam Khan High School, Kishoreganj",
        college: "Gurudoyal Govt. College, Kishoreganj",
        hometown: "Kishoreganj",
        avatarUrl: "/students/Photos/2400010.jpg",
        socials: {
            facebook: "https://www.facebook.com/avenue.rtc",
            whatsapp: "https://wa.me/+8801917261207"
        }
    },
    {
        id: "4",
        studentId: "2400012",
        name: "Rezuana Karim",
        highSchool: "Government PN Girl's High school Rajshahi",
        college: "Rajshahi College",
        hometown: "Rajshahi",
        avatarUrl: "/students/Photos/2400012.jpg",
        socials: {
            facebook: "https://www.facebook.com/share/1CABBPZmVr/",
            whatsapp: "https://wa.me/+8801798009676"
        }
    },
    {
        id: "5",
        studentId: "2400013",
        name: "Sawon Kumar Ghosh",
        highSchool: "Rajshahi Collegiate School, Rajshahi",
        college: "Rajshahi Govt City College, Rajshahi",
        hometown: "Rajshahi",
        avatarUrl: "/students/Photos/2400013.jpg",
        socials: {
            facebook: "https://www.facebook.com/share/17vsAyMRd8/",
            whatsapp: "https://wa.me/+8801609563324"
        }
    },
    {
        id: "6",
        studentId: "2400014",
        name: "Md Ahchanul Hoque Milon",
        highSchool: "Birol Residential Public School, Birol, Dinajpur",
        college: "Dinajpur Government City College, Dinajpur",
        hometown: "Birol, Dinajpur",
        avatarUrl: "/students/Photos/2400014.jpg",
        socials: {
            facebook: "https://www.facebook.com/share/1CDrCp7W5z/",
            whatsapp: "https://wa.me/+8801731454408"
        }
    },
    {
        id: "7",
        studentId: "2400015",
        name: "Tahlil Islam Rafi",
        highSchool: "Bindubasini govt boys high school, Tangail",
        college: "Notre Dame college, Dhaka",
        hometown: "Tangail",
        avatarUrl: "/students/Photos/2400015.png",
        socials: {
            whatsapp: "https://wa.me/+8801741553760"
        }
    },
    {
        id: "21",
        studentId: "2400021",
        name: "Hassan Mahmud Emon",
        highSchool: "Qadirabad Cantonment Public School, Natore",
        college: "Dhaka Residential Model College, Dhaka",
        hometown: "Pabna",
        avatarUrl: "/students/Photos/2400021.jpg",
        socials: {
            facebook: "https://www.facebook.com/share/1FZ92sTaFc/",
            whatsapp: "https://wa.me/+8801792675402"
        }
    },
    {
        id: "8",
        studentId: "2400023",
        name: "Ashfi Ul Haque Aronno",
        highSchool: "Bright Model School and College, Alamdanga",
        college: "Kushtia Government College, Kushtia",
        hometown: "Chuadanga",
        avatarUrl: "/students/Photos/2400023.jpg",
        socials: {
            facebook: "https://www.facebook.com/share/1DezTEZGoe/",
            whatsapp: "https://wa.me/+8801760000970"
        }
    },
    {
        id: "22",
        studentId: "2400024",
        name: "Al Mahamud Nobin",
        highSchool: "Kazi Azhar Ali Govt. Model High School, Gaibandha",
        college: "Notre Dame College, Dhaka",
        hometown: "Gaibandha",
        avatarUrl: "https://i.pravatar.cc/300?img=12",
        socials: {
            facebook: "https://www.facebook.com/al.mahamud.nobin",
            whatsapp: "https://wa.me/+8801892510933"
        }
    },
    {
        id: "9",
        studentId: "2400026",
        name: "Nabidul Hasan Pranto",
        highSchool: "A.P.B.N School and College, Bogura",
        college: "Govt. Azizul Haque College, Bogura",
        hometown: "Bogura",
        avatarUrl: "/students/Photos/2400026.jpg",
        socials: {
            facebook: "https://www.facebook.com/pranto7m",
            whatsapp: "https://wa.me/+8801764604553"
        }
    },
    {
        id: "10",
        studentId: "2400028",
        name: "Md. Abdul Hasib",
        highSchool: "Palsha High School, Chapainawabganj",
        college: "Nawabganj Govt. College , Chapainawabganj",
        hometown: "Chapainawabganj",
        avatarUrl: "https://i.pravatar.cc/300?img=18",
        socials: {
            facebook: "https://www.facebook.com/share/1a45jr8ifn/",
            whatsapp: "https://wa.me/+8801774778312"
        }
    },
    {
        id: "11",
        studentId: "2400032",
        name: "Shoyeb Nafseen Priang",
        highSchool: "Cambrian School",
        college: "Cambrian College",
        hometown: "Tangail",
        avatarUrl: "/students/Photos/2400032.jpg",
        socials: {
            whatsapp: "https://wa.me/+8801752633428"
        }
    },
    {
        id: "12",
        studentId: "2400037",
        name: "Nazia Afrida Pollobe",
        highSchool: "Masjid Mission Academy, Rajshahi",
        college: "Rajshahi Governmet City College Rajshahi",
        hometown: "Rajshahi",
        avatarUrl: "/students/Photos/2400037.jpeg",
        socials: {
            facebook: "https://www.facebook.com/share/1bgeS7tmR1/",
            whatsapp: "https://wa.me/+8801341814153"
        }
    },
    {
        id: "23",
        studentId: "2400038",
        name: "Md Ariful Islam",
        highSchool: "Banwarinagar Govt. CB Pilot High School, Pabna",
        college: "Padda Government College, Rajshahi",
        hometown: "Pabna",
        avatarUrl: "/students/Photos/2400038.jpg",
        socials: {
            facebook: "https://www.facebook.com/abedin.arifin.5",
            whatsapp: "https://wa.me/+8801621908125"
        }
    },
    {
        id: "24",
        studentId: "2400039",
        name: "Md Adil",
        highSchool: "Ideal School and College, Dhaka",
        college: "Adamjee Cantonment College, Dhaka",
        hometown: "Sirajganj",
        avatarUrl: "https://i.pravatar.cc/300?img=11",
        socials: {
            facebook: "https://www.facebook.com/share/1E3KpfT6V8/",
            whatsapp: "https://wa.me/+8801752406634"
        }
    },
    {
        id: "13",
        studentId: "2400040",
        name: "Md. Ibrahim Hosen",
        highSchool: "Saicha Para B.J.M.A Majid High School",
        college: "Paruara Abdul Matin Khasru College",
        hometown: "Cumilla",
        avatarUrl: "/students/Photos/2400040.png",
        socials: {
            facebook: "https://www.facebook.com/share/17PwfXBkyR/",
            whatsapp: "https://wa.me/+8801728760650"
        }
    },
    {
        id: "25",
        studentId: "2400042",
        name: "Rauf Hossain Roddro",
        highSchool: "Ideal School and College, Dhaka",
        college: "St. Joseph Higher Secondary School, Dhaka",
        hometown: "Gaibandha",
        avatarUrl: "/students/Photos/2400042.jpg",
        socials: {
            facebook: "https://www.facebook.com/share/1C86u3iAta/",
            whatsapp: "https://wa.me/+8801998630526"
        }
    },
    {
        id: "26",
        studentId: "2400043",
        name: "Sanzida Rafat Lam-yea",
        highSchool: "Viqarunnisa Noon School, Dhaka",
        college: "Viqarunnisa Noon College, Dhaka",
        hometown: "Pabna",
        avatarUrl: "/students/Photos/2400043.jpg",
        socials: {
            facebook: "https://www.facebook.com/share/1C2gLJj5EV/",
            whatsapp: "https://wa.me/+8801728771200"
        }
    },
    {
        id: "14",
        studentId: "2400045",
        name: "Md. Abdul Kader (Wachi)",
        highSchool: "Durgahata High School, Gabtoli, Bogura",
        college: "Govt. Shah Sultan College, Bogura",
        hometown: "Bogura",
        avatarUrl: "/students/Photos/2400045.jpg",
        socials: {
            facebook: "https://www.facebook.com/mabdulkader339",
            whatsapp: "https://wa.me/+8801787199778"
        }
    },
    {
        id: "15",
        studentId: "2400048",
        name: "Md. Shakib Uzzaman Siam",
        highSchool: "Naogaon K.D Govt' High School, Naogaon",
        college: "Rajshahi Govt' City College, Rajshahi",
        hometown: "Naogaon",
        avatarUrl: "/students/Photos/2400048.jpg",
        socials: {
            facebook: "https://www.facebook.com/ShakibSiam6345",
            whatsapp: "https://wa.me/+8801763456814"
        },
        isRep: true
    },
    {
        id: "16",
        studentId: "2400050",
        name: "Aminul Alam Ifaz",
        highSchool: "Barishal Zilla School, Barishal",
        college: "Govt. Syed Hatem Ali College, Barishal",
        hometown: "Barishal",
        avatarUrl: "/students/Photos/2400050.jpg",
        socials: {
            facebook: "https://www.facebook.com/share/1AcBJ79Sd8/",
            whatsapp: "https://wa.me/+8801318372213"
        }
    },
    {
        id: "17",
        studentId: "2400051",
        name: "Jarin Shubha Zaman",
        highSchool: "Agrani School and College, Rajshahi",
        college: "New Govt Degree College, Rajshahi",
        hometown: "Rajshahi",
        avatarUrl: "https://i.pravatar.cc/300?img=25",
        socials: {
            facebook: "https://www.facebook.com/share/1E8Y5WmDWe/",
            whatsapp: "https://wa.me/+8801726618550"
        }
    },
    {
        id: "18",
        studentId: "2400053",
        name: "Shahriar Alom Rifat",
        highSchool: "MRK High School, Rajshahi",
        college: "New Govt. Degree College, Rajshahi",
        hometown: "Rajshahi",
        avatarUrl: "/students/Photos/2400053.jpg",
        socials: {
            facebook: "https://www.facebook.com/share/1FPjT4ZT6x/",
            whatsapp: "https://wa.me/+8801718512067"
        }
    },
    {
        id: "19",
        studentId: "2400054",
        name: "Md. Abdullah Al Rafi",
        highSchool: "Lion's school and College, Saidpur",
        college: "Cantonment public school and College, Saidpur",
        hometown: "Nilphamari",
        avatarUrl: "/students/Photos/2400054.jpg",
        socials: {
            facebook: "https://www.facebook.com/share/1AekxXVoaF/",
            whatsapp: "https://wa.me/+8801768876336"
        }
    },
    {
        id: "27",
        studentId: "2400055",
        name: "Sanzid Suchok",
        highSchool: "Alhera Academy school and college, Pabna",
        college: "GOVT.EDWARD COLLEGE PABNA",
        hometown: "Pabna",
        avatarUrl: "/students/Photos/2400055.jpg",
        socials: {
            facebook: "https://www.facebook.com/share/1DxxpyhWGC/",
            whatsapp: "https://wa.me/+8801318843058"
        }
    },
    {
        id: "28",
        studentId: "2400057",
        name: "Sanjida Amin Preety",
        highSchool: "Govt. Agragami Girl's High School, Sylhet",
        college: "Sylhet Govt. Women's College, Sylhet",
        hometown: "Sylhet",
        avatarUrl: "/students/Photos/2400057.jpg",
        socials: {
            facebook: "https://www.facebook.com/share/1CNR94rfty/",
            whatsapp: "https://wa.me/+8801774842333"
        }
    }
];
