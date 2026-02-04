import { Component, signal } from '@angular/core';

interface Project {
  name: string;
  summary: string;
  details: string;
  stack: string[];
  year: string;
  youtubeUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      name: 'Transfer Function Analyzer (MATLAB GUI)',
      summary: 'Interactive GUI for Bode, root locus, margins, and step response with metrics.',
      details:
        'In this project, a comprehensive Transfer Function Analyzer was developed in MATLAB to provide interactive control system analysis through a graphical user interface. The goal was to allow users to enter any linear time-invariant system in transfer function form and immediately visualize its dynamic behavior through standard control analysis tools.\n\nThe project began with the design of the main GUI window. The interface included labeled input fields for the numerator and denominator coefficients of the transfer function, as well as a frequency range for analysis. Each input was implemented using editable text boxes, allowing users to enter coefficients as vectors and specify a logarithmic frequency span for the analysis.\n\nA central Analyze button was programmed to initiate the system computations. When pressed, the GUI read the user inputs, constructed the corresponding transfer function object, and generated a logarithmically spaced frequency vector based on the specified range. This ensured high-resolution frequency-domain analysis for both low- and high-frequency components.\n\nThe frequency response was then calculated using a custom Bode plot function. For each frequency, the complex transfer function was evaluated, and magnitude and phase were extracted. Separate figures were generated for magnitude and phase, plotted on a logarithmic frequency axis, providing an intuitive visualization of system behavior.\n\nIn addition to the custom Bode plot, the analyzer produced classical control system visualizations including gain and phase margin plots and the root locus. These plots were created using MATLAB’s built-in functions and provided immediate insight into system stability and dynamic performance.\n\nTo complement the frequency-domain analysis, time-domain characteristics were also computed. The step response of the system was plotted, and key metrics such as rise time, settling time, overshoot, peak time, and peak value were calculated using MATLAB’s stepinfo function. A dedicated system information window displayed the poles, zeros, and all computed time-domain metrics in a readable format.\n\nThe final result was a fully functional interactive GUI that allowed users to explore both the frequency and time responses of arbitrary transfer functions. The system provided immediate visual and numerical feedback, enabling detailed analysis of stability, performance, and dynamic characteristics for control system design and verification.',
      stack: ['MATLAB', 'Control Systems', 'GUI'],
      year: '2025',
      youtubeUrl: 'https://youtu.be/ZmdXEDvk4cM',
    },
    {
      name: 'MSP430FR2355 Keypad-Controlled Motor Speed System',
      summary:
        'Keypad input drives PWM motor control with live LCD feedback using I2C and Timer B.',
      details:
        'In this project, a complete motor control system was designed using the MSP430FR2355 microcontroller, a matrix keypad, an I2C LCD, and a PWM-driven DC motor. The objective was to allow a user to input a desired motor speed as a percentage using the keypad, display the selected value on the LCD, and adjust the motor speed in real time.\n\nThe system began with the keypad configuration, where the columns and rows were connected to GPIO pins on port P3. The keypad was scanned by driving the column lines and reading the row inputs to detect key presses. Each detected key was decoded into its corresponding numerical value. To prevent false readings, the scan routine was structured to ensure only one key was registered at a time.\n\nOnce a number was entered, the value was processed and displayed on an I2C LCD connected through a PCF8574 interface. The LCD communication was handled using a custom I2C library, allowing formatted strings to be sent and updated dynamically as the user entered new values.\n\nThe entered speed percentage was then mapped to a PWM duty cycle using Timer B. The PWM signal was output on P6.1, while additional GPIO pins controlled the motor direction. The duty cycle was updated immediately after each valid input, allowing smooth and responsive speed changes.\n\nAfter integration, the system was tested by entering various speed values from 0 to 100 percent. The motor responded accurately, and the LCD continuously reflected the current speed setting. The final system demonstrated successful coordination between user input, display output, and real-time motor control.',
      stack: ['MSP430FR2355', 'C', 'I2C LCD', 'PWM'],
      year: '2025',
      youtubeUrl: 'https://youtu.be/-xTgRSZxbng',
    },
    {
      name: 'VHDL Elevator Controller',
      summary:
        'FSM-based elevator logic with synchronized door control and floor request handling.',
      details:
        'In this project, a digital elevator controller was designed and implemented using VHDL. The goal was to simulate the operation of a multi-floor elevator system using synchronous digital logic.\n\nThe design was based on a finite state machine that controlled elevator movement, door operation, and floor selection. Inputs represented floor requests and control signals, while outputs controlled motor direction and door states.\n\nEach state of the FSM corresponded to a specific elevator condition, such as idle, moving up, moving down, door opening, and door closing. State transitions were determined by the current floor, requested floor, and completion of movement or timing conditions.\n\nClocked processes were used to ensure predictable and synchronized behavior. The design was tested using simulation waveforms to verify correct state transitions and output signals.\n\nThe final result was a fully functional elevator controller that responded correctly to floor requests and followed safe, orderly operation.',
      stack: ['VHDL', 'FSM', 'Simulation'],
      year: '2025',
      youtubeUrl: 'https://youtu.be/aDzDwZTU0n8',
    },
    {
      name: 'VHDL Traffic Light Controller',
      summary: 'Timed red/yellow/green sequencing with clock division and safe state transitions.',
      details:
        'In this project, I designed a traffic light controller using VHDL, but instead of using a finite state machine, I built and used a custom 8-bit computer to run the traffic logic. The main idea was to control the traffic lights the same way a small microcontroller would, by executing instructions stored in memory rather than hardcoding the behavior into states.\n\nI started by designing the full 8-bit CPU architecture. This included the program counter, registers, ALU, control unit, and the interface to memory and I/O. Once the CPU was working, I created a synchronous ROM to store the program that controls the traffic lights. The CPU continuously fetches instructions from this ROM and executes them one by one.\n\nThe traffic light behavior itself is written as a program inside the ROM. I used custom instructions like load immediate, store to output, decrement, and conditional branches. Each traffic phase is created by loading a specific bit pattern into an output port that represents the traffic and pedestrian lights. Timing is handled using loop counters in registers, so each light stays on for a defined amount of time before moving to the next phase.\n\nInstead of changing states like in an FSM, the CPU uses branch instructions to repeat loops and jump to different sections of the program. This allowed me to create sequences for all-red, green, and yellow phases for both traffic directions, along with pedestrian signals. At the end of the program, the CPU branches back to the beginning and repeats the full cycle continuously.\n\nI tested the entire system in simulation to make sure the CPU was fetching instructions correctly, the counters were working as expected, and the correct light outputs were being generated. The waveforms confirmed that the instruction flow, memory access, and output signals all behaved correctly.\n\nThe final result was a fully working traffic light controller driven entirely by a program running on a custom-built 8-bit CPU. This project shows a different approach compared to my elevator controller, where I used an FSM, and it helped me understand how control systems can be implemented at a much lower level using processor architecture and memory instead of state machines.',
      stack: ['VHDL', 'Computer', 'Simulation'],
      year: '2025',
      youtubeUrl: 'https://youtu.be/XpXEdPJ4w0s',
    },
    {
      name: 'ROS2 6-DOF Robotic Arm Visualization and Control',
      summary:
        'URDF + RViz visualization with mesh integration and joint state validation on Raspberry Pi.',
      details:
        'In this project, a six-degree-of-freedom robotic arm system was developed and visualized using ROS2 running on a Raspberry Pi 5 with Ubuntu 24.04. The objective was to create an accurate digital representation of the robot and verify its kinematic behavior using RViz.\n\nThe project began with the mechanical design of the robot in Fusion 360. Each link and joint of the 6-DOF arm was modeled with correct dimensions and joint locations. Once the design was completed, the individual parts were exported as mesh files and prepared for use in ROS2.\n\nA ROS2 workspace was then created on the Raspberry Pi 5, and a URDF model of the robot was built to define the kinematic structure. The exported meshes from Fusion 360 were imported into the workspace and referenced within the URDF to represent the visual and collision geometry of each link. Joint types, axes of rotation, and link relationships were defined to match the physical design of the robot.\n\nWith the robot description in place, the system was launched in RViz. The robot state publisher and joint state publisher were configured to broadcast joint positions, allowing the arm to be manipulated interactively. As each joint was adjusted, the corresponding motion was observed in RViz to confirm correct joint orientation, limits, and link alignment.\n\nAfter validation, the full kinematic chain was tested by moving the arm through a range of configurations. The visualization confirmed that the imported meshes aligned correctly, the joints behaved as expected, and the robot maintained a consistent and realistic posture throughout its motion.\n\nThe final result was a fully functional ROS2-based visualization of a 6-DOF robotic arm, accurately reflecting the Fusion 360 design and providing a foundation for future motion planning and control development.',
      stack: ['ROS2', 'URDF', 'RViz', 'Raspberry Pi'],
      year: '2025',
      youtubeUrl: 'https://youtu.be/KrxamBPnLsY',
    },
    {
      name: 'Dual IRB-1090 Robot Cell Design in RobotStudio',
      summary:
        'Coordinated dual-robot workcell with RAPID synchronization and collision-safe paths.',
      details:
        'In this project, a collaborative robotic cell was designed using RobotStudio, featuring two ABB IRB-1090 industrial robots working simultaneously on separate work objects. The goal was to model, program, and synchronize both robots within a shared work environment.\n\nThe work objects were created and prepared before programming the robot motions. One object was a seven-faced pyramid that was designed directly in RobotStudio, while the second object was a star-shaped geometry imported from an external CAD model. Each object was positioned relative to the conveyor and robot bases to ensure proper reach and clearance.\n\nEach IRB-1090 robot was then assigned a specific tool based on its task. One robot was equipped with a pen-style tool used to trace the perimeter of the star-shaped object, while the second robot was equipped with a soldering-style tool used to trace the edges of the seven-faced pyramid. Tool data, work object frames, and reference positions were carefully defined to maintain accuracy during motion.\n\nTargets were manually taught along each edge of the work objects. For the star-shaped geometry, targets were placed sequentially along the perimeter so the robot could follow each edge continuously. For the pyramid, targets were created along the edges connecting the base to the top vertex, allowing the robot to follow an up-and-down motion pattern around all seven faces. Orientation adjustments were made at each target to ensure correct tool alignment and to avoid collisions.\n\nOnce all targets were defined, paths were tested using the Move Along Path function to verify smooth motion and correct spacing. The complete cell setup, including the conveyor, robot stands, safety fences, and access doors, was assembled and connected within RobotStudio. Each robot was linked to its own OmniCore E10 controller and FlexPendant.\n\nAfter validation, the programs were synchronized using RAPID so both robots could operate together within the same cycle. The system was tested repeatedly to confirm stable operation, proper coordination, and collision-free motion. The final system demonstrated a fully integrated dual-robot cell capable of executing coordinated tasks in a shared workspace.',
      stack: ['RobotStudio', 'RAPID', 'IRB-1090'],
      year: '20202524',
      youtubeUrl: 'https://youtu.be/b5CZSIe5CRg',
    },
    {
      name: 'Block Stacking and Transfer Routine (ABB IRB-1090, RAPID)',
      summary:
        'Multi-step pick/stack sequence with taught targets, safe heights, and repeatable motion.',
      details:
        'In this project, a multi-step block handling routine was developed for an ABB IRB-1090 industrial robot using RAPID. The goal was to pick multiple blocks stacked at a source location, transfer them to a designated placement area while maintaining stack order, and then return the robot to its home position. This task demonstrated precise pick-and-place control, coordinated motion, and repeatable handling of multiple objects in a single cycle.\n\nThe project began with position teaching, where key points were defined for pick locations, safe approach heights, placement locations, and intermediate waypoints. Each target was carefully verified to ensure collision-free motion and proper clearance between the robot, the gripper, and the stacked blocks. Tool and work object frames were configured to align the robot’s end effector correctly during all linear and joint moves.\n\nThe program was structured as a sequential routine for handling three blocks. For each block, the robot first moved to a safe approach height above the source stack, then executed a linear descent to grip the block. A dwell time was included to ensure reliable gripper actuation before retracting to the safe height. The robot then navigated via a series of joint moves and intermediate waypoints to the destination stack, maintaining the correct orientation and avoiding potential obstacles.\n\nAt the placement location, the robot performed a controlled descent to release the block, followed by a retract motion to the safe height. The routine repeated this process for each block, sequentially stacking them at the new location while preserving the original order. After completing the full cycle, the robot returned to its home position and waited before the next iteration, allowing observation and verification of the stacking process.\n\nBefore deployment on the real robot, the program was tested in simulation to ensure safety and collision-free motion. Each sequence, including approach, pick, transit, and placement, was verified and adjusted as needed for timing, speeds, and orientation. Once validated, the routine was loaded onto the ABB IRB-1090 controller and executed successfully, demonstrating precise, repeatable handling of multiple stacked blocks and robust end-to-end automation.',
      stack: ['ABB RAPID', 'IRB-1090', 'Robotics'],
      year: '2025',
      youtubeUrl: 'https://youtu.be/DgAkYyBmo0s',
    },
    {
      name: 'Pick-and-Place Robot Program (OMRON QUATTRO HS650, ACE 4.7)',
      summary:
        'Continuous pick-and-place loop with safe approach, MOVEC obstacle avoidance, and IO control.',
      details:
        'In this project, a fully automated continuous pick-and-place routine was developed and implemented for an OMRON QUATTRO HS650 delta robot using ACE 4.7. The goal was to perform repeated part transfers between multiple pick and place locations, with safe approach and depart motions, obstacle avoidance, and dwell times to ensure precise and reliable operation.\n\nThe project began in emulation mode, where the robot’s workspace, gripper, and reference frames were configured. Key positions, including pick points, safe approach heights, placement points, and obstacle centers, were manually taught using the ACE interface. Each target was carefully verified to maintain proper clearance and alignment, particularly for arc moves around obstacles.\n\nOnce the positions were defined, the main program was structured into a continuous loop. Motion commands included linear moves to safe approach heights, direct vertical moves to pick or place surfaces, and circular interpolations (MOVEC) to navigate around obstacles. One-second dwell times were added at critical points to simulate process timing and ensure secure gripper actuation.\n\nGripper control was integrated into the motion sequence, with digital outputs toggled to close on pickup and open on release. Depart motions were programmed after each pick or place action to retract the tool safely before performing arc moves to the next target.\n\nThe program was first tested in simulation to verify safety and collision-free operation. Each motion sequence, including the arc paths around obstacles, was observed to ensure proper execution. Adjustments to speeds, dwell times, and approach vectors were made to optimize efficiency while maintaining safe operation.\n\nAfter successful simulation validation, the program was transferred to the real robot controller. The HS650 delta robot executed the pick-and-place loop continuously, performing repeated transfers with consistent timing, smooth obstacle avoidance, and precise gripper actuation. The final system demonstrated reliable endurance operation and accurate part handling, providing a robust solution for automated material handling and obstacle-avoidance verification.',
      stack: ['ACE 4.7', 'OMRON HS650', 'Robotics'],
      year: '2025',
      youtubeUrl: 'https://youtu.be/1ztXoZ-iwuE',
    },
    {
      name: 'Automated Continuous Pick-and-Place Routine (Epson T3-401s SCARA, RC+ 7.5)',
      summary: '',
      details:
        'This project involved the development of a fully automated continuous pick-and-place routine for an Epson T3-401s SCARA robot using the Epson RC+ 7.5 programming environment. The system was designed to perform repeated part transfers between multiple pick and placement locations with consistent timing, safe motion paths, and reliable gripper operation. All critical positions—including pick points, place points, and elevated high-approach positions—were manually taught and verified to ensure proper alignment, vertical clearance, and collision-free motion. The program was structured as a continuous loop, using controlled approach, pick, transfer, and retract motions to maintain smooth and predictable operation. Gripper control was integrated into the motion sequence through digital outputs, with dwell times included at each pick and place to ensure secure gripping and reliable release. The routine was first validated in RC+ simulation mode, where real-time motion and clearance were verified, and then successfully deployed to the physical robot. The system demonstrated stable, repeatable performance over extended operating cycles.',
      stack: ['Robotics', 'Epson RC+', 'SCARA'],
      year: '2026',
      youtubeUrl: 'https://youtu.be/qjecIE8D5fU',
    },
  ];

  readonly activeProject = signal(this.projects[0]);

  setActive(project: Project) {
    this.activeProject.set(project);
  }
}
