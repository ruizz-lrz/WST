import React from 'react';

function About() {
  return (
      <main>
      <div>
    <h1>Basic Information</h1>
    <section class="basic-info">
        <p><strong>Name:</strong> Diannel Joy Cabanilla</p>
        <p><strong>Age:</strong> 19 years old</p>
        <p><strong>Birthday:</strong> November 27, 2025</p>
        <p><strong>Address:</strong> Brgy. Canitoan, Cagayan de Oro City</p>
        <p><strong>Zodiac Sign:</strong> Sagittarius</p>
    </section>
    
    <section class="gallery">
            <h2>My Gallery</h2>
            <div class="gallery-images">
                <div class="gallery-item">
                    <img src="images/family.jpg" alt="Family Photo 1"></img>
                    <p>MY FAMILY</p>
                </div>
                <div class="gallery-item">
                    <img src="images/friends.jpg" alt="Friends Photo 1"></img>
                    <p>MY COLLEGE BUDDIES</p>
                </div>
                <div class="gallery-item">
                    <img src="images/YOUTH.png" alt="Friends Photo 1"></img>
                    <p>MY COLLEGE BUDDIES</p>
                </div>
                <div class="gallery-item">
                    <img src="images/claveria.png" alt="Life Photo 2 "></img>
                    <p>NATURE TRIP</p>
                </div>
                <div class="gallery-item">
                    <img src="images/flower.jpg" alt="Life Photo 3"></img>
                    <p>MY CRAFTED FLOWERS</p>
                </div>
            </div>
        </section>

        <section class="favorites">
            <h2>My Favorites</h2>
            <p>Little things that make me happy.</p>
            <ul>
                <li>Gummy candies and Chocolates</li>
                <li>I love eating ice cream with chips</li>
                <li>Nature trip</li>
                <li>Korean foods</li>
            </ul>
        </section>

        <section class="skills">
            <h2>My Skills</h2>
            <p>I do believe that i have these two.</p>
            <ul>
                <li>Hardworking</li>
                <li>Fast learner</li>
            </ul>
        </section>

        <section class="hobbies">
            <h2>My Hobbies</h2>
            <p>I do this every time I get bored.</p>
            <ul>
                <li>Dancing</li>
                <li>Singing</li>
                <li>Watching K-Drama</li>
                <li>Practicing Coding</li>
                <li>TikTok</li>
            </ul>
        </section>

        <section class="goals">
            <h2>My Goals</h2>
            <p>Try and try until I succed.</p>
            <ol>
                <li>To finish my college with my IT course.</li>
                <li>To study nursing.</li>
                <li>To travel to my dream country.</li>
                <li>To get financial freedom.</li>
                <li>To have a stable job.</li>
                <li>To buy my own house.</li>
                <li>To help my family.</li>
                <li>To be genuinely happy.</li>
            </ol>
        </section>

        <h3>Thank you for spending your time reading about me. God Bless!!</h3>
        <footer>
        <p>&copy;Copyright All Rights Reserved 2025 by Diannel Cabanilla</p>
    </footer>

  
    </div>
    </main>
  );
}

export default About;