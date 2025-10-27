// Images used in this component are sourced from https://mythjourneys.com/gallery/dungeons-and-dragons/free-dnd-character-art/

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>RPG Character Creator</h1>
      <h2>
      Build and Manage Your RPG Characters with Ease
      </h2>
      <p>
      Welcome to the RPG Character Creator! Your one-stop shop for building and managing your RPG characters with ease.
      </p>
      <p>
      Whether you're a seasoned adventurer or just starting your journey, our intuitive tools and features will help you create detailed characters that bring your stories to life.
      </p>
      <p>
      Dive into a world of endless possibilities and let your imagination run wild. Create, customize, and manage your RPG characters all in one place. Your adventure begins here!
      </p>

      <div class="highlights-container">
        <div class="highlight">
          <img src="/assets/Barbarian.png" alt="image of a warrior character"
          />
        <p>
        Meet the fearless Warrior, a stalwart defender of justice and protector of the realm. Clad in gleaming armor and wielding a mighty sword, the Warrior stands ready to face any challenge that comes their way. With unmatched strength and unwavering courage, they are the backbone of any adventuring party, leading the charge into battle and inspiring allies with their valor.
        </p>
      </div>

      <div class="highlight">
        <img src="/assets/Mage.png" alt="image of a mage character"
      />
        <p>
        Behold the enigmatic Mage, a master of arcane arts and wielder of mystical powers. Draped in flowing robes and adorned with ancient symbols, the Mage commands the forces of magic to bend reality to their will. With a vast knowledge of spells and incantations, they can conjure fireballs, summon protective barriers, and manipulate the elements to turn the tide of battle.
        </p>
      </div>

      <div class="highlight">
        <img src="/assets/Rogue.png" alt="image of a rogue character"
        />
        <p>
        Enter the shadowy world of the Rogue, a cunning and agile adventurer who thrives in the art of stealth and deception. Clad in dark attire and equipped with an array of hidden tools, the Rogue moves silently through the shadows, striking with precision and disappearing before the enemy can react. Masters of infiltration and sabotage, Rogues excel at gathering intelligence, disarming traps, and delivering devastating sneak attacks that leave foes bewildered and defeated.
        </p>
      </div>
    </div>

  `,
  styles: [`
    .highlights-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
    }

    .highlight {
    text-align: center;
    flex: 0 1 calc(33.333% - 20px);
    box-sizing: border-box;
    }

    .highlight img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    }

    .highlight p {
    margin-top: 10px;
    }
    `
  ]
})
export class HomeComponent {

}
