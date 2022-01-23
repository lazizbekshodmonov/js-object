let peoplesTeam;
        peoplesTeam = {
            "Lazizbek": {
                "ismi": "Lazizbek",
                "familiyasi": "Shodmonov",
                "kasbi": `Talaba`,
                "yoshi": 21
            },
            "Javohir": {
                "ismi": "Javohir",
                "familiyasi": "Hamroqulov",
                "kasbi": `Haydovchi`,
                "yoshi": 35
            },
            "Hasan": {
                "ismi": "Hasan",
                "familiyasi": "Olimov",
                "kasbi": `Tadbirkor`,
                "yoshi": 42
            },
            "Otabek": {
                "ismi": "Otabek",
                "familiyasi": "Yusupov",
                "kasbi": "O'qituvchi",
                "yoshi": 28
            },
            "Samandar": {
                "ismi": "Samandar",
                "familiyasi": "Hoshimov",
                "kasbi": "Huquqshunos",
                "yoshi": 25
            },
        };

let personName;
        personName = prompt(`Ism kiriting?`);

               if (personName === "Lazizbek"){
            console.log(peoplesTeam.Lazizbek);
        } else if (personName === "Javohir"){
            console.log(peoplesTeam.Javohir);
        } else if (personName === "Hasan"){
            console.log(peoplesTeam.Hasan);
        } else if (personName === "Otabek"){
            console.log(peoplesTeam.Otabek);
        } else if (personName === "Samandar"){
            console.log(peoplesTeam.Samandar);
        } else {
                   console.log("Bunday ism mavjud emas!");
               }





