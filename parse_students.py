import re

with open('updated_students.txt', 'r') as f:
    lines = [line.strip() for line in f.readlines() if line.strip()]

students = {}
current = {}
field_index = 0

# A block starts with a roll number (e.g. 24000...)
for i, line in enumerate(lines):
    if re.match(r'^24000\d{2}$', line):
        if 'id' in current:
            students[current['id']] = current
        current = {'id': line}
        field_index = 1
    else:
        if field_index == 1: current['name'] = line
        elif field_index == 2: current['high_school'] = line
        elif field_index == 3: current['college'] = line
        elif field_index == 4: current['hometown'] = line
        elif field_index == 5: current['phone'] = line
        elif field_index == 6: current['facebook'] = line
        elif field_index == 7: current['whatsapp'] = line
        field_index += 1
if 'id' in current:
    students[current['id']] = current

# Let's generate TS code for 60 students
# Assuming all are non-reps except 2400003 and 2400005 (based on previous knowledge, I should check existing ones)
