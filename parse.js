const fs = require('fs');

const data = `2400005	Nazat Al Mahmud	Rajshahi Collegiate School, Rajshahi	New Govt Degree College, Rajshahi	Chapainawabganj	01713783569	https://www.facebook.com/share/189HtFgzis/	wa.me/+8801713783569
2400007	Md. Jahid Hasan	Bishnu Prashad Government High School, Panchagarh	Rangpur Govt. College, Rangpur	Panchagarh	01518906931	https://www.facebook.com/share/1BLr74A8Fq/	wa.me/+8801518906931
2400008	Tasfia Tasnim	Rajuk Uttara Model College	Rajuk Uttara Model College	Dhaka	01303404386	https://www.facebook.com/share/1CNYsDGze3/	wa.me/+8801303404386
2400012	Rezuana Karim	Government PN Girl's High school Rajshahi	Rajshahi College	Rajshahi	01798009676	https://www.facebook.com/share/1CABBPZmVr/	wa.me/+8801798009676
2400013	Sawon Kumar Ghosh	Rajshahi Collegiate School, Rajshahi	Rajshahi Govt City College, Rajshahi	Rajshahi	01609563324	https://www.facebook.com/share/17vsAyMRd8/	wa.me/+8801609563324
2400014	Md Ahchanul Hoque Milon	Birol Residential Public School, Birol, Dinajpur	Dinajpur Government City College, Dinajpur	Birol, Dinajpur	01731454408	https://www.facebook.com/share/1CDrCp7W5z/	wa.me/+8801731454408
2400015	Tahlil Islam Rafi	Bindubasini govt boys high school, Tangail	Notre Dame college, Dhaka	Tangail	01741553760	-	wa.me/+8801741553760
2400023	Ashfi Ul Haque Aronno	Bright Model School and College, Alamdanga	Kushtia Government College, Kushtia	Chuadanga	01760000970	https://www.facebook.com/share/1DezTEZGoe/	wa.me/+8801760000970
2400026	Nabidul Hasan Pranto	A.P.B.N School and College, Bogura	Govt. Azizul Haque College, Bogura	Bogura	01764604553	https://www.facebook.com/pranto7m	wa.me/+8801764604553
2400028	Md. Abdul Hasib	Palsha High School, Chapainawabganj	Nawabganj Govt. College , Chapainawabganj	Chapainawabganj	01774778312	https://www.facebook.com/share/1a45jr8ifn/	wa.me/+8801774778312
2400032	Shoyeb Nafseen Priang	Cambrian School	Cambrian College	Tangail	01752633428	-	wa.me/+8801752633428
2400037	Nazia Afrida Pollobe	Masjid Mission Academy, Rajshahi	Rajshahi Governmet City College Rajshahi	Rajshahi	01341814153	https://www.facebook.com/share/1bgeS7tmR1/	wa.me/+8801341814153
2400040	Md. Ibrahim Hosen	Saicha Para B.J.M.A Majid High School	Paruara Abdul Matin Khasru College	Cumilla	01728760650	https://www.facebook.com/share/17PwfXBkyR/	wa.me/+8801728760650
2400045	Md. Abdul Kader (Wachi)	Durgahata High School, Gabtoli, Bogura	Govt. Shah Sultan College, Bogura	Bogura	01787199778	https://www.facebook.com/mabdulkader339	wa.me/+8801787199778
2400048	Md. Shakib Uzzaman Siam	Naogaon K.D Govt' High School, Naogaon	Rajshahi Govt' City College, Rajshahi	Naogaon	01763456814	https://www.facebook.com/ShakibSiam6345	wa.me/+8801763456814
2400050	Aminul Alam Ifaz	Barishal Zilla School, Barishal	Govt. Syed Hatem Ali College, Barishal	Barishal	01318372213	https://www.facebook.com/share/1AcBJ79Sd8/	wa.me/+8801318372213
2400051	Jarin Shubha Zaman	Agrani School and College, Rajshahi	New Govt Degree College, Rajshahi	Rajshahi	01726618550	https://www.facebook.com/share/1E8Y5WmDWe/	wa.me/+8801726618550
2400053	Shahriar Alom Rifat	MRK High School, Rajshahi	New Govt. Degree College, Rajshahi	Rajshahi	01718512067	https://www.facebook.com/share/1FPjT4ZT6x/	wa.me/+8801718512067
2400054	Md. Abdullah Al Rafi	Lion's school and College, Saidpur	Cantonment public school and College, Saidpur	Nilphamari	01768876336	https://www.facebook.com/share/1AekxXVoaF/	wa.me/+8801768876336`;

const lines = data.split("\n");
const students = [];

for (let i = 0; i < lines.length; i++) {
    const parts = lines[i].split("\t");
    if (parts.length < 8) continue;

    let fb = parts[6].trim();
    if (fb === "-" || fb === "") fb = undefined;

    let wa = parts[7].trim();
    if (!wa.startsWith("http")) {
        wa = "https://" + wa;
    }

    students.push({
        id: (i + 1).toString(),
        name: parts[1].trim(),
        studentId: parts[0].trim(),
        hometown: parts[4].trim(),
        highSchool: parts[2].trim(),
        college: parts[3].trim(),
        avatarUrl: \`https://i.pravatar.cc/300?img=\${(i % 70) + 1}\`,
        socials: {
            facebook: fb,
            whatsapp: wa
        }
    });
}

const content = \`export interface SocialLinks {
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

export const students: Student[] = \${JSON.stringify(students, null, 4)};
\`;

fs.writeFileSync("/Users/nazat/Desktop/Desktop/antigravity/ce24/src/data/students.ts", content);
console.log("Written successfully");
