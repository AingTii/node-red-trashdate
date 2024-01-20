# Node Red TrashDate

[![NPM](https://img.shields.io/npm/v/@aingtii/node-red-trashdate)](https://www.npmjs.com/package/@aingtii/node-red-trashdate)
[![NPM_downloads](https://img.shields.io/npm/dm/@aingtii/node-red-trashdate)](https://www.npmjs.com/package/@aingtii/node-red-trashdate)
[![issues](https://img.shields.io/github/issues/mariuslang/@aingtii/node-red-trashdate)](https://github.com/MariusLang/@aingtii/node-red-trashdate/issues)
[![Node.js CI](https://github.com/MariusLang/@aingtii/node-red-trashdate/actions/workflows/test.yml/badge.svg)](https://github.com/MariusLang/@aingtii/node-red-trashdate/actions/workflows/test.yml)


A node that read an CSV File and generate Date, Type and count the days for next and overnext Date of Trash.</p>

1. create an CSV File with two colums</li>
2. Line 1:  col1;col2 </li>
3. next lines:  Date;TrashType
         like: col1;col2
               05.01.2024;Yellow Trash
               12.01.2024;Blue Tras
               19.01.2024;Brown Trash
               and so on (whole Year)

    node properties:
1. CSV File: path of the CSV File (mandatory)
       like: /opt/iobroker/trashcalendar.csv
2. Name: you can set a name of the node (optional)
 
Inputs:

   just inject, with repetition every Day</li>            

Outputs:

         Outout1: Date (col1) of next Trash
         
         Outout2: Type (col2) of the next Trash
         
         Outout3: Days until next Trash
         
         Outout4: Date (col1) of overnext Trash
         
         Outout5: Type (col2) of the overnext Trash
         
         Outout6: Days until overnext Trash   
    



