        /*---Header---*/
        var navLinks = document.getElementById("navLinks");
            function showMenu(){
                navLinks.style.right = "0";
            }
            function hideMenu(){
                navLinks.style.right = "-200px";
            }
        var textcont = document.getElementById("textbox");
            function showcontent(){
                textcont.style.right = "0";
            }
            function hidecontent(){
                textcont.style.right = "-200px"
            }

            const codeBox = document.getElementById("code");
            const lenght = 12;

            const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const lowerCase = "abcdefghijklmnopqrstuvwxyz";
            const number = "1234567890";
            const symbol = "!@#$%&*";

            const allChars = upperCase + lowerCase + number + symbol;
            /*---Nhận mã---*/
            function createCode(){
                let code = "";
                code += upperCase[Math.floor(Math.random() * upperCase.length)];
                code += lowerCase[Math.floor(Math.random() * lowerCase.length)];
                code += number[Math.floor(Math.random() * number.length)];
                code += symbol[Math.floor(Math.random() * symbol.length)];
                code += upperCase[Math.floor(Math.random() * upperCase.length)];
                code += lowerCase[Math.floor(Math.random() * lowerCase.length)];
                code += number[Math.floor(Math.random() * number.length)];
                code += symbol[Math.floor(Math.random() * symbol.length)];
                
                while(lenght > code.lenght){
                    code += allChars[Math.floor(Math.random() * allChars.length)];
                }
                codeBox.value = code;
            }
            /*---Tạo QR code---*/
        function copyCode(){
            codeBox.select();
            document.execCommand("copy");
        }

        let imgBox = document.getElementById("imgBox");
        let qrImage = document.getElementById("qrImage");
        let qrText = document.getElementById("qrText");


        function generateQR(){
            qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
            imgBox.classList.add("show-ing");
        }