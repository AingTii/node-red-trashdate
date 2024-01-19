const fs = require('fs');

module.exports = function (RED) {
    function trashDate(config) {
        RED.nodes.createNode(this, config);

        var context = this.context();

        var csvDataOut = "";
        var jsonDataOut = "";

        var node = this;

        this.on('input', function (msg) {
            const filePath = config.filename || "";

            if (filePath) {
                try {
                    // Datei synchron lesen (kann auch asynchron gemacht werden)
                    const csvData = fs.readFileSync(filePath, 'utf8');
                    csvDataOut = csvData

                } catch (err) {
                    node.error("Fehler beim Lesen der Datei: " + err.message);
                }
            } else {
                node.warn("Kein Dateipfad angegeben.");
            }
            // Hier Code einfügen Anfang

            // Datum der zukünftigen 15 Tage speichern
            var date = [];
            var date1 = [];
            for (var i = 0; i < 16; i++) {
                date[i] = new Date().getTime() + i * 24 * 60 * 60 * 1000;
                date1[i] = new Date(date[i]);
                var d = date1[i].getDate();
                if (d.toString().length == 1) {
                    d = '0' + d;
                }
                var m = date1[i].getMonth() + 1;
                if (m.toString().length == 1) {
                    m = '0' + m;
                }
                var y = date1[i].getFullYear();
                var msgx = { payload: (d + "." + m + "." + y) };
                context.set("day" + i, msgx.payload);
            }


            // Bereitstellung und Ausgabe der nächsten Mülltage 
            var Anzahl = 0;

            // Auf Zeilen aufteilen
            const lines = csvDataOut.split('\n');

            // Objekt erstellen
            const resultObject = lines.map(line => {
                const [col1, col2] = line.split(';').map(item => item.trim());
                return { col1, col2 };
            });


            var msg = { payload: resultObject };
            var lang = msg.payload.length;

            for (var i = 0; i < lang; i++) {
                if (Anzahl === 0) {
                    if (msg.payload[i].col1 === context.get("day0")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        var msg3 = { payload: "Heute" };
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day1")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        var msg3 = { payload: "Morgen" };
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day2")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        var msg3 = { payload: "Übermorgen" };
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day3")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        var msg3 = { payload: "in 3 Tagen" };
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day4")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        var msg3 = { payload: "in 4 Tagen" };
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day5")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        var msg3 = { payload: "in 5 Tagen" };
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day6")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        var msg3 = { payload: "in 6 Tagen" };
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day7")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        var msg3 = { payload: "in 7 Tagen" };
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day8")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        var msg3 = { payload: "in 8 Tagen" };
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day9")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        var msg3 = { payload: "in 9 Tagen" };
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day10")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        var msg3 = { payload: "in 10 Tagen" };
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day11")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        var msg3 = { payload: "in 11 Tagen" };
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day12")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        var msg3 = { payload: "in 12 Tagen" };
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day13")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        var msg3 = { payload: "in 13 Tagen" };
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day14")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        var msg3 = { payload: "in 14 Tagen" };
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day15")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        var msg3 = { payload: "in 15 Tagen" };
                        Anzahl = 1;
                        i++;
                    }
                }
                if (Anzahl === 1) {
                    if (msg.payload[i].col1 === context.get("day0")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        var msg6 = { payload: "in 0 Tagen" };
                        i = lang;
                        Anzahl = 0;
                    }
                    if (msg.payload[i].col1 === context.get("day1")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        var msg6 = { payload: "in 1 Tagen" };
                        i = lang;
                        Anzahl = 0;
                    }
                    if (msg.payload[i].col1 === context.get("day2")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        var msg6 = { payload: "Übermorgen" };
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day3")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        var msg6 = { payload: "in 3 Tagen" };
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day4")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        var msg6 = { payload: "in 4 Tagen" };
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day5")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        var msg6 = { payload: "in 5 Tagen" };
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day6")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        var msg6 = { payload: "in 6 Tagen" };
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day7")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        var msg6 = { payload: "in 7 Tagen" };
                        i = lang;
                    }
                    else if (msg.payload[i].col1 === context.get("day8")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        var msg6 = { payload: "in 8 Tagen" };
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day9")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        var msg6 = { payload: "in 9 Tagen" };
                        i = lang;
                    }
                    else if (msg.payload[i].col1 === context.get("day10")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        var msg6 = { payload: "in 10 Tagen" };
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day11")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        var msg6 = { payload: "in 11 Tagen" };
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day12")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        var msg6 = { payload: "in 12 Tagen" };
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day13")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        var msg6 = { payload: "in 13 Tagen" };
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day14")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        var msg6 = { payload: "in 14 Tagen" };
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day15")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        var msg6 = { payload: "in 15 Tagen" };
                        i = lang;
                        Anzahl = 0;
                    }
                }
            }
            node.send([msg1, msg2, msg3, msg4, msg5, msg6]);

            // Hier Code einfügen Ende
        });
    }

    RED.nodes.registerType("TrashDate", trashDate);

};
