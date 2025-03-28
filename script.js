  document.addEventListener('DOMContentLoaded', function() {
            const nextButton = document.createElement('button');
            nextButton.textContent = 'Next';
            nextButton.classList.add('next-button');
            document.body.appendChild(nextButton);

            nextButton.addEventListener('click', function() {
                window.location.href ='https://www.youtube.com/@sVArts-k9s';
                
            });
            
        });
        document.getElementById('book-now-button').addEventListener('click', function() {
            alert('YOUR TICKETS HAVE BEEN BOOKED!');
          

        });

        const bgmButton = document.createElement('button');
        bgmButton.textContent = 'Play BGM';
        bgmButton.classList.add('bgm-button');
        document.body.appendChild(bgmButton);

        const audio = new Audio('Aaya Re Toofan Chhaava 128 Kbps.mp3');

        bgmButton.addEventListener('click', function() {
            if (audio.paused) {
                audio.play();
                bgmButton.textContent = 'Pause BGM';
            } else {
                audio.pause();
                bgmButton.textContent = 'Play BGM';
            }
        });

        document.getElementById('home-link').addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'nextpage.html';
        });
        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                alert(`You clicked on ${this.textContent}`);
            });
        });
