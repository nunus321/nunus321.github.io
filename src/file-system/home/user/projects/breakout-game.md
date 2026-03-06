



## *Breakout Game*
## 2024

### • C#, Game Dev,
### • NUnit testing, Parsing
This project is a modern Breakout-style arcade game written in C#,
produced as the capstone for my Software Development course at the University of Copenhagen. 

Here is a description of the program:
Its architecture follows SOLID principles, using a singleton event-bus mediator and a dedicated state machine 
to keep menus, pause, and gameplay modules cleanly separated. 
Levels load from simple text files that our custom parser converts on the fly,
letting anyone design stages of up to 288 blocks without touching the code. 
Special blocks can drop random power-ups or hazards, adding an extra layer of strategy and replay value. 
The codebase is fully unit-tested with NUnit and extensively play-tested for reliability; 
watch the gameplay video and explore the open-source repository on GitHub. Below is a video of my developed game.