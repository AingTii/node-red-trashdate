

TrashDate

make a CSV file with Columns
Line 1

col1;col2

Next Lines (example)
05.01.2024;Yellow
12.01.2024;Blue
17.01.2024;Brown

And so on

CSV File  give the path to that CSV File
like /opt/iobroker/trashcalendar.csv

Name you can give a name for the node

Input, just connect inject, with repetition every day

Outputs

1: Date (col1) of next Trash
2: Type (col2) of the next Trash
3: Days until next Trash
4: Date (col1) of overnext Trash
5: Type (col2) of the overnext Trash
6: Days until overnext Trash

