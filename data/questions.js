// CUET PG Operating System Question Bank (210 Questions)
// Auto-generated data bundle for offline browser compatibility
window.CUET_OS_DATA = {
    "version":  "1.0.0",
    "title":  "CUET PG Operating System Question Bank",
    "totalQuestions":  210,
    "sections":  [
                     {
                         "id":  1,
                         "rawHeader":  "SECTION 1: OS Architecture, Dual-Mode, Interrupts \u0026 Structures (Q1 - Q35)",
                         "title":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                         "questionCount":  35
                     },
                     {
                         "id":  2,
                         "rawHeader":  "SECTION 2: Process Management \u0026 CPU Scheduling Numericals (Q36 - Q75)",
                         "title":  "Process Management \u0026 CPU Scheduling Numericals",
                         "questionCount":  40
                     },
                     {
                         "id":  3,
                         "rawHeader":  "SECTION 3: Process Synchronization, Semaphores \u0026 Threads Numericals (Q76 - Q115)",
                         "title":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                         "questionCount":  40
                     },
                     {
                         "id":  4,
                         "rawHeader":  "SECTION 4: Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation (Q116 - Q150)",
                         "title":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                         "questionCount":  35
                     },
                     {
                         "id":  5,
                         "rawHeader":  "SECTION 5: Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement (Q151 - Q185)",
                         "title":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                         "questionCount":  35
                     },
                     {
                         "id":  6,
                         "rawHeader":  "SECTION 6: Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures (Q186 - Q210)",
                         "title":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                         "questionCount":  25
                     }
                 ],
    "questions":  [
                      {
                          "id":  1,
                          "originalNum":  1,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Consider the following statements regarding Operating System dual-mode operation:\r\nStatement I: The mode bit is set to 0 in User Mode and 1 in Kernel Mode.\r\nStatement II: Executing a privileged instruction in User Mode causes a hardware trap/exception.\r\nWhich of the following is correct?",
                          "rawQuestion":  "Q1. Consider the following statements regarding Operating System dual-mode operation:\r\nStatement I: The mode bit is set to 0 in User Mode and 1 in Kernel Mode.\r\nStatement II: Executing a privileged instruction in User Mode causes a hardware trap/exception.\r\nWhich of the following is correct?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Both Statement I and Statement II are true",
                                              "raw":  "A) Both Statement I and Statement II are true"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Both Statement I and Statement II are false",
                                              "raw":  "B) Both Statement I and Statement II are false"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Statement I is true but Statement II is false",
                                              "raw":  "C) Statement I is true but Statement II is false"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Statement I is false but Statement II is true",
                                              "raw":  "D) Statement I is false but Statement II is true"
                                          }
                                      ],
                          "correctAnswer":  "D",
                          "explanation":  "Mode bit 0 Kernel Mode ko represent karta hai aur 1 User Mode ko. User Mode me privileged instruction run karne par hardware trap raise hota hai."
                      },
                      {
                          "id":  2,
                          "originalNum":  2,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Match List-I with List-II:\r\nList-I (Concept)\r\nP. Spooling\r\nQ. Multiprogramming\r\nR. Time-Sharing\r\nS. Real-Time OS\r\nList-II (Definition)\r\n1. Strict adherence to deadline bounds\r\n2. Overlapping I/O of one job with CPU execution of another via disk buffer\r\n3. Keeping multiple jobs in RAM to maximize CPU utilization\r\n4. Round-Robin CPU allocation with short time slices for interactive users",
                          "rawQuestion":  "Q2. Match List-I with List-II:\r\nList-I (Concept)\r\nP. Spooling\r\nQ. Multiprogramming\r\nR. Time-Sharing\r\nS. Real-Time OS\r\nList-II (Definition)\r\n1. Strict adherence to deadline bounds\r\n2. Overlapping I/O of one job with CPU execution of another via disk buffer\r\n3. Keeping multiple jobs in RAM to maximize CPU utilization\r\n4. Round-Robin CPU allocation with short time slices for interactive users",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "P-2, Q-3, R-4, S-1",
                                              "raw":  "A) P-2, Q-3, R-4, S-1"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "P-3, Q-2, R-1, S-4",
                                              "raw":  "B) P-3, Q-2, R-1, S-4"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "P-2, Q-4, R-3, S-1",
                                              "raw":  "C) P-2, Q-4, R-3, S-1"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "P-4, Q-3, R-2, S-1",
                                              "raw":  "D) P-4, Q-3, R-2, S-1"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Spooling (2) disk buffering se I/O overlap karta hai; Multiprogramming (3) RAM me multiple jobs rakhta hai; Time-sharing (4) short time slice deta hai; RTOS (1) strict deadline check karta hai."
                      },
                      {
                          "id":  3,
                          "originalNum":  3,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Which of the following instructions MUST be executed strictly in Kernel/Privileged Mode?\r\nI. Disabling all hardware interrupts\r\nII. Reading the system clock\r\nIII. Modifying the Memory Management Unit (MMU) Base/Limit registers\r\nIV. Performing floating-point arithmetic",
                          "rawQuestion":  "Q3. Which of the following instructions MUST be executed strictly in Kernel/Privileged Mode?\r\nI. Disabling all hardware interrupts\r\nII. Reading the system clock\r\nIII. Modifying the Memory Management Unit (MMU) Base/Limit registers\r\nIV. Performing floating-point arithmetic",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Only I and II",
                                              "raw":  "A) Only I and II"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Only I and III",
                                              "raw":  "B) Only I and III"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Only II and IV",
                                              "raw":  "C) Only II and IV"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Only I, III, and IV",
                                              "raw":  "D) Only I, III, and IV"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Interrupts disable karna aur MMU registers change karna privileged operations hain jo sirf Kernel Mode me allow hoti hain."
                      },
                      {
                          "id":  4,
                          "originalNum":  4,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "When a user program issues a system call, which sequence of micro-operations occurs?",
                          "rawQuestion":  "Q4. When a user program issues a system call, which sequence of micro-operations occurs?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Execute ISR -\u003e Change mode bit to 1 -\u003e Push parameters -\u003e Trap",
                                              "raw":  "A) Execute ISR -\u003e Change mode bit to 1 -\u003e Push parameters -\u003e Trap"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Set trap flag -\u003e Push parameters -\u003e Execute instruction -\u003e Reset mode bit",
                                              "raw":  "B) Set trap flag -\u003e Push parameters -\u003e Execute instruction -\u003e Reset mode bit"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Push parameters/registers -\u003e Generate Trap/Software Interrupt -\u003e Change mode bit to 0 -\u003e Execute ISR via Interrupt Vector",
                                              "raw":  "C) Push parameters/registers -\u003e Generate Trap/Software Interrupt -\u003e Change mode bit to 0 -\u003e Execute ISR via Interrupt Vector"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Change mode bit to 0 -\u003e Terminate user program -\u003e Reload OS from disk",
                                              "raw":  "D) Change mode bit to 0 -\u003e Terminate user program -\u003e Reload OS from disk"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "System call execution flow: Parameters push -\u003e Software trap -\u003e Mode bit 0 (Kernel) -\u003e ISR execution via Interrupt Vector."
                      },
                      {
                          "id":  5,
                          "originalNum":  5,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Consider a system with single CPU. What is the maximum number of processes that can be in \u0027Running\u0027 state and \u0027Ready\u0027 state simultaneously?",
                          "rawQuestion":  "Q5. Consider a system with single CPU. What is the maximum number of processes that can be in \u0027Running\u0027 state and \u0027Ready\u0027 state simultaneously?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Running: 1, Ready: Unlimited (bounded by RAM)",
                                              "raw":  "A) Running: 1, Ready: Unlimited (bounded by RAM)"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Running: Unlimited, Ready: 1",
                                              "raw":  "B) Running: Unlimited, Ready: 1"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Running: 0, Ready: 0",
                                              "raw":  "C) Running: 0, Ready: 0"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Running: 2, Ready: 2",
                                              "raw":  "D) Running: 2, Ready: 2"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Single CPU system me ek time par at most 1 process Running state me ho sakta hai, jabki Ready state me RAM space ke anusar kitne bhi processes ho sakte hain."
                      },
                      {
                          "id":  6,
                          "originalNum":  6,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Statement I: Microkernel architecture moves non-essential OS services into user space as daemon processes.\r\nStatement II: Microkernels provide higher performance and lower context-switching overhead than Monolithic kernels.\r\nSelect the correct option:",
                          "rawQuestion":  "Q6. Statement I: Microkernel architecture moves non-essential OS services into user space as daemon processes.\r\nStatement II: Microkernels provide higher performance and lower context-switching overhead than Monolithic kernels.\r\nSelect the correct option:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Both Statements are true",
                                              "raw":  "A) Both Statements are true"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Both Statements are false",
                                              "raw":  "B) Both Statements are false"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Statement I is true, Statement II is false",
                                              "raw":  "C) Statement I is true, Statement II is false"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Statement I is false, Statement II is true",
                                              "raw":  "D) Statement I is false, Statement II is true"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "Microkernel non-essential services ko user space me bhejta hai (Statement I True). Lekin IPC messaging overhead ke karan Microkernel ka context-switching overhead Monolithic se ZYADA (slow) hota hai (Statement II False)."
                      },
                      {
                          "id":  7,
                          "originalNum":  7,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Which of the following is TRUE regarding a System Call vs User Function Call?",
                          "rawQuestion":  "Q7. Which of the following is TRUE regarding a System Call vs User Function Call?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Both execute in User Mode",
                                              "raw":  "A) Both execute in User Mode"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "System Call invokes Kernel Mode via software trap; User Function Call executes within same User Address Space",
                                              "raw":  "B) System Call invokes Kernel Mode via software trap; User Function Call executes within same User Address Space"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "User Function Call is slower than System Call",
                                              "raw":  "C) User Function Call is slower than System Call"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "System Call does not use stack",
                                              "raw":  "D) System Call does not use stack"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "System Call trap ke dwara mode switch (User -\u003e Kernel) karta hai, jabki User Function call same user memory stack me execute hota hai."
                      },
                      {
                          "id":  8,
                          "originalNum":  8,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "In an OS, Direct Memory Access (DMA) controller operates in which mode during block data transfer?",
                          "rawQuestion":  "Q8. In an OS, Direct Memory Access (DMA) controller operates in which mode during block data transfer?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Byte Stealing Mode",
                                              "raw":  "A) Byte Stealing Mode"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Cycle Stealing or Burst Mode",
                                              "raw":  "B) Cycle Stealing or Burst Mode"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Interrupt Mode",
                                              "raw":  "C) Interrupt Mode"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Polling Mode",
                                              "raw":  "D) Polling Mode"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "DMA controller Cycle Stealing (interleaved with CPU) ya Burst Mode (taking bus control) me kaam karta hai."
                      },
                      {
                          "id":  9,
                          "originalNum":  9,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "What is the primary difference between a Trap and a Hardware Interrupt?",
                          "rawQuestion":  "Q9. What is the primary difference between a Trap and a Hardware Interrupt?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Trap is asynchronous (external hardware); Interrupt is synchronous (software error)",
                                              "raw":  "A) Trap is asynchronous (external hardware); Interrupt is synchronous (software error)"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Trap is synchronous (generated internally by CPU instruction like divide by zero/system call); Interrupt is asynchronous (generated externally by hardware devices)",
                                              "raw":  "B) Trap is synchronous (generated internally by CPU instruction like divide by zero/system call); Interrupt is asynchronous (generated externally by hardware devices)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Traps cannot be handled by OS",
                                              "raw":  "C) Traps cannot be handled by OS"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Both are identical",
                                              "raw":  "D) Both are identical"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Trap internal CPU execution error/system call se synchronous trigger hota hai; Interrupt external I/O hardware device se asynchronous raise hota hai."
                      },
                      {
                          "id":  10,
                          "originalNum":  10,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Which of the following structures maps interrupt signal numbers to their corresponding kernel handler addresses?",
                          "rawQuestion":  "Q10. Which of the following structures maps interrupt signal numbers to their corresponding kernel handler addresses?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Process Control Block",
                                              "raw":  "A) Process Control Block"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Interrupt Vector Table (IVT)",
                                              "raw":  "B) Interrupt Vector Table (IVT)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Page Table",
                                              "raw":  "C) Page Table"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "File Allocation Table",
                                              "raw":  "D) File Allocation Table"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Interrupt Vector Table (IVT) memory table hai jo interrupt numbers ko unke Interrupt Service Routine (ISR) addresses se map karta hai."
                      },
                      {
                          "id":  11,
                          "originalNum":  11,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Consider a system running 10 user applications simultaneously. How many instances of the OS Kernel reside in main memory?",
                          "rawQuestion":  "Q11. Consider a system running 10 user applications simultaneously. How many instances of the OS Kernel reside in main memory?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "10",
                                              "raw":  "A) 10"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "1",
                                              "raw":  "B) 1"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "0",
                                              "raw":  "C) 0"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Depends on thread count",
                                              "raw":  "D) Depends on thread count"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Main memory me Kernel ki strictly 1 single resident instance rehti hai jo saari 10 applications ko manage karti hai."
                      },
                      {
                          "id":  12,
                          "originalNum":  12,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Which scheduling concept determines the long-term mixture of I/O-bound and CPU-bound jobs loaded in RAM?",
                          "rawQuestion":  "Q12. Which scheduling concept determines the long-term mixture of I/O-bound and CPU-bound jobs loaded in RAM?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Medium-Term Scheduling",
                                              "raw":  "A) Medium-Term Scheduling"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Short-Term Scheduling",
                                              "raw":  "B) Short-Term Scheduling"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Degree of Multiprogramming managed by Long-Term Scheduler",
                                              "raw":  "C) Degree of Multiprogramming managed by Long-Term Scheduler"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Round Robin Quantum",
                                              "raw":  "D) Round Robin Quantum"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "Long-Term Scheduler (LTS) RAM me CPU-bound aur I/O-bound jobs ka balanced mix control karke Degree of Multiprogramming maintain karta hai."
                      },
                      {
                          "id":  13,
                          "originalNum":  13,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "If a process transitions from Running state to Ready state, what type of CPU scheduling is taking place?",
                          "rawQuestion":  "Q13. If a process transitions from Running state to Ready state, what type of CPU scheduling is taking place?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Non-Preemptive Scheduling",
                                              "raw":  "A) Non-Preemptive Scheduling"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Preemptive Scheduling",
                                              "raw":  "B) Preemptive Scheduling"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Cooperative Scheduling",
                                              "raw":  "C) Cooperative Scheduling"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Batch Scheduling",
                                              "raw":  "D) Batch Scheduling"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Running -\u003e Ready transition tabhi hota hai jab OS running process ko forcefully CPU se pre-empt karta hai (Preemptive Scheduling)."
                      },
                      {
                          "id":  14,
                          "originalNum":  14,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Statement I: Program Counter (PC) stores the address of the next instruction to be executed for a process.\r\nStatement II: During Context Switch, the PC of the running process is saved in the CPU\u0027s General Purpose Register.\r\nChoose the correct option:",
                          "rawQuestion":  "Q14. Statement I: Program Counter (PC) stores the address of the next instruction to be executed for a process.\r\nStatement II: During Context Switch, the PC of the running process is saved in the CPU\u0027s General Purpose Register.\r\nChoose the correct option:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Both Statements are true",
                                              "raw":  "A) Both Statements are true"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Statement I is true, Statement II is false",
                                              "raw":  "B) Statement I is true, Statement II is false"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Statement I is false, Statement II is true",
                                              "raw":  "C) Statement I is false, Statement II is true"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Both Statements are false",
                                              "raw":  "D) Both Statements are false"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Statement I True hai. Statement II False hai kyunki Context Switch ke waqt PC aur registers ki values Process Control Block (PCB) me save hoti hain, CPU registers me nahi."
                      },
                      {
                          "id":  15,
                          "originalNum":  15,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Which of the following is NOT stored inside a process\u0027s PCB?",
                          "rawQuestion":  "Q15. Which of the following is NOT stored inside a process\u0027s PCB?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Process Identification Number (PID)",
                                              "raw":  "A) Process Identification Number (PID)"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Memory Management Information (Base/Limit/Page Table pointers)",
                                              "raw":  "B) Memory Management Information (Base/Limit/Page Table pointers)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Source Code string of the C program",
                                              "raw":  "C) Source Code string of the C program"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "CPU Register state (PC, SP, Accumulator)",
                                              "raw":  "D) CPU Register state (PC, SP, Accumulator)"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "PCB me process execution metadata rehta hai, actual C source code string nahi store hoti."
                      },
                      {
                          "id":  16,
                          "originalNum":  16,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "What happens to a child process if its parent process terminates without calling `wait()`?",
                          "rawQuestion":  "Q16. What happens to a child process if its parent process terminates without calling `wait()`?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Zombie Process",
                                              "raw":  "A) Zombie Process"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Orphan Process",
                                              "raw":  "B) Orphan Process"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Daemon Process",
                                              "raw":  "C) Daemon Process"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Core Dump",
                                              "raw":  "D) Core Dump"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Parent terminate hone par child process Orphan Process ban jata hai (jise init/systemd process adopt kar leta hai)."
                      },
                      {
                          "id":  17,
                          "originalNum":  17,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "What is a Zombie Process in Unix/Linux systems?",
                          "rawQuestion":  "Q17. What is a Zombie Process in Unix/Linux systems?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "A process running in an infinite loop",
                                              "raw":  "A) A process running in an infinite loop"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "A process that has completed execution but its exit status has not yet been read by its parent via `wait()`",
                                              "raw":  "B) A process that has completed execution but its exit status has not yet been read by its parent via `wait()`"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "A process suspended in disk",
                                              "raw":  "C) A process suspended in disk"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "A thread with zero stack",
                                              "raw":  "D) A thread with zero stack"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Zombie Process terminate ho chuka hota hai par uski entry PCB table me rehti hai jab tak parent `wait()` call na kar le."
                      },
                      {
                          "id":  18,
                          "originalNum":  18,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Which system call replaces the current process memory image with a new executable program file?",
                          "rawQuestion":  "Q18. Which system call replaces the current process memory image with a new executable program file?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "`fork()`",
                                              "raw":  "A) `fork()`"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "`exec()` family (`execvp`, `execl`)",
                                              "raw":  "B) `exec()` family (`execvp`, `execl`)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "`exit()`",
                                              "raw":  "C) `exit()`"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "`wait()`",
                                              "raw":  "D) `wait()`"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "`exec()` system call current process code, data, stack ko new program binary file se overwrite kar deta hai."
                      },
                      {
                          "id":  19,
                          "originalNum":  19,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Which IPC mechanism provides the fastest communication between two processes running on the same local machine?",
                          "rawQuestion":  "Q19. Which IPC mechanism provides the fastest communication between two processes running on the same local machine?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Sockets",
                                              "raw":  "A) Sockets"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Pipes",
                                              "raw":  "B) Pipes"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Shared Memory",
                                              "raw":  "C) Shared Memory"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Message Queues",
                                              "raw":  "D) Message Queues"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "Shared Memory fastest IPC hai kyunki setup ke baad memory access me kernel intervention nahi hota."
                      },
                      {
                          "id":  20,
                          "originalNum":  20,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "In Unix, a Pipe (`|`) provides which type of communication channel?",
                          "rawQuestion":  "Q20. In Unix, a Pipe (`|`) provides which type of communication channel?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Half-Duplex / Unidirectional byte stream between related processes",
                                              "raw":  "A) Half-Duplex / Unidirectional byte stream between related processes"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Full-Duplex network socket",
                                              "raw":  "B) Full-Duplex network socket"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Multi-point broadcast",
                                              "raw":  "C) Multi-point broadcast"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Random access shared buffer",
                                              "raw":  "D) Random access shared buffer"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Standard Unix pipe (`pipe()`) unidirectional / half-duplex byte stream hoti hai parent-child processes ke beech."
                      },
                      {
                          "id":  21,
                          "originalNum":  21,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Statement I: Mode switching always implies a context switch.\r\nStatement II: Context switching always involves mode switching.\r\nSelect the correct option:",
                          "rawQuestion":  "Q21. Statement I: Mode switching always implies a context switch.\r\nStatement II: Context switching always involves mode switching.\r\nSelect the correct option:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Both Statements are true",
                                              "raw":  "A) Both Statements are true"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Both Statements are false",
                                              "raw":  "B) Both Statements are false"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Statement I is false, Statement II is true",
                                              "raw":  "C) Statement I is false, Statement II is true"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Statement I is true, Statement II is false",
                                              "raw":  "D) Statement I is true, Statement II is false"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "Mode switch (User-\u003eKernel-\u003eUser) bina context switch ke ho sakta hai. Lekin Context switch me ek process se doosre par jane ke liye mode switch HAMESHA hota hai."
                      },
                      {
                          "id":  22,
                          "originalNum":  22,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Which memory segment of a process stores local variables, function parameters, and return addresses?",
                          "rawQuestion":  "Q22. Which memory segment of a process stores local variables, function parameters, and return addresses?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Text Segment",
                                              "raw":  "A) Text Segment"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Data Segment",
                                              "raw":  "B) Data Segment"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Heap Segment",
                                              "raw":  "C) Heap Segment"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Stack Segment",
                                              "raw":  "D) Stack Segment"
                                          }
                                      ],
                          "correctAnswer":  "D",
                          "explanation":  "Stack segment dynamic function frames, local variables aur return addresses store karta hai."
                      },
                      {
                          "id":  23,
                          "originalNum":  23,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Dynamic memory allocation in C using `malloc()` or `calloc()` allocates memory from which process segment?",
                          "rawQuestion":  "Q23. Dynamic memory allocation in C using `malloc()` or `calloc()` allocates memory from which process segment?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Stack Segment",
                                              "raw":  "A) Stack Segment"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Heap Segment",
                                              "raw":  "B) Heap Segment"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Text Segment",
                                              "raw":  "C) Text Segment"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "BSS Segment",
                                              "raw":  "D) BSS Segment"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "`malloc()` / `calloc()` dynamic memory Heap segment se allocate karte hain."
                      },
                      {
                          "id":  24,
                          "originalNum":  24,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Which OS structure keeps track of all open files and active I/O operations per process?",
                          "rawQuestion":  "Q24. Which OS structure keeps track of all open files and active I/O operations per process?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Open File Table / File Descriptor Table",
                                              "raw":  "A) Open File Table / File Descriptor Table"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Frame Table",
                                              "raw":  "B) Frame Table"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Page Map Table",
                                              "raw":  "C) Page Map Table"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Interrupt Vector",
                                              "raw":  "D) Interrupt Vector"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "File Descriptor Table (inside PCB) active open files aur socket pointers track karta hai."
                      },
                      {
                          "id":  25,
                          "originalNum":  25,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "What is the primary function of a Bootloader (e.g., GRUB, LILO)?",
                          "rawQuestion":  "Q25. What is the primary function of a Bootloader (e.g., GRUB, LILO)?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Compile OS kernel",
                                              "raw":  "A) Compile OS kernel"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Load OS Kernel from secondary storage into RAM during POST boot sequence",
                                              "raw":  "B) Load OS Kernel from secondary storage into RAM during POST boot sequence"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Schedule user processes",
                                              "raw":  "C) Schedule user processes"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Format hard disk",
                                              "raw":  "D) Format hard disk"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Bootloader ROM BIOS/UEFI POST ke baad hard disk se OS Kernel ko RAM me load karta hai."
                      },
                      {
                          "id":  26,
                          "originalNum":  26,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Which state transition is NOT possible in a standard 5-state process model?",
                          "rawQuestion":  "Q26. Which state transition is NOT possible in a standard 5-state process model?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Ready -\u003e Running",
                                              "raw":  "A) Ready -\u003e Running"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Running -\u003e Waiting",
                                              "raw":  "B) Running -\u003e Waiting"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Waiting -\u003e Running",
                                              "raw":  "C) Waiting -\u003e Running"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Running -\u003e Ready",
                                              "raw":  "D) Running -\u003e Ready"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "Waiting state se process direct Running state me NAHI ja sakta. Usse pehle Ready queue me aana padta hai (Waiting -\u003e Ready -\u003e Running)."
                      },
                      {
                          "id":  27,
                          "originalNum":  27,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Statement I: Symmetric Multiprocessing (SMP) assigns dedicated master-slave roles to CPUs.\r\nStatement II: Asymmetric Multiprocessing assigns 1 master CPU to manage OS scheduling while slave CPUs run user tasks.\r\nWhich option is correct?",
                          "rawQuestion":  "Q27. Statement I: Symmetric Multiprocessing (SMP) assigns dedicated master-slave roles to CPUs.\r\nStatement II: Asymmetric Multiprocessing assigns 1 master CPU to manage OS scheduling while slave CPUs run user tasks.\r\nWhich option is correct?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Both Statements are true",
                                              "raw":  "A) Both Statements are true"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Statement I is false, Statement II is true",
                                              "raw":  "B) Statement I is false, Statement II is true"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Statement I is true, Statement II is false",
                                              "raw":  "C) Statement I is true, Statement II is false"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Both Statements are false",
                                              "raw":  "D) Both Statements are false"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "SMP me sabhi CPUs peer hote hain. Asymmetric Multiprocessing me 1 Master CPU OS scheduler manage karta hai aur Slaves tasks run karte hain."
                      },
                      {
                          "id":  28,
                          "originalNum":  28,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Which of the following benefits is NOT associated with Virtual Machines (e.g., VMware, KVM)?",
                          "rawQuestion":  "Q28. Which of the following benefits is NOT associated with Virtual Machines (e.g., VMware, KVM)?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Complete hardware isolation and security",
                                              "raw":  "A) Complete hardware isolation and security"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Ability to run multiple heterogeneous OS on single physical host",
                                              "raw":  "B) Ability to run multiple heterogeneous OS on single physical host"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Zero performance overhead compared to bare-metal",
                                              "raw":  "C) Zero performance overhead compared to bare-metal"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Easy snapshot and migration",
                                              "raw":  "D) Easy snapshot and migration"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "Hypervisor virtualization me layer abstraction ke karan kuch performance overhead zaroor hota hai, zero overhead nahi hota."
                      },
                      {
                          "id":  29,
                          "originalNum":  29,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "In Linux, process ID (PID) 1 is assigned to which system daemon?",
                          "rawQuestion":  "Q29. In Linux, process ID (PID) 1 is assigned to which system daemon?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "`swapper`",
                                              "raw":  "A) `swapper`"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "`init` / `systemd`",
                                              "raw":  "B) `init` / `systemd`"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "`bash`",
                                              "raw":  "C) `bash`"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "`kthreadd`",
                                              "raw":  "D) `kthreadd`"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "PID 1 system boot hone par `init` ya `systemd` process ko milta hai jo baki saare orphan aur user processes ka ancestor hota hai."
                      },
                      {
                          "id":  30,
                          "originalNum":  30,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "What is the function of the BSS (Block Started by Symbol) segment in a compiled process memory layout?",
                          "rawQuestion":  "Q30. What is the function of the BSS (Block Started by Symbol) segment in a compiled process memory layout?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Stores compiled machine code",
                                              "raw":  "A) Stores compiled machine code"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Stores uninitialized global and static variables",
                                              "raw":  "B) Stores uninitialized global and static variables"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Stores function call stack",
                                              "raw":  "C) Stores function call stack"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Stores command line arguments",
                                              "raw":  "D) Stores command line arguments"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "BSS segment uninitialized global aur static variables (default initialized to 0) store karta hai."
                      },
                      {
                          "id":  31,
                          "originalNum":  31,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Which system call is used by a parent process to suspend its execution until one of its child processes terminates?",
                          "rawQuestion":  "Q31. Which system call is used by a parent process to suspend its execution until one of its child processes terminates?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "`fork()`",
                                              "raw":  "A) `fork()`"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "`wait()` / `waitpid()`",
                                              "raw":  "B) `wait()` / `waitpid()`"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "`sleep()`",
                                              "raw":  "C) `sleep()`"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "`yield()`",
                                              "raw":  "D) `yield()`"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "`wait()` / `waitpid()` parent ko child termination tak block/suspend karta hai aur exit status collect karta hai."
                      },
                      {
                          "id":  32,
                          "originalNum":  32,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "In Dual-Mode operations, timers are used primarily to prevent which problem?",
                          "rawQuestion":  "Q32. In Dual-Mode operations, timers are used primarily to prevent which problem?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Memory leak",
                                              "raw":  "A) Memory leak"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "A user program monopolizing the CPU in an infinite loop",
                                              "raw":  "B) A user program monopolizing the CPU in an infinite loop"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Disk crash",
                                              "raw":  "C) Disk crash"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Bus contention",
                                              "raw":  "D) Bus contention"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Hardware Timer interrupt set karke OS guarantee karta hai ki koi user process infinite loop me CPU hold karke system lock na kar sake."
                      },
                      {
                          "id":  33,
                          "originalNum":  33,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Which interrupt is generated by the execution of an invalid memory reference or page fault instruction?",
                          "rawQuestion":  "Q33. Which interrupt is generated by the execution of an invalid memory reference or page fault instruction?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Hardware Interrupt",
                                              "raw":  "A) Hardware Interrupt"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Internal Interrupt / Exception / Trap",
                                              "raw":  "B) Internal Interrupt / Exception / Trap"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Software I/O Poll",
                                              "raw":  "C) Software I/O Poll"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "DMA Signal",
                                              "raw":  "D) DMA Signal"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Invalid memory access ya page fault internal CPU exception/trap raise karta hai."
                      },
                      {
                          "id":  34,
                          "originalNum":  34,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Match List-I with List-II:\r\nList-I (Process Segment)\r\nP. Text Segment\r\nQ. Data Segment\r\nR. Heap Segment\r\nS. Stack Segment\r\nList-II (Contents)\r\n1. Dynamically allocated memory via malloc()\r\n2. Executable binary machine code instructions\r\n3. Local variables and function frames\r\n4. Initialized global and static variables",
                          "rawQuestion":  "Q34. Match List-I with List-II:\r\nList-I (Process Segment)\r\nP. Text Segment\r\nQ. Data Segment\r\nR. Heap Segment\r\nS. Stack Segment\r\nList-II (Contents)\r\n1. Dynamically allocated memory via malloc()\r\n2. Executable binary machine code instructions\r\n3. Local variables and function frames\r\n4. Initialized global and static variables",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "P-2, Q-4, R-1, S-3",
                                              "raw":  "A) P-2, Q-4, R-1, S-3"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "P-1, Q-2, R-3, S-4",
                                              "raw":  "B) P-1, Q-2, R-3, S-4"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "P-2, Q-1, R-4, S-3",
                                              "raw":  "C) P-2, Q-1, R-4, S-3"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "P-4, Q-3, R-2, S-1",
                                              "raw":  "D) P-4, Q-3, R-2, S-1"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Text (2) = Machine Code; Data (4) = Initialized Globals; Heap (1) = Dynamic malloc; Stack (3) = Local variables \u0026 function frames."
                      },
                      {
                          "id":  35,
                          "originalNum":  35,
                          "sectionId":  1,
                          "sectionTitle":  "OS Architecture, Dual-Mode, Interrupts \u0026 Structures",
                          "question":  "Which OS architecture organizes functionality into modular layers where each layer uses services of lower layers only?",
                          "rawQuestion":  "Q35. Which OS architecture organizes functionality into modular layers where each layer uses services of lower layers only?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Monolithic Structure",
                                              "raw":  "A) Monolithic Structure"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Layered Approach (e.g. THE System)",
                                              "raw":  "B) Layered Approach (e.g. THE System)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Microkernel",
                                              "raw":  "C) Microkernel"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Hybrid Subsystem",
                                              "raw":  "D) Hybrid Subsystem"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Layered Approach me OS strict hierarchy N layers me split hota hai jahan Layer N lower Layer N-1 ke services consume karti hai."
                      },
                      {
                          "id":  36,
                          "originalNum":  36,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Consider 4 processes P1, P2, P3, P4 with Arrival Times (0, 1, 2, 4) and Burst Times (5, 3, 1, 2). Under Non-Preemptive SJF, what is the Average Waiting Time?",
                          "rawQuestion":  "Q36. Consider 4 processes P1, P2, P3, P4 with Arrival Times (0, 1, 2, 4) and Burst Times (5, 3, 1, 2). Under Non-Preemptive SJF, what is the Average Waiting Time?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "2.5 ms",
                                              "raw":  "A) 2.5 ms"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "3.0 ms",
                                              "raw":  "B) 3.0 ms"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "3.25 ms",
                                              "raw":  "C) 3.25 ms"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "4.0 ms",
                                              "raw":  "D) 4.0 ms"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Gantt Chart: [0-5: P1]. At t=5, P2(3), P3(1), P4(2) ready. Smallest is P3(1) -\u003e [5-6: P3]. Then P4(2) -\u003e [6-8: P4]. Then P2(3) -\u003e [8-11: P2]. CT: P1=5, P2=11, P3=6, P4=8. TAT: P1=5, P2=10, P3=4, P4=4. WT: P1=0, P2=7, P3=3, P4=2. Avg WT = (0+7+3+2)/4 = 12/4 = 3.0 ms."
                      },
                      {
                          "id":  37,
                          "originalNum":  37,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Consider 3 processes P1(AT=0, BT=7), P2(AT=2, BT=4), P3(AT=4, BT=1) running under Shortest Remaining Time First (SRTF). What is the total number of Context Switches?",
                          "rawQuestion":  "Q37. Consider 3 processes P1(AT=0, BT=7), P2(AT=2, BT=4), P3(AT=4, BT=1) running under Shortest Remaining Time First (SRTF). What is the total number of Context Switches?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "2",
                                              "raw":  "A) 2"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "3",
                                              "raw":  "B) 3"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "4",
                                              "raw":  "C) 4"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "5",
                                              "raw":  "D) 5"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Gantt Chart: [0-2: P1(5)]. At t=2, P2(4)\u003cP1(5) -\u003e preempt! [2-4: P2(2)]. At t=4, P3(1)\u003cP2(2) -\u003e preempt! [4-5: P3(0)]. [5-7: P2(0)]. [7-12: P1(0)]. Total context switches = 3."
                      },
                      {
                          "id":  38,
                          "originalNum":  38,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Consider processes P1, P2, P3 with Arrival Time = 0 and Burst Times 10, 5, 8 ms. Under Round Robin scheduling with Time Quantum q = 3 ms, what is the Completion Time of process P1?",
                          "rawQuestion":  "Q38. Consider processes P1, P2, P3 with Arrival Time = 0 and Burst Times 10, 5, 8 ms. Under Round Robin scheduling with Time Quantum q = 3 ms, what is the Completion Time of process P1?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "23 ms",
                                              "raw":  "A) 23 ms"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "19 ms",
                                              "raw":  "B) 19 ms"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "21 ms",
                                              "raw":  "C) 21 ms"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "15 ms",
                                              "raw":  "D) 15 ms"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Gantt Chart: [0-3: P1(7)] [3-6: P2(2)] [6-9: P3(5)] [9-12: P1(4)] [12-14: P2(0, CT=14)] [14-17: P3(2)] [17-20: P1(1)] [20-22: P3(0, CT=22)] [22-23: P1(0, CT=23)]. Completion Time of P1 = 23 ms."
                      },
                      {
                          "id":  39,
                          "originalNum":  39,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "In the previous question (Q38), what is the Average Waiting Time of the system?",
                          "rawQuestion":  "Q39. In the previous question (Q38), what is the Average Waiting Time of the system?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "11.0 ms",
                                              "raw":  "A) 11.0 ms"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "12.0 ms",
                                              "raw":  "B) 12.0 ms"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "10.67 ms",
                                              "raw":  "C) 10.67 ms"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "14.0 ms",
                                              "raw":  "D) 14.0 ms"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "CT: P1=23, P2=14, P3=22. TAT: P1=23, P2=14, P3=22. WT: P1=13, P2=9, P3=14. Avg WT = (13+9+14)/3 = 36/3 = 12.0 ms."
                      },
                      {
                          "id":  40,
                          "originalNum":  40,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Which CPU scheduling algorithm gives optimal Turnaround Time for a set of simultaneous process arrivals at t=0?",
                          "rawQuestion":  "Q40. Which CPU scheduling algorithm gives optimal Turnaround Time for a set of simultaneous process arrivals at t=0?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "FCFS",
                                              "raw":  "A) FCFS"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Shortest Job First (SJF)",
                                              "raw":  "B) Shortest Job First (SJF)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Round Robin with q=1",
                                              "raw":  "C) Round Robin with q=1"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Priority Non-Preemptive",
                                              "raw":  "D) Priority Non-Preemptive"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "t=0 par simultaneous arrivals ke liye SJF average Turnaround Time aur Waiting Time ko strictly minimize karta hai."
                      },
                      {
                          "id":  41,
                          "originalNum":  41,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Under Priority Preemptive scheduling, a higher priority process P_new arrives at time t while P_curr is executing. P_curr will be preempted IF:",
                          "rawQuestion":  "Q41. Under Priority Preemptive scheduling, a higher priority process P_new arrives at time t while P_curr is executing. P_curr will be preempted IF:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Priority(P_new) \u003c Priority(P_curr) (assuming smaller number = higher priority)",
                                              "raw":  "A) Priority(P_new) \u003c Priority(P_curr) (assuming smaller number = higher priority)"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Priority(P_new) \u003e Priority(P_curr)",
                                              "raw":  "B) Priority(P_new) \u003e Priority(P_curr)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "BurstTime(P_new) \u003e BurstTime(P_curr)",
                                              "raw":  "C) BurstTime(P_new) \u003e BurstTime(P_curr)"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "ArrivalTime(P_new) == 0",
                                              "raw":  "D) ArrivalTime(P_new) == 0"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Agar smaller number = higher priority hai, toh Priority(P_new) \u003c Priority(P_curr) hone par CPU preempt hoga."
                      },
                      {
                          "id":  42,
                          "originalNum":  42,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Consider 3 processes P1(AT=0, BT=8), P2(AT=1, BT=4), P3(AT=2, BT=2). Under SRTF, what is the Turnaround Time of P2?",
                          "rawQuestion":  "Q42. Consider 3 processes P1(AT=0, BT=8), P2(AT=1, BT=4), P3(AT=2, BT=2). Under SRTF, what is the Turnaround Time of P2?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "4 ms",
                                              "raw":  "A) 4 ms"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "5 ms",
                                              "raw":  "B) 5 ms"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "6 ms",
                                              "raw":  "C) 6 ms"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "8 ms",
                                              "raw":  "D) 8 ms"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "Gantt Chart: [0-1: P1(7)]. At t=1, P2(4)\u003cP1(7) -\u003e [1-2: P2(3)]. At t=2, P3(2)\u003cP2(3) -\u003e [2-4: P3(0, CT=4)]. At t=4, P2(3) -\u003e [4-7: P2(0, CT=7)]. P2 CT = 7. TAT = 7 - 1 = 6 ms."
                      },
                      {
                          "id":  43,
                          "originalNum":  43,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Statement I: Round Robin algorithm with small time quantum improves Response Time for interactive processes.\r\nStatement II: Round Robin algorithm with small time quantum improves overall CPU Throughput.\r\nSelect correct option:",
                          "rawQuestion":  "Q43. Statement I: Round Robin algorithm with small time quantum improves Response Time for interactive processes.\r\nStatement II: Round Robin algorithm with small time quantum improves overall CPU Throughput.\r\nSelect correct option:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Both Statements are true",
                                              "raw":  "A) Both Statements are true"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Statement I is true, Statement II is false",
                                              "raw":  "B) Statement I is true, Statement II is false"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Statement I is false, Statement II is true",
                                              "raw":  "C) Statement I is false, Statement II is true"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Both Statements are false",
                                              "raw":  "D) Both Statements are false"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Small quantum Response time improve karta hai (Statement I True). Lekin excessive context switching overhead ke karan Throughput KAM ho jata hai (Statement II False)."
                      },
                      {
                          "id":  44,
                          "originalNum":  44,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Which of the following scheduling algorithms is strictly NON-PREEMPTIVE?",
                          "rawQuestion":  "Q44. Which of the following scheduling algorithms is strictly NON-PREEMPTIVE?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Round Robin",
                                              "raw":  "A) Round Robin"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Shortest Remaining Time First",
                                              "raw":  "B) Shortest Remaining Time First"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "First Come First Serve (FCFS)",
                                              "raw":  "C) First Come First Serve (FCFS)"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Multi-Level Feedback Queue",
                                              "raw":  "D) Multi-Level Feedback Queue"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "FCFS completely non-preemptive algorithm hai."
                      },
                      {
                          "id":  45,
                          "originalNum":  45,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Consider 5 processes P1..P5 with BT = (10, 1, 2, 1, 5) arriving at t=0. Under FCFS, what is the Average Waiting Time?",
                          "rawQuestion":  "Q45. Consider 5 processes P1..P5 with BT = (10, 1, 2, 1, 5) arriving at t=0. Under FCFS, what is the Average Waiting Time?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "8.2 ms",
                                              "raw":  "A) 8.2 ms"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "9.6 ms",
                                              "raw":  "B) 9.6 ms"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "10.2 ms",
                                              "raw":  "C) 10.2 ms"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "6.4 ms",
                                              "raw":  "D) 6.4 ms"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "WT: P1=0, P2=10, P3=11, P4=13, P5=14. Sum WT = 48. Avg WT = 48/5 = 9.6 ms."
                      },
                      {
                          "id":  46,
                          "originalNum":  46,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "In the previous question (Q45), if SJF non-preemptive is used instead of FCFS, what will be the Average Waiting Time?",
                          "rawQuestion":  "Q46. In the previous question (Q45), if SJF non-preemptive is used instead of FCFS, what will be the Average Waiting Time?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "3.2 ms",
                                              "raw":  "A) 3.2 ms"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "4.6 ms",
                                              "raw":  "B) 4.6 ms"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "9.6 ms",
                                              "raw":  "C) 9.6 ms"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "2.4 ms",
                                              "raw":  "D) 2.4 ms"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "SJF order: P2(1), P4(1), P3(2), P5(5), P1(10). WT: P2=0, P4=1, P3=2, P5=4, P1=9. Sum WT = 16. Avg WT = 16/5 = 3.2 ms."
                      },
                      {
                          "id":  47,
                          "originalNum":  47,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "What is the primary criteria used by Long-Term Scheduler (LTS) to select jobs from the job pool?",
                          "rawQuestion":  "Q47. What is the primary criteria used by Long-Term Scheduler (LTS) to select jobs from the job pool?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "CPU Burst Time only",
                                              "raw":  "A) CPU Burst Time only"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Balanced mix of CPU-bound and I/O-bound processes",
                                              "raw":  "B) Balanced mix of CPU-bound and I/O-bound processes"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Priority number only",
                                              "raw":  "C) Priority number only"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "First-In First-Out strictly",
                                              "raw":  "D) First-In First-Out strictly"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "LTS CPU-bound aur I/O-bound jobs ka balanced combination select karta hai."
                      },
                      {
                          "id":  48,
                          "originalNum":  48,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Which CPU scheduling algorithm exhibits the Convoy Effect?",
                          "rawQuestion":  "Q48. Which CPU scheduling algorithm exhibits the Convoy Effect?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "SRTN",
                                              "raw":  "A) SRTN"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "FCFS",
                                              "raw":  "B) FCFS"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Round Robin",
                                              "raw":  "C) Round Robin"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Priority Preemptive",
                                              "raw":  "D) Priority Preemptive"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "FCFS me CPU-bound long process ke peeche I/O-bound short processes wait karte hain (Convoy Effect)."
                      },
                      {
                          "id":  49,
                          "originalNum":  49,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "A process execution consists of a cycle of:",
                          "rawQuestion":  "Q49. A process execution consists of a cycle of:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Memory access and Disk access",
                                              "raw":  "A) Memory access and Disk access"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "CPU execution burst and I/O wait burst",
                                              "raw":  "B) CPU execution burst and I/O wait burst"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "System call and Interrupt",
                                              "raw":  "C) System call and Interrupt"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Page fault and Swap",
                                              "raw":  "D) Page fault and Swap"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Process execution CPU burst aur I/O wait burst ke alternating cycle se banta hai."
                      },
                      {
                          "id":  50,
                          "originalNum":  50,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "In a Multi-Level Queue (MLQ) scheduling system with 3 static queues (Q1: Highest, Q2: Medium, Q3: Lowest), how are processes scheduled?",
                          "rawQuestion":  "Q50. In a Multi-Level Queue (MLQ) scheduling system with 3 static queues (Q1: Highest, Q2: Medium, Q3: Lowest), how are processes scheduled?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Round Robin across all queues",
                                              "raw":  "A) Round Robin across all queues"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Absolute preemptive priority among queues (Q1 runs first; Q2 runs only when Q1 is empty)",
                                              "raw":  "B) Absolute preemptive priority among queues (Q1 runs first; Q2 runs only when Q1 is empty)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Equal time share 33% each",
                                              "raw":  "C) Equal time share 33% each"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Random selection",
                                              "raw":  "D) Random selection"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "MLQ me higher queues ko absolute priority milti hai."
                      },
                      {
                          "id":  51,
                          "originalNum":  51,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "How does Multi-Level Feedback Queue (MLFQ) prevent starvation of CPU-bound processes in lower queues?",
                          "rawQuestion":  "Q51. How does Multi-Level Feedback Queue (MLFQ) prevent starvation of CPU-bound processes in lower queues?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "By deleting high priority queues",
                                              "raw":  "A) By deleting high priority queues"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "By periodically aging/boosting long-waiting processes to higher priority queues",
                                              "raw":  "B) By periodically aging/boosting long-waiting processes to higher priority queues"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "By increasing CPU speed",
                                              "raw":  "C) By increasing CPU speed"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "By disabling preemption",
                                              "raw":  "D) By disabling preemption"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "MLFQ periodic aging mechanism se long-waiting processes ko higher priority queue me promote karta hai."
                      },
                      {
                          "id":  52,
                          "originalNum":  52,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Consider 3 processes P1(BT=24), P2(BT=3), P3(BT=3) arriving at t=0. Under Round Robin with q=4, what is the Turnaround Time of P1?",
                          "rawQuestion":  "Q52. Consider 3 processes P1(BT=24), P2(BT=3), P3(BT=3) arriving at t=0. Under Round Robin with q=4, what is the Turnaround Time of P1?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "30 ms",
                                              "raw":  "A) 30 ms"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "24 ms",
                                              "raw":  "B) 24 ms"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "10 ms",
                                              "raw":  "C) 10 ms"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "27 ms",
                                              "raw":  "D) 27 ms"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Gantt Chart: [0-4: P1(20)] [4-7: P2(0, CT=7)] [7-10: P3(0, CT=10)] [10-30: P1(0, CT=30)]. TAT P1 = 30 ms."
                      },
                      {
                          "id":  53,
                          "originalNum":  53,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "In the previous question (Q52), what is the Waiting Time of process P2?",
                          "rawQuestion":  "Q53. In the previous question (Q52), what is the Waiting Time of process P2?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "4 ms",
                                              "raw":  "A) 4 ms"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "7 ms",
                                              "raw":  "B) 7 ms"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "0 ms",
                                              "raw":  "C) 0 ms"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "3 ms",
                                              "raw":  "D) 3 ms"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "WT for P2 = TAT - BT = 7 - 3 = 4 ms."
                      },
                      {
                          "id":  54,
                          "originalNum":  54,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Statement I: Non-preemptive algorithms are preferred for real-time interactive user systems.\r\nStatement II: Preemptive algorithms introduce context-switch memory overhead.\r\nChoose the correct option:",
                          "rawQuestion":  "Q54. Statement I: Non-preemptive algorithms are preferred for real-time interactive user systems.\r\nStatement II: Preemptive algorithms introduce context-switch memory overhead.\r\nChoose the correct option:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Both Statements are true",
                                              "raw":  "A) Both Statements are true"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Statement I is false, Statement II is true",
                                              "raw":  "B) Statement I is false, Statement II is true"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Statement I is true, Statement II is false",
                                              "raw":  "C) Statement I is true, Statement II is false"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Both Statements are false",
                                              "raw":  "D) Both Statements are false"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Statement I False hai (interactive systems me Preemptive preferred hota hai). Statement II True hai."
                      },
                      {
                          "id":  55,
                          "originalNum":  55,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Which parameter is essential for implementing Shortest Job First (SJF) scheduling in practice?",
                          "rawQuestion":  "Q55. Which parameter is essential for implementing Shortest Job First (SJF) scheduling in practice?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Exact future CPU burst time (estimated using exponential averaging)",
                                              "raw":  "A) Exact future CPU burst time (estimated using exponential averaging)"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Total RAM size",
                                              "raw":  "B) Total RAM size"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Number of open files",
                                              "raw":  "C) Number of open files"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Disk seek time",
                                              "raw":  "D) Disk seek time"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Practical SJF me future CPU burst Exponential Averaging formula se predict kiya jata hai."
                      },
                      {
                          "id":  56,
                          "originalNum":  56,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "In Exponential Averaging formula tau_{n+1} = alpha * t_n + (1-alpha) * tau_n, if alpha = 0, then:",
                          "rawQuestion":  "Q56. In Exponential Averaging formula tau_{n+1} = alpha * t_n + (1-alpha) * tau_n, if alpha = 0, then:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Recent history t_n gets full weight",
                                              "raw":  "A) Recent history t_n gets full weight"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Recent history is ignored; prediction relies entirely on past history tau_n",
                                              "raw":  "B) Recent history is ignored; prediction relies entirely on past history tau_n"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Prediction is zero",
                                              "raw":  "C) Prediction is zero"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Algorithm becomes FCFS",
                                              "raw":  "D) Algorithm becomes FCFS"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Alpha = 0 par recent burst t_n ignore ho jata hai aur tau_n maintain rehta hai."
                      },
                      {
                          "id":  57,
                          "originalNum":  57,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Which scheduling metric measures the time from process submission until the VERY FIRST CPU execution response is received?",
                          "rawQuestion":  "Q57. Which scheduling metric measures the time from process submission until the VERY FIRST CPU execution response is received?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Turnaround Time",
                                              "raw":  "A) Turnaround Time"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Waiting Time",
                                              "raw":  "B) Waiting Time"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Response Time",
                                              "raw":  "C) Response Time"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Throughput",
                                              "raw":  "D) Throughput"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "Response Time = First CPU execution timestamp - Arrival Time."
                      },
                      {
                          "id":  58,
                          "originalNum":  58,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Consider 4 processes P1(BT=6), P2(BT=8), P3(BT=7), P4(BT=3) arriving at t=0. Under FCFS, what is the Response Time of process P3?",
                          "rawQuestion":  "Q58. Consider 4 processes P1(BT=6), P2(BT=8), P3(BT=7), P4(BT=3) arriving at t=0. Under FCFS, what is the Response Time of process P3?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "0 ms",
                                              "raw":  "A) 0 ms"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "6 ms",
                                              "raw":  "B) 6 ms"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "14 ms",
                                              "raw":  "C) 14 ms"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "21 ms",
                                              "raw":  "D) 21 ms"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "Gantt Chart: [0-6: P1] [6-14: P2] [14-21: P3]. P3 gets CPU at t=14. RT = 14 ms."
                      },
                      {
                          "id":  59,
                          "originalNum":  59,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "What is the major vulnerability of Priority Scheduling without aging?",
                          "rawQuestion":  "Q59. What is the major vulnerability of Priority Scheduling without aging?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Convoy Effect",
                                              "raw":  "A) Convoy Effect"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Indefinite Blocking / Starvation of low priority processes",
                                              "raw":  "B) Indefinite Blocking / Starvation of low priority processes"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Belady\u0027s Anomaly",
                                              "raw":  "C) Belady\u0027s Anomaly"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "High Page Faults",
                                              "raw":  "D) High Page Faults"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Priority scheduling me low-priority jobs ko CPU nahi milta (Starvation)."
                      },
                      {
                          "id":  60,
                          "originalNum":  60,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Which CPU scheduling algorithm is non-preemptive and assigns CPU to the process that has waited the longest in the ready queue?",
                          "rawQuestion":  "Q60. Which CPU scheduling algorithm is non-preemptive and assigns CPU to the process that has waited the longest in the ready queue?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "FCFS",
                                              "raw":  "A) FCFS"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Round Robin",
                                              "raw":  "B) Round Robin"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "SJF",
                                              "raw":  "C) SJF"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Priority",
                                              "raw":  "D) Priority"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "FCFS non-preemptive hai aur longest-waiting process ko pehle CPU deta hai."
                      },
                      {
                          "id":  61,
                          "originalNum":  61,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "If all processes arrive at the same time t=0 with equal burst times, Round Robin scheduling behaves identically to:",
                          "rawQuestion":  "Q61. If all processes arrive at the same time t=0 with equal burst times, Round Robin scheduling behaves identically to:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "SJF",
                                              "raw":  "A) SJF"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "FCFS",
                                              "raw":  "B) FCFS"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Priority",
                                              "raw":  "C) Priority"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "SRTN",
                                              "raw":  "D) SRTN"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Equal burst times aur t=0 arrival par Round Robin aur FCFS identical behave karte hain."
                      },
                      {
                          "id":  62,
                          "originalNum":  62,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Consider processes P1(AT=0, BT=4), P2(AT=1, BT=2), P3(AT=2, BT=1). Under SRTF, what is the Completion Time of P1?",
                          "rawQuestion":  "Q62. Consider processes P1(AT=0, BT=4), P2(AT=1, BT=2), P3(AT=2, BT=1). Under SRTF, what is the Completion Time of P1?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "4 ms",
                                              "raw":  "A) 4 ms"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "7 ms",
                                              "raw":  "B) 7 ms"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "3 ms",
                                              "raw":  "C) 3 ms"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "2 ms",
                                              "raw":  "D) 2 ms"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Gantt Chart: [0-1: P1(3)]. [1-3: P2(0, CT=3)]. [3-4: P3(0, CT=4)]. [4-7: P1(0, CT=7)]. P1 CT = 7 ms."
                      },
                      {
                          "id":  63,
                          "originalNum":  63,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "In the previous question (Q62), what is the Average Turnaround Time of the system?",
                          "rawQuestion":  "Q63. In the previous question (Q62), what is the Average Turnaround Time of the system?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "4.0 ms",
                                              "raw":  "A) 4.0 ms"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "3.67 ms",
                                              "raw":  "B) 3.67 ms"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "5.0 ms",
                                              "raw":  "C) 5.0 ms"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "2.33 ms",
                                              "raw":  "D) 2.33 ms"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "CT: P1=7, P2=3, P3=4. TAT: P1=7, P2=2, P3=2. Avg TAT = 11/3 = 3.67 ms."
                      },
                      {
                          "id":  64,
                          "originalNum":  64,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Which OS component executes the actual Context Switch after Short-Term Scheduler selects a process?",
                          "rawQuestion":  "Q64. Which OS component executes the actual Context Switch after Short-Term Scheduler selects a process?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Long-Term Scheduler",
                                              "raw":  "A) Long-Term Scheduler"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Dispatcher",
                                              "raw":  "B) Dispatcher"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Interrupt Service Routine",
                                              "raw":  "C) Interrupt Service Routine"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Bootloader",
                                              "raw":  "D) Bootloader"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Dispatcher Context Switch perform karta hai."
                      },
                      {
                          "id":  65,
                          "originalNum":  65,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "What is Dispatch Latency?",
                          "rawQuestion":  "Q65. What is Dispatch Latency?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Time taken by LTS to load job from disk",
                                              "raw":  "A) Time taken by LTS to load job from disk"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Time taken by Dispatcher to stop one process and start another running",
                                              "raw":  "B) Time taken by Dispatcher to stop one process and start another running"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Time spent in I/O queue",
                                              "raw":  "C) Time spent in I/O queue"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "CPU clock frequency",
                                              "raw":  "D) CPU clock frequency"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Dispatch Latency = Time taken by Dispatcher to stop one process and start another."
                      },
                      {
                          "id":  66,
                          "originalNum":  66,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Which of the following conditions forces a process from Running state to Waiting state?",
                          "rawQuestion":  "Q66. Which of the following conditions forces a process from Running state to Waiting state?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Time quantum expiration",
                                              "raw":  "A) Time quantum expiration"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "I/O request or event wait call",
                                              "raw":  "B) I/O request or event wait call"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "High priority process arrival",
                                              "raw":  "C) High priority process arrival"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Process termination",
                                              "raw":  "D) Process termination"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "I/O request karne par process Running se Waiting state me jata hai."
                      },
                      {
                          "id":  67,
                          "originalNum":  67,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Which of the following conditions forces a process from Running state to Ready state?",
                          "rawQuestion":  "Q67. Which of the following conditions forces a process from Running state to Ready state?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "I/O request",
                                              "raw":  "A) I/O request"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Interrupt or Time quantum expiration in preemptive OS",
                                              "raw":  "B) Interrupt or Time quantum expiration in preemptive OS"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Process completion",
                                              "raw":  "C) Process completion"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Memory allocation failure",
                                              "raw":  "D) Memory allocation failure"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Interrupt ya Time Quantum expire hone par preemptive OS running process ko Ready state me bhejta hai."
                      },
                      {
                          "id":  68,
                          "originalNum":  68,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "In a system with N processes sharing 1 CPU, what is the maximum number of processes that can be in Waiting state?",
                          "rawQuestion":  "Q68. In a system with N processes sharing 1 CPU, what is the maximum number of processes that can be in Waiting state?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "N",
                                              "raw":  "A) N"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "N - 1",
                                              "raw":  "B) N - 1"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "1",
                                              "raw":  "C) 1"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "0",
                                              "raw":  "D) 0"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Jab CPU idle ho ya koi process I/O kar raha ho, tab sabhi N processes Waiting state me ho sakte hain."
                      },
                      {
                          "id":  69,
                          "originalNum":  69,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "In a system with N processes sharing 1 CPU, what is the MINIMUM number of processes in Ready state when CPU is active?",
                          "rawQuestion":  "Q69. In a system with N processes sharing 1 CPU, what is the MINIMUM number of processes in Ready state when CPU is active?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "0",
                                              "raw":  "A) 0"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "1",
                                              "raw":  "B) 1"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "N - 1",
                                              "raw":  "C) N - 1"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "N",
                                              "raw":  "D) N"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Jab CPU 1 process run kar raha ho aur baki N-1 processes I/O waiting me ho, tab Ready queue me 0 processes hote hain."
                      },
                      {
                          "id":  70,
                          "originalNum":  70,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Consider Highest Response Ratio Next (HRRN) scheduling. Response Ratio (RR) is calculated as:",
                          "rawQuestion":  "Q70. Consider Highest Response Ratio Next (HRRN) scheduling. Response Ratio (RR) is calculated as:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "(WT + BT) / BT",
                                              "raw":  "A) (WT + BT) / BT"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "(TAT - WT) / BT",
                                              "raw":  "B) (TAT - WT) / BT"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "WT / BT",
                                              "raw":  "C) WT / BT"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "BT / (WT + BT)",
                                              "raw":  "D) BT / (WT + BT)"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Response Ratio = (Waiting Time + Service Time) / Service Time."
                      },
                      {
                          "id":  71,
                          "originalNum":  71,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "HRRN (Highest Response Ratio Next) scheduling algorithm inherently prevents starvation because:",
                          "rawQuestion":  "Q71. HRRN (Highest Response Ratio Next) scheduling algorithm inherently prevents starvation because:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "It is preemptive",
                                              "raw":  "A) It is preemptive"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "As waiting time W increases, the Response Ratio increases, giving long-waiting jobs higher priority",
                                              "raw":  "B) As waiting time W increases, the Response Ratio increases, giving long-waiting jobs higher priority"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "It uses fixed time slices",
                                              "raw":  "C) It uses fixed time slices"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "It limits process count",
                                              "raw":  "D) It limits process count"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Waiting time badhne par Response Ratio badhta hai, jisse purane waiting jobs ki priority boost ho jati hai."
                      },
                      {
                          "id":  72,
                          "originalNum":  72,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Which CPU scheduling algorithm is mathematically proven to minimize average waiting time for a set of preemptive processes?",
                          "rawQuestion":  "Q72. Which CPU scheduling algorithm is mathematically proven to minimize average waiting time for a set of preemptive processes?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Round Robin",
                                              "raw":  "A) Round Robin"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "FCFS",
                                              "raw":  "B) FCFS"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Shortest Remaining Time First (SRTF)",
                                              "raw":  "C) Shortest Remaining Time First (SRTF)"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Priority Scheduling",
                                              "raw":  "D) Priority Scheduling"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "SRTF preemptive set of processes ke liye average waiting time ko strictly minimize karta hai."
                      },
                      {
                          "id":  73,
                          "originalNum":  73,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Statement I: Priority scheduling can be either preemptive or non-preemptive.\r\nStatement II: FCFS scheduling is a special case of Priority scheduling where priority is inversely proportional to Arrival Time.\r\nSelect the correct option:",
                          "rawQuestion":  "Q73. Statement I: Priority scheduling can be either preemptive or non-preemptive.\r\nStatement II: FCFS scheduling is a special case of Priority scheduling where priority is inversely proportional to Arrival Time.\r\nSelect the correct option:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Both Statements are true",
                                              "raw":  "A) Both Statements are true"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Both Statements are false",
                                              "raw":  "B) Both Statements are false"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Statement I is true, Statement II is false",
                                              "raw":  "C) Statement I is true, Statement II is false"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Statement I is false, Statement II is true",
                                              "raw":  "D) Statement I is false, Statement II is true"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Dono Statements True hain."
                      },
                      {
                          "id":  74,
                          "originalNum":  74,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "Consider 3 processes P1(BT=10), P2(BT=5), P3(BT=8) with Arrival Time=0. Under Round Robin with q=5 ms, what is the CT of P3?",
                          "rawQuestion":  "Q74. Consider 3 processes P1(BT=10), P2(BT=5), P3(BT=8) with Arrival Time=0. Under Round Robin with q=5 ms, what is the CT of P3?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "15 ms",
                                              "raw":  "A) 15 ms"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "23 ms",
                                              "raw":  "B) 23 ms"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "18 ms",
                                              "raw":  "C) 18 ms"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "20 ms",
                                              "raw":  "D) 20 ms"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Gantt Chart: [0-5: P1(5)] [5-10: P2(0, CT=10)] [10-15: P3(3)] [15-20: P1(0, CT=20)] [20-23: P3(0, CT=23)]. CT P3 = 23 ms."
                      },
                      {
                          "id":  75,
                          "originalNum":  75,
                          "sectionId":  2,
                          "sectionTitle":  "Process Management \u0026 CPU Scheduling Numericals",
                          "question":  "In the previous question (Q74), what is the Average Turnaround Time?",
                          "rawQuestion":  "Q75. In the previous question (Q74), what is the Average Turnaround Time?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "17.67 ms",
                                              "raw":  "A) 17.67 ms"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "15.0 ms",
                                              "raw":  "B) 15.0 ms"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "18.33 ms",
                                              "raw":  "C) 18.33 ms"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "12.5 ms",
                                              "raw":  "D) 12.5 ms"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "CT: P1=20, P2=10, P3=23. Avg TAT = (20+10+23)/3 = 53/3 = 17.67 ms."
                      },
                      {
                          "id":  76,
                          "originalNum":  76,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Consider Peterson\u0027s Solution for 2 processes P0 and P1:\r\nflag[0] = true; turn = 1; while (flag[1] \u0026\u0026 turn == 1);\r\nIf P0 is executing in Critical Section, what are the values of flag[0] and turn?",
                          "rawQuestion":  "Q76. Consider Peterson\u0027s Solution for 2 processes P0 and P1:\r\nflag[0] = true; turn = 1; while (flag[1] \u0026\u0026 turn == 1);\r\nIf P0 is executing in Critical Section, what are the values of flag[0] and turn?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "flag[0]=false, turn=0",
                                              "raw":  "A) flag[0]=false, turn=0"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "flag[0]=true, turn=1 (or turn=0 if P1 also attempted)",
                                              "raw":  "B) flag[0]=true, turn=1 (or turn=0 if P1 also attempted)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "flag[0]=false, turn=1",
                                              "raw":  "C) flag[0]=false, turn=1"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "flag[0]=true, turn=undefined",
                                              "raw":  "D) flag[0]=true, turn=undefined"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "P0 CS me hone par flag[0]=true rehta hai."
                      },
                      {
                          "id":  77,
                          "originalNum":  77,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Which of the following is TRUE regarding Peterson\u0027s Solution?",
                          "rawQuestion":  "Q77. Which of the following is TRUE regarding Peterson\u0027s Solution?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Works for N processes on multi-core without hardware support",
                                              "raw":  "A) Works for N processes on multi-core without hardware support"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Satisfies Mutual Exclusion, Progress, and Bounded Waiting for 2 processes",
                                              "raw":  "B) Satisfies Mutual Exclusion, Progress, and Bounded Waiting for 2 processes"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Suffers from deadlock",
                                              "raw":  "C) Suffers from deadlock"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Uses hardware test-and-set instructions",
                                              "raw":  "D) Uses hardware test-and-set instructions"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Peterson\u0027s solution 2 processes ke liye Mutual Exclusion, Progress aur Bounded Waiting satisfy karta hai."
                      },
                      {
                          "id":  78,
                          "originalNum":  78,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Consider a counting semaphore S initialized to 7. Then 20 wait(S) and 15 signal(S) operations are performed. What is the final value of S?",
                          "rawQuestion":  "Q78. Consider a counting semaphore S initialized to 7. Then 20 wait(S) and 15 signal(S) operations are performed. What is the final value of S?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "2",
                                              "raw":  "A) 2"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "12",
                                              "raw":  "B) 12"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "-2",
                                              "raw":  "C) -2"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "7",
                                              "raw":  "D) 7"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "S_final = 7 - 20 + 15 = 2."
                      },
                      {
                          "id":  79,
                          "originalNum":  79,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Consider a counting semaphore S initialized to 5. Then 12 wait(S) operations and X signal(S) operations are executed, resulting in a final value of S = 8. What is X?",
                          "rawQuestion":  "Q79. Consider a counting semaphore S initialized to 5. Then 12 wait(S) operations and X signal(S) operations are executed, resulting in a final value of S = 8. What is X?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "15",
                                              "raw":  "A) 15"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "11",
                                              "raw":  "B) 11"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "9",
                                              "raw":  "C) 9"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "5",
                                              "raw":  "D) 5"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "8 = 5 - 12 + X =\u003e X = 15."
                      },
                      {
                          "id":  80,
                          "originalNum":  80,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "If a counting semaphore S has a value of -6, how many processes are blocked waiting in the queue for this semaphore?",
                          "rawQuestion":  "Q80. If a counting semaphore S has a value of -6, how many processes are blocked waiting in the queue for this semaphore?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "0",
                                              "raw":  "A) 0"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "6",
                                              "raw":  "B) 6"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "12",
                                              "raw":  "C) 12"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "8",
                                              "raw":  "D) 8"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Negative semaphore value (| -6 | = 6) blocked processes count hoti hai."
                      },
                      {
                          "id":  81,
                          "originalNum":  81,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "In the Bounded-Buffer (Producer-Consumer) problem with buffer capacity N, what are the initial values of semaphores mutex, empty, and full?",
                          "rawQuestion":  "Q81. In the Bounded-Buffer (Producer-Consumer) problem with buffer capacity N, what are the initial values of semaphores mutex, empty, and full?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "mutex=1, empty=N, full=0",
                                              "raw":  "A) mutex=1, empty=N, full=0"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "mutex=0, empty=0, full=N",
                                              "raw":  "B) mutex=0, empty=0, full=N"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "mutex=N, empty=1, full=0",
                                              "raw":  "C) mutex=N, empty=1, full=0"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "mutex=1, empty=0, full=N",
                                              "raw":  "D) mutex=1, empty=0, full=N"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "mutex=1, empty=N, full=0."
                      },
                      {
                          "id":  82,
                          "originalNum":  82,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "In the Producer-Consumer problem, what is the correct code structure for the Producer process?",
                          "rawQuestion":  "Q82. In the Producer-Consumer problem, what is the correct code structure for the Producer process?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "wait(full); wait(mutex); [Add Item]; signal(mutex); signal(empty);",
                                              "raw":  "A) wait(full); wait(mutex); [Add Item]; signal(mutex); signal(empty);"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "wait(empty); wait(mutex); [Add Item]; signal(mutex); signal(full);",
                                              "raw":  "B) wait(empty); wait(mutex); [Add Item]; signal(mutex); signal(full);"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "wait(mutex); wait(empty); [Add Item]; signal(full); signal(mutex);",
                                              "raw":  "C) wait(mutex); wait(empty); [Add Item]; signal(full); signal(mutex);"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "signal(empty); wait(mutex); [Add Item]; signal(mutex); wait(full);",
                                              "raw":  "D) signal(empty); wait(mutex); [Add Item]; signal(mutex); wait(full);"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Producer pehle wait(empty) karta hai, phir wait(mutex) se lock karta hai."
                      },
                      {
                          "id":  83,
                          "originalNum":  83,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "What happens if Producer code interchanges the order of wait calls to wait(mutex); wait(empty); when buffer is full?",
                          "rawQuestion":  "Q83. What happens if Producer code interchanges the order of wait calls to wait(mutex); wait(empty); when buffer is full?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Execution speeds up",
                                              "raw":  "A) Execution speeds up"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "System enters Deadlock",
                                              "raw":  "B) System enters Deadlock"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Mutual Exclusion is violated",
                                              "raw":  "C) Mutual Exclusion is violated"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Buffer overflows",
                                              "raw":  "D) Buffer overflows"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Buffer full hone par wait(mutex) pehle karne se Deadlock ho jata hai."
                      },
                      {
                          "id":  84,
                          "originalNum":  84,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "In Readers-Writers Problem (First Readers-Writers Variant), multiple Readers can read concurrently IF:",
                          "rawQuestion":  "Q84. In Readers-Writers Problem (First Readers-Writers Variant), multiple Readers can read concurrently IF:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "No Writer is currently writing or accessing the shared database",
                                              "raw":  "A) No Writer is currently writing or accessing the shared database"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "At most 1 Reader is active",
                                              "raw":  "B) At most 1 Reader is active"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Writer gives permission",
                                              "raw":  "C) Writer gives permission"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "RAM is above 50%",
                                              "raw":  "D) RAM is above 50%"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Jab tak koi Writer active nahi hai, multiple Readers concurrently read kar sakte hain."
                      },
                      {
                          "id":  85,
                          "originalNum":  85,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "In Readers-Writers Problem, which process type requires strict Mutual Exclusion against ALL other processes (both Readers and Writers)?",
                          "rawQuestion":  "Q85. In Readers-Writers Problem, which process type requires strict Mutual Exclusion against ALL other processes (both Readers and Writers)?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Reader Process",
                                              "raw":  "A) Reader Process"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Writer Process",
                                              "raw":  "B) Writer Process"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Both Readers and Writers",
                                              "raw":  "C) Both Readers and Writers"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Neither",
                                              "raw":  "D) Neither"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Writer Process ko strict mutual exclusion chahiye hoti hai."
                      },
                      {
                          "id":  86,
                          "originalNum":  86,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Consider the Dining Philosophers Problem with 5 philosophers. If all 5 philosophers simultaneously pick up their LEFT chopstick, what occurs?",
                          "rawQuestion":  "Q86. Consider the Dining Philosophers Problem with 5 philosophers. If all 5 philosophers simultaneously pick up their LEFT chopstick, what occurs?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "All philosophers eat successfully",
                                              "raw":  "A) All philosophers eat successfully"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Deadlock occurs (Circular Wait)",
                                              "raw":  "B) Deadlock occurs (Circular Wait)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Starvation of philosopher 0 only",
                                              "raw":  "C) Starvation of philosopher 0 only"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "System crashes",
                                              "raw":  "D) System crashes"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Sabhi 5 philosophers ek sath left chopstick uthayenge toh Circular Wait se Deadlock hoga."
                      },
                      {
                          "id":  87,
                          "originalNum":  87,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "How does asymmetric chopstick allocation solve deadlock in Dining Philosophers Problem?",
                          "rawQuestion":  "Q87. How does asymmetric chopstick allocation solve deadlock in Dining Philosophers Problem?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Odd philosophers pick Right then Left; Even philosophers pick Left then Right",
                                              "raw":  "A) Odd philosophers pick Right then Left; Even philosophers pick Left then Right"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "All philosophers pick Right chopstick only",
                                              "raw":  "B) All philosophers pick Right chopstick only"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Philosophers eat with 1 chopstick",
                                              "raw":  "C) Philosophers eat with 1 chopstick"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Remove 1 philosopher",
                                              "raw":  "D) Remove 1 philosopher"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Even left-then-right aur Odd right-then-left pick karte hain, jisse circular wait break hota hai."
                      },
                      {
                          "id":  88,
                          "originalNum":  88,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "What is the primary difference between a Semaphore and a Monitor?",
                          "rawQuestion":  "Q88. What is the primary difference between a Semaphore and a Monitor?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Semaphore is OS integer variable requiring manual P/V management; Monitor is a high-level language ADT enforcing automatic mutual exclusion",
                                              "raw":  "A) Semaphore is OS integer variable requiring manual P/V management; Monitor is a high-level language ADT enforcing automatic mutual exclusion"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Monitors cause busy waiting",
                                              "raw":  "B) Monitors cause busy waiting"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Semaphores cannot be used in Unix",
                                              "raw":  "C) Semaphores cannot be used in Unix"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Monitors are hardware registers",
                                              "raw":  "D) Monitors are hardware registers"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Semaphore manual management use karta hai; Monitor automatically handle karta hai."
                      },
                      {
                          "id":  89,
                          "originalNum":  89,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "A Test-and-Set hardware instruction TestAndSet(boolean *target) operates:",
                          "rawQuestion":  "Q89. A Test-and-Set hardware instruction TestAndSet(boolean *target) operates:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Non-atomically",
                                              "raw":  "A) Non-atomically"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Atomically (executes uninterruptedly in 1 memory cycle)",
                                              "raw":  "B) Atomically (executes uninterruptedly in 1 memory cycle)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Only in User Mode",
                                              "raw":  "C) Only in User Mode"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Via software interrupts",
                                              "raw":  "D) Via software interrupts"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "TestAndSet atomic memory operation hai."
                      },
                      {
                          "id":  90,
                          "originalNum":  90,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Hardware atomic instruction CompareAndSwap(int *val, int expected, int new_val) returns:",
                          "rawQuestion":  "Q90. Hardware atomic instruction CompareAndSwap(int *val, int expected, int new_val) returns:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Always new_val",
                                              "raw":  "A) Always new_val"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Original value of *val before swap attempt",
                                              "raw":  "B) Original value of *val before swap attempt"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Boolean true always",
                                              "raw":  "C) Boolean true always"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Process ID",
                                              "raw":  "D) Process ID"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "CompareAndSwap original value return karta hai."
                      },
                      {
                          "id":  91,
                          "originalNum":  91,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Statement I: Binary Semaphore can take integer values 0, 1, 2, 3.\r\nStatement II: Counting Semaphore can take negative integer values when processes are queued waiting.\r\nSelect the correct option:",
                          "rawQuestion":  "Q91. Statement I: Binary Semaphore can take integer values 0, 1, 2, 3.\r\nStatement II: Counting Semaphore can take negative integer values when processes are queued waiting.\r\nSelect the correct option:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Both Statements are true",
                                              "raw":  "A) Both Statements are true"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Statement I is false, Statement II is true",
                                              "raw":  "B) Statement I is false, Statement II is true"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Statement I is true, Statement II is false",
                                              "raw":  "C) Statement I is true, Statement II is false"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Both Statements are false",
                                              "raw":  "D) Both Statements are false"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Binary Semaphore strictly 0 ya 1 hota hai (Statement I False). Counting Semaphore negative ho sakta hai (Statement II True)."
                      },
                      {
                          "id":  92,
                          "originalNum":  92,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Which condition variable operations are supported inside a Monitor construct?",
                          "rawQuestion":  "Q92. Which condition variable operations are supported inside a Monitor construct?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "wait() and signal() (or notify())",
                                              "raw":  "A) wait() and signal() (or notify())"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "lock() and unlock()",
                                              "raw":  "B) lock() and unlock()"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "push() and pop()",
                                              "raw":  "C) push() and pop()"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "P() and V()",
                                              "raw":  "D) P() and V()"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Monitors me condition variables par wait() aur signal() operations hote hain."
                      },
                      {
                          "id":  93,
                          "originalNum":  93,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "How does Monitor signal() differ from Semaphore signal()?",
                          "rawQuestion":  "Q93. How does Monitor signal() differ from Semaphore signal()?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Monitor signal() has no effect if no process is waiting; Semaphore signal() increments semaphore value",
                                              "raw":  "A) Monitor signal() has no effect if no process is waiting; Semaphore signal() increments semaphore value"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Monitor signal() blocks caller",
                                              "raw":  "B) Monitor signal() blocks caller"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Semaphore signal() deletes queue",
                                              "raw":  "C) Semaphore signal() deletes queue"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Both are identical",
                                              "raw":  "D) Both are identical"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Monitor signal() par koi waiting na ho toh disapear ho jata hai. Semaphore signal() value 1 se badha deta hai."
                      },
                      {
                          "id":  94,
                          "originalNum":  94,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "In Linux thread implementation (pthreads), pthread_create() spawns a thread. What resources are shared between threads of the same process?",
                          "rawQuestion":  "Q94. In Linux thread implementation (pthreads), pthread_create() spawns a thread. What resources are shared between threads of the same process?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Registers and Stack",
                                              "raw":  "A) Registers and Stack"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Global variables, Heap memory, and File descriptors",
                                              "raw":  "B) Global variables, Heap memory, and File descriptors"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Thread ID and Program Counter",
                                              "raw":  "C) Thread ID and Program Counter"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Stack frames",
                                              "raw":  "D) Stack frames"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Same process ke threads Global Data, Heap, aur Open Files share karte hain."
                      },
                      {
                          "id":  95,
                          "originalNum":  95,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Consider User-Level Threads (ULT) vs Kernel-Level Threads (KLT). Which of the following is TRUE?",
                          "rawQuestion":  "Q95. Consider User-Level Threads (ULT) vs Kernel-Level Threads (KLT). Which of the following is TRUE?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Context switching between ULTs requires OS kernel intervention",
                                              "raw":  "A) Context switching between ULTs requires OS kernel intervention"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "KLTs can take advantage of Multicore hardware by running threads in parallel on separate CPUs",
                                              "raw":  "B) KLTs can take advantage of Multicore hardware by running threads in parallel on separate CPUs"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "ULTs are slower to create than KLTs",
                                              "raw":  "C) ULTs are slower to create than KLTs"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "KLTs block entire process on single thread I/O",
                                              "raw":  "D) KLTs block entire process on single thread I/O"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "KLT ko kernel schedule karta hai, isliye multi-core CPUs par parallel execute ho sakte hain."
                      },
                      {
                          "id":  96,
                          "originalNum":  96,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "In Many-to-Many multithreading model, M User-Level Threads are mapped to N Kernel-Level Threads. Which relationship holds?",
                          "rawQuestion":  "Q96. In Many-to-Many multithreading model, M User-Level Threads are mapped to N Kernel-Level Threads. Which relationship holds?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "M \u003e= N",
                                              "raw":  "A) M \u003e= N"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "M \u003c N always",
                                              "raw":  "B) M \u003c N always"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "M = 0",
                                              "raw":  "C) M = 0"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "N = 1 always",
                                              "raw":  "D) N = 1 always"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Many-to-Many model me M \u003e= N hota hai."
                      },
                      {
                          "id":  97,
                          "originalNum":  97,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "What is the main drawback of One-to-One multithreading model?",
                          "rawQuestion":  "Q97. What is the main drawback of One-to-One multithreading model?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Cannot use multi-core",
                                              "raw":  "A) Cannot use multi-core"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Creating a user thread requires creating a corresponding kernel thread, adding overhead",
                                              "raw":  "B) Creating a user thread requires creating a corresponding kernel thread, adding overhead"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Blocking I/O halts whole process",
                                              "raw":  "C) Blocking I/O halts whole process"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "No thread stack",
                                              "raw":  "D) No thread stack"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "One-to-One model me har user thread ke sath kernel thread create karne se overhead badhta hai."
                      },
                      {
                          "id":  98,
                          "originalNum":  98,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Which POSIX function call is used to wait for a thread to terminate in C multithreading?",
                          "rawQuestion":  "Q98. Which POSIX function call is used to wait for a thread to terminate in C multithreading?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "pthread_exit()",
                                              "raw":  "A) pthread_exit()"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "pthread_join()",
                                              "raw":  "B) pthread_join()"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "pthread_yield()",
                                              "raw":  "C) pthread_yield()"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "pthread_cancel()",
                                              "raw":  "D) pthread_cancel()"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "pthread_join() target thread termination tak calling thread ko block karta hai."
                      },
                      {
                          "id":  99,
                          "originalNum":  99,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Consider code snippet executed by 2 concurrent processes sharing integer x = 10:\r\nProcess P1: x = x + 5; | Process P2: x = x * 2;\r\nIf instructions interleave at assembly level, which final value of x is produced if P1 completes fully before P2 starts?",
                          "rawQuestion":  "Q99. Consider code snippet executed by 2 concurrent processes sharing integer x = 10:\r\nProcess P1: x = x + 5; | Process P2: x = x * 2;\r\nIf instructions interleave at assembly level, which final value of x is produced if P1 completes fully before P2 starts?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "30",
                                              "raw":  "A) 30"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "25",
                                              "raw":  "B) 25"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "15",
                                              "raw":  "C) 15"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "20",
                                              "raw":  "D) 20"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "P1 then P2: (10 + 5) * 2 = 30."
                      },
                      {
                          "id":  100,
                          "originalNum":  100,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "What is the default value of Binary Semaphore mutex when guarding a critical section?",
                          "rawQuestion":  "Q100. What is the default value of Binary Semaphore mutex when guarding a critical section?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "0",
                                              "raw":  "A) 0"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "1",
                                              "raw":  "B) 1"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "-1",
                                              "raw":  "C) -1"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Infinity",
                                              "raw":  "D) Infinity"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Mutex initially 1 (unlocked) set kiya jata hai."
                      },
                      {
                          "id":  101,
                          "originalNum":  101,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Statement I: In Counting Semaphore, wait() increments the value.\r\nStatement II: In Counting Semaphore, signal() decrements the value.\r\nSelect the correct option:",
                          "rawQuestion":  "Q101. Statement I: In Counting Semaphore, wait() increments the value.\r\nStatement II: In Counting Semaphore, signal() decrements the value.\r\nSelect the correct option:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Both Statements are true",
                                              "raw":  "A) Both Statements are true"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Both Statements are false",
                                              "raw":  "B) Both Statements are false"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Statement I is true, Statement II is false",
                                              "raw":  "C) Statement I is true, Statement II is false"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Statement I is false, Statement II is true",
                                              "raw":  "D) Statement I is false, Statement II is true"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Dono Statements False hain."
                      },
                      {
                          "id":  102,
                          "originalNum":  102,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "If 3 processes P1, P2, P3 call wait(S) sequentially on a counting semaphore S initially = 1, what will be the value of S?",
                          "rawQuestion":  "Q102. If 3 processes P1, P2, P3 call wait(S) sequentially on a counting semaphore S initially = 1, what will be the value of S?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "-2",
                                              "raw":  "A) -2"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "1",
                                              "raw":  "B) 1"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "-3",
                                              "raw":  "C) -3"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "0",
                                              "raw":  "D) 0"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "S = 1 - 3 = -2."
                      },
                      {
                          "id":  103,
                          "originalNum":  103,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "In the previous question (Q102), how many processes are blocked waiting in the queue?",
                          "rawQuestion":  "Q103. In the previous question (Q102), how many processes are blocked waiting in the queue?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "1",
                                              "raw":  "A) 1"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "2",
                                              "raw":  "B) 2"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "3",
                                              "raw":  "C) 3"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "0",
                                              "raw":  "D) 0"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "S = -2 =\u003e 2 processes blocked in queue."
                      },
                      {
                          "id":  104,
                          "originalNum":  104,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Which process synchronization hardware instruction atomizes Swap operation between two memory words?",
                          "rawQuestion":  "Q104. Which process synchronization hardware instruction atomizes Swap operation between two memory words?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Swap(boolean *a, boolean *b)",
                                              "raw":  "A) Swap(boolean *a, boolean *b)"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "InterruptDisable()",
                                              "raw":  "B) InterruptDisable()"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Pipe()",
                                              "raw":  "C) Pipe()"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Fork()",
                                              "raw":  "D) Fork()"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Swap() hardware instruction atomic swap karti hai."
                      },
                      {
                          "id":  105,
                          "originalNum":  105,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Which of the following is a classic synchronization problem involving reader processes and writer processes?",
                          "rawQuestion":  "Q105. Which of the following is a classic synchronization problem involving reader processes and writer processes?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Readers-Writers Problem",
                                              "raw":  "A) Readers-Writers Problem"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Banker\u0027s Problem",
                                              "raw":  "B) Banker\u0027s Problem"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Belady\u0027s Anomaly",
                                              "raw":  "C) Belady\u0027s Anomaly"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Page Fault Problem",
                                              "raw":  "D) Page Fault Problem"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Readers-Writers Problem classic synchronization scenario hai."
                      },
                      {
                          "id":  106,
                          "originalNum":  106,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "In Sleeping Barber Problem, if a customer arrives and finds all waiting chairs occupied, what does the customer do?",
                          "rawQuestion":  "Q106. In Sleeping Barber Problem, if a customer arrives and finds all waiting chairs occupied, what does the customer do?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Waits in line",
                                              "raw":  "A) Waits in line"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Wakes up barber",
                                              "raw":  "B) Wakes up barber"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Leaves the barbershop (balking)",
                                              "raw":  "C) Leaves the barbershop (balking)"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Terminates system",
                                              "raw":  "D) Terminates system"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "Chairs full hone par customer shop chhod deta hai (balking)."
                      },
                      {
                          "id":  107,
                          "originalNum":  107,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Which of the following is NOT a valid criteria for Critical Section solution?",
                          "rawQuestion":  "Q107. Which of the following is NOT a valid criteria for Critical Section solution?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Mutual Exclusion",
                                              "raw":  "A) Mutual Exclusion"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Progress",
                                              "raw":  "B) Progress"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Bounded Waiting",
                                              "raw":  "C) Bounded Waiting"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "High CPU Clock Speed",
                                              "raw":  "D) High CPU Clock Speed"
                                          }
                                      ],
                          "correctAnswer":  "D",
                          "explanation":  "Hardware clock speed CS criteria nahi hai."
                      },
                      {
                          "id":  108,
                          "originalNum":  108,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Strict Alternation algorithm (turn variable) fails which critical section requirement?",
                          "rawQuestion":  "Q108. Strict Alternation algorithm (turn variable) fails which critical section requirement?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Mutual Exclusion",
                                              "raw":  "A) Mutual Exclusion"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Progress",
                                              "raw":  "B) Progress"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Bounded Waiting",
                                              "raw":  "C) Bounded Waiting"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Architecture Neutrality",
                                              "raw":  "D) Architecture Neutrality"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Strict Alternation Progress fail karta hai."
                      },
                      {
                          "id":  109,
                          "originalNum":  109,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Flag Array algorithm (flag[2]) for 2 processes fails which critical section requirement?",
                          "rawQuestion":  "Q109. Flag Array algorithm (flag[2]) for 2 processes fails which critical section requirement?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Mutual Exclusion",
                                              "raw":  "A) Mutual Exclusion"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Progress (leads to Deadlock when both set flag=true)",
                                              "raw":  "B) Progress (leads to Deadlock when both set flag=true)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Memory limit",
                                              "raw":  "C) Memory limit"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Bounded Waiting",
                                              "raw":  "D) Bounded Waiting"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Flag array algorithm Progress fail karta hai (deadlock)."
                      },
                      {
                          "id":  110,
                          "originalNum":  110,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Which mechanism prevents unbounded context switches in user-level thread libraries?",
                          "rawQuestion":  "Q110. Which mechanism prevents unbounded context switches in user-level thread libraries?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Scheduler Activations / Upcalls from Kernel",
                                              "raw":  "A) Scheduler Activations / Upcalls from Kernel"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Compaction",
                                              "raw":  "B) Compaction"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Page Faults",
                                              "raw":  "C) Page Faults"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Spinlocks",
                                              "raw":  "D) Spinlocks"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Scheduler Activations kernel se user thread library ko upcalls deti hain."
                      },
                      {
                          "id":  111,
                          "originalNum":  111,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Which of the following is a shared resource among threads of a process?",
                          "rawQuestion":  "Q111. Which of the following is a shared resource among threads of a process?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Program Counter",
                                              "raw":  "A) Program Counter"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Stack Pointer",
                                              "raw":  "B) Stack Pointer"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Global Variables",
                                              "raw":  "C) Global Variables"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Register Set",
                                              "raw":  "D) Register Set"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "Global variables threads dwara shared hote hain."
                      },
                      {
                          "id":  112,
                          "originalNum":  112,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Which POSIX function terminates the calling thread in C multithreading?",
                          "rawQuestion":  "Q112. Which POSIX function terminates the calling thread in C multithreading?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "pthread_exit()",
                                              "raw":  "A) pthread_exit()"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "pthread_join()",
                                              "raw":  "B) pthread_join()"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "exit()",
                                              "raw":  "C) exit()"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "kill()",
                                              "raw":  "D) kill()"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "pthread_exit() calling thread ko terminate karta hai."
                      },
                      {
                          "id":  113,
                          "originalNum":  113,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "If a thread calls standard C exit(0), what happens?",
                          "rawQuestion":  "Q113. If a thread calls standard C exit(0), what happens?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Only calling thread terminates",
                                              "raw":  "A) Only calling thread terminates"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Entire process and all its threads terminate immediately",
                                              "raw":  "B) Entire process and all its threads terminate immediately"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Thread pauses",
                                              "raw":  "C) Thread pauses"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "OS reboots",
                                              "raw":  "D) OS reboots"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "exit() poore process aur saare threads ko terminate kar deta hai."
                      },
                      {
                          "id":  114,
                          "originalNum":  114,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Spinlocks are appropriate for multi-core systems ONLY IF:",
                          "rawQuestion":  "Q114. Spinlocks are appropriate for multi-core systems ONLY IF:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Critical section execution time is very short compared to context switch time",
                                              "raw":  "A) Critical section execution time is very short compared to context switch time"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "System has 1 CPU only",
                                              "raw":  "B) System has 1 CPU only"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Memory is 1 GB",
                                              "raw":  "C) Memory is 1 GB"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Threads run sequentially",
                                              "raw":  "D) Threads run sequentially"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Spinlocks tabhi efficient hain jab CS execution time context switch overhead se chhota ho."
                      },
                      {
                          "id":  115,
                          "originalNum":  115,
                          "sectionId":  3,
                          "sectionTitle":  "Process Synchronization, Semaphores \u0026 Threads Numericals",
                          "question":  "Statement I: Monitors use condition variables for process synchronization.\r\nStatement II: wait() on a condition variable in a Monitor ALWAYS blocks the calling process.\r\nSelect the correct option:",
                          "rawQuestion":  "Q115. Statement I: Monitors use condition variables for process synchronization.\r\nStatement II: wait() on a condition variable in a Monitor ALWAYS blocks the calling process.\r\nSelect the correct option:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Both Statements are true",
                                              "raw":  "A) Both Statements are true"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Both Statements are false",
                                              "raw":  "B) Both Statements are false"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Statement I is true, Statement II is false",
                                              "raw":  "C) Statement I is true, Statement II is false"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Statement I is false, Statement II is true",
                                              "raw":  "D) Statement I is false, Statement II is true"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Dono Statements True hain."
                      },
                      {
                          "id":  116,
                          "originalNum":  116,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "Consider a system with 5 processes (P0..P4) and 3 resource types (A, B, C).\r\nTotal instances: A=10, B=5, C=7.\r\nAllocation Matrix: P0(0,1,0), P1(2,0,0), P2(3,0,2), P3(2,1,1), P4(0,0,2).\r\nMax Matrix: P0(7,5,3), P1(3,2,2), P2(9,0,2), P3(2,2,2), P4(4,3,3).\r\nWhat is the Available vector?",
                          "rawQuestion":  "Q116. Consider a system with 5 processes (P0..P4) and 3 resource types (A, B, C).\r\nTotal instances: A=10, B=5, C=7.\r\nAllocation Matrix: P0(0,1,0), P1(2,0,0), P2(3,0,2), P3(2,1,1), P4(0,0,2).\r\nMax Matrix: P0(7,5,3), P1(3,2,2), P2(9,0,2), P3(2,2,2), P4(4,3,3).\r\nWhat is the Available vector?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "(3, 3, 2)",
                                              "raw":  "A) (3, 3, 2)"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "(10, 5, 7)",
                                              "raw":  "B) (10, 5, 7)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "(0, 0, 0)",
                                              "raw":  "C) (0, 0, 0)"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "(2, 1, 1)",
                                              "raw":  "D) (2, 1, 1)"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Total Allocated = (7, 2, 5). Available = (10-7, 5-2, 7-5) = (3, 3, 2)."
                      },
                      {
                          "id":  117,
                          "originalNum":  117,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "In the previous system (Q116), what is the Need Matrix for process P1?",
                          "rawQuestion":  "Q117. In the previous system (Q116), what is the Need Matrix for process P1?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "(1, 2, 2)",
                                              "raw":  "A) (1, 2, 2)"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "(3, 2, 2)",
                                              "raw":  "B) (3, 2, 2)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "(2, 0, 0)",
                                              "raw":  "C) (2, 0, 0)"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "(0, 0, 0)",
                                              "raw":  "D) (0, 0, 0)"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Need[P1] = Max[P1] - Allocation[P1] = (3,2,2) - (2,0,0) = (1, 2, 2)."
                      },
                      {
                          "id":  118,
                          "originalNum":  118,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "In the system of Q116, which of the following is a valid Safe Sequence?",
                          "rawQuestion":  "Q118. In the system of Q116, which of the following is a valid Safe Sequence?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "\u003cP1, P3, P4, P0, P2\u003e",
                                              "raw":  "A) \u003cP1, P3, P4, P0, P2\u003e"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "\u003cP0, P1, P2, P3, P4\u003e",
                                              "raw":  "B) \u003cP0, P1, P2, P3, P4\u003e"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "\u003cP2, P1, P3, P4, P0\u003e",
                                              "raw":  "C) \u003cP2, P1, P3, P4, P0\u003e"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "No safe sequence exists",
                                              "raw":  "D) No safe sequence exists"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Safe Sequence: \u003cP1, P3, P4, P0, P2\u003e."
                      },
                      {
                          "id":  119,
                          "originalNum":  119,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "If process P1 makes a request Request_1 = (1, 0, 2), can the system grant this request immediately under Banker\u0027s Avoidance?",
                          "rawQuestion":  "Q119. If process P1 makes a request Request_1 = (1, 0, 2), can the system grant this request immediately under Banker\u0027s Avoidance?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Yes, because Request_1 \u003c= Need_1 and Request_1 \u003c= Available, and new state is Safe",
                                              "raw":  "A) Yes, because Request_1 \u003c= Need_1 and Request_1 \u003c= Available, and new state is Safe"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "No, system becomes deadlocked",
                                              "raw":  "B) No, system becomes deadlocked"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "No, Request_1 \u003e Available",
                                              "raw":  "C) No, Request_1 \u003e Available"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "No, Need becomes negative",
                                              "raw":  "D) No, Need becomes negative"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Request_1 \u003c= Need_1 and \u003c= Avail. Pretended allocation produces a Safe State."
                      },
                      {
                          "id":  120,
                          "originalNum":  120,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "Consider 6 processes sharing 14 units of a resource. Each process requires a maximum of 3 units. Is the system deadlock-free?",
                          "rawQuestion":  "Q120. Consider 6 processes sharing 14 units of a resource. Each process requires a maximum of 3 units. Is the system deadlock-free?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Yes, because R \u003e= P(n-1) + 1 (14 \u003e= 6(2)+1 = 13)",
                                              "raw":  "A) Yes, because R \u003e= P(n-1) + 1 (14 \u003e= 6(2)+1 = 13)"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "No, system is deadlocked",
                                              "raw":  "B) No, system is deadlocked"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Depends on AT",
                                              "raw":  "C) Depends on AT"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Needs 18 resources",
                                              "raw":  "D) Needs 18 resources"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Min R = 6(3 - 1) + 1 = 13. R = 14 \u003e= 13 =\u003e System is Deadlock-Free."
                      },
                      {
                          "id":  121,
                          "originalNum":  121,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "In a system, 5 processes compete for R units of a resource. Each process needs max 4 units. What is the MINIMUM value of R to guarantee deadlock-free operation?",
                          "rawQuestion":  "Q121. In a system, 5 processes compete for R units of a resource. Each process needs max 4 units. What is the MINIMUM value of R to guarantee deadlock-free operation?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "15",
                                              "raw":  "A) 15"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "16",
                                              "raw":  "B) 16"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "20",
                                              "raw":  "C) 20"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "17",
                                              "raw":  "D) 17"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "R \u003e= 5(4 - 1) + 1 = 16."
                      },
                      {
                          "id":  122,
                          "originalNum":  122,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "Processes P1..P4 have maximum demands of 3, 5, 2, 6 units of a resource. What is the minimum number of resources R required to prevent deadlock?",
                          "rawQuestion":  "Q122. Processes P1..P4 have maximum demands of 3, 5, 2, 6 units of a resource. What is the minimum number of resources R required to prevent deadlock?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "13",
                                              "raw":  "A) 13"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "14",
                                              "raw":  "B) 14"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "16",
                                              "raw":  "C) 16"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "12",
                                              "raw":  "D) 12"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "R \u003e= (2 + 4 + 1 + 5) + 1 = 13."
                      },
                      {
                          "id":  123,
                          "originalNum":  123,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "A system has 10 units of a resource and 4 processes P1..P4. Each process needs max 3 units. What is the MAXIMUM number of processes that can be added such that system remains deadlock-free?",
                          "rawQuestion":  "Q123. A system has 10 units of a resource and 4 processes P1..P4. Each process needs max 3 units. What is the MAXIMUM number of processes that can be added such that system remains deadlock-free?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "0 (Max 4 processes total allowed for R=10)",
                                              "raw":  "A) 0 (Max 4 processes total allowed for R=10)"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "1",
                                              "raw":  "B) 1"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "2",
                                              "raw":  "C) 2"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "3",
                                              "raw":  "D) 3"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "10 \u003e= P(2)+1 =\u003e P \u003c= 4. Max allowed = 4. 0 can be added."
                      },
                      {
                          "id":  124,
                          "originalNum":  124,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "Statement I: In Resource Allocation Graph, a cycle is a necessary condition for deadlock in all systems.\r\nStatement II: In single-instance resource systems, a cycle in RAG is a sufficient condition for deadlock.\r\nSelect the correct option:",
                          "rawQuestion":  "Q124. Statement I: In Resource Allocation Graph, a cycle is a necessary condition for deadlock in all systems.\r\nStatement II: In single-instance resource systems, a cycle in RAG is a sufficient condition for deadlock.\r\nSelect the correct option:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Both Statements are true",
                                              "raw":  "A) Both Statements are true"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Both Statements are false",
                                              "raw":  "B) Both Statements are false"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Statement I is true, Statement II is false",
                                              "raw":  "C) Statement I is true, Statement II is false"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Statement I is false, Statement II is true",
                                              "raw":  "D) Statement I is false, Statement II is true"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Dono Statements True hain."
                      },
                      {
                          "id":  125,
                          "originalNum":  125,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "Deadlock Prevention algorithm invalidates \u0027Hold and Wait\u0027 by requiring a process to:",
                          "rawQuestion":  "Q125. Deadlock Prevention algorithm invalidates \u0027Hold and Wait\u0027 by requiring a process to:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Request resources one-by-one",
                                              "raw":  "A) Request resources one-by-one"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Request and be allocated all its required resources at once before execution begins",
                                              "raw":  "B) Request and be allocated all its required resources at once before execution begins"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Preempt CPU",
                                              "raw":  "C) Preempt CPU"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Use semaphores",
                                              "raw":  "D) Use semaphores"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Hold \u0026 Wait prevent karne ke liye saare required resources ek sath allocate karwane padte hain."
                      },
                      {
                          "id":  126,
                          "originalNum":  126,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "Deadlock Prevention algorithm invalidates \u0027No Preemption\u0027 by enforcing:",
                          "rawQuestion":  "Q126. Deadlock Prevention algorithm invalidates \u0027No Preemption\u0027 by enforcing:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "If a process holding resources requests a resource that cannot be immediately allocated, all currently held resources are preempted/released",
                                              "raw":  "A) If a process holding resources requests a resource that cannot be immediately allocated, all currently held resources are preempted/released"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "High priority jobs run first",
                                              "raw":  "B) High priority jobs run first"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Timers on disk",
                                              "raw":  "C) Timers on disk"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Disabling interrupts",
                                              "raw":  "D) Disabling interrupts"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Naya resource nahi milne par purane held resources release karna No Preemption break karta hai."
                      },
                      {
                          "id":  127,
                          "originalNum":  127,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "Resource Allocation Graph (RAG) contains which types of nodes and edges?",
                          "rawQuestion":  "Q127. Resource Allocation Graph (RAG) contains which types of nodes and edges?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Nodes: Processes (Circles) \u0026 Resource Types (Rectangles); Edges: Request (P -\u003e R) \u0026 Assignment (R -\u003e P)",
                                              "raw":  "A) Nodes: Processes (Circles) \u0026 Resource Types (Rectangles); Edges: Request (P -\u003e R) \u0026 Assignment (R -\u003e P)"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Nodes: Files \u0026 Folders; Edges: Links",
                                              "raw":  "B) Nodes: Files \u0026 Folders; Edges: Links"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Nodes: Pages \u0026 Frames; Edges: Maps",
                                              "raw":  "C) Nodes: Pages \u0026 Frames; Edges: Maps"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Nodes: Threads \u0026 Locks; Edges: Calls",
                                              "raw":  "D) Nodes: Threads \u0026 Locks; Edges: Calls"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "RAG Nodes: Process (Circle), Resource (Rectangle); Edges: Request (P -\u003e R), Assignment (R -\u003e P)."
                      },
                      {
                          "id":  128,
                          "originalNum":  128,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "Which graph is constructed by removing resource nodes from a single-instance Resource Allocation Graph?",
                          "rawQuestion":  "Q128. Which graph is constructed by removing resource nodes from a single-instance Resource Allocation Graph?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Process Wait-for Graph (PWFG)",
                                              "raw":  "A) Process Wait-for Graph (PWFG)"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "State Transition Graph",
                                              "raw":  "B) State Transition Graph"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Gantt Chart",
                                              "raw":  "C) Gantt Chart"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Memory Map",
                                              "raw":  "D) Memory Map"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Resource nodes remove karne par PWFG banta hai."
                      },
                      {
                          "id":  129,
                          "originalNum":  129,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "In Banker\u0027s Safety Algorithm, if Work vector is initialized to Available and Finish[i] = false, process P_i can execute IF:",
                          "rawQuestion":  "Q129. In Banker\u0027s Safety Algorithm, if Work vector is initialized to Available and Finish[i] = false, process P_i can execute IF:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Need_i \u003c= Work",
                                              "raw":  "A) Need_i \u003c= Work"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Allocation_i \u003c= Work",
                                              "raw":  "B) Allocation_i \u003c= Work"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Max_i \u003c= Available",
                                              "raw":  "C) Max_i \u003c= Available"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Need_i \u003e Work",
                                              "raw":  "D) Need_i \u003e Work"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Safety algorithm check karta hai: Need_i \u003c= Work."
                      },
                      {
                          "id":  130,
                          "originalNum":  130,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "After process P_i finishes in Banker\u0027s Safety Algorithm, how is Work updated?",
                          "rawQuestion":  "Q130. After process P_i finishes in Banker\u0027s Safety Algorithm, how is Work updated?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Work = Work - Need_i",
                                              "raw":  "A) Work = Work - Need_i"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Work = Work + Allocation_i",
                                              "raw":  "B) Work = Work + Allocation_i"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Work = Work + Max_i",
                                              "raw":  "C) Work = Work + Max_i"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Work = Allocation_i",
                                              "raw":  "D) Work = Allocation_i"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Work = Work + Allocation_i."
                      },
                      {
                          "id":  131,
                          "originalNum":  131,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "What is the computational time complexity of Banker\u0027s Safety Algorithm for N processes and M resource types?",
                          "rawQuestion":  "Q131. What is the computational time complexity of Banker\u0027s Safety Algorithm for N processes and M resource types?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "O(N * M)",
                                              "raw":  "A) O(N * M)"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "O(N^2 * M)",
                                              "raw":  "B) O(N^2 * M)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "O(N * M^2)",
                                              "raw":  "C) O(N * M^2)"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "O(N^3)",
                                              "raw":  "D) O(N^3)"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Time complexity O(N^2 * M) hoti hai."
                      },
                      {
                          "id":  132,
                          "originalNum":  132,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "Deadlock Detection algorithm for multiple instance resources uses which data structures?",
                          "rawQuestion":  "Q132. Deadlock Detection algorithm for multiple instance resources uses which data structures?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Available, Allocation, Request, Finish",
                                              "raw":  "A) Available, Allocation, Request, Finish"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Page Table, Frame Table",
                                              "raw":  "B) Page Table, Frame Table"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Ready Queue, Wait Queue",
                                              "raw":  "C) Ready Queue, Wait Queue"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Stack, Heap",
                                              "raw":  "D) Stack, Heap"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Detection algorithm Available, Allocation, Request, Finish vectors use karta hai."
                      },
                      {
                          "id":  133,
                          "originalNum":  133,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "If Deadlock Detection algorithm reveals that Finish[i] == false for some processes, it implies:",
                          "rawQuestion":  "Q133. If Deadlock Detection algorithm reveals that Finish[i] == false for some processes, it implies:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "System is in Safe State",
                                              "raw":  "A) System is in Safe State"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Processes P_i are deadlocked",
                                              "raw":  "B) Processes P_i are deadlocked"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "System has 0 processes",
                                              "raw":  "C) System has 0 processes"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Memory is full",
                                              "raw":  "D) Memory is full"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Finish[i] == false wale processes deadlocked hain."
                      },
                      {
                          "id":  134,
                          "originalNum":  134,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "Which deadlock recovery approach has the LEAST operational cost?",
                          "rawQuestion":  "Q134. Which deadlock recovery approach has the LEAST operational cost?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Terminating all deadlocked processes simultaneously",
                                              "raw":  "A) Terminating all deadlocked processes simultaneously"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Aborting processes one-by-one based on priority/cost until cycle breaks",
                                              "raw":  "B) Aborting processes one-by-one based on priority/cost until cycle breaks"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Rebooting hardware server",
                                              "raw":  "C) Rebooting hardware server"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Compaction",
                                              "raw":  "D) Compaction"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "One-by-one process abort min work loss karta hai."
                      },
                      {
                          "id":  135,
                          "originalNum":  135,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "What is Checkpointing / Rollback in Deadlock Recovery?",
                          "rawQuestion":  "Q135. What is Checkpointing / Rollback in Deadlock Recovery?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Periodically saving process state to disk so process can be rolled back to last safe checkpoint if preempted",
                                              "raw":  "A) Periodically saving process state to disk so process can be rolled back to last safe checkpoint if preempted"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Formatting hard disk",
                                              "raw":  "B) Formatting hard disk"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Context switching",
                                              "raw":  "C) Context switching"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Recompiling program",
                                              "raw":  "D) Recompiling program"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Checkpointing process states ko disk par save karta hai rollback ke liye."
                      },
                      {
                          "id":  136,
                          "originalNum":  136,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "Which of the following is NOT a parameter considered when selecting a victim process for termination in Deadlock Recovery?",
                          "rawQuestion":  "Q136. Which of the following is NOT a parameter considered when selecting a victim process for termination in Deadlock Recovery?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Priority of the process",
                                              "raw":  "A) Priority of the process"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Process CPU burst time already consumed and remaining time",
                                              "raw":  "B) Process CPU burst time already consumed and remaining time"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Color of process UI theme",
                                              "raw":  "C) Color of process UI theme"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Resources held and resources needed by process",
                                              "raw":  "D) Resources held and resources needed by process"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "UI color consider nahi hota."
                      },
                      {
                          "id":  137,
                          "originalNum":  137,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "What is the main drawback of Deadlock Prevention algorithms?",
                          "rawQuestion":  "Q137. What is the main drawback of Deadlock Prevention algorithms?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "High CPU clock usage",
                                              "raw":  "A) High CPU clock usage"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Low resource utilization and reduced system throughput",
                                              "raw":  "B) Low resource utilization and reduced system throughput"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "System crash",
                                              "raw":  "C) System crash"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Unsorted queues",
                                              "raw":  "D) Unsorted queues"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Deadlock Prevention resource utilization aur throughput ghatata hai."
                      },
                      {
                          "id":  138,
                          "originalNum":  138,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "Which condition is invalidated if system forces a process to release all resources before requesting new ones?",
                          "rawQuestion":  "Q138. Which condition is invalidated if system forces a process to release all resources before requesting new ones?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Mutual Exclusion Invalidation",
                                              "raw":  "A) Mutual Exclusion Invalidation"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Hold \u0026 Wait Invalidation",
                                              "raw":  "B) Hold \u0026 Wait Invalidation"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Circular Wait Invalidation",
                                              "raw":  "C) Circular Wait Invalidation"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "No Preemption Invalidation",
                                              "raw":  "D) No Preemption Invalidation"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Hold \u0026 Wait condition invalidate hoti hai."
                      },
                      {
                          "id":  139,
                          "originalNum":  139,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "Can Read-Only files cause deadlock?",
                          "rawQuestion":  "Q139. Can Read-Only files cause deadlock?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Yes, always",
                                              "raw":  "A) Yes, always"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "No, because Read-Only files do not require Mutual Exclusion (shareable)",
                                              "raw":  "B) No, because Read-Only files do not require Mutual Exclusion (shareable)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Only in Windows",
                                              "raw":  "C) Only in Windows"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Only if memory \u003c 1GB",
                                              "raw":  "D) Only if memory \u003c 1GB"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Read-only files shareable hain, Mutual Exclusion nahi lagta."
                      },
                      {
                          "id":  140,
                          "originalNum":  140,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "Consider 3 processes P1, P2, P3 requesting 2 resource types R1(2 units), R2(2 units). Allocations: P1 holds R1(1), P2 holds R2(1), P3 holds R1(1), R2(1). Is system in Deadlock?",
                          "rawQuestion":  "Q140. Consider 3 processes P1, P2, P3 requesting 2 resource types R1(2 units), R2(2 units). Allocations: P1 holds R1(1), P2 holds R2(1), P3 holds R1(1), R2(1). Is system in Deadlock?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Yes",
                                              "raw":  "A) Yes"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "No, system is in safe state",
                                              "raw":  "B) No, system is in safe state"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Needs more RAM",
                                              "raw":  "C) Needs more RAM"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Cannot be determined",
                                              "raw":  "D) Cannot be determined"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "P3 finish hone par resources release kar dega -\u003e Safe!"
                      },
                      {
                          "id":  141,
                          "originalNum":  141,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "What is the relationship between Safe State, Unsafe State, and Deadlock State?",
                          "rawQuestion":  "Q141. What is the relationship between Safe State, Unsafe State, and Deadlock State?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Safe subset of Unsafe",
                                              "raw":  "A) Safe subset of Unsafe"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Deadlock subset of Unsafe State; Safe and Unsafe are disjoint",
                                              "raw":  "B) Deadlock subset of Unsafe State; Safe and Unsafe are disjoint"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Safe = Deadlock",
                                              "raw":  "C) Safe = Deadlock"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Unsafe subset of Safe",
                                              "raw":  "D) Unsafe subset of Safe"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Deadlock is a subset of Unsafe State. Safe and Unsafe are disjoint."
                      },
                      {
                          "id":  142,
                          "originalNum":  142,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "In Banker\u0027s Algorithm, a resource request by process P_i is granted ONLY IF:",
                          "rawQuestion":  "Q142. In Banker\u0027s Algorithm, a resource request by process P_i is granted ONLY IF:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Request_i \u003c= Need_i, Request_i \u003c= Available, AND allocating results in a Safe State",
                                              "raw":  "A) Request_i \u003c= Need_i, Request_i \u003c= Available, AND allocating results in a Safe State"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Request_i \u003e Available",
                                              "raw":  "B) Request_i \u003e Available"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "P_i is highest priority",
                                              "raw":  "C) P_i is highest priority"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "CPU is 100% idle",
                                              "raw":  "D) CPU is 100% idle"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Request \u003c= Need, Request \u003c= Available, aur new state Safe rehti hai."
                      },
                      {
                          "id":  143,
                          "originalNum":  143,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "Statement I: Starvation is identical to Deadlock.\r\nStatement II: Deadlock implies indefinite waiting for a set of processes, whereas Starvation implies indefinite waiting for individual processes due to scheduling bias.\r\nSelect the correct option:",
                          "rawQuestion":  "Q143. Statement I: Starvation is identical to Deadlock.\r\nStatement II: Deadlock implies indefinite waiting for a set of processes, whereas Starvation implies indefinite waiting for individual processes due to scheduling bias.\r\nSelect the correct option:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Both Statements are true",
                                              "raw":  "A) Both Statements are true"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Statement I is false, Statement II is true",
                                              "raw":  "B) Statement I is false, Statement II is true"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Statement I is true, Statement II is false",
                                              "raw":  "C) Statement I is true, Statement II is false"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Both Statements are false",
                                              "raw":  "D) Both Statements are false"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Starvation aur Deadlock different hain."
                      },
                      {
                          "id":  144,
                          "originalNum":  144,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "If 3 processes P1, P2, P3 share 4 units of a resource and each process needs max 2 units. Is deadlock possible?",
                          "rawQuestion":  "Q144. If 3 processes P1, P2, P3 share 4 units of a resource and each process needs max 2 units. Is deadlock possible?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Yes",
                                              "raw":  "A) Yes"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "No (Min R = 3(1)+1 = 4 units -\u003e Deadlock Free)",
                                              "raw":  "B) No (Min R = 3(1)+1 = 4 units -\u003e Deadlock Free)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Only in Linux",
                                              "raw":  "C) Only in Linux"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Needs 6 units",
                                              "raw":  "D) Needs 6 units"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Min R = 4 units. System Deadlock Free hai."
                      },
                      {
                          "id":  145,
                          "originalNum":  145,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "Consider a system with 3 processes P1, P2, P3 needing 3, 4, 2 units of a resource. Total available units = 6. Max allocated at worst-case before deadlock is:",
                          "rawQuestion":  "Q145. Consider a system with 3 processes P1, P2, P3 needing 3, 4, 2 units of a resource. Total available units = 6. Max allocated at worst-case before deadlock is:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "5",
                                              "raw":  "A) 5"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "6",
                                              "raw":  "B) 6"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "7",
                                              "raw":  "C) 7"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "4",
                                              "raw":  "D) 4"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Worst case allocation before deadlock = (2) + (3) + (1) = 6 units."
                      },
                      {
                          "id":  146,
                          "originalNum":  146,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "Which of the following resource allocation strategies avoids Starvation during Deadlock Recovery?",
                          "rawQuestion":  "Q146. Which of the following resource allocation strategies avoids Starvation during Deadlock Recovery?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Always selecting the same process as victim",
                                              "raw":  "A) Always selecting the same process as victim"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Including number of times a process was preempted/rolled back in victim selection cost formula",
                                              "raw":  "B) Including number of times a process was preempted/rolled back in victim selection cost formula"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Aborting all processes",
                                              "raw":  "C) Aborting all processes"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Disabling interrupts",
                                              "raw":  "D) Disabling interrupts"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Rollback count cost formula me add karne se starvation rukta hai."
                      },
                      {
                          "id":  147,
                          "originalNum":  147,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "Which condition is invalidated if system forces a process to release all resources before requesting new ones?",
                          "rawQuestion":  "Q147. Which condition is invalidated if system forces a process to release all resources before requesting new ones?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Mutual Exclusion",
                                              "raw":  "A) Mutual Exclusion"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Hold and Wait",
                                              "raw":  "B) Hold and Wait"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Circular Wait",
                                              "raw":  "C) Circular Wait"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "No Preemption",
                                              "raw":  "D) No Preemption"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Hold \u0026 Wait invalidate hota hai."
                      },
                      {
                          "id":  148,
                          "originalNum":  148,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "In Process Wait-for Graph (PWFG), an edge P_i -\u003e P_j signifies:",
                          "rawQuestion":  "Q148. In Process Wait-for Graph (PWFG), an edge P_i -\u003e P_j signifies:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Process P_i is waiting for process P_j to release a resource",
                                              "raw":  "A) Process P_i is waiting for process P_j to release a resource"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "P_i spawned P_j",
                                              "raw":  "B) P_i spawned P_j"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "P_i sent message to P_j",
                                              "raw":  "C) P_i sent message to P_j"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "P_j is child of P_i",
                                              "raw":  "D) P_j is child of P_i"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "P_i is waiting for resource held by P_j."
                      },
                      {
                          "id":  149,
                          "originalNum":  149,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "Which OS component executes the Banker\u0027s Safety check during resource allocation?",
                          "rawQuestion":  "Q149. Which OS component executes the Banker\u0027s Safety check during resource allocation?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Compiler",
                                              "raw":  "A) Compiler"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "OS Resource Manager / Kernel",
                                              "raw":  "B) OS Resource Manager / Kernel"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Device Driver",
                                              "raw":  "C) Device Driver"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "CPU ALU",
                                              "raw":  "D) CPU ALU"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "OS Resource Manager Kernel module execute karta hai."
                      },
                      {
                          "id":  150,
                          "originalNum":  150,
                          "sectionId":  4,
                          "sectionTitle":  "Deadlocks, Banker\u0027s Algorithm \u0026 Resource Allocation",
                          "question":  "Is Deadlock Detection executed continuously on every single instruction?",
                          "rawQuestion":  "Q150. Is Deadlock Detection executed continuously on every single instruction?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Yes",
                                              "raw":  "A) Yes"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "No, it is executed periodically or when CPU utilization drops below a threshold due to high overhead",
                                              "raw":  "B) No, it is executed periodically or when CPU utilization drops below a threshold due to high overhead"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Executed by user",
                                              "raw":  "C) Executed by user"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Executed in BIOS",
                                              "raw":  "D) Executed in BIOS"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Deadlock Detection periodic ya CPU drop hone par chala-ya jata hai."
                      },
                      {
                          "id":  151,
                          "originalNum":  151,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "Consider a 32-bit Logical Address Space with 4 KB (2^12 bytes) Page Size. How many entries are in the single-level Page Table?",
                          "rawQuestion":  "Q151. Consider a 32-bit Logical Address Space with 4 KB (2^12 bytes) Page Size. How many entries are in the single-level Page Table?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "2^12",
                                              "raw":  "A) 2^12"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "2^20",
                                              "raw":  "B) 2^20"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "2^32",
                                              "raw":  "C) 2^32"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "2^16",
                                              "raw":  "D) 2^16"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Page bits = 32 - 12 = 20 bits. Entries = 2^20 = 1,048,576."
                      },
                      {
                          "id":  152,
                          "originalNum":  152,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "In the previous question (Q151), if each Page Table Entry (PTE) takes 4 bytes, what is the total size of the single-level Page Table?",
                          "rawQuestion":  "Q152. In the previous question (Q151), if each Page Table Entry (PTE) takes 4 bytes, what is the total size of the single-level Page Table?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "4 KB",
                                              "raw":  "A) 4 KB"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "4 MB",
                                              "raw":  "B) 4 MB"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "1 MB",
                                              "raw":  "C) 1 MB"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "16 MB",
                                              "raw":  "D) 16 MB"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Page Table Size = 2^20 * 4 bytes = 4 MB."
                      },
                      {
                          "id":  153,
                          "originalNum":  153,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "Consider a system with 64 MB Physical Memory (2^26 bytes) and 4 KB Page Size (2^12 bytes). How many Frame bits are in the Physical Address?",
                          "rawQuestion":  "Q153. Consider a system with 64 MB Physical Memory (2^26 bytes) and 4 KB Page Size (2^12 bytes). How many Frame bits are in the Physical Address?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "14 bits",
                                              "raw":  "A) 14 bits"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "12 bits",
                                              "raw":  "B) 12 bits"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "26 bits",
                                              "raw":  "C) 26 bits"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "16 bits",
                                              "raw":  "D) 16 bits"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Frame bits = 26 - 12 = 14 bits."
                      },
                      {
                          "id":  154,
                          "originalNum":  154,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "Statement I: In Paging, Page Size is strictly equal to Frame Size.\r\nStatement II: Page Table maps Frame Number to Page Number.\r\nSelect the correct option:",
                          "rawQuestion":  "Q154. Statement I: In Paging, Page Size is strictly equal to Frame Size.\r\nStatement II: Page Table maps Frame Number to Page Number.\r\nSelect the correct option:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Both Statements are true",
                                              "raw":  "A) Both Statements are true"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Statement I is true, Statement II is false",
                                              "raw":  "B) Statement I is true, Statement II is false"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Statement I is false, Statement II is true",
                                              "raw":  "C) Statement I is false, Statement II is true"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Both Statements are false",
                                              "raw":  "D) Both Statements are false"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Statement I True. Statement II False (Page Table maps Page Number to Frame Number)."
                      },
                      {
                          "id":  155,
                          "originalNum":  155,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "Given TLB Hit Ratio = 90%, TLB search time = 10ns, Main Memory access time = 100ns. What is the Effective Memory Access Time (EMAT)?",
                          "rawQuestion":  "Q155. Given TLB Hit Ratio = 90%, TLB search time = 10ns, Main Memory access time = 100ns. What is the Effective Memory Access Time (EMAT)?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "120ns",
                                              "raw":  "A) 120ns"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "110ns",
                                              "raw":  "B) 110ns"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "130ns",
                                              "raw":  "C) 130ns"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "100ns",
                                              "raw":  "D) 100ns"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "EMAT = 0.90(10+100) + 0.10(10+200) = 99 + 21 = 120 ns."
                      },
                      {
                          "id":  156,
                          "originalNum":  156,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "Given Memory Access Time = 100ns, Page Fault Service Time = 10ms (10,000,000ns). If target EAT is 200ns, what is the maximum acceptable Page Fault Rate p?",
                          "rawQuestion":  "Q156. Given Memory Access Time = 100ns, Page Fault Service Time = 10ms (10,000,000ns). If target EAT is 200ns, what is the maximum acceptable Page Fault Rate p?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "1 x 10^-5",
                                              "raw":  "A) 1 x 10^-5"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "1 x 10^-7",
                                              "raw":  "B) 1 x 10^-7"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "0.01",
                                              "raw":  "C) 0.01"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "1 x 10^-3",
                                              "raw":  "D) 1 x 10^-3"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "200 = (1-p)(100) + p(10,000,000) =\u003e p = 1 x 10^-5."
                      },
                      {
                          "id":  157,
                          "originalNum":  157,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "Consider page reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2 with 3 frames (initially empty). How many Page Faults occur under FIFO page replacement?",
                          "rawQuestion":  "Q157. Consider page reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2 with 3 frames (initially empty). How many Page Faults occur under FIFO page replacement?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "9",
                                              "raw":  "A) 9"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "10",
                                              "raw":  "B) 10"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "7",
                                              "raw":  "C) 7"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "8",
                                              "raw":  "D) 8"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "FIFO page faults = 10."
                      },
                      {
                          "id":  158,
                          "originalNum":  158,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "In the previous question (Q157), how many Page Faults occur under LRU (Least Recently Used) page replacement?",
                          "rawQuestion":  "Q158. In the previous question (Q157), how many Page Faults occur under LRU (Least Recently Used) page replacement?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "10",
                                              "raw":  "A) 10"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "9",
                                              "raw":  "B) 9"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "8",
                                              "raw":  "C) 8"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "12",
                                              "raw":  "D) 12"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "LRU page faults = 9."
                      },
                      {
                          "id":  159,
                          "originalNum":  159,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "In the reference string of Q157, how many Page Faults occur under Optimal (OPT) page replacement?",
                          "rawQuestion":  "Q159. In the reference string of Q157, how many Page Faults occur under Optimal (OPT) page replacement?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "7",
                                              "raw":  "A) 7"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "9",
                                              "raw":  "B) 9"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "6",
                                              "raw":  "C) 6"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "8",
                                              "raw":  "D) 8"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "OPT page faults = 7."
                      },
                      {
                          "id":  160,
                          "originalNum":  160,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "Belady\u0027s Anomaly is demonstrated when increasing physical frame allocation from 3 to 4 frames results in MORE page faults for which reference string under FIFO?",
                          "rawQuestion":  "Q160. Belady\u0027s Anomaly is demonstrated when increasing physical frame allocation from 3 to 4 frames results in MORE page faults for which reference string under FIFO?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5",
                                              "raw":  "A) 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "7, 0, 1, 2, 0, 3, 0, 4",
                                              "raw":  "B) 7, 0, 1, 2, 0, 3, 0, 4"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "0, 0, 0, 0, 0",
                                              "raw":  "C) 0, 0, 0, 0, 0"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "1, 2, 3, 1, 2, 3",
                                              "raw":  "D) 1, 2, 3, 1, 2, 3"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "String 1,2,3,4,1,2,5,1,2,3,4,5 gives 9 faults with 3 frames and 10 faults with 4 frames under FIFO."
                      },
                      {
                          "id":  161,
                          "originalNum":  161,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "Which of the following Page Replacement algorithms does NOT suffer from Belady\u0027s Anomaly?",
                          "rawQuestion":  "Q161. Which of the following Page Replacement algorithms does NOT suffer from Belady\u0027s Anomaly?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "FIFO",
                                              "raw":  "A) FIFO"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Second Chance Algorithm",
                                              "raw":  "B) Second Chance Algorithm"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Least Recently Used (LRU)",
                                              "raw":  "C) Least Recently Used (LRU)"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "FIFO with 2 frames",
                                              "raw":  "D) FIFO with 2 frames"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "LRU is a Stack Algorithm and immune to Belady\u0027s Anomaly."
                      },
                      {
                          "id":  162,
                          "originalNum":  162,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "In Segmentation, a Logical Address consists of tuple \u003cs, d\u003e. If Segment Table entry for segment s=2 has Base = 2000 and Limit = 450, what is the Physical Address for offset d = 300?",
                          "rawQuestion":  "Q162. In Segmentation, a Logical Address consists of tuple \u003cs, d\u003e. If Segment Table entry for segment s=2 has Base = 2000 and Limit = 450, what is the Physical Address for offset d = 300?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "2300",
                                              "raw":  "A) 2300"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Trap / Out of bounds",
                                              "raw":  "B) Trap / Out of bounds"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "2450",
                                              "raw":  "C) 2450"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "1700",
                                              "raw":  "D) 1700"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "d=300 \u003c Limit(450) =\u003e Valid! Physical Address = 2000 + 300 = 2300."
                      },
                      {
                          "id":  163,
                          "originalNum":  163,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "In the previous question (Q162), what happens if CPU requests offset d = 500 for segment s=2?",
                          "rawQuestion":  "Q163. In the previous question (Q162), what happens if CPU requests offset d = 500 for segment s=2?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Physical Address 2500 is accessed",
                                              "raw":  "A) Physical Address 2500 is accessed"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Hardware boundary TRAP / Addressing Exception is raised",
                                              "raw":  "B) Hardware boundary TRAP / Addressing Exception is raised"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Segment is expanded",
                                              "raw":  "C) Segment is expanded"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Page Fault",
                                              "raw":  "D) Page Fault"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "d=500 \u003e= Limit(450) =\u003e TRAP / Out of bounds!"
                      },
                      {
                          "id":  164,
                          "originalNum":  164,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "What is the primary motivation for Multi-Level Paging (e.g. 2-level or 3-level paging)?",
                          "rawQuestion":  "Q164. What is the primary motivation for Multi-Level Paging (e.g. 2-level or 3-level paging)?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Speeding up address translation",
                                              "raw":  "A) Speeding up address translation"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Avoiding allocating a massive contiguous block of memory for a single outer page table",
                                              "raw":  "B) Avoiding allocating a massive contiguous block of memory for a single outer page table"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Eliminating internal fragmentation",
                                              "raw":  "C) Eliminating internal fragmentation"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Increasing disk space",
                                              "raw":  "D) Increasing disk space"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Avoiding large contiguous RAM allocation for outer page table."
                      },
                      {
                          "id":  165,
                          "originalNum":  165,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "In a 2-level Paging scheme with 32-bit Virtual Address divided into p1 = 10 bits, p2 = 10 bits, and offset d = 12 bits, how many entries are in the Outer Page Table?",
                          "rawQuestion":  "Q165. In a 2-level Paging scheme with 32-bit Virtual Address divided into p1 = 10 bits, p2 = 10 bits, and offset d = 12 bits, how many entries are in the Outer Page Table?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "2^12",
                                              "raw":  "A) 2^12"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "2^10 = 1024",
                                              "raw":  "B) 2^10 = 1024"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "2^20",
                                              "raw":  "C) 2^20"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "2^32",
                                              "raw":  "D) 2^32"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Outer Page Table has 2^10 = 1024 entries."
                      },
                      {
                          "id":  166,
                          "originalNum":  166,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "What is an Inverted Page Table?",
                          "rawQuestion":  "Q166. What is an Inverted Page Table?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Page table stored on secondary disk",
                                              "raw":  "A) Page table stored on secondary disk"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "A single global table for all processes with one entry per physical memory frame",
                                              "raw":  "B) A single global table for all processes with one entry per physical memory frame"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Segment table inverted",
                                              "raw":  "C) Segment table inverted"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Cache memory table",
                                              "raw":  "D) Cache memory table"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Inverted Page Table stores 1 entry per physical frame globally."
                      },
                      {
                          "id":  167,
                          "originalNum":  167,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "What extra information must be included in each entry of an Inverted Page Table?",
                          "rawQuestion":  "Q167. What extra information must be included in each entry of an Inverted Page Table?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Process ID (PID) + Page Number",
                                              "raw":  "A) Process ID (PID) + Page Number"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Frame Number only",
                                              "raw":  "B) Frame Number only"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Disk block sector",
                                              "raw":  "C) Disk block sector"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Code segment string",
                                              "raw":  "D) Code segment string"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "PID + Logical Page Number."
                      },
                      {
                          "id":  168,
                          "originalNum":  168,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "Which page table entry bit indicates whether a page has been modified since being loaded into main memory?",
                          "rawQuestion":  "Q168. Which page table entry bit indicates whether a page has been modified since being loaded into main memory?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Present / Valid Bit",
                                              "raw":  "A) Present / Valid Bit"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Dirty / Modified Bit",
                                              "raw":  "B) Dirty / Modified Bit"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Referenced Bit",
                                              "raw":  "C) Referenced Bit"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Protection Bit",
                                              "raw":  "D) Protection Bit"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Dirty / Modified Bit."
                      },
                      {
                          "id":  169,
                          "originalNum":  169,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "Which page table entry bit indicates whether a page is currently loaded in physical RAM?",
                          "rawQuestion":  "Q169. Which page table entry bit indicates whether a page is currently loaded in physical RAM?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Dirty Bit",
                                              "raw":  "A) Dirty Bit"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Valid / Present Bit",
                                              "raw":  "B) Valid / Present Bit"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Execution Bit",
                                              "raw":  "C) Execution Bit"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Frame Bit",
                                              "raw":  "D) Frame Bit"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Valid / Present Bit."
                      },
                      {
                          "id":  170,
                          "originalNum":  170,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "Consider dynamic memory allocation using First Fit on free holes of sizes 100 KB, 500 KB, 200 KB, 300 KB, 600 KB. Which hole will be allocated to a process of size 212 KB?",
                          "rawQuestion":  "Q170. Consider dynamic memory allocation using First Fit on free holes of sizes 100 KB, 500 KB, 200 KB, 300 KB, 600 KB. Which hole will be allocated to a process of size 212 KB?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "500 KB",
                                              "raw":  "A) 500 KB"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "300 KB",
                                              "raw":  "B) 300 KB"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "600 KB",
                                              "raw":  "C) 600 KB"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "200 KB",
                                              "raw":  "D) 200 KB"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "First Fit allocates 500 KB hole."
                      },
                      {
                          "id":  171,
                          "originalNum":  171,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "In the previous question (Q170), which hole will Best Fit allocate to the 212 KB process?",
                          "rawQuestion":  "Q171. In the previous question (Q170), which hole will Best Fit allocate to the 212 KB process?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "500 KB",
                                              "raw":  "A) 500 KB"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "300 KB",
                                              "raw":  "B) 300 KB"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "600 KB",
                                              "raw":  "C) 600 KB"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "200 KB",
                                              "raw":  "D) 200 KB"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Best Fit allocates 300 KB hole."
                      },
                      {
                          "id":  172,
                          "originalNum":  172,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "In Q170, which hole will Worst Fit allocate to the 212 KB process?",
                          "rawQuestion":  "Q172. In Q170, which hole will Worst Fit allocate to the 212 KB process?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "500 KB",
                                              "raw":  "A) 500 KB"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "300 KB",
                                              "raw":  "B) 300 KB"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "600 KB",
                                              "raw":  "C) 600 KB"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "200 KB",
                                              "raw":  "D) 200 KB"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "Worst Fit allocates 600 KB hole."
                      },
                      {
                          "id":  173,
                          "originalNum":  173,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "What is the main advantage of Non-Contiguous memory allocation over Contiguous memory allocation?",
                          "rawQuestion":  "Q173. What is the main advantage of Non-Contiguous memory allocation over Contiguous memory allocation?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Faster execution",
                                              "raw":  "A) Faster execution"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Eliminates External Fragmentation by allowing process blocks to be placed anywhere in available RAM",
                                              "raw":  "B) Eliminates External Fragmentation by allowing process blocks to be placed anywhere in available RAM"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Zero internal fragmentation",
                                              "raw":  "C) Zero internal fragmentation"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "No page tables needed",
                                              "raw":  "D) No page tables needed"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Eliminates External Fragmentation."
                      },
                      {
                          "id":  174,
                          "originalNum":  174,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "Consider page reference string 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5 with 3 frames under FIFO. How many page faults occur?",
                          "rawQuestion":  "Q174. Consider page reference string 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5 with 3 frames under FIFO. How many page faults occur?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "9",
                                              "raw":  "A) 9"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "10",
                                              "raw":  "B) 10"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "8",
                                              "raw":  "C) 8"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "12",
                                              "raw":  "D) 12"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "9 page faults."
                      },
                      {
                          "id":  175,
                          "originalNum":  175,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "In Q174, if physical frames are increased to 4 under FIFO, how many page faults occur?",
                          "rawQuestion":  "Q175. In Q174, if physical frames are increased to 4 under FIFO, how many page faults occur?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "10 (Demonstrating Belady\u0027s Anomaly)",
                                              "raw":  "A) 10 (Demonstrating Belady\u0027s Anomaly)"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "8",
                                              "raw":  "B) 8"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "7",
                                              "raw":  "C) 7"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "9",
                                              "raw":  "D) 9"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "10 page faults (Belady\u0027s Anomaly!)."
                      },
                      {
                          "id":  176,
                          "originalNum":  176,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "Which page replacement algorithm replaces the page that has been in memory the longest, regardless of how recently it was accessed?",
                          "rawQuestion":  "Q176. Which page replacement algorithm replaces the page that has been in memory the longest, regardless of how recently it was accessed?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "LRU",
                                              "raw":  "A) LRU"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Optimal",
                                              "raw":  "B) Optimal"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "First-In First-Out (FIFO)",
                                              "raw":  "C) First-In First-Out (FIFO)"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "LFU",
                                              "raw":  "D) LFU"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "FIFO."
                      },
                      {
                          "id":  177,
                          "originalNum":  177,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "What is the Second-Chance (Clock) Page Replacement Algorithm?",
                          "rawQuestion":  "Q177. What is the Second-Chance (Clock) Page Replacement Algorithm?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Modified FIFO using a 1-bit Reference Bit (if reference bit = 1, give second chance, set to 0, advance clock hand)",
                                              "raw":  "A) Modified FIFO using a 1-bit Reference Bit (if reference bit = 1, give second chance, set to 0, advance clock hand)"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "LRU implementation",
                                              "raw":  "B) LRU implementation"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Optimal implementation",
                                              "raw":  "C) Optimal implementation"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Random replacement",
                                              "raw":  "D) Random replacement"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Modified FIFO with Reference Bit."
                      },
                      {
                          "id":  178,
                          "originalNum":  178,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "Working Set Model for prevention of Thrashing is based on:",
                          "rawQuestion":  "Q178. Working Set Model for prevention of Thrashing is based on:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Random selection",
                                              "raw":  "A) Random selection"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Locality of Reference model tracking active pages referenced by process in past delta time units",
                                              "raw":  "B) Locality of Reference model tracking active pages referenced by process in past delta time units"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Hard disk speed",
                                              "raw":  "C) Hard disk speed"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Page size",
                                              "raw":  "D) Page size"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Locality of Reference tracking."
                      },
                      {
                          "id":  179,
                          "originalNum":  179,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "If sum of Working Set Sizes sum(WSS_i) \u003e Total RAM Frames, what will happen to the system?",
                          "rawQuestion":  "Q179. If sum of Working Set Sizes sum(WSS_i) \u003e Total RAM Frames, what will happen to the system?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "System operates efficiently",
                                              "raw":  "A) System operates efficiently"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "System enters Thrashing",
                                              "raw":  "B) System enters Thrashing"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Memory expands",
                                              "raw":  "C) Memory expands"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "CPU clock speeds up",
                                              "raw":  "D) CPU clock speeds up"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "System enters Thrashing."
                      },
                      {
                          "id":  180,
                          "originalNum":  180,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "What is Page-Fault Frequency (PFF) strategy for thrashing control?",
                          "rawQuestion":  "Q180. What is Page-Fault Frequency (PFF) strategy for thrashing control?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Sets upper and lower bounds on process page-fault rate; allocates frames if rate \u003e upper, reclaims if rate \u003c lower",
                                              "raw":  "A) Sets upper and lower bounds on process page-fault rate; allocates frames if rate \u003e upper, reclaims if rate \u003c lower"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Deletes files",
                                              "raw":  "B) Deletes files"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Reboots CPU",
                                              "raw":  "C) Reboots CPU"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Disables paging",
                                              "raw":  "D) Disables paging"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Sets upper and lower thresholds on page fault rate."
                      },
                      {
                          "id":  181,
                          "originalNum":  181,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "In Segmentation with Paging, address translation requires accessing how many memory tables in absence of TLB?",
                          "rawQuestion":  "Q181. In Segmentation with Paging, address translation requires accessing how many memory tables in absence of TLB?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "1",
                                              "raw":  "A) 1"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "2 (Segment Table then Page Table)",
                                              "raw":  "B) 2 (Segment Table then Page Table)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "3",
                                              "raw":  "C) 3"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "0",
                                              "raw":  "D) 0"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "2 tables (Segment Table then Page Table)."
                      },
                      {
                          "id":  182,
                          "originalNum":  182,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "Consider 32-bit Logical Address space, 4 KB Page size. If Outer Page Table has 1024 entries and Inner Page Table has 1024 entries, how many bits are used for Offset d?",
                          "rawQuestion":  "Q182. Consider 32-bit Logical Address space, 4 KB Page size. If Outer Page Table has 1024 entries and Inner Page Table has 1024 entries, how many bits are used for Offset d?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "10 bits",
                                              "raw":  "A) 10 bits"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "12 bits",
                                              "raw":  "B) 12 bits"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "20 bits",
                                              "raw":  "C) 20 bits"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "32 bits",
                                              "raw":  "D) 32 bits"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "4 KB = 2^12 =\u003e Offset d = 12 bits."
                      },
                      {
                          "id":  183,
                          "originalNum":  183,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "Which hardware register holds the base address of the active process\u0027s Page Table?",
                          "rawQuestion":  "Q183. Which hardware register holds the base address of the active process\u0027s Page Table?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Program Counter",
                                              "raw":  "A) Program Counter"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Page-Table Base Register (PTBR)",
                                              "raw":  "B) Page-Table Base Register (PTBR)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Stack Pointer",
                                              "raw":  "C) Stack Pointer"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Instruction Register",
                                              "raw":  "D) Instruction Register"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Page-Table Base Register (PTBR)."
                      },
                      {
                          "id":  184,
                          "originalNum":  184,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "What is the purpose of ASID (Address Space Identifier) stored inside TLB entries?",
                          "rawQuestion":  "Q184. What is the purpose of ASID (Address Space Identifier) stored inside TLB entries?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Uniquely identifies process owning the entry to prevent flushing TLB on context switch",
                                              "raw":  "A) Uniquely identifies process owning the entry to prevent flushing TLB on context switch"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Stores frame number",
                                              "raw":  "B) Stores frame number"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Stores disk sector",
                                              "raw":  "C) Stores disk sector"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Stores thread ID",
                                              "raw":  "D) Stores thread ID"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Prevents flushing TLB on context switch."
                      },
                      {
                          "id":  185,
                          "originalNum":  185,
                          "sectionId":  5,
                          "sectionTitle":  "Memory Management, Paging, Segmentation, TLB \u0026 Page Replacement",
                          "question":  "Which of the following is TRUE regarding Internal Fragmentation in Paging?",
                          "rawQuestion":  "Q185. Which of the following is TRUE regarding Internal Fragmentation in Paging?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Occurs in every page",
                                              "raw":  "A) Occurs in every page"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Occurs only on the LAST page of a process if process size is not an exact multiple of page size",
                                              "raw":  "B) Occurs only on the LAST page of a process if process size is not an exact multiple of page size"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Is equal to RAM size",
                                              "raw":  "C) Is equal to RAM size"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Never occurs",
                                              "raw":  "D) Never occurs"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Occurs only on the LAST page of a process."
                      },
                      {
                          "id":  186,
                          "originalNum":  186,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "Consider a hard disk spinning at 7200 RPM. What is the Average Rotational Latency of the disk?",
                          "rawQuestion":  "Q186. Consider a hard disk spinning at 7200 RPM. What is the Average Rotational Latency of the disk?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "8.33ms",
                                              "raw":  "A) 8.33ms"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "4.17ms",
                                              "raw":  "B) 4.17ms"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "12.0ms",
                                              "raw":  "C) 12.0ms"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "2.08ms",
                                              "raw":  "D) 2.08ms"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "7200 RPM = 120 RPS. Latency = 1/120 = 8.33ms =\u003e Avg Latency = 4.17ms."
                      },
                      {
                          "id":  187,
                          "originalNum":  187,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "A hard disk has 8 double-sided platters (16 surfaces), 1024 tracks per surface, 256 sectors per track, and 512 bytes per sector. What is the total Disk Capacity?",
                          "rawQuestion":  "Q187. A hard disk has 8 double-sided platters (16 surfaces), 1024 tracks per surface, 256 sectors per track, and 512 bytes per sector. What is the total Disk Capacity?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "2 GB",
                                              "raw":  "A) 2 GB"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "1 GB",
                                              "raw":  "B) 1 GB"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "512 MB",
                                              "raw":  "C) 512 MB"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "4 GB",
                                              "raw":  "D) 4 GB"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Capacity = 16 * 1024 * 256 * 512 = 2^31 bytes = 2 GB."
                      },
                      {
                          "id":  188,
                          "originalNum":  188,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "In the previous disk (Q187), if the disk rotates at 3600 RPM (60 RPS), what is the Data Transfer Rate?",
                          "rawQuestion":  "Q188. In the previous disk (Q187), if the disk rotates at 3600 RPM (60 RPS), what is the Data Transfer Rate?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "7.5 MB/sec",
                                              "raw":  "A) 7.5 MB/sec"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "120 MB/sec",
                                              "raw":  "B) 120 MB/sec"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "60 MB/sec",
                                              "raw":  "C) 60 MB/sec"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "15 MB/sec",
                                              "raw":  "D) 15 MB/sec"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Transfer Rate = 60 * 128 KB * 16 = 120 MB/sec."
                      },
                      {
                          "id":  189,
                          "originalNum":  189,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "Consider disk queue requests: 98, 183, 37, 122, 14, 124, 65, 67. Head starts at 53. Under FCFS, what is the total head movement in cylinders?",
                          "rawQuestion":  "Q189. Consider disk queue requests: 98, 183, 37, 122, 14, 124, 65, 67. Head starts at 53. Under FCFS, what is the total head movement in cylinders?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "640",
                                              "raw":  "A) 640"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "236",
                                              "raw":  "B) 236"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "332",
                                              "raw":  "C) 332"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "1024",
                                              "raw":  "D) 1024"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "FCFS total head movement = 640 cylinders."
                      },
                      {
                          "id":  190,
                          "originalNum":  190,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "In the previous disk queue (Q189), head starts at 53. Under Shortest Seek Time First (SSTF), what is the total head movement?",
                          "rawQuestion":  "Q190. In the previous disk queue (Q189), head starts at 53. Under Shortest Seek Time First (SSTF), what is the total head movement?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "236 cylinders",
                                              "raw":  "A) 236 cylinders"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "640 cylinders",
                                              "raw":  "B) 640 cylinders"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "332 cylinders",
                                              "raw":  "C) 332 cylinders"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "208 cylinders",
                                              "raw":  "D) 208 cylinders"
                                          }
                                      ],
                          "correctAnswer":  "D",
                          "explanation":  "SSTF path from 53: 53 -\u003e 65 -\u003e 67 -\u003e 37 -\u003e 14 -\u003e 98 -\u003e 122 -\u003e 124 -\u003e 183. Total = (53-14) + (183-14) = 208 cylinders."
                      },
                      {
                          "id":  191,
                          "originalNum":  191,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "Consider disk requests 98, 183, 37, 122, 14, 124, 65, 67 on cylinders 0-199. Head starts at 53 moving towards 199. Under SCAN algorithm, total head movement is:",
                          "rawQuestion":  "Q191. Consider disk requests 98, 183, 37, 122, 14, 124, 65, 67 on cylinders 0-199. Head starts at 53 moving towards 199. Under SCAN algorithm, total head movement is:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "331 cylinders",
                                              "raw":  "A) 331 cylinders"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "236 cylinders",
                                              "raw":  "B) 236 cylinders"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "382 cylinders",
                                              "raw":  "C) 382 cylinders"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "208 cylinders",
                                              "raw":  "D) 208 cylinders"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "SCAN path: 53 -\u003e 199 then down to 14. Total = (199-53) + (199-14) = 331 cylinders."
                      },
                      {
                          "id":  192,
                          "originalNum":  192,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "In Q191, under LOOK algorithm (moving towards 199), total head movement is:",
                          "rawQuestion":  "Q192. In Q191, under LOOK algorithm (moving towards 199), total head movement is:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "299 cylinders",
                                              "raw":  "A) 299 cylinders"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "331 cylinders",
                                              "raw":  "B) 331 cylinders"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "208 cylinders",
                                              "raw":  "C) 208 cylinders"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "350 cylinders",
                                              "raw":  "D) 350 cylinders"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "LOOK path: 53 -\u003e 183 then down to 14. Total = (183-53) + (183-14) = 299 cylinders."
                      },
                      {
                          "id":  193,
                          "originalNum":  193,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "Consider Unix C code:\r\nint main() { fork(); fork(); fork(); printf(\"CUET\\n\"); return 0; }\r\nHow many times is \"CUET\" printed?",
                          "rawQuestion":  "Q193. Consider Unix C code:\r\nint main() { fork(); fork(); fork(); printf(\"CUET\\n\"); return 0; }\r\nHow many times is \"CUET\" printed?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "3",
                                              "raw":  "A) 3"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "7",
                                              "raw":  "B) 7"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "8",
                                              "raw":  "C) 8"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "6",
                                              "raw":  "D) 6"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "3 consecutive fork() calls =\u003e 2^3 = 8 processes =\u003e Printed 8 times."
                      },
                      {
                          "id":  194,
                          "originalNum":  194,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "In Q193, how many CHILD processes were created during execution?",
                          "rawQuestion":  "Q194. In Q193, how many CHILD processes were created during execution?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "7",
                                              "raw":  "A) 7"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "8",
                                              "raw":  "B) 8"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "3",
                                              "raw":  "C) 3"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "4",
                                              "raw":  "D) 4"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Total child processes = 2^3 - 1 = 7 child processes."
                      },
                      {
                          "id":  195,
                          "originalNum":  195,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "Consider code:\r\nfor (int i=0; i\u003c3; i++) fork();\r\nHow many total process execution instances exist after loop finishes?",
                          "rawQuestion":  "Q195. Consider code:\r\nfor (int i=0; i\u003c3; i++) fork();\r\nHow many total process execution instances exist after loop finishes?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "3",
                                              "raw":  "A) 3"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "6",
                                              "raw":  "B) 6"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "8",
                                              "raw":  "C) 8"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "9",
                                              "raw":  "D) 9"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "2^3 = 8 process instances."
                      },
                      {
                          "id":  196,
                          "originalNum":  196,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "Consider UNIX Inode with 12 Direct block pointers, 1 Single Indirect, 1 Double Indirect, 1 Triple Indirect. Block size = 1 KB (1024 bytes), Block Pointer size = 4 bytes. How many pointers fit in one Indirect Block?",
                          "rawQuestion":  "Q196. Consider UNIX Inode with 12 Direct block pointers, 1 Single Indirect, 1 Double Indirect, 1 Triple Indirect. Block size = 1 KB (1024 bytes), Block Pointer size = 4 bytes. How many pointers fit in one Indirect Block?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "256 pointers",
                                              "raw":  "A) 256 pointers"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "1024 pointers",
                                              "raw":  "B) 1024 pointers"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "512 pointers",
                                              "raw":  "C) 512 pointers"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "12 pointers",
                                              "raw":  "D) 12 pointers"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Pointers per block = 1024 / 4 = 256 pointers."
                      },
                      {
                          "id":  197,
                          "originalNum":  197,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "In the previous Inode (Q196), what is the maximum file size addressable via Single Indirect pointer alone?",
                          "rawQuestion":  "Q197. In the previous Inode (Q196), what is the maximum file size addressable via Single Indirect pointer alone?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "256 KB",
                                              "raw":  "A) 256 KB"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "12 KB",
                                              "raw":  "B) 12 KB"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "64 MB",
                                              "raw":  "C) 64 MB"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "1024 KB",
                                              "raw":  "D) 1024 KB"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Single Indirect size = 256 pointers * 1 KB = 256 KB."
                      },
                      {
                          "id":  198,
                          "originalNum":  198,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "In Q196, what is the maximum file size addressable via Double Indirect pointer alone?",
                          "rawQuestion":  "Q198. In Q196, what is the maximum file size addressable via Double Indirect pointer alone?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "256 KB",
                                              "raw":  "A) 256 KB"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "64 MB (256 * 256 * 1 KB)",
                                              "raw":  "B) 64 MB (256 * 256 * 1 KB)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "16 MB",
                                              "raw":  "C) 16 MB"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "1 GB",
                                              "raw":  "D) 1 GB"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Double Indirect size = 256 * 256 * 1 KB = 64 MB."
                      },
                      {
                          "id":  199,
                          "originalNum":  199,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "In UNIX Inode, what is the maximum direct file size reachable using the 12 Direct block pointers alone?",
                          "rawQuestion":  "Q199. In UNIX Inode, what is the maximum direct file size reachable using the 12 Direct block pointers alone?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "12 KB",
                                              "raw":  "A) 12 KB"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "256 KB",
                                              "raw":  "B) 256 KB"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "1 KB",
                                              "raw":  "C) 1 KB"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "48 KB",
                                              "raw":  "D) 48 KB"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "12 Direct Pointers * 1 KB = 12 KB."
                      },
                      {
                          "id":  200,
                          "originalNum":  200,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "File Allocation Table (FAT) used in MS-DOS/Windows is a variation of which file allocation method?",
                          "rawQuestion":  "Q200. File Allocation Table (FAT) used in MS-DOS/Windows is a variation of which file allocation method?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Contiguous Allocation",
                                              "raw":  "A) Contiguous Allocation"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Linked Allocation (table of block pointers stored in RAM/disk header)",
                                              "raw":  "B) Linked Allocation (table of block pointers stored in RAM/disk header)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Inode Allocation",
                                              "raw":  "C) Inode Allocation"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Bit Map Allocation",
                                              "raw":  "D) Bit Map Allocation"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Linked Allocation variation."
                      },
                      {
                          "id":  201,
                          "originalNum":  201,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "Which file allocation method suffers from severe External Fragmentation?",
                          "rawQuestion":  "Q201. Which file allocation method suffers from severe External Fragmentation?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Linked Allocation",
                                              "raw":  "A) Linked Allocation"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Indexed Allocation",
                                              "raw":  "B) Indexed Allocation"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Contiguous Allocation",
                                              "raw":  "C) Contiguous Allocation"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "FAT32",
                                              "raw":  "D) FAT32"
                                          }
                                      ],
                          "correctAnswer":  "C",
                          "explanation":  "Contiguous Allocation."
                      },
                      {
                          "id":  202,
                          "originalNum":  202,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "Which system call changes the read/write file pointer offset without reading or writing data?",
                          "rawQuestion":  "Q202. Which system call changes the read/write file pointer offset without reading or writing data?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "read()",
                                              "raw":  "A) read()"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "lseek()",
                                              "raw":  "B) lseek()"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "truncate()",
                                              "raw":  "C) truncate()"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "write()",
                                              "raw":  "D) write()"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "lseek() system call."
                      },
                      {
                          "id":  203,
                          "originalNum":  203,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "In UNIX, which system call creates an anonymous unidirectional pipe for IPC?",
                          "rawQuestion":  "Q203. In UNIX, which system call creates an anonymous unidirectional pipe for IPC?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "pipe(int fd[2])",
                                              "raw":  "A) pipe(int fd[2])"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "socket()",
                                              "raw":  "B) socket()"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "shmget()",
                                              "raw":  "C) shmget()"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "mkfifo()",
                                              "raw":  "D) mkfifo()"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "pipe(int fd[2]) system call."
                      },
                      {
                          "id":  204,
                          "originalNum":  204,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "What is the role of Direct Memory Access (DMA) Bus Master?",
                          "rawQuestion":  "Q204. What is the role of Direct Memory Access (DMA) Bus Master?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Takes control of system bus from CPU to transfer high-speed data blocks directly between I/O device and RAM",
                                              "raw":  "A) Takes control of system bus from CPU to transfer high-speed data blocks directly between I/O device and RAM"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Executes C code",
                                              "raw":  "B) Executes C code"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Manages interrupts",
                                              "raw":  "C) Manages interrupts"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Formats RAM",
                                              "raw":  "D) Formats RAM"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "Takes control of system bus for direct block transfer."
                      },
                      {
                          "id":  205,
                          "originalNum":  205,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "Which UNIX command utility is used for stream line editing and text substitution?",
                          "rawQuestion":  "Q205. Which UNIX command utility is used for stream line editing and text substitution?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "grep",
                                              "raw":  "A) grep"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "sed",
                                              "raw":  "B) sed"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "awk",
                                              "raw":  "C) awk"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "wc",
                                              "raw":  "D) wc"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "sed (Stream Editor)."
                      },
                      {
                          "id":  206,
                          "originalNum":  206,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "Which UNIX command utility is used to count lines, words, and characters in a file?",
                          "rawQuestion":  "Q206. Which UNIX command utility is used to count lines, words, and characters in a file?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "wc",
                                              "raw":  "A) wc"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "count",
                                              "raw":  "B) count"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "ls",
                                              "raw":  "C) ls"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "grep",
                                              "raw":  "D) grep"
                                          }
                                      ],
                          "correctAnswer":  "A",
                          "explanation":  "wc (word count)."
                      },
                      {
                          "id":  207,
                          "originalNum":  207,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "Which layer in Windows NT architecture isolates the kernel Executive from specific CPU hardware differences?",
                          "rawQuestion":  "Q207. Which layer in Windows NT architecture isolates the kernel Executive from specific CPU hardware differences?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Win32 Subsystem",
                                              "raw":  "A) Win32 Subsystem"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Hardware Abstraction Layer (HAL)",
                                              "raw":  "B) Hardware Abstraction Layer (HAL)"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "NTFS Driver",
                                              "raw":  "C) NTFS Driver"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "User Shell",
                                              "raw":  "D) User Shell"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "HAL (Hardware Abstraction Layer)."
                      },
                      {
                          "id":  208,
                          "originalNum":  208,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "In Linux, what information is stored in the Inode structure of a file?",
                          "rawQuestion":  "Q208. In Linux, what information is stored in the Inode structure of a file?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "File name and File contents",
                                              "raw":  "A) File name and File contents"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Metadata (File size, Owner ID, Permissions, Timestamps, Block Pointers), but NOT the file name",
                                              "raw":  "B) Metadata (File size, Owner ID, Permissions, Timestamps, Block Pointers), but NOT the file name"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "File name only",
                                              "raw":  "C) File name only"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "User passwords",
                                              "raw":  "D) User passwords"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Metadata and Block Pointers, but NOT the file name."
                      },
                      {
                          "id":  209,
                          "originalNum":  209,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "Which virtual file system in Linux provides a pseudo-filesystem interface to inspect live kernel and process data?",
                          "rawQuestion":  "Q209. Which virtual file system in Linux provides a pseudo-filesystem interface to inspect live kernel and process data?",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "/etc",
                                              "raw":  "A) /etc"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "/proc",
                                              "raw":  "B) /proc"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "/dev",
                                              "raw":  "C) /dev"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "/bin",
                                              "raw":  "D) /bin"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "/proc pseudo-filesystem."
                      },
                      {
                          "id":  210,
                          "originalNum":  210,
                          "sectionId":  6,
                          "sectionTitle":  "Storage Systems, Disk Scheduling, Inodes, System Calls \u0026 Architectures",
                          "question":  "Statement I: In Linux, everything (including hardware devices, sockets, directories) is abstracted as a file.\r\nStatement II: Hard links in Unix can cross different physical file system partitions.\r\nSelect the correct option:",
                          "rawQuestion":  "Q210. Statement I: In Linux, everything (including hardware devices, sockets, directories) is abstracted as a file.\r\nStatement II: Hard links in Unix can cross different physical file system partitions.\r\nSelect the correct option:",
                          "options":  [
                                          {
                                              "key":  "A",
                                              "text":  "Both Statements are true",
                                              "raw":  "A) Both Statements are true"
                                          },
                                          {
                                              "key":  "B",
                                              "text":  "Statement I is true, Statement II is false",
                                              "raw":  "B) Statement I is true, Statement II is false"
                                          },
                                          {
                                              "key":  "C",
                                              "text":  "Statement I is false, Statement II is true",
                                              "raw":  "C) Statement I is false, Statement II is true"
                                          },
                                          {
                                              "key":  "D",
                                              "text":  "Both Statements are false",
                                              "raw":  "D) Both Statements are false"
                                          }
                                      ],
                          "correctAnswer":  "B",
                          "explanation":  "Statement I True (\u0027Everything is a file\u0027). Statement II False (Hard links cannot cross partitions)."
                      }
                  ]
};
