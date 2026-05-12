import re
import os

REPS = ["2400005", "2400048"]

with open('updated_students.txt', 'r') as f:
    lines = [line.strip() for line in f.readlines() if line.strip()]

students_data = {}
current = {}
field_index = 0

for i, line in enumerate(lines):
    if re.match(r'^24000\d{2}$', line):
        if 'studentId' in current:
            students_data[current['studentId']] = current
        current = {'studentId': line}
        field_index = 1
    else:
        if field_index == 1: current['name'] = line
        elif field_index == 2: current['highSchool'] = line
        elif field_index == 3: current['college'] = line
        elif field_index == 4: current['hometown'] = line
        elif field_index == 5: current['phone'] = line
        elif field_index == 6: current['facebook'] = line
        elif field_index == 7: current['whatsapp'] = line
        field_index += 1
if 'studentId' in current:
    students_data[current['studentId']] = current

photos_dir = '/Users/nazat/Desktop/Desktop/antigravity/ce24/public/students/Photos'
downloaded_files = os.listdir(photos_dir)

def find_photo(roll):
    valid_exts = ('.jpg', '.jpeg', '.png', '.heic')
    
    # First, look for a new photo (not webp)
    for f in downloaded_files:
        if roll in f and f.lower().endswith(valid_exts):
            return f"/students/Photos/{f}"
            
    # Fallback to webp if it exists
    for f in downloaded_files:
        if roll in f and f.lower().endswith('.webp'):
            return f"/students/Photos/{f}"
            
    return "/students/default-avatar.svg"

output = []
output.append('export interface SocialLinks {')
output.append('    facebook?: string;')
output.append('    whatsapp?: string;')
output.append('    phone?: string;')
output.append('}')
output.append('')
output.append('export interface Student {')
output.append('    id: string;')
output.append('    name: string;')
output.append('    studentId: string;')
output.append('    hometown: string;')
output.append('    highSchool: string;')
output.append('    college: string;')
output.append('    avatarUrl: string;')
output.append('    socials: SocialLinks;')
output.append('    isRep?: boolean;')
output.append('}')
output.append('')
output.append('export const students: Student[] = [')

for i in range(1, 61):
    roll = f"24000{i:02d}"
    data = students_data.get(roll)
    
    avatarUrl = find_photo(roll)
    isRep = roll in REPS
    
    if not data:
        name = "Unknown"
        hometown = "Unknown"
        highSchool = "Unknown"
        college = "Unknown"
        phone = ""
        facebook = ""
        whatsapp = ""
    else:
        name = data.get('name', 'Unknown')
        name = name if name != "-" else ""
        hometown = data.get('hometown', 'Unknown')
        hometown = hometown if hometown != "-" else ""
        highSchool = data.get('highSchool', 'Unknown')
        highSchool = highSchool if highSchool != "-" else ""
        college = data.get('college', 'Unknown')
        college = college if college != "-" else ""
        phone = data.get('phone', '')
        facebook = data.get('facebook', '')
        whatsapp = data.get('whatsapp', '')
        
        # fix whatsapp link format if it's full url
        if whatsapp and not whatsapp.startswith('http'):
            whatsapp = 'https://' + whatsapp
        if facebook and not facebook.startswith('http') and facebook != "-":
            facebook = 'https://' + facebook
        if facebook == "-":
            facebook = ""
        if phone == "-":
            phone = ""
            
    output.append('    {')
    output.append(f'        "id": "{i}",')
    output.append(f'        "studentId": "{roll}",')
    output.append(f'        "name": "{name}",')
    output.append(f'        "hometown": "{hometown}",')
    output.append(f'        "highSchool": "{highSchool}",')
    output.append(f'        "college": "{college}",')
    output.append(f'        "avatarUrl": "{avatarUrl}",')
    output.append('        "socials": {')
    socials = []
    if facebook: socials.append(f'            "facebook": "{facebook}"')
    if whatsapp: socials.append(f'            "whatsapp": "{whatsapp}"')
    if phone: socials.append(f'            "phone": "{phone}"')
    output.append(',\n'.join(socials))
    output.append('        }' + (',' if isRep else ''))
    if isRep:
        output.append('        "isRep": true')
    output.append('    }' + (',' if i < 60 else ''))

output.append('];')

with open('src/data/students.ts', 'w') as f:
    f.write('\n'.join(output))

print("Successfully generated src/data/students.ts")
