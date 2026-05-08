import re
import os
import glob

# CR list
REPS = ["2400005", "2400048"]

# Read new data
with open('updated_students.txt', 'r') as f:
    lines = [line.strip() for line in f.readlines() if line.strip()]

# Parse blocks
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

# Let's map downloaded photos to roll numbers
photos_dir = '/Users/nazat/Desktop/Desktop/antigravity/ce24/public/students/Photos'
downloaded_files = os.listdir(photos_dir)

def find_photo(roll):
    # Find a file that contains the roll number and has a valid extension
    for f in downloaded_files:
        if roll in f and f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp', '.heic')):
            return f"/students/Photos/{f}"
    return "/students/default-avatar.svg"

# Construct 60 students array
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
    
    # Check if there is an existing webp in default case to retain it (optional, but finding downloaded is better)
    # Actually, the user said "they updated their photos... update their photos also... so check every single photos and data"
    # Wait, some people might have .webp from before and they didn't upload new ones.
    if avatarUrl == "/students/default-avatar.svg":
        if os.path.exists(os.path.join(photos_dir, f"{roll}.webp")):
            avatarUrl = f"/students/Photos/{roll}.webp"
            
    isRep = roll in REPS
    
    # Check if data exists
    if not data:
        # Create blank entry
        name = "Unknown"
        hometown = "Unknown"
        highSchool = "Unknown"
        college = "Unknown"
        phone = ""
        facebook = ""
        whatsapp = ""
    else:
        name = data.get('name', 'Unknown')
        # If name is "-", keep it blank
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
        
    # Write dict
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
