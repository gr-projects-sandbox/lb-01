import type { Challenge } from './content'

export const DAILY_CHALLENGES_EN: Challenge[][] = [
  // 0: Balance
  [
    { icon: '🧘', title: 'Body scan', task: 'Sit comfortably. Close your eyes. Slowly move your attention from feet to the top of your head — notice tensions and release them.', duration: '10 min' },
    { icon: '🌬️', title: '4-7-8 Breathing', task: 'Inhale through nose 4s, hold 7s, exhale through mouth 8s. Repeat 4 times. Feel your body calm down.', duration: '5 min' },
    { icon: '🪞', title: 'Three gratitudes', task: 'Write down 3 specific things you are grateful for today. No generalities — details. E.g. "warm coffee at 7:00 AM".', duration: '5 min' },
    { icon: '🧘', title: '5 senses', task: 'Stop right now. Find: 5 things you see, 4 you hear, 3 you feel by touch, 2 you smell, 1 you taste.', duration: '3 min' },
    { icon: '🌬️', title: 'Box breathing', task: '4s inhale, 4s hold, 4s exhale, 4s hold. 6 cycles. Used by Navy SEALs before action.', duration: '5 min' },
    { icon: '🪞', title: 'Emotion journal', task: 'Name 3 emotions you felt today. For each, write: what caused it and where you feel it in your body.', duration: '7 min' },
    { icon: '🧘', title: 'One-minute pause', task: 'Before every meal today — stop for 60 seconds. Three breaths. Only then eat.', duration: 'all day' },
  ],
  // 1: Relaxation
  [
    { icon: '🪷', title: '5 minutes of silence', task: 'Find a quiet place. Set a timer for 5 min. Sit and breathe. Thoughts will come — let them go.', duration: '5 min' },
    { icon: '🫧', title: 'Tense and release', task: 'Progressive relaxation: tense feet 5s → release. Calves → release. Work upward to your forehead.', duration: '10 min' },
    { icon: '🌿', title: 'Nature walk', task: 'Go out for 20 min without headphones. Pay attention to colors, sounds, the smell of the air.', duration: '20 min' },
    { icon: '🪷', title: 'Breath meditation', task: 'Focus only on breathing. Count exhales 1-10. If you lose count, start from 1. No judgment.', duration: '8 min' },
    { icon: '🫧', title: 'Tension scan', task: 'Scan your body: jaw clenched? Shoulders up by ears? Hands in fists? Release each tension.', duration: '3 min' },
    { icon: '🌿', title: 'Nature sounds', task: 'Play a recording of rain, ocean, or forest. Close your eyes for 10 minutes. Let yourself drift.', duration: '10 min' },
    { icon: '🪷', title: 'Visualization', task: 'Imagine a calm lake at dawn. Mist, warmth, silence. You are there. Breathe that place.', duration: '7 min' },
  ],
  // 2: Sleep
  [
    { icon: '🌛', title: 'Screens off', task: 'Turn off all screens 1h before bed tonight. Instead of scrolling: a book, tea, conversation.', duration: 'evening' },
    { icon: '🛏️', title: 'Cool bedroom', task: 'Set temperature to 18-19°C. Open the window 10 min before bed. Cool air = deeper sleep.', duration: '5 min' },
    { icon: '🌙', title: 'Day review', task: 'Lying in bed, rewind your day like a movie. No judgment. Then tell yourself: "I release this day."', duration: '5 min' },
    { icon: '🌛', title: 'Bedtime tea', task: 'Brew chamomile or lemon balm. Sip slowly, no phone. Focus on the warmth of the cup in your hands.', duration: '10 min' },
    { icon: '🛏️', title: 'Consistent bedtime', task: 'Go to bed today at exactly the same time as yesterday. Consistency > number of hours.', duration: 'evening' },
    { icon: '🌙', title: 'Bedtime body scan', task: 'Lying on your back, relax one by one: feet, calves, thighs, belly, chest, shoulders, face.', duration: '10 min' },
    { icon: '🌛', title: '3 good moments', task: 'Before falling asleep, recall 3 good moments from today. Smile at each one.', duration: '3 min' },
  ],
  // 3: Diet
  [
    { icon: '💧', title: 'Glass on waking', task: 'Right after waking, drink a glass of warm water with lemon. Before coffee, before phone.', duration: '2 min' },
    { icon: '🫐', title: 'Rainbow meal', task: 'In one meal today — at least 3 colors of veggies/fruits. The more colors, the better.', duration: 'meal' },
    { icon: '🍽️', title: 'Screen-free eating', task: 'Eat one meal today WITHOUT phone or TV. Look at your food. Taste every bite.', duration: 'meal' },
    { icon: '💧', title: '8 glasses', task: 'Put 8 rubber bands on your bottle. Remove one for each glass of water you drink.', duration: 'all day' },
    { icon: '🫐', title: 'Fermented food', task: 'Add something fermented to your diet today: kefir, kimchi, pickles, or kombucha.', duration: 'meal' },
    { icon: '🍽️', title: '20-minute meal', task: 'Set a timer. Eat slowly for at least 20 minutes. Put down your cutlery between bites.', duration: '20 min' },
    { icon: '💧', title: 'Tea instead of coffee', task: 'Replace one coffee with herbal tea today. Mint, turmeric, ginger — pick your favorite.', duration: '5 min' },
  ],
  // 4: Growth
  [
    { icon: '🔥', title: 'One small step', task: 'Pick one goal you have been putting off. Take the SMALLEST possible step toward it. Now.', duration: '10 min' },
    { icon: '🔄', title: 'Habit stacking', task: 'After morning coffee (old habit) → 2 min of planning your day (new habit). Attach new to old.', duration: '2 min' },
    { icon: '🎯', title: 'Evening vision', task: 'Before bed, write one sentence: "Tomorrow I want to..." — specific, achievable, important to you.', duration: '3 min' },
    { icon: '🔥', title: 'Discomfort zone', task: 'Do one thing today that slightly stresses you. A conversation, a question, a new place. Small.', duration: '15 min' },
    { icon: '🔄', title: 'Habit audit', task: 'Write down what you did from morning until now, hour by hour. Mark: what was a conscious choice vs autopilot.', duration: '10 min' },
    { icon: '🎯', title: 'Letter to yourself', task: 'Write a letter to yourself one year from now. What do you want to be different? What would future-you say?', duration: '10 min' },
    { icon: '🔥', title: 'Celebrate progress', task: 'Name 3 things you are better at than a year ago. Seriously. Write them down and read aloud.', duration: '5 min' },
  ],
  // 5: Activity
  [
    { icon: '🧘', title: 'Sun salutation', task: 'Stand by the window. 3 cycles of sun salutation — one full breath in each position.', duration: '7 min' },
    { icon: '🚶', title: 'Mindful walk', task: 'Walk for 15 minutes focusing on your feet: lifting, moving, placing. Step by step.', duration: '15 min' },
    { icon: '⚡', title: 'Body wake-up', task: '5 minutes: jumping jacks, arm circles, jumping in place. Wake up every part of your body.', duration: '5 min' },
    { icon: '🤸', title: 'Desk stretching', task: 'At your desk: torso twist, neck circles, stretch wrists, straighten your back. Every 2 hours.', duration: '3 min' },
    { icon: '🚶', title: 'Stairs not elevator', task: 'Choose stairs every time today. Count your steps going up. Feel the strength in your legs.', duration: 'all day' },
    { icon: '⚡', title: 'Dance to one song', task: 'Play your favorite song and dance. Don\'t care how you look. Move as your body wants.', duration: '4 min' },
    { icon: '🧘', title: 'Breathing plank', task: 'Plank position. Don\'t count seconds — count breaths. Inhale, exhale = 1. Reach 10 breaths.', duration: '3 min' },
  ],
]
