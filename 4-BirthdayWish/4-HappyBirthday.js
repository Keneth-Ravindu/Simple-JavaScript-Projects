function displayBirthdaySong() {
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;

            if (!name || !age) {
                alert('Please enter both your name and age.');
                return;
            }

            const song = `
                Happy Birthday to you, <br>
                Happy Birthday to you, <br>
                Happy Birthday dear ${name}, <br>
                You're ${age} years old too!
            `;

            document.getElementById('song').innerHTML = song;
        }