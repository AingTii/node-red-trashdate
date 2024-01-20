# Node Red TrashDate

[![NPM](https://img.shields.io/npm/v/@aingtii/node-red-trashdate)](https://www.npmjs.com/package/@aingtii/node-red-trashdate)
[![NPM_downloads](https://img.shields.io/npm/dm/@aingtii/node-red-trashdate)](https://www.npmjs.com/package/@aingtii/node-red-trashdate)
[![issues](https://img.shields.io/github/issues/aingtii/node-red-trashdate)](https://github.com/aingtiig/node-red-trashdate/issues)

[![NPM](https://nodei.co/npm/@aingtii/node-red-trashdate.png?compact=true)](https://nodei.co/npm/@aingtii/node-red-trashdate/)

## Installation
```
npm install @aingtii/node-red-trashdate
```

## Node Description
A node that read an CSV File and generate Date, Type and count the days for next and overnext Date of Trash.</p>

### Settings
1. create an CSV File with two colums
2. Line 1:  col1;col2
3. next lines:  Date;TrashType

|Example                         |
|--------------------------------|
|col1;col2                       |
|05.01.2024;Yellow Bag           |
|12.01.2024;Blue Trash           |
|19.01.2024;Brown Trash          |
|...;... and so on (whole year)  |
|                                |


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
    



