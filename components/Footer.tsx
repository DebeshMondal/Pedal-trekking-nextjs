export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white text-center py-4 mt-">
        <p>&copy; {new Date().getFullYear()} Pedal Trekking. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://facebook.com/PedalTrekking" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://youtube.com/PedalTrekking" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </div>
      </footer>
    );
  }
  