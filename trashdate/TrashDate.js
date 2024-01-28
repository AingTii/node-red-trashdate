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
            // Hier Code einfÃ¼gen Anfang

            // Datum der zukÃ¼nftigen 15 Tage speichern
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


            // Bereitstellung und Ausgabe der nÃ¤chsten MÃ¼lltage 
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
                        if (config.day0 === "") {
                            var msg3 = { "payload": "Heute" };
                        } else {
                            var msg3 = { "payload": config.day0 };
                        }
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day1")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        if (config.day1 === "") {
                            var msg3 = { "payload": "Morgen" };
                        } else {
                            var msg3 = { "payload": config.day1 };
                        }                        
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day2")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        if (config.day2 === "") {
                            var msg3 = { "payload": "\u00DCbermorgen" };
                        } else {
                            var msg3 = { "payload": config.day2 };
                        }
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day3")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        if (config.day3 === "") {
                            var msg3 = { "payload": "in 3 Tagen" };
                        } else {
                            var msg3 = { "payload": config.day3 };
                        }
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day4")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        if (config.day4 === "") {
                            var msg3 = { "payload": "in 4 Tagen" };
                        } else {
                            var msg3 = { "payload": config.day4 };
                        }
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day5")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        if (config.day5 === "") {
                            var msg3 = { "payload": "in 5 Tagen" };
                        } else {
                            var msg3 = { "payload": config.day5 };
                        }
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day6")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        if (config.day6 === "") {
                            var msg3 = { "payload": "in 6 Tagen" };
                        } else {
                            var msg3 = { "payload": config.day6 };
                        }
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day7")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        if (config.day7 === "") {
                            var msg3 = { "payload": "in 7 Tagen" };
                        } else {
                            var msg3 = { "payload": config.day7 };
                        }
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day8")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        if (config.day8 === "") {
                            var msg3 = { "payload": "in 8 Tagen" };
                        } else {
                            var msg3 = { "payload": config.day8 };
                        }
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day9")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        if (config.day9 === "") {
                            var msg3 = { "payload": "in 9 Tagen" };
                        } else {
                            var msg3 = { "payload": config.day9 };
                        }
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day10")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        if (config.day10 === "") {
                            var msg3 = { "payload": "in 10 Tagen" };
                        } else {
                            var msg3 = { "payload": config.day10 };
                        }
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day11")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        if (config.day11 === "") {
                            var msg3 = { "payload": "in 11 Tagen" };
                        } else {
                            var msg3 = { "payload": config.day11 };
                        }
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day12")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        if (config.day12 === "") {
                            var msg3 = { "payload": "in 12 Tagen" };
                        } else {
                            var msg3 = { "payload": config.day12 };
                        }
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day13")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        if (config.day13 === "") {
                            var msg3 = { "payload": "in 13 Tagen" };
                        } else {
                            var msg3 = { "payload": config.day13 };
                        }
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day14")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        if (config.day14 === "") {
                            var msg3 = { "payload": "in 14 Tagen" };
                        } else {
                            var msg3 = { "payload": config.day14 };
                        }
                        Anzahl = 1;
                        i++;
                    }
                    else if (msg.payload[i].col1 === context.get("day15")) {
                        var msg1 = { "payload": msg.payload[i].col1 };
                        var msg2 = { "payload": msg.payload[i].col2 };
                        if (config.day15 === "") {
                            var msg3 = { "payload": "in 15 Tagen" };
                        } else {
                            var msg3 = { "payload": config.day15 };
                        }
                        Anzahl = 1;
                        i++;
                    }
                }
                if (Anzahl === 1) {
                    if (msg.payload[i].col1 === context.get("day0")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        if (config.day0 === "") {
                            var msg6 = { "payload": "Heute" };
                        } else {
                            var msg6 = { "payload": config.day0 };
                        }
                        i = lang;
                        Anzahl = 0;
                    }
                    if (msg.payload[i].col1 === context.get("day1")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        if (config.day1 === "") {
                            var msg6 = { "payload": "Morgen" };
                        } else {
                            var msg6 = { "payload": config.day1 };
                        }
                        i = lang;
                        Anzahl = 0;
                    }
                    if (msg.payload[i].col1 === context.get("day2")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        if (config.day2 === "") {
                            var msg6 = { "payload": "\u00DCbermorgen" };
                        } else {
                            var msg6 = { "payload": config.day2 };
                        }
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day3")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        if (config.day3 === "") {
                            var msg6 = { "payload": "in 3 Tagen" };
                        } else {
                            var msg6 = { "payload": config.day3 };
                        }
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day4")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        if (config.day4 === "") {
                            var msg6 = { "payload": "in 4 Tagen" };
                        } else {
                            var msg6 = { "payload": config.day4 };
                        }
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day5")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        if (config.day5 === "") {
                            var msg6 = { "payload": "in 5 Tagen" };
                        } else {
                            var msg6 = { "payload": config.day5 };
                        }
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day6")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        if (config.day6 === "") {
                            var msg6 = { "payload": "in 6 Tagen" };
                        } else {
                            var msg6 = { "payload": config.day6 };
                        }
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day7")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        if (config.day7 === "") {
                            var msg6 = { "payload": "in 7 Tagen" };
                        } else {
                            var msg6 = { "payload": config.day7 };
                        }
                        i = lang;
                    }
                    else if (msg.payload[i].col1 === context.get("day8")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        if (config.day8 === "") {
                            var msg6 = { "payload": "in 8 Tagen" };
                        } else {
                            var msg6 = { "payload": config.day8 };
                        }
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day9")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        if (config.day9 === "") {
                            var msg6 = { "payload": "in 9 Tagen" };
                        } else {
                            var msg6 = { "payload": config.day9 };
                        }
                        i = lang;
                    }
                    else if (msg.payload[i].col1 === context.get("day10")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        if (config.day10 === "") {
                            var msg6 = { "payload": "in 10 Tagen" };
                        } else {
                            var msg6 = { "payload": config.day10 };
                        }
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day11")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        if (config.day11 === "") {
                            var msg6 = { "payload": "in 11 Tagen" };
                        } else {
                            var msg6 = { "payload": config.day11 };
                        }
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day12")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        if (config.day12 === "") {
                            var msg6 = { "payload": "in 12 Tagen" };
                        } else {
                            var msg6 = { "payload": config.day12 };
                        }
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day13")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        if (config.day13 === "") {
                            var msg6 = { "payload": "in 13 Tagen" };
                        } else {
                            var msg6 = { "payload": config.day13 };
                        }
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day14")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        if (config.day14 === "") {
                            var msg6 = { "payload": "in 14 Tagen" };
                        } else {
                            var msg6 = { "payload": config.day14 };
                        }
                        i = lang;
                        Anzahl = 0;
                    }
                    else if (msg.payload[i].col1 === context.get("day15")) {
                        var msg4 = { "payload": msg.payload[i].col1 };
                        var msg5 = { "payload": msg.payload[i].col2 };
                        if (config.day15 === "") {
                            var msg6 = { "payload": "in 15 Tagen" };
                        } else {
                            var msg6 = { "payload": config.day15 };
                        }
                        i = lang;
                        Anzahl = 0;
                    }
                }

            }
            if (msg3.payload === "Heute") {
                if (config.heute === "") {
                    var msg7 = { "payload": "Heute" };
                } else {
                    var msg7 = { "payload": config.heute };
                }

            }
            else if (msg3.payload === "Morgen") {
                if (config.morgen === "") {
                    var msg7 = { "payload": "Morgen" };
                } else {
                    var msg7 = { "payload": config.morgen };
                }
            }
            else {
                if (config.weitere === "") {
                    var msg7 = { "payload": "LEER" };
                } else {
                    var msg7 = { "payload": config.weitere };
                }
            }
            node.send([msg1, msg2, msg3, msg4, msg5, msg6, msg7]);

            // Hier Code einfÃ¼gen Ende
        });
    }

    RED.nodes.registerType("TrashDate", trashDate);

};

