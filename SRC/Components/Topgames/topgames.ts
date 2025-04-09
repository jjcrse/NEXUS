interface Game {
    title: string;
    imageUrl: string;
  }
  
  const games: Game[] = [
    {
      title: "Five Nights at Freddy's: Security Breach",
      imageUrl: 'images/fnaf.png',
    },
    {
      title: 'Call of Duty',
      imageUrl: 'images/cod.png',
    },
    {
      title: 'Gamer with Controller',
      imageUrl: 'images/controller.png',
    },
    {
      title: 'Halo',
      imageUrl: 'images/halo.png',
    },
  ];
  
  class TopGames extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Estilos
      const style = document.createElement('style');
      style.textContent = `
        :host {
          display: block;
          background-color: #1e3a8a;
          color: white;
          padding: 40px 20px;
          font-family: sans-serif;
        }
  
        .title {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 10px;
        }
  
        .subtitle {
          font-size: 14px;
          opacity: 0.8;
          margin-bottom: 30px;
        }
  
        .games-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
        }
  
        .game-card {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }
  
        .game-card:hover {
          transform: scale(1.05);
        }
  
        .game-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `;
  
      
      const container = document.createElement('section');
  
      const title = document.createElement('h1');
      title.className = 'title';
      title.textContent = 'top games';
  
      const subtitle = document.createElement('p');
      subtitle.className = 'subtitle';
      subtitle.textContent = 'Here you will find a list of games which may be to your liking';
  
      const grid = document.createElement('div');
      grid.className = 'games-grid';
  
      games.forEach((game) => {
        const card = document.createElement('div');
        card.className = 'game-card';
  
        const img = document.createElement('img');
        img.src = game.imageUrl;
        img.alt = game.title;
  
        card.appendChild(img);
        grid.appendChild(card);
      });
  
      container.appendChild(title);
      container.appendChild(subtitle);
      container.appendChild(grid);
  
      shadow.appendChild(style);
      shadow.appendChild(container);
    }
  }
  
  
  customElements.define('top-games', TopGames);
  