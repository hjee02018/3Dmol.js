import os

# 주어진 HTML 파일을 열어서 내용을 읽어옵니다.
with open('index.html', 'r') as file:
    html_content = file.read()

# pdb 파일이 저장된 디렉토리 경로를 지정합니다.
pdb_directory = 'pdbs/'

# pdb 파일 목록을 가져옵니다.
pdb_files = os.listdir(pdb_directory)

# 각 pdb 파일에 대해 HTML 파일을 생성합니다.
for pdb_file in pdb_files:
    # pdb 파일의 경로를 생성합니다.
    pdb_path = os.path.join(pdb_directory, pdb_file)

    # pdb 파일명을 추출합니다. 예: 9LPR_A.pdb -> 9LPR_A
    pdb_name = os.path.splitext(pdb_file)[0]

    # HTML 파일 내용을 pdb 파일명으로 대체합니다.
    modified_html_content = html_content.replace('pdbs/9LPR_A.pdb', pdb_path)

    # pdb 파일명으로 HTML 파일을 저장합니다.
    output_filename = f'{pdb_name}.html'
    with open(output_filename, 'w') as file:
        file.write(modified_html_content)
