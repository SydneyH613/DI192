// 1 & 2: Define the Video class
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

// 3: Instantiate first Video and call watch()
const video1 = new Video("JavaScript Tutorial", "Alice", 300);
video1.watch();
// Output: Alice watched all 300 seconds of JavaScript Tutorial!

// 4: Instantiate a second Video with different values
const video2 = new Video("CSS Crash Course", "Bob", 450);
video2.watch();
// Output: Bob watched all 450 seconds of CSS Crash Course!

// BONUS 5: Array of objects — best structure to store multi-property video data
const videoData = [
  { title: "React for Beginners",  uploader: "Carol", time: 600  },
  { title: "Node.js Deep Dive",    uploader: "Dave",  time: 720  },
  { title: "Python Basics",        uploader: "Eve",   time: 540  },
  { title: "SQL Fundamentals",     uploader: "Frank", time: 480  },
  { title: "Git & GitHub Guide",   uploader: "Grace", time: 390  },
];

// BONUS 6: Loop through the array to instantiate and call watch() on each
videoData.forEach(data => {
  const video = new Video(data.title, data.uploader, data.time);
  video.watch();
});
```

**Output:**
```
//Alice watched all 300 seconds of JavaScript Tutorial!
//Bob watched all 450 seconds of CSS Crash Course!
//Carol watched all 600 seconds of React for Beginners!
//Dave watched all 720 seconds of Node.js Deep Dive!
//Eve watched all 540 seconds of Python Basics!
//Frank watched all 480 seconds of SQL Fundamentals!
//Grace watched all 390 seconds of Git & GitHub Guide!